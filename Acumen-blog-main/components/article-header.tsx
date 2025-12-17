"use client"

import { motion } from "framer-motion"
import { Clock, Calendar, User, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface Article {
  title: string
  subtitle: string
  author: string
  authorRole: string
  publishDate: string
  readTime: number
  service: string
  serviceColor: string
  image: string
}

export function ArticleHeader({ article }: { article: Article }) {
  return (
    <div className="relative min-h-[60vh] flex items-end bg-gradient-to-br from-[#0A2463] to-[#1a1a2e] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img src={article.image || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{ backgroundColor: article.serviceColor }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.3,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 pb-12 w-full">
        <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
          <ArrowLeft size={20} />
          Back to Insights
        </Link>

        {/* Service Badge */}
        <div
          className="inline-block px-4 py-2 rounded-full text-sm font-semibold text-white mb-4"
          style={{ backgroundColor: article.serviceColor }}
        >
          {article.service}
        </div>

        {/* Animated Title */}
        <motion.h1
          className="text-white mb-4 text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {article.title}
        </motion.h1>

        <motion.p
          className="text-xl text-white/80 mb-8 text-pretty max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {article.subtitle}
        </motion.p>

        {/* Meta Information */}
        <motion.div
          className="flex flex-wrap gap-6 text-white/70"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <User size={18} />
            <span>
              {article.author} • {article.authorRole}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span>
              {new Date(article.publishDate).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={18} />
            <span>{article.readTime} min read</span>
          </div>
        </motion.div>
      </div>

      {/* Reading Progress Ring */}
      <div className="absolute top-8 right-8 w-16 h-16">
        <svg className="transform -rotate-90" width="64" height="64">
          <circle cx="32" cy="32" r="28" stroke="rgba(255,255,255,0.2)" strokeWidth="4" fill="none" />
          <motion.circle
            cx="32"
            cy="32"
            r="28"
            stroke={article.serviceColor}
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            initial={{ strokeDasharray: "0 175.93" }}
            animate={{ strokeDasharray: "175.93 175.93" }}
            transition={{ duration: 2, delay: 1 }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold">
          {article.readTime}m
        </div>
      </div>
    </div>
  )
}
