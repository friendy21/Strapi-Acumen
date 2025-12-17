"use client"

import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import Image from "next/image"

const services = [
  { id: "strategy", name: "Strategy", color: "#0A2463" },
  { id: "labs", name: "Labs", color: "#00D4AA" },
  { id: "glynac", name: "Glynac", color: "#0066CC" },
  { id: "phh", name: "PHH", color: "#E2725B" },
  { id: "tollbooth", name: "Tollbooth", color: "#00C49A" },
  { id: "talent", name: "Talent Solutions", color: "#7B68EE" },
]

interface NavigationSystemProps {
  logoUrl?: string | null;
  siteName?: string;
}

export function NavigationSystem({ logoUrl, siteName = "Acumen Strategy" }: NavigationSystemProps) {
  const [scrolled, setScrolled] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [activeService, setActiveService] = useState<string | null>(null)

  // Use Strapi logo if available, otherwise fallback to static
  const finalLogoUrl = logoUrl || "/logo.png"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Primary Vertical Navigation */}
      <nav
        className={`fixed left-4 top-1/2 -translate-y-1/2 z-50 transition-all duration-500 ${scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => {
          setExpanded(false)
          setActiveService(null)
        }}
      >
        <div
          className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden transition-all duration-300 ${expanded ? "w-64" : "w-16"
            }`}
        >
          {services.map((service) => (
            <button
              key={service.id}
              className="w-full p-4 flex items-center gap-4 hover:bg-white/10 transition-colors group relative"
              onMouseEnter={() => setActiveService(service.id)}
              style={{
                borderLeft: activeService === service.id ? `4px solid ${service.color}` : "4px solid transparent",
              }}
            >
              <div
                className="w-8 h-8 rounded-full flex-shrink-0 transition-all duration-300"
                style={{
                  backgroundColor: service.color,
                  boxShadow: activeService === service.id ? `0 0 20px ${service.color}` : "none",
                }}
              />
              <span
                className={`text-white font-medium whitespace-nowrap transition-opacity duration-300 ${expanded ? "opacity-100" : "opacity-0"
                  }`}
              >
                {service.name}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* Top Header Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "bg-[#0A2463]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={finalLogoUrl}
              alt={siteName}
              width={180}
              height={50}
              className="h-10 w-auto"
              unoptimized={finalLogoUrl.startsWith('http')}
            />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#hero" className="text-white/80 hover:text-white transition-colors">
              Home
            </a>
            <a href="#insights" className="text-white/80 hover:text-white transition-colors">
              Insights
            </a>
            <a href="#ecosystem" className="text-white/80 hover:text-white transition-colors">
              Ecosystem
            </a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          <button className="md:hidden text-white">
            <Menu size={24} />
          </button>
        </div>
      </header>
    </>
  )
}
