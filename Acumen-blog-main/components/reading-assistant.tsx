"use client"

import { useState } from "react"
import { Sparkles, FileText, CheckSquare, Brain } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function ReadingAssistant({ articleTitle }: { articleTitle: string }) {
  const [active, setActive] = useState(false)
  const [mode, setMode] = useState<"summary" | "takeaways" | "actions" | null>(null)

  const content = {
    summary:
      "This article explores the evolving fiduciary landscape and provides practical guidance for advisory firms navigating new regulatory requirements. Key themes include enhanced disclosure standards, technology-enabled compliance, and the shift toward proactive risk management.",
    takeaways: [
      "Regulatory expectations have significantly increased",
      "Technology is essential for scalable compliance",
      "Transparency builds long-term client trust",
      "Documentation standards are more rigorous",
    ],
    actions: [
      "Review current disclosure practices",
      "Assess compliance technology stack",
      "Schedule team compliance training",
      "Document fiduciary processes",
    ],
  }

  return (
    <div className="bg-gradient-to-br from-[#0066CC]/10 to-[#00D4AA]/10 rounded-xl p-6 border border-border sticky top-24">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-[#00D4AA] flex items-center justify-center">
          <Brain size={20} className="text-white" />
        </div>
        <div>
          <h3 className="font-bold text-lg">Reading Assistant</h3>
          <p className="text-xs text-muted-foreground">Powered by Glynac AI</p>
        </div>
      </div>

      {!active ? (
        <button
          onClick={() => setActive(true)}
          className="w-full bg-[#00D4AA] hover:bg-[#00D4AA]/90 text-white font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
        >
          <Sparkles size={18} />
          Activate Assistant
        </button>
      ) : (
        <div className="space-y-3">
          <button
            onClick={() => setMode(mode === "summary" ? null : "summary")}
            className={`w-full p-3 rounded-lg border transition-all text-left flex items-center gap-3 ${
              mode === "summary"
                ? "bg-[#00D4AA]/10 border-[#00D4AA]"
                : "bg-card border-border hover:border-[#00D4AA]/50"
            }`}
          >
            <FileText size={18} />
            <span className="font-medium">Quick Summary</span>
          </button>

          <button
            onClick={() => setMode(mode === "takeaways" ? null : "takeaways")}
            className={`w-full p-3 rounded-lg border transition-all text-left flex items-center gap-3 ${
              mode === "takeaways"
                ? "bg-[#00D4AA]/10 border-[#00D4AA]"
                : "bg-card border-border hover:border-[#00D4AA]/50"
            }`}
          >
            <CheckSquare size={18} />
            <span className="font-medium">Key Takeaways</span>
          </button>

          <button
            onClick={() => setMode(mode === "actions" ? null : "actions")}
            className={`w-full p-3 rounded-lg border transition-all text-left flex items-center gap-3 ${
              mode === "actions"
                ? "bg-[#00D4AA]/10 border-[#00D4AA]"
                : "bg-card border-border hover:border-[#00D4AA]/50"
            }`}
          >
            <Sparkles size={18} />
            <span className="font-medium">Action Items</span>
          </button>

          <AnimatePresence>
            {mode && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-card rounded-lg p-4 border border-border overflow-hidden"
              >
                {mode === "summary" && <p className="text-sm leading-relaxed">{content.summary}</p>}

                {mode === "takeaways" && (
                  <ul className="space-y-2">
                    {content.takeaways.map((item, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <span className="text-[#00D4AA] mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {mode === "actions" && (
                  <ul className="space-y-2">
                    {content.actions.map((item, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <CheckSquare size={16} className="text-[#00D4AA] mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  )
}
