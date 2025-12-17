"use client"

import { ArrowRight, MessageSquare, Calendar, FileText } from "lucide-react"

const pathways = [
  {
    service: "Strategy",
    actions: [
      { icon: MessageSquare, label: "Schedule Consultation", href: "#contact" },
      { icon: FileText, label: "Download Framework", href: "#" },
      { icon: Calendar, label: "Book Workshop", href: "#" },
    ],
  },
]

export function ActivationPathway({ service }: { service: string }) {
  const pathway = pathways.find((p) => p.service === service) || pathways[0]

  return (
    <div className="mt-16 p-8 bg-gradient-to-br from-[#0A2463]/10 to-[#00D4AA]/10 rounded-xl border border-border">
      <h3 className="text-2xl font-bold mb-4">Ready to Take Action?</h3>
      <p className="text-muted-foreground mb-6">Transform these insights into results with Acumen {service}</p>

      <div className="grid md:grid-cols-3 gap-4">
        {pathway.actions.map((action, i) => {
          const Icon = action.icon
          return (
            <a
              key={i}
              href={action.href}
              className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover:border-[#00D4AA] hover:bg-[#00D4AA]/5 transition-all group"
            >
              <Icon size={20} className="text-[#00D4AA]" />
              <span className="font-medium flex-1">{action.label}</span>
              <ArrowRight
                size={16}
                className="text-muted-foreground group-hover:text-[#00D4AA] group-hover:translate-x-1 transition-all"
              />
            </a>
          )
        })}
      </div>
    </div>
  )
}
