export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Sitemap</h1>
          <p className="text-xl text-muted-foreground">All pages available on Shotly</p>
        </div>

        <div className="space-y-8">
          {/* Main Pages */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Main Pages</h2>
            <div className="grid gap-4">
              <div className="p-4 border border-border rounded-lg">
                <h3 className="font-semibold mb-2">
                  <a href="/" className="text-primary hover:underline">
                    Home Page
                  </a>
                </h3>
                <p className="text-muted-foreground">
                  Browse and discover shots from creators. Main marketplace interface.
                </p>
              </div>

              <div className="p-4 border border-border rounded-lg">
                <h3 className="font-semibold mb-2">
                  <a href="/onboarding" className="text-primary hover:underline">
                    Onboarding
                  </a>
                </h3>
                <p className="text-muted-foreground">Email collection and terms agreement for new user registration.</p>
              </div>

              <div className="p-4 border border-border rounded-lg">
                <h3 className="font-semibold mb-2">
                  <a href="/onboarding/complete" className="text-primary hover:underline">
                    Profile Completion
                  </a>
                </h3>
                <p className="text-muted-foreground">
                  Complete user profile with full name and username after email verification.
                </p>
              </div>
            </div>
          </section>

          {/* Shot Pages */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Shot Pages</h2>
            <div className="grid gap-4">
              <div className="p-4 border border-border rounded-lg">
                <h3 className="font-semibold mb-2">
                  <a href="/shot/cinematic-broll" className="text-primary hover:underline">
                    Cinematic B-Roll Shot
                  </a>
                </h3>
                <p className="text-muted-foreground">
                  Individual shot detail page with purchase options and creator info.
                </p>
              </div>
            </div>
          </section>

          {/* Creator Pages */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Creator Pages</h2>
            <div className="grid gap-4">
              <div className="p-4 border border-border rounded-lg">
                <h3 className="font-semibold mb-2">
                  <a href="/creator/malina-nicholson" className="text-primary hover:underline">
                    Malina Nicholson Profile
                  </a>
                </h3>
                <p className="text-muted-foreground">Creator profile page with bio, shots, and tipping options.</p>
              </div>
            </div>
          </section>

          {/* Dashboard Pages */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Dashboard Pages</h2>
            <div className="grid gap-4">
              <div className="p-4 border border-border rounded-lg">
                <h3 className="font-semibold mb-2">
                  <a href="/dashboard" className="text-primary hover:underline">
                    Buyer Dashboard
                  </a>
                </h3>
                <p className="text-muted-foreground">View purchased shots and downloadable files.</p>
              </div>

              <div className="p-4 border border-border rounded-lg">
                <h3 className="font-semibold mb-2">
                  <a href="/creator-dashboard" className="text-primary hover:underline">
                    Creator Dashboard
                  </a>
                </h3>
                <p className="text-muted-foreground">Creator management interface with analytics and payouts.</p>
              </div>

              <div className="p-4 border border-border rounded-lg">
                <h3 className="font-semibold mb-2">
                  <a href="/my-shots" className="text-primary hover:underline">
                    My Shots
                  </a>
                </h3>
                <p className="text-muted-foreground">
                  Complete list of all shots uploaded by the creator with management options.
                </p>
              </div>

              <div className="p-4 border border-border rounded-lg">
                <h3 className="font-semibold mb-2">
                  <a href="/creator-settings" className="text-primary hover:underline">
                    Creator Settings
                  </a>
                </h3>
                <p className="text-muted-foreground">
                  Creator account settings including profile, payouts, and security.
                </p>
              </div>
            </div>
          </section>

          {/* Utility Pages */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Utility Pages</h2>
            <div className="grid gap-4">
              <div className="p-4 border border-border rounded-lg">
                <h3 className="font-semibold mb-2">
                  <a href="/upload" className="text-primary hover:underline">
                    Upload Shot
                  </a>
                </h3>
                <p className="text-muted-foreground">
                  Creator upload interface for publishing new shots with video, files, and metadata.
                </p>
              </div>

              <div className="p-4 border border-border rounded-lg">
                <h3 className="font-semibold mb-2">
                  <a href="/purchase-success" className="text-primary hover:underline">
                    Purchase Success
                  </a>
                </h3>
                <p className="text-muted-foreground">
                  Confirmation page after successful shot purchase with download links.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}
