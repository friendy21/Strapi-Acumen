"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, ArrowRight, CheckCircle2 } from "lucide-react"

const steps = [
  {
    id: 1,
    question: "What's your primary challenge?",
    options: [
      "Scaling my practice",
      "Technology integration",
      "Compliance & regulation",
      "Client acquisition",
      "Team building",
      "Distribution strategy",
    ],
  },
  {
    id: 2,
    question: "Which areas affect you most?",
    info: "Select all that apply",
    multiSelect: true,
    options: ["Advisory", "Technology", "Real Estate", "Distribution", "Talent", "Compliance"],
  },
  {
    id: 3,
    question: "What's your desired timeline?",
    options: ["Immediate (30 days)", "Short-term (90 days)", "Mid-term (6 months)", "Long-term planning (1+ year)"],
  },
]

export function ConversationalContact() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string[]>>({})
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", company: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleOptionSelect = (option: string) => {
    const step = steps[currentStep]

    if (step.multiSelect) {
      const current = answers[currentStep] || []
      const updated = current.includes(option) ? current.filter((o) => o !== option) : [...current, option]
      setAnswers({ ...answers, [currentStep]: updated })
    } else {
      setAnswers({ ...answers, [currentStep]: [option] })
      if (currentStep < steps.length - 1) {
        setTimeout(() => setCurrentStep(currentStep + 1), 500)
      } else {
        setTimeout(() => setShowForm(true), 500)
      }
    }
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setShowForm(true)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20">
        <CheckCircle2 size={64} className="mx-auto mb-6 text-[#00D4AA]" />
        <h3 className="text-3xl font-bold mb-4">Thank You!</h3>
        <p className="text-muted-foreground text-lg max-w-md mx-auto">
          We've received your information. An Acumen strategist will reach out within 24 hours to discuss your roadmap.
        </p>
      </motion.div>
    )
  }

  if (showForm) {
    return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold mb-6">Let's connect</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Full Name *
            </label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D4AA]"
              placeholder="John Smith"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D4AA]"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-2">
              Firm/Company *
            </label>
            <input
              id="company"
              type="text"
              required
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D4AA]"
              placeholder="Advisory Firm LLC"
            />
          </div>

          <div className="bg-secondary/30 rounded-lg p-4">
            <p className="text-sm font-medium mb-2">Your responses:</p>
            {Object.entries(answers).map(([stepId, values]) => (
              <p key={stepId} className="text-sm text-muted-foreground">
                {steps[Number.parseInt(stepId)].question} <strong>{values.join(", ")}</strong>
              </p>
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-[#00D4AA] hover:bg-[#00D4AA]/90 text-white font-semibold py-4 rounded-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            Submit <Send size={18} />
          </button>
        </form>
      </motion.div>
    )
  }

  const step = steps[currentStep]
  const currentAnswers = answers[currentStep] || []

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {steps.map((s, i) => (
            <div
              key={s.id}
              className={`flex-1 h-2 rounded-full mx-1 transition-all ${
                i <= currentStep ? "bg-[#00D4AA]" : "bg-border"
              }`}
            />
          ))}
        </div>
        <p className="text-sm text-muted-foreground text-center">
          Step {currentStep + 1} of {steps.length}
        </p>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-3xl font-bold mb-2 text-balance">{step.question}</h3>
          {step.info && <p className="text-muted-foreground mb-6">{step.info}</p>}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {step.options.map((option) => {
              const isSelected = currentAnswers.includes(option)
              return (
                <button
                  key={option}
                  onClick={() => handleOptionSelect(option)}
                  className={`p-6 rounded-lg border-2 transition-all text-left ${
                    isSelected
                      ? "border-[#00D4AA] bg-[#00D4AA]/10 shadow-lg scale-[1.02]"
                      : "border-border hover:border-[#00D4AA]/50 hover:bg-accent"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{option}</span>
                    {isSelected && <CheckCircle2 size={20} className="text-[#00D4AA]" />}
                  </div>
                </button>
              )
            })}
          </div>

          {step.multiSelect && currentAnswers.length > 0 && (
            <button
              onClick={handleNext}
              className="mt-8 w-full md:w-auto mx-auto flex items-center justify-center gap-2 bg-[#00D4AA] hover:bg-[#00D4AA]/90 text-white font-semibold px-8 py-4 rounded-lg transition-all hover:scale-[1.02]"
            >
              Continue <ArrowRight size={18} />
            </button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
