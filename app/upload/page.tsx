import { DashboardLayout } from "@/components/dashboard-layout"
import { UploadForm } from "@/components/upload-form"

export default function UploadPage() {
  return (
    <DashboardLayout userType="creator">
      <UploadForm />
    </DashboardLayout>
  )
}
