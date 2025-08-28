import { SiteFooter } from "@/components/site-footer"
import { ShotlyLogo } from "@/components/shotly-logo"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Shield, Zap } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative flex-1 flex items-center justify-center py-20 px-4 min-h-screen overflow-hidden bg-gradient-to-r from-primary to-secondary">
        {/* Background video */}
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-rZ2uPh9qidZHOXtk8vEeBzxfjQxghF.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/80 z-10"></div>

        {/* Content */}
        <div className="relative z-20 max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <ShotlyLogo size="lg" color="dark" />
          </div>

          <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
            Creator-first platform
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-[1.3]">
            Buy just the shot you need
          </h1>

          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            No subscriptions. No algorithms. Just high-quality shots from creators who keep 89% of every sale.
          </p>

          <div className="flex flex-col gap-6 items-center">
            <Button size="lg" className="text-lg px-8">
              Become a Creator
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="text-lg px-8 text-white/70 hover:text-white hover:bg-white/10"
            >
              <Link href="/dashboard">Sign in</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why creators love Shotly</h2>
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

      <SiteFooter />
    </div>
  )
}
