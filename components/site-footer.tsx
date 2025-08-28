import { ShotlyLogo } from "@/components/shotly-logo"

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <ShotlyLogo size="sm" color="light" />
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <span className="text-muted-foreground">© 2025 Shotly</span>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Support
            </a>
            <a href="/sitemap" className="text-muted-foreground hover:text-foreground transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
