#!/usr/bin/env node

/**
 * Performance Benchmarking Tool for Strapi API
 * Tests API response times and generates performance report
 */

const https = require('https');
const http = require('http');

// Configuration
const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
const NUM_REQUESTS = parseInt(process.env.BENCH_REQUESTS || '100', 10);
const CONCURRENCY = parseInt(process.env.BENCH_CONCURRENCY || '10', 10);

// Test endpoints
const ENDPOINTS = [
    '/api/articles?populate=*',
    '/api/articles?pagination[pageSize]=10',
    '/api/authors?populate=avatar',
    '/api/categories',
    '/api/tags',
    '/api/site-setting?populate=*',
];

// Results storage
const results = {
    endpoints: {},
    summary: {
        totalRequests: 0,
        successfulRequests: 0,
        failedRequests: 0,
        totalTime: 0,
        avgResponseTime: 0,
        minResponseTime: Infinity,
        maxResponseTime: 0,
    },
};

/**
 * Make HTTP request and measure time
 */
function makeRequest(endpoint) {
    return new Promise((resolve) => {
        const startTime = Date.now();
        const url = new URL(endpoint, STRAPI_URL);
        const client = url.protocol === 'https:' ? https : http;

        const req = client.get(url, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                const endTime = Date.now();
                const duration = endTime - startTime;

                resolve({
                    success: res.statusCode === 200,
                    statusCode: res.statusCode,
                    duration,
                    size: Buffer.byteLength(data),
                });
            });
        });

        req.on('error', (error) => {
            const endTime = Date.now();
            resolve({
                success: false,
                error: error.message,
                duration: endTime - startTime,
            });
        });

        req.setTimeout(10000, () => {
            req.destroy();
            resolve({
                success: false,
                error: 'Timeout',
                duration: 10000,
            });
        });
    });
}

/**
 * Run benchmark for a single endpoint
 */
async function benchmarkEndpoint(endpoint) {
    console.log(`\n📊 Benchmarking: ${endpoint}`);
    console.log(`   Requests: ${NUM_REQUESTS}, Concurrency: ${CONCURRENCY}`);

    const durations = [];
    const errors = [];
    let successCount = 0;

    // Run requests in batches for concurrency
    const batches = Math.ceil(NUM_REQUESTS / CONCURRENCY);

    for (let i = 0; i < batches; i++) {
        const batchSize = Math.min(CONCURRENCY, NUM_REQUESTS - i * CONCURRENCY);
        const promises = Array(batchSize).fill(null).map(() => makeRequest(endpoint));

        const batchResults = await Promise.all(promises);

        batchResults.forEach((result) => {
            if (result.success) {
                successCount++;
                durations.push(result.duration);
            } else {
                errors.push(result.error || `Status ${result.statusCode}`);
            }
        });

        // Progress indicator
        const progress = Math.round(((i + 1) / batches) * 100);
        process.stdout.write(`\r   Progress: ${progress}%`);
    }

    console.log('\n');

    // Calculate statistics
    durations.sort((a, b) => a - b);
    const avg = durations.reduce((a, b) => a + b, 0) / durations.length || 0;
    const min = durations[0] || 0;
    const max = durations[durations.length - 1] || 0;
    const p50 = durations[Math.floor(durations.length * 0.5)] || 0;
    const p95 = durations[Math.floor(durations.length * 0.95)] || 0;
    const p99 = durations[Math.floor(durations.length * 0.99)] || 0;

    const endpointResults = {
        endpoint,
        requests: NUM_REQUESTS,
        successful: successCount,
        failed: NUM_REQUESTS - successCount,
        errors: errors.slice(0, 5), // First 5 errors
        times: {
            avg: Math.round(avg),
            min: Math.round(min),
            max: Math.round(max),
            p50: Math.round(p50),
            p95: Math.round(p95),
            p99: Math.round(p99),
        },
    };

    results.endpoints[endpoint] = endpointResults;
    results.summary.totalRequests += NUM_REQUESTS;
    results.summary.successfulRequests += successCount;
    results.summary.failedRequests += NUM_REQUESTS - successCount;
    results.summary.totalTime += durations.reduce((a, b) => a + b, 0);
    results.summary.minResponseTime = Math.min(results.summary.minResponseTime, min);
    results.summary.maxResponseTime = Math.max(results.summary.maxResponseTime, max);

    return endpointResults;
}

/**
 * Print results table
 */
function printResults() {
    console.log('\n' + '='.repeat(80));
    console.log('                    PERFORMANCE BENCHMARK RESULTS');
    console.log('='.repeat(80));

    Object.values(results.endpoints).forEach((result) => {
        const status = result.times.p95 < 200 ? '✅' : result.times.p95 < 500 ? '⚠️' : '❌';

        console.log(`\n${status} ${result.endpoint}`);
        console.log(`   Success: ${result.successful}/${result.requests} (${Math.round(result.successful / result.requests * 100)}%)`);
        console.log(`   Response Times (ms):`);
        console.log(`     Average: ${result.times.avg}ms`);
        console.log(`     Min/Max: ${result.times.min}ms / ${result.times.max}ms`);
        console.log(`     p50: ${result.times.p50}ms | p95: ${result.times.p95}ms | p99: ${result.times.p99}ms`);

        if (result.failed > 0) {
            console.log(`   ⚠️  Failed: ${result.failed} requests`);
            if (result.errors.length > 0) {
                console.log(`   Errors: ${result.errors.join(', ')}`);
            }
        }
    });

    // Overall summary
    results.summary.avgResponseTime = Math.round(
        results.summary.totalTime / results.summary.successfulRequests
    );

    console.log('\n' + '='.repeat(80));
    console.log('SUMMARY');
    console.log('='.repeat(80));
    console.log(`Total Requests: ${results.summary.totalRequests}`);
    console.log(`Successful: ${results.summary.successfulRequests} (${Math.round(results.summary.successfulRequests / results.summary.totalRequests * 100)}%)`);
    console.log(`Failed: ${results.summary.failedRequests}`);
    console.log(`Average Response Time: ${results.summary.avgResponseTime}ms`);
    console.log(`Min/Max Response Time: ${Math.round(results.summary.minResponseTime)}ms / ${Math.round(results.summary.maxResponseTime)}ms`);

    // Performance verdict
    console.log('\n' + '-'.repeat(80));
    if (results.summary.avgResponseTime < 200) {
        console.log('✅ EXCELLENT: All performance targets met (<200ms average)');
    } else if (results.summary.avgResponseTime < 500) {
        console.log('⚠️  ACCEPTABLE: Performance within acceptable range (200-500ms)');
    } else {
        console.log('❌ NEEDS OPTIMIZATION: Performance below target (>500ms average)');
    }
    console.log('='.repeat(80) + '\n');
}

/**
 * Main execution
 */
async function main() {
    console.log('🚀 Starting Strapi API Performance Benchmark');
    console.log(`   Target: ${STRAPI_URL}`);
    console.log(`   Configuration: ${NUM_REQUESTS} requests with ${CONCURRENCY} concurrency`);

    // Check if Strapi is accessible
    console.log('\n🔍 Checking Strapi availability...');
    const healthCheck = await makeRequest('/_health');
    if (!healthCheck.success) {
        console.error('❌ Error: Cannot connect to Strapi at', STRAPI_URL);
        console.error('   Make sure Strapi is running: docker-compose up');
        process.exit(1);
    }
    console.log('✅ Strapi is accessible');

    // Run benchmarks
    for (const endpoint of ENDPOINTS) {
        await benchmarkEndpoint(endpoint);
    }

    // Print final results
    printResults();

    // Export results to JSON
    const fs = require('fs');
    const timestamp = new Date().toISOString().replace(/:/g, '-').split('.')[0];
    const filename = `benchmark-results-${timestamp}.json`;
    fs.writeFileSync(filename, JSON.stringify(results, null, 2));
    console.log(`📄 Results saved to: ${filename}\n`);
}

// Run if called directly
if (require.main === module) {
    main().catch((error) => {
        console.error('Fatal error:', error);
        process.exit(1);
    });
}

module.exports = { makeRequest, benchmarkEndpoint };
