import { DashboardLayout } from "@/components/dashboard-layout"
import { CreatorDashboard } from "@/components/creator-dashboard"

export default function CreatorDashboardPage() {
  return (
    <DashboardLayout userType="creator">
      <CreatorDashboard />
    </DashboardLayout>
  )
}
