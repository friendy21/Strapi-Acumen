"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Clock, TrendingUp, Lightbulb, Shield, Zap } from "lucide-react"
import Link from "next/link"
import type { ArticleListItem } from "@/lib/strapi-types"

// Content type filters - these map to category slugs
const contentTypes = [
  { id: "all", label: "All Insights", icon: Lightbulb },
  { id: "strategy", label: "Strategy Insights", icon: TrendingUp },
  { id: "technology", label: "Technology Briefs", icon: Zap },
  { id: "compliance", label: "Compliance Updates", icon: Shield },
]

// Fallback posts for when Strapi is unavailable
const fallbackPosts: ArticleListItem[] = [
  {
    id: 1,
    title: "Navigating the New Fiduciary Landscape",
    slug: "navigating-the-new-fiduciary-landscape",
    excerpt: "Understanding the evolving regulatory requirements and their impact on advisory practices.",
    category: "compliance",
    service: "Strategy",
    serviceColor: "#0A2463",
    readTime: 8,
    coverImage: "/regulatory-compliance-abstract.jpg",
    featured: true,
    publishedAt: "2024-12-01",
  },
  {
    id: 2,
    title: "AI-Powered Client Engagement",
    slug: "ai-powered-client-engagement",
    excerpt: "Leveraging Glynac's intelligent systems to transform client relationships.",
    category: "technology",
    service: "Glynac",
    serviceColor: "#0066CC",
    readTime: 6,
    coverImage: "/ai-neural-network.png",
    featured: false,
    publishedAt: "2024-11-15",
  },
  {
    id: 3,
    title: "Real Estate Investment Strategies for 2025",
    slug: "real-estate-investment-strategies-2025",
    excerpt: "PHH's latest insights on optimizing real estate portfolios in changing markets.",
    category: "strategy",
    service: "PHH",
    serviceColor: "#E2725B",
    readTime: 10,
    coverImage: "/modern-real-estate-skyline.png",
    featured: false,
    publishedAt: "2024-11-10",
  },
  {
    id: 4,
    title: "Distribution Solutions That Scale",
    slug: "distribution-solutions-that-scale",
    excerpt: "How Tollbooth is revolutionizing product distribution for RIAs.",
    category: "technology",
    service: "Tollbooth",
    serviceColor: "#00C49A",
    readTime: 7,
    coverImage: "/network-distribution-graph.jpg",
    featured: false,
    publishedAt: "2024-11-05",
  },
  {
    id: 5,
    title: "Building High-Performance Advisory Teams",
    slug: "building-high-performance-advisory-teams",
    excerpt: "Talent acquisition and retention strategies from Acumen Talent Solutions.",
    category: "strategy",
    service: "Talent",
    serviceColor: "#7B68EE",
    readTime: 9,
    coverImage: "/professional-team-collaboration.jpg",
    featured: false,
    publishedAt: "2024-10-28",
  },
  {
    id: 6,
    title: "Innovation Labs: From Concept to Market",
    slug: "innovation-labs-from-concept-to-market",
    excerpt: "Inside Acumen Labs' approach to rapid prototyping and market validation.",
    category: "technology",
    service: "Labs",
    serviceColor: "#00D4AA",
    readTime: 12,
    coverImage: "/innovation-lab-technology.jpg",
    featured: true,
    publishedAt: "2024-10-20",
  },
]

interface BlogGridProps {
  articles?: ArticleListItem[]
}

export function BlogGrid({ articles }: BlogGridProps) {
  const [activeFilter, setActiveFilter] = useState("all")
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  // Use provided articles or fallback to static data
  const posts = articles && articles.length > 0 ? articles : fallbackPosts

  const filteredPosts = activeFilter === "all"
    ? posts
    : posts.filter((post) => post.category === activeFilter)

  return (
    <div>
      {/* Filter System */}
      <div className="flex flex-wrap gap-3 mb-12 justify-center">
        {contentTypes.map((type) => {
          const Icon = type.icon
          return (
            <button
              key={type.id}
              onClick={() => setActiveFilter(type.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeFilter === type.id
                  ? "bg-[#00D4AA] text-white shadow-lg scale-105"
                  : "bg-card hover:bg-accent text-foreground border border-border"
                }`}
            >
              <Icon size={18} />
              {type.label}
            </button>
          )
        })}
      </div>

      {/* Blog Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`group relative ${post.featured ? "md:col-span-2 md:row-span-2" : ""}`}
              onMouseEnter={() => setHoveredCard(post.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Link href={`/article/${post.slug}`}>
                <div
                  className="relative h-full bg-card rounded-lg overflow-hidden border border-border transition-all duration-300 hover:shadow-2xl"
                  style={{
                    boxShadow:
                      hoveredCard === post.id
                        ? `0 20px 60px -10px ${post.serviceColor}40`
                        : "0 4px 6px rgba(0,0,0,0.1)",
                    borderColor: hoveredCard === post.id ? post.serviceColor : "var(--border)",
                  }}
                >
                  {/* Service Tag */}
                  <div
                    className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-semibold text-white backdrop-blur-sm"
                    style={{ backgroundColor: `${post.serviceColor}dd` }}
                  >
                    {post.service}
                  </div>

                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.coverImage || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className={`p-6 ${post.featured ? "md:p-8" : ""}`}>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                      <Clock size={16} />
                      <span>{post.readTime} min read</span>
                    </div>

                    <h3 className={`font-bold mb-3 text-balance ${post.featured ? "text-2xl md:text-3xl" : "text-xl"}`}>
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>

                    <div className="flex items-center gap-2 text-[#00D4AA] font-semibold group-hover:gap-4 transition-all">
                      Read More
                      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Animated Border Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-lg pointer-events-none"
                    style={{
                      border: `2px solid ${post.serviceColor}`,
                      opacity: hoveredCard === post.id ? 1 : 0,
                    }}
                    animate={{
                      opacity: hoveredCard === post.id ? [0.3, 0.6, 0.3] : 0,
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-foreground text-lg">No content found for this filter.</p>
        </div>
      )}
    </div>
  )
}
