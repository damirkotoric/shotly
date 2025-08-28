import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PurchaseSuccess } from "@/components/purchase-success"

export default function PurchaseSuccessPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PurchaseSuccess />
      </main>
      <SiteFooter />
    </div>
  )
}
