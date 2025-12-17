"use client"

import Link from "next/link"
import { Clock, ArrowRight } from "lucide-react"

// Fallback related articles for when Strapi data is unavailable
const fallbackRelated = [
  {
    id: 2,
    title: "AI-Powered Client Engagement",
    slug: "ai-powered-client-engagement",
    service: "Glynac",
    serviceColor: "#0066CC",
    readTime: 6,
    coverImage: "/ai-neural-network.png",
  },
  {
    id: 3,
    title: "Real Estate Investment Strategies for 2025",
    slug: "real-estate-investment-strategies-2025",
    service: "PHH",
    serviceColor: "#E2725B",
    readTime: 10,
    coverImage: "/modern-real-estate-skyline.png",
  },
]

interface RelatedArticle {
  id: number
  title: string
  slug: string
  excerpt?: string
  service?: string
  serviceColor?: string
  readTime?: number
  coverImage?: string | null
}

interface RelatedArticlesProps {
  currentArticleSlug: string
  relatedArticles?: RelatedArticle[]
}

export function RelatedArticles({ currentArticleSlug, relatedArticles }: RelatedArticlesProps) {
  // Use provided related articles or fallback
  const articles = relatedArticles && relatedArticles.length > 0
    ? relatedArticles
    : fallbackRelated

  // Filter out current article and limit to 2
  const related = articles
    .filter((a) => a.slug !== currentArticleSlug)
    .slice(0, 2)

  if (related.length === 0) {
    return null
  }

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold mb-8">Continue Reading</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {related.map((article) => (
          <Link
            key={article.id}
            href={`/article/${article.slug}`}
            className="group block bg-card rounded-lg overflow-hidden border border-border hover:border-[#00D4AA] hover:shadow-xl transition-all"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={article.coverImage || "/placeholder.svg"}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {article.service && (
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white backdrop-blur-sm"
                  style={{ backgroundColor: `${article.serviceColor || '#0A2463'}dd` }}
                >
                  {article.service}
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                <Clock size={16} />
                <span>{article.readTime || 5} min read</span>
              </div>
              <h4 className="font-bold text-lg mb-3 text-balance">{article.title}</h4>
              <div className="flex items-center gap-2 text-[#00D4AA] font-semibold group-hover:gap-4 transition-all">
                Read Article
                <ArrowRight size={18} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
