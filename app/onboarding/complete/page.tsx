import { ProfileCompletionForm } from "@/components/profile-completion-form"

export default function OnboardingCompletePage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <ProfileCompletionForm />
      </div>
    </div>
  )
}
