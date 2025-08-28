import { DashboardLayout } from "@/components/dashboard-layout"
import { BuyerDashboard } from "@/components/buyer-dashboard"

export default function DashboardPage() {
  return (
    <DashboardLayout userType="buyer">
      <BuyerDashboard />
    </DashboardLayout>
  )
}
