import { DashboardLayout } from "@/components/dashboard-layout"
import { MyShotsPage } from "@/components/my-shots-page"

export default function MyShots() {
  return (
    <DashboardLayout userType="creator">
      <MyShotsPage />
    </DashboardLayout>
  )
}
