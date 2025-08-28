import type React from "react"
import { DashboardSidebar } from "./dashboard-sidebar"

interface DashboardLayoutProps {
  children: React.ReactNode
  userType?: "creator" | "buyer"
}

export function DashboardLayout({ children, userType = "creator" }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar userType={userType} />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  )
}
