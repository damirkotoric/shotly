import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CreatorProfile } from "@/components/creator-profile"

export default function CreatorPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <CreatorProfile creatorId={params.id} />
      </main>
      <SiteFooter />
    </div>
  )
}
