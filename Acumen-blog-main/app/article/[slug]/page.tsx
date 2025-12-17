import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArticleHeader } from "@/components/article-header"
import { ArticleContent } from "@/components/article-content"
import { ReadingAssistant } from "@/components/reading-assistant"
import { ActivationPathway } from "@/components/activation-pathway"
import { RelatedArticles } from "@/components/related-articles"
import { getArticleBySlug, getAllArticleSlugs } from "@/lib/strapi"

// ============================================================================
// Static Generation Configuration
// ============================================================================

/**
 * Generate static params for all articles at build time
 */
export async function generateStaticParams() {
    const slugs = await getAllArticleSlugs()

    return slugs.map((slug) => ({
        slug,
    }))
}

/**
 * Revalidate every 60 seconds for ISR
 */
export const revalidate = 60

// ============================================================================
// SEO Metadata
// ============================================================================

interface PageProps {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    const article = await getArticleBySlug(slug)

    if (!article) {
        return {
            title: "Article Not Found",
        }
    }

    const seo = article.seo || {
        title: article.title,
        description: article.excerpt,
        image: article.coverImage?.url || null,
    }

    return {
        title: seo.title,
        description: seo.description,
        keywords: seo.keywords,
        openGraph: {
            title: seo.title,
            description: seo.description,
            type: "article",
            publishedTime: article.publishedAt,
            authors: article.author ? [article.author.name] : undefined,
            images: seo.image
                ? [
                    {
                        url: seo.image,
                        width: article.coverImage?.width || 1200,
                        height: article.coverImage?.height || 630,
                        alt: article.title,
                    },
                ]
                : undefined,
        },
        twitter: {
            card: "summary_large_image",
            title: seo.title,
            description: seo.description,
            images: seo.image ? [seo.image] : undefined,
        },
    }
}

// ============================================================================
// Fallback Article (for when Strapi is unavailable)
// ============================================================================

const fallbackArticle = {
    id: 1,
    documentId: "1",
    title: "Navigating the New Fiduciary Landscape",
    slug: "navigating-the-new-fiduciary-landscape",
    excerpt: "Understanding the evolving regulatory requirements and their impact on advisory practices",
    content: `
    <p>The fiduciary landscape has undergone significant transformation in recent years. As regulatory bodies continue to refine their expectations, advisory firms must adapt their practices to remain compliant while delivering exceptional client value.</p>
    
    <h2>The Evolution of Fiduciary Standards</h2>
    <p>Recent regulatory changes have fundamentally altered how financial advisors operate. The emphasis on client-first practices has never been stronger, requiring firms to demonstrate clear evidence of their fiduciary commitment.</p>
    
    <blockquote>Understanding your fiduciary obligations isn't just about compliance—it's about building lasting trust with your clients.</blockquote>
    
    <h3>Key Regulatory Changes</h3>
    <ul>
      <li>Enhanced disclosure requirements for fee structures</li>
      <li>Stricter documentation standards for investment recommendations</li>
      <li>Expanded conflict of interest identification protocols</li>
      <li>Increased oversight of third-party relationships</li>
    </ul>
    
    <h2>Implementing Compliance-First Strategies</h2>
    <p>Forward-thinking firms are embedding compliance into their culture rather than treating it as a checkbox exercise. This approach creates sustainable practices that protect both clients and the firm.</p>
    
    <p>Technology plays a crucial role in modern compliance. Automated monitoring systems, advanced documentation tools, and real-time reporting capabilities enable firms to maintain oversight at scale.</p>
    
    <h3>Best Practices for 2025</h3>
    <p>As we move forward, successful firms will prioritize transparency, systematic documentation, and proactive risk management. The integration of compliance technology with advisory workflows represents the future of the industry.</p>
  `,
    coverImage: {
        url: "/regulatory-compliance-abstract.jpg",
        alt: "Regulatory Compliance",
        width: 1200,
        height: 630,
    },
    author: {
        name: "Sarah Mitchell",
        role: "Chief Compliance Officer",
        avatar: null,
        slug: "sarah-mitchell",
    },
    category: {
        name: "Compliance",
        slug: "compliance",
        color: "#0A2463",
    },
    tags: [],
    relatedArticles: [
        {
            id: 2,
            title: "AI-Powered Client Engagement",
            slug: "ai-powered-client-engagement",
            excerpt: "Leveraging Glynac's intelligent systems to transform client relationships.",
            coverImage: "/ai-neural-network.png",
            service: "Glynac",
            serviceColor: "#0066CC",
            readTime: 6,
        },
        {
            id: 3,
            title: "Real Estate Investment Strategies for 2025",
            slug: "real-estate-investment-strategies-2025",
            excerpt: "PHH's latest insights on optimizing real estate portfolios in changing markets.",
            coverImage: "/modern-real-estate-skyline.png",
            service: "PHH",
            serviceColor: "#E2725B",
            readTime: 10,
        },
    ],
    readTime: 8,
    featured: true,
    service: "Strategy",
    serviceColor: "#0A2463",
    publishedAt: "2024-12-01",
    seo: null,
}

// ============================================================================
// Page Component
// ============================================================================

export default async function ArticlePage({ params }: PageProps) {
    const { slug } = await params

    // Try to fetch from Strapi, use fallback if unavailable
    let article = await getArticleBySlug(slug)

    // Use fallback if article not found and slug matches fallback
    if (!article) {
        if (slug === fallbackArticle.slug || slug === "1") {
            article = fallbackArticle
        } else {
            notFound()
        }
    }

    // Transform to ArticleHeader expected format
    const headerArticle = {
        title: article.title,
        subtitle: article.excerpt,
        author: article.author?.name || "Acumen Team",
        authorRole: article.author?.role || "Contributor",
        publishDate: article.publishedAt,
        readTime: article.readTime,
        service: article.service,
        serviceColor: article.serviceColor,
        image: article.coverImage?.url || "/placeholder.svg",
    }

    return (
        <div className="min-h-screen">
            <ArticleHeader article={headerArticle} />

            <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid lg:grid-cols-[1fr_300px] gap-12">
                <div>
                    <ArticleContent content={article.content} serviceColor={article.serviceColor} />
                    <ActivationPathway service={article.service} />
                    <RelatedArticles
                        currentArticleSlug={article.slug}
                        relatedArticles={article.relatedArticles}
                    />
                </div>

                <aside className="lg:sticky lg:top-24 h-fit">
                    <ReadingAssistant articleTitle={article.title} />
                </aside>
            </div>
        </div>
    )
}
