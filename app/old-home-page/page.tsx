import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { VideoStorefront } from "@/components/video-storefront"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Shield, Zap } from "lucide-react"

export default function OldHomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Creator-first platform
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent overflow-visible">
            Buy just the shot you need
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            No subscriptions. No algorithms. Just high-quality shots from creators who keep 89% of every sale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Browse Shots
            </Button>
            <Button variant="outline" size="lg">
              Become a Creator
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why creators choose Shotly</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Keep 100% of tips</h3>
              <p className="text-muted-foreground">
                All tips go directly to creators. We only take 11% of video sales.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Own your content</h3>
              <p className="text-muted-foreground">You keep the rights to your shots. Your content, your rules.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No algorithm stress</h3>
              <p className="text-muted-foreground">Focus on creating great content, not chasing algorithmic trends.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Storefront */}
      <VideoStorefront />

      <SiteFooter />
    </div>
  )
}
