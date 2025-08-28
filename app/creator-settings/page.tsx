import { DashboardLayout } from "@/components/dashboard-layout"
import { CreatorSettings } from "@/components/creator-settings"

export default function CreatorSettingsPage() {
  return (
    <DashboardLayout userType="creator">
      <CreatorSettings />
    </DashboardLayout>
  )
}
