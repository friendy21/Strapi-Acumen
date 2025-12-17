"use client"

import { useEffect, useRef } from "react"

export function ArticleContent({ content, serviceColor }: { content: string; serviceColor: string }) {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      // Add hover tooltips to technical terms (simulated)
      const paragraphs = contentRef.current.querySelectorAll("p")
      paragraphs.forEach((p) => {
        const text = p.innerHTML
        const enhancedText = text
          .replace(/\bfiduciary\b/gi, '<span class="glossary-term" data-term="fiduciary">$&</span>')
          .replace(/\bcompliance\b/gi, '<span class="glossary-term" data-term="compliance">$&</span>')
          .replace(/\bregulatory\b/gi, '<span class="glossary-term" data-term="regulatory">$&</span>')
        p.innerHTML = enhancedText
      })
    }
  }, [])

  return (
    <article
      ref={contentRef}
      className="prose prose-lg max-w-none
        prose-headings:font-bold prose-headings:text-foreground
        prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 
        prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
        prose-p:text-foreground/80 prose-p:leading-relaxed prose-p:mb-6
        prose-a:text-[#00D4AA] prose-a:no-underline hover:prose-a:underline
        prose-blockquote:border-l-4 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-xl
        prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
        prose-li:text-foreground/80"
      style={{
        // @ts-expect-error - CSS custom properties
        "--quote-color": serviceColor,
      }}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
