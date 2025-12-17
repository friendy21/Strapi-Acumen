import { Hero3D } from "@/components/hero-3d"
import { NavigationSystem } from "@/components/navigation-system"
import { BlogGrid } from "@/components/blog-grid"
import { EcosystemPortal } from "@/components/ecosystem-portal"
import { ConversationalContact } from "@/components/conversational-contact"
import { getSiteSettings, getStrapiImageUrl, getArticles } from "@/lib/strapi"

export default async function Home() {
  // Fetch site settings from Strapi (logo, site name, etc.)
  const siteSettings = await getSiteSettings()
  const logoUrl = getStrapiImageUrl(siteSettings?.logo)
  const siteName = siteSettings?.siteName || "Acumen Strategy"

  // Fetch articles from Strapi
  const { articles } = await getArticles({ pageSize: 12 })

  return (
    <div className="relative min-h-screen">
      <NavigationSystem logoUrl={logoUrl} siteName={siteName} />

      <main className="relative">
        {/* Immersive 3D Hero */}
        <section id="hero" className="min-h-screen relative">
          <Hero3D />
        </section>

        {/* Living Blog Grid */}
        <section id="insights" className="py-24 px-4 md:px-8 lg:px-16 relative">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-balance mb-4">Strategic Insights</h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
              Explore our ecosystem of advisory content, technology briefs, and strategic analysis
            </p>
            <BlogGrid articles={articles} />
          </div>
        </section>

        {/* 3D Ecosystem Visualization Portal */}
        <section id="ecosystem" className="py-24 px-4 md:px-8 lg:px-16 bg-secondary/20 relative">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-balance mb-4">The Acumen Ecosystem</h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
              Explore our integrated services and discover how they work together
            </p>
            <EcosystemPortal />
          </div>
        </section>

        {/* Conversational Contact */}
        <section id="contact" className="py-24 px-4 md:px-8 lg:px-16 relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-balance mb-4 text-center">Start Your Strategic Journey</h2>
            <p className="text-muted-foreground text-lg mb-12 text-center max-w-2xl mx-auto">
              Let's diagnose your challenges and design your roadmap
            </p>
            <ConversationalContact />
          </div>
        </section>
      </main>
    </div>
  )
}
