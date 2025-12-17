// ============================================================================
// Strapi Webhook Handler
// Handles content events from Strapi for cache invalidation
// ============================================================================

import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
import crypto from 'crypto';
import type { StrapiWebhookPayload } from '@/lib/strapi-types';
import { getCacheTagsForModel } from '@/lib/strapi';

// ============================================================================
// Configuration
// ============================================================================

const WEBHOOK_SECRET = process.env.STRAPI_WEBHOOK_SECRET;
const DEBUG = process.env.NODE_ENV === 'development';

// ============================================================================
// Signature Verification
// ============================================================================

/**
 * Verify webhook signature from Strapi
 */
function verifySignature(payload: string, signature: string | null): boolean {
    if (!WEBHOOK_SECRET) {
        console.warn('[Webhook] No STRAPI_WEBHOOK_SECRET configured, skipping verification');
        return true; // Allow in development without secret
    }

    if (!signature) {
        console.error('[Webhook] Missing signature header');
        return false;
    }

    try {
        const expectedSignature = crypto
            .createHmac('sha256', WEBHOOK_SECRET)
            .update(payload)
            .digest('hex');

        const providedSignature = signature.replace('sha256=', '');

        return crypto.timingSafeEqual(
            Buffer.from(expectedSignature),
            Buffer.from(providedSignature)
        );
    } catch (error) {
        console.error('[Webhook] Signature verification failed:', error);
        return false;
    }
}

// ============================================================================
// Event Handlers
// ============================================================================

/**
 * Handle content events from Strapi
 */
async function handleContentEvent(payload: StrapiWebhookPayload): Promise<void> {
    const { event, model, entry } = payload;

    if (DEBUG) {
        console.log('[Webhook] Processing event:', event, 'Model:', model);
    }

    // Get cache tags to invalidate
    const slug = (entry as { slug?: string })?.slug;
    const tags = getCacheTagsForModel(model, slug);

    // Revalidate each tag
    for (const tag of tags) {
        if (DEBUG) console.log('[Webhook] Revalidating tag:', tag);
        revalidateTag(tag);
    }

    // Log the event
    console.log(`[Webhook] Processed ${event} for ${model}${slug ? ` (${slug})` : ''}`);
}

/**
 * Handle media events from Strapi
 */
async function handleMediaEvent(payload: StrapiWebhookPayload): Promise<void> {
    const { event } = payload;

    if (DEBUG) {
        console.log('[Webhook] Processing media event:', event);
    }

    // Media changes might affect articles with images
    revalidateTag('articles');
    revalidateTag('authors');
    revalidateTag('site-settings');

    console.log('[Webhook] Processed media event:', event);
}

// ============================================================================
// Route Handler
// ============================================================================

/**
 * POST /api/webhook/strapi
 * Receives webhooks from Strapi CMS
 */
export async function POST(request: NextRequest) {
    try {
        // Get raw body for signature verification
        const rawBody = await request.text();
        const signature = request.headers.get('x-strapi-signature') ||
            request.headers.get('strapi-signature');

        // Verify signature
        if (!verifySignature(rawBody, signature)) {
            return NextResponse.json(
                { error: 'Invalid signature' },
                { status: 401 }
            );
        }

        // Parse payload
        let payload: StrapiWebhookPayload;
        try {
            payload = JSON.parse(rawBody);
        } catch {
            return NextResponse.json(
                { error: 'Invalid JSON payload' },
                { status: 400 }
            );
        }

        // Validate payload structure
        if (!payload.event || !payload.model) {
            return NextResponse.json(
                { error: 'Missing required fields: event, model' },
                { status: 400 }
            );
        }

        // Route to appropriate handler
        if (payload.event.startsWith('media.')) {
            await handleMediaEvent(payload);
        } else if (payload.event.startsWith('entry.')) {
            await handleContentEvent(payload);
        } else {
            if (DEBUG) console.log('[Webhook] Unknown event type:', payload.event);
        }

        return NextResponse.json(
            { success: true, message: `Processed ${payload.event}` },
            { status: 200 }
        );
    } catch (error) {
        console.error('[Webhook] Unexpected error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

/**
 * GET /api/webhook/strapi
 * Health check endpoint
 */
export async function GET() {
    return NextResponse.json({
        status: 'ok',
        message: 'Strapi webhook endpoint is active',
        timestamp: new Date().toISOString(),
    });
}
