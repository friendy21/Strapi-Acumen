// ============================================================================
// Strapi 5 API Client
// Production-ready client with caching, error handling, and circuit breaker
// ============================================================================

import type {
    StrapiResponse,
    StrapiCollectionResponse,
    StrapiArticle,
    StrapiAuthor,
    StrapiCategory,
    StrapiTag,
    StrapiSiteSettings,
    StrapiImage,
    StrapiQueryParams,
    ArticleQueryOptions,
    CacheOptions,
    Article,
    ArticleListItem,
    CircuitBreakerState,
    ApiResult,
} from './strapi-types';

// ============================================================================
// Configuration
// ============================================================================

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;
const DEBUG = process.env.NODE_ENV === 'development';

// Cache configuration
const DEFAULT_REVALIDATE = 60; // 1 minute default
const ARTICLES_REVALIDATE = 60; // 1 minute for articles
const SETTINGS_REVALIDATE = 300; // 5 minutes for settings

// Circuit breaker configuration
const CIRCUIT_BREAKER_THRESHOLD = 5; // Number of failures before opening
const CIRCUIT_BREAKER_TIMEOUT = 30000; // 30 seconds before retry

// ============================================================================
// Circuit Breaker Pattern
// ============================================================================

const circuitBreaker: CircuitBreakerState = {
    failures: 0,
    lastFailure: null,
    isOpen: false,
};

function checkCircuitBreaker(): boolean {
    if (!circuitBreaker.isOpen) return true;

    const now = Date.now();
    if (
        circuitBreaker.lastFailure &&
        now - circuitBreaker.lastFailure > CIRCUIT_BREAKER_TIMEOUT
    ) {
        // Try to close the circuit
        circuitBreaker.isOpen = false;
        circuitBreaker.failures = 0;
        if (DEBUG) console.log('[Strapi] Circuit breaker closed, retrying...');
        return true;
    }

    if (DEBUG) console.log('[Strapi] Circuit breaker open, request blocked');
    return false;
}

function recordSuccess(): void {
    circuitBreaker.failures = 0;
    circuitBreaker.isOpen = false;
}

function recordFailure(): void {
    circuitBreaker.failures++;
    circuitBreaker.lastFailure = Date.now();

    if (circuitBreaker.failures >= CIRCUIT_BREAKER_THRESHOLD) {
        circuitBreaker.isOpen = true;
        if (DEBUG) console.log('[Strapi] Circuit breaker opened after', circuitBreaker.failures, 'failures');
    }
}

// ============================================================================
// Request Deduplication
// ============================================================================

const pendingRequests = new Map<string, Promise<unknown>>();

function deduplicateRequest<T>(key: string, requestFn: () => Promise<T>): Promise<T> {
    const existing = pendingRequests.get(key);
    if (existing) {
        if (DEBUG) console.log('[Strapi] Deduplicating request:', key);
        return existing as Promise<T>;
    }

    const promise = requestFn().finally(() => {
        pendingRequests.delete(key);
    });

    pendingRequests.set(key, promise);
    return promise;
}

// ============================================================================
// Core Fetch Function
// ============================================================================

/**
 * Generic fetch function for Strapi API with error handling and caching
 */
async function fetchFromStrapi<T>(
    endpoint: string,
    options: RequestInit & CacheOptions = {}
): Promise<ApiResult<T>> {
    // Check circuit breaker
    if (!checkCircuitBreaker()) {
        return {
            success: false,
            error: {
                status: 503,
                name: 'ServiceUnavailable',
                message: 'Service temporarily unavailable (circuit breaker open)',
            },
        };
    }

    const url = `${STRAPI_URL}/api${endpoint}`;
    const { revalidate = DEFAULT_REVALIDATE, tags, ...fetchOptions } = options;

    const headers: HeadersInit = {
        'Content-Type': 'application/json',
        'X-Tenant-ID': process.env.NEXT_PUBLIC_TENANT_ID || 'default',
        ...(STRAPI_TOKEN && { Authorization: `Bearer ${STRAPI_TOKEN}` }),
        ...fetchOptions.headers,
    };

    try {
        if (DEBUG) console.log('[Strapi] Fetching:', url);

        const response = await fetch(url, {
            ...fetchOptions,
            headers,
            next: {
                revalidate: revalidate === false ? 0 : revalidate,
                ...(tags && { tags }),
            },
        });

        if (!response.ok) {
            recordFailure();
            const errorData = await response.json().catch(() => ({}));
            console.error(`[Strapi] Error ${response.status}:`, errorData);

            return {
                success: false,
                error: {
                    status: response.status,
                    name: response.statusText,
                    message: errorData?.error?.message || `HTTP ${response.status} error`,
                    details: errorData?.error?.details,
                },
            };
        }

        const data = await response.json();
        recordSuccess();

        return {
            success: true,
            data: data.data,
            meta: data.meta,
        };
    } catch (error) {
        recordFailure();
        console.error('[Strapi] Network error:', error);

        return {
            success: false,
            error: {
                status: 0,
                name: 'NetworkError',
                message: error instanceof Error ? error.message : 'Unknown network error',
            },
        };
    }
}

/**
 * Build query string from params object
 */
function buildQueryString(params: StrapiQueryParams): string {
    const searchParams = new URLSearchParams();

    if (params.populate) {
        if (typeof params.populate === 'string') {
            searchParams.set('populate', params.populate);
        } else if (Array.isArray(params.populate)) {
            searchParams.set('populate', params.populate.join(','));
        } else {
            // Deep populate object
            const flattenPopulate = (obj: Record<string, unknown>, prefix = ''): void => {
                Object.entries(obj).forEach(([key, value]) => {
                    const newKey = prefix ? `${prefix}[${key}]` : `populate[${key}]`;
                    if (typeof value === 'object' && value !== null) {
                        flattenPopulate(value as Record<string, unknown>, newKey);
                    } else {
                        searchParams.set(newKey, String(value));
                    }
                });
            };
            flattenPopulate(params.populate);
        }
    }

    if (params.filters) {
        const flattenFilters = (obj: Record<string, unknown>, prefix = 'filters'): void => {
            Object.entries(obj).forEach(([key, value]) => {
                const newKey = `${prefix}[${key}]`;
                if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                    flattenFilters(value as Record<string, unknown>, newKey);
                } else {
                    searchParams.set(newKey, String(value));
                }
            });
        };
        flattenFilters(params.filters);
    }

    if (params.sort) {
        const sortValue = Array.isArray(params.sort) ? params.sort.join(',') : params.sort;
        searchParams.set('sort', sortValue);
    }

    if (params.pagination) {
        Object.entries(params.pagination).forEach(([key, value]) => {
            if (value !== undefined) {
                searchParams.set(`pagination[${key}]`, String(value));
            }
        });
    }

    if (params.fields) {
        params.fields.forEach((field, index) => {
            searchParams.set(`fields[${index}]`, field);
        });
    }

    if (params.publicationState) {
        searchParams.set('publicationState', params.publicationState);
    }

    if (params.locale) {
        searchParams.set('locale', params.locale);
    }

    const queryString = searchParams.toString();
    return queryString ? `?${queryString}` : '';
}

// ============================================================================
// Image Utilities
// ============================================================================

/**
 * Get the full URL for a Strapi image
 */
export function getStrapiImageUrl(image: StrapiImage | undefined | null): string | null {
    if (!image?.url) return null;

    // If URL is already absolute, return as-is
    if (image.url.startsWith('http')) {
        return image.url;
    }

    // Otherwise, prepend Strapi URL
    return `${STRAPI_URL}${image.url}`;
}

/**
 * Get responsive image URL (specific format)
 */
export function getStrapiImageFormat(
    image: StrapiImage | undefined | null,
    format: 'thumbnail' | 'small' | 'medium' | 'large' = 'medium'
): string | null {
    if (!image) return null;

    const formatUrl = image.formats?.[format]?.url;
    if (formatUrl) {
        return formatUrl.startsWith('http') ? formatUrl : `${STRAPI_URL}${formatUrl}`;
    }

    // Fallback to original
    return getStrapiImageUrl(image);
}

// ============================================================================
// Data Transformers
// ============================================================================

/**
 * Transform Strapi article to frontend-friendly format
 */
function transformArticle(article: StrapiArticle): Article {
    return {
        id: article.id,
        documentId: article.documentId,
        title: article.title,
        slug: article.slug,
        excerpt: article.excerpt || '',
        content: article.content || '',
        coverImage: article.coverImage
            ? {
                url: getStrapiImageUrl(article.coverImage) || '',
                alt: article.coverImage.alternativeText || article.title,
                width: article.coverImage.width,
                height: article.coverImage.height,
            }
            : null,
        author: article.author
            ? {
                name: article.author.name,
                role: article.author.role || '',
                avatar: getStrapiImageUrl(article.author.avatar),
                slug: article.author.slug,
            }
            : null,
        category: article.category
            ? {
                name: article.category.name,
                slug: article.category.slug,
                color: article.category.color,
            }
            : null,
        tags: (article.tags || []).map((tag) => ({
            name: tag.name,
            slug: tag.slug,
        })),
        relatedArticles: (article.relatedArticles || []).map((related) => ({
            id: related.id,
            title: related.title,
            slug: related.slug,
            excerpt: related.excerpt || '',
            coverImage: getStrapiImageUrl(related.coverImage),
            service: related.service,
            serviceColor: related.serviceColor,
            readTime: related.readTime,
        })),
        readTime: article.readTime || 5,
        featured: article.featured || false,
        service: article.service || '',
        serviceColor: article.serviceColor || '#0A2463',
        publishedAt: article.publishedAt || article.createdAt,
        seo: article.seo
            ? {
                title: article.seo.metaTitle || article.title,
                description: article.seo.metaDescription || article.excerpt || '',
                image: getStrapiImageUrl(article.seo.metaImage) || getStrapiImageUrl(article.coverImage),
                keywords: article.seo.keywords,
            }
            : null,
    };
}

/**
 * Transform article for list views (minimal data)
 */
function transformArticleListItem(article: StrapiArticle): ArticleListItem {
    return {
        id: article.id,
        title: article.title,
        slug: article.slug,
        excerpt: article.excerpt || '',
        coverImage: getStrapiImageUrl(article.coverImage),
        category: article.category?.slug || 'all',
        service: article.service || '',
        serviceColor: article.serviceColor || '#0A2463',
        readTime: article.readTime || 5,
        featured: article.featured || false,
        publishedAt: article.publishedAt || article.createdAt,
    };
}

// ============================================================================
// Article API Functions
// ============================================================================

/**
 * Get all articles with optional filtering
 */
export async function getArticles(
    options: ArticleQueryOptions = {}
): Promise<{ articles: ArticleListItem[]; total: number; pageCount: number }> {
    const {
        page = 1,
        pageSize = 12,
        category,
        tag,
        featured,
        author,
        search,
        sort = 'latest',
    } = options;

    const params: StrapiQueryParams = {
        populate: ['coverImage', 'category', 'author', 'tags'],
        pagination: { page, pageSize },
        sort: sort === 'latest' ? 'publishedAt:desc' : sort === 'oldest' ? 'publishedAt:asc' : 'publishedAt:desc',
        filters: {},
    };

    // Apply filters
    if (category && category !== 'all') {
        params.filters!['category'] = { slug: { $eq: category } };
    }
    if (tag) {
        params.filters!['tags'] = { slug: { $in: [tag] } };
    }
    if (featured !== undefined) {
        params.filters!['featured'] = { $eq: featured };
    }
    if (author) {
        params.filters!['author'] = { slug: { $eq: author } };
    }
    if (search) {
        params.filters!['$or'] = [
            { title: { $containsi: search } },
            { excerpt: { $containsi: search } },
        ];
    }

    const queryString = buildQueryString(params);
    const cacheKey = `/articles${queryString}`;

    const result = await deduplicateRequest(cacheKey, () =>
        fetchFromStrapi<StrapiArticle[]>(`/articles${queryString}`, {
            revalidate: ARTICLES_REVALIDATE,
            tags: ['articles'],
        })
    ) as ApiResult<StrapiArticle[]>;

    if (!result.success) {
        console.error('[Strapi] Failed to fetch articles:', result.error);
        return { articles: [], total: 0, pageCount: 0 };
    }

    return {
        articles: result.data.map(transformArticleListItem),
        total: result.meta?.pagination?.total || 0,
        pageCount: result.meta?.pagination?.pageCount || 0,
    };
}

/**
 * Get a single article by slug
 */
export async function getArticleBySlug(slug: string): Promise<Article | null> {
    const params: StrapiQueryParams = {
        filters: { slug: { $eq: slug } },
        populate: {
            coverImage: true,
            author: { populate: ['avatar'] },
            category: true,
            tags: true,
            seo: { populate: ['metaImage'] },
            relatedArticles: { populate: ['coverImage'] },
        },
    };

    const queryString = buildQueryString(params);
    const cacheKey = `/articles${queryString}`;

    const result = await deduplicateRequest(cacheKey, () =>
        fetchFromStrapi<StrapiArticle[]>(`/articles${queryString}`, {
            revalidate: ARTICLES_REVALIDATE,
            tags: ['articles', `article-${slug}`],
        })
    ) as ApiResult<StrapiArticle[]>;

    if (!result.success || !result.data?.[0]) {
        return null;
    }

    return transformArticle(result.data[0]);
}

/**
 * Get a single article by ID (legacy support)
 */
export async function getArticleById(id: number): Promise<Article | null> {
    const params: StrapiQueryParams = {
        populate: {
            coverImage: true,
            author: { populate: ['avatar'] },
            category: true,
            tags: true,
            seo: { populate: ['metaImage'] },
            relatedArticles: { populate: ['coverImage'] },
        },
    };

    const queryString = buildQueryString(params);

    const result = await fetchFromStrapi<StrapiArticle>(`/articles/${id}${queryString}`, {
        revalidate: ARTICLES_REVALIDATE,
        tags: ['articles', `article-id-${id}`],
    });

    if (!result.success) {
        return null;
    }

    return transformArticle(result.data);
}

/**
 * Get all article slugs for static generation
 */
export async function getAllArticleSlugs(): Promise<string[]> {
    const params: StrapiQueryParams = {
        fields: ['slug'],
        pagination: { pageSize: 100 },
    };

    const queryString = buildQueryString(params);

    const result = await fetchFromStrapi<StrapiArticle[]>(`/articles${queryString}`, {
        revalidate: ARTICLES_REVALIDATE,
        tags: ['articles'],
    });

    if (!result.success) {
        return [];
    }

    return result.data.map((article) => article.slug);
}

/**
 * Get featured articles
 */
export async function getFeaturedArticles(limit = 3): Promise<ArticleListItem[]> {
    const { articles } = await getArticles({
        featured: true,
        pageSize: limit,
    });

    return articles;
}

// ============================================================================
// Category API Functions
// ============================================================================

/**
 * Get all categories
 */
export async function getCategories(): Promise<StrapiCategory[]> {
    const params: StrapiQueryParams = {
        sort: 'name:asc',
    };

    const queryString = buildQueryString(params);

    const result = await fetchFromStrapi<StrapiCategory[]>(`/categories${queryString}`, {
        revalidate: SETTINGS_REVALIDATE,
        tags: ['categories'],
    });

    if (!result.success) {
        return [];
    }

    return result.data;
}

/**
 * Get category by slug
 */
export async function getCategoryBySlug(slug: string): Promise<StrapiCategory | null> {
    const params: StrapiQueryParams = {
        filters: { slug: { $eq: slug } },
    };

    const queryString = buildQueryString(params);

    const result = await fetchFromStrapi<StrapiCategory[]>(`/categories${queryString}`, {
        revalidate: SETTINGS_REVALIDATE,
        tags: ['categories', `category-${slug}`],
    });

    if (!result.success || !result.data?.[0]) {
        return null;
    }

    return result.data[0];
}

// ============================================================================
// Author API Functions
// ============================================================================

/**
 * Get all authors
 */
export async function getAuthors(): Promise<StrapiAuthor[]> {
    const params: StrapiQueryParams = {
        populate: ['avatar'],
        sort: 'name:asc',
    };

    const queryString = buildQueryString(params);

    const result = await fetchFromStrapi<StrapiAuthor[]>(`/authors${queryString}`, {
        revalidate: SETTINGS_REVALIDATE,
        tags: ['authors'],
    });

    if (!result.success) {
        return [];
    }

    return result.data;
}

/**
 * Get author by slug
 */
export async function getAuthorBySlug(slug: string): Promise<StrapiAuthor | null> {
    const params: StrapiQueryParams = {
        filters: { slug: { $eq: slug } },
        populate: ['avatar', 'socialLinks'],
    };

    const queryString = buildQueryString(params);

    const result = await fetchFromStrapi<StrapiAuthor[]>(`/authors${queryString}`, {
        revalidate: SETTINGS_REVALIDATE,
        tags: ['authors', `author-${slug}`],
    });

    if (!result.success || !result.data?.[0]) {
        return null;
    }

    return result.data[0];
}

// ============================================================================
// Tag API Functions
// ============================================================================

/**
 * Get all tags
 */
export async function getTags(): Promise<StrapiTag[]> {
    const params: StrapiQueryParams = {
        sort: 'name:asc',
    };

    const queryString = buildQueryString(params);

    const result = await fetchFromStrapi<StrapiTag[]>(`/tags${queryString}`, {
        revalidate: SETTINGS_REVALIDATE,
        tags: ['tags'],
    });

    if (!result.success) {
        return [];
    }

    return result.data;
}

// ============================================================================
// Site Settings API Functions
// ============================================================================

/**
 * Get site settings including logo from Strapi
 */
export async function getSiteSettings(): Promise<StrapiSiteSettings | null> {
    const params: StrapiQueryParams = {
        populate: ['logo', 'favicon', 'defaultSeo', 'socialLinks'],
    };

    const queryString = buildQueryString(params);

    const result = await fetchFromStrapi<StrapiSiteSettings>(`/site-setting${queryString}`, {
        revalidate: SETTINGS_REVALIDATE,
        tags: ['site-settings'],
    });

    if (!result.success) {
        return null;
    }

    return result.data;
}

// ============================================================================
// Cache Invalidation (for webhook handler)
// ============================================================================

/**
 * Get cache tags for a specific model
 */
export function getCacheTagsForModel(model: string, slug?: string): string[] {
    const baseTags: Record<string, string[]> = {
        article: ['articles'],
        author: ['authors'],
        category: ['categories'],
        tag: ['tags'],
        'site-setting': ['site-settings'],
    };

    const tags = baseTags[model] || [];

    if (slug) {
        tags.push(`${model}-${slug}`);
    }

    return tags;
}

// ============================================================================
// Legacy Exports (for backward compatibility)
// ============================================================================

export type { StrapiImage, StrapiSiteSettings as SiteSettings };
