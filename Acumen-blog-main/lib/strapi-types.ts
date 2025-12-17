// ============================================================================
// Strapi 5 TypeScript Type Definitions
// Complete type definitions for all Strapi content types used in Acumen Blog
// ============================================================================

// ============================================================================
// Base Strapi Types
// ============================================================================

/**
 * Standard Strapi API response wrapper
 */
export interface StrapiResponse<T> {
  data: T;
  meta?: StrapiMeta;
}

/**
 * Strapi collection response with pagination
 */
export interface StrapiCollectionResponse<T> {
  data: T[];
  meta: {
    pagination: StrapiPagination;
  };
}

/**
 * Strapi pagination metadata
 */
export interface StrapiPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

/**
 * Generic Strapi metadata
 */
export interface StrapiMeta {
  pagination?: StrapiPagination;
  [key: string]: unknown;
}

/**
 * Strapi error response structure
 */
export interface StrapiError {
  data: null;
  error: {
    status: number;
    name: string;
    message: string;
    details?: Record<string, unknown>;
  };
}

// ============================================================================
// Media Types
// ============================================================================

/**
 * Strapi image format variant
 */
export interface StrapiImageFormat {
  url: string;
  width: number;
  height: number;
  size?: number;
  name?: string;
  hash?: string;
  ext?: string;
  mime?: string;
}

/**
 * Strapi media/image asset
 */
export interface StrapiImage {
  id: number;
  documentId?: string;
  url: string;
  alternativeText: string | null;
  caption?: string | null;
  width: number;
  height: number;
  size?: number;
  name?: string;
  hash?: string;
  ext?: string;
  mime?: string;
  formats?: {
    thumbnail?: StrapiImageFormat;
    small?: StrapiImageFormat;
    medium?: StrapiImageFormat;
    large?: StrapiImageFormat;
  };
  createdAt?: string;
  updatedAt?: string;
}

// ============================================================================
// SEO Component
// ============================================================================

/**
 * SEO metadata component
 */
export interface StrapiSEO {
  id: number;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
  canonicalURL?: string;
  metaImage?: StrapiImage;
  metaRobots?: string;
  structuredData?: Record<string, unknown>;
  metaSocial?: StrapiSocialMeta[];
}

/**
 * Social media meta tags
 */
export interface StrapiSocialMeta {
  id: number;
  socialNetwork: 'Facebook' | 'Twitter';
  title?: string;
  description?: string;
  image?: StrapiImage;
}

// ============================================================================
// Content Types
// ============================================================================

/**
 * Author content type
 */
export interface StrapiAuthor {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  bio?: string;
  role?: string;
  email?: string;
  avatar?: StrapiImage;
  socialLinks?: StrapiSocialLink[];
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

/**
 * Social link component
 */
export interface StrapiSocialLink {
  id: number;
  platform: 'twitter' | 'linkedin' | 'github' | 'website' | 'instagram';
  url: string;
}

/**
 * Category content type
 */
export interface StrapiCategory {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  color?: string;
  articles?: StrapiArticle[];
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

/**
 * Tag content type
 */
export interface StrapiTag {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  articles?: StrapiArticle[];
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

/**
 * Article content type - main blog content
 */
export interface StrapiArticle {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  coverImage?: StrapiImage;
  author?: StrapiAuthor;
  category?: StrapiCategory;
  tags?: StrapiTag[];
  relatedArticles?: StrapiArticle[];
  readTime?: number;
  featured?: boolean;
  service?: string;
  serviceColor?: string;
  seo?: StrapiSEO;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

/**
 * Site Settings single type
 */
export interface StrapiSiteSettings {
  id: number;
  documentId?: string;
  siteName?: string;
  siteDescription?: string;
  logo?: StrapiImage;
  favicon?: StrapiImage;
  defaultSeo?: StrapiSEO;
  socialLinks?: StrapiSocialLink[];
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

// ============================================================================
// API Request Types
// ============================================================================

/**
 * Strapi query parameters for filtering and population
 */
export interface StrapiQueryParams {
  populate?: string | string[] | Record<string, unknown>;
  filters?: Record<string, unknown>;
  sort?: string | string[];
  pagination?: {
    page?: number;
    pageSize?: number;
    start?: number;
    limit?: number;
  };
  fields?: string[];
  publicationState?: 'live' | 'preview';
  locale?: string;
}

/**
 * Article list query options
 */
export interface ArticleQueryOptions {
  page?: number;
  pageSize?: number;
  category?: string;
  tag?: string;
  featured?: boolean;
  author?: string;
  search?: string;
  sort?: 'latest' | 'oldest' | 'popular';
}

/**
 * Cache options for API requests
 */
export interface CacheOptions {
  revalidate?: number | false;
  tags?: string[];
}

// ============================================================================
// Transformed/Frontend Types
// ============================================================================

/**
 * Frontend-friendly article type (transformed from Strapi response)
 */
export interface Article {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: {
    url: string;
    alt: string;
    width: number;
    height: number;
    blurDataURL?: string;
  } | null;
  author: {
    name: string;
    role: string;
    avatar: string | null;
    slug: string;
  } | null;
  category: {
    name: string;
    slug: string;
    color?: string;
  } | null;
  tags: Array<{
    name: string;
    slug: string;
  }>;
  relatedArticles: Array<{
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    coverImage: string | null;
    service?: string;
    serviceColor?: string;
    readTime?: number;
  }>;
  readTime: number;
  featured: boolean;
  service: string;
  serviceColor: string;
  publishedAt: string;
  seo: {
    title: string;
    description: string;
    image: string | null;
    keywords?: string;
  } | null;
}

/**
 * Minimal article for list views
 */
export interface ArticleListItem {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string | null;
  category: string;
  service: string;
  serviceColor: string;
  readTime: number;
  featured: boolean;
  publishedAt: string;
}

// ============================================================================
// Webhook Types
// ============================================================================

/**
 * Strapi webhook event payload
 */
export interface StrapiWebhookPayload {
  event: StrapiWebhookEvent;
  createdAt: string;
  model: string;
  uid: string;
  entry: Record<string, unknown>;
}

/**
 * Strapi webhook event types
 */
export type StrapiWebhookEvent =
  | 'entry.create'
  | 'entry.update'
  | 'entry.delete'
  | 'entry.publish'
  | 'entry.unpublish'
  | 'media.create'
  | 'media.update'
  | 'media.delete';

// ============================================================================
// API Client Types
// ============================================================================

/**
 * API client configuration
 */
export interface StrapiClientConfig {
  baseUrl: string;
  apiToken?: string;
  defaultRevalidate?: number;
  debug?: boolean;
}

/**
 * API response result type (success or error)
 */
export type ApiResult<T> =
  | { success: true; data: T; meta?: StrapiMeta }
  | { success: false; error: StrapiError['error'] };

/**
 * Circuit breaker state
 */
export interface CircuitBreakerState {
  failures: number;
  lastFailure: number | null;
  isOpen: boolean;
}
