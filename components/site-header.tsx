"use client"

import { ShotlyLogo } from "@/components/shotly-logo"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface SiteHeaderProps {
  userType?: "guest" | "buyer" | "creator"
}

export function SiteHeader({ userType = "guest" }: SiteHeaderProps) {
  const pathname = usePathname()

  const getCurrentUserType = () => {
    if (userType !== "guest") return userType
    if (pathname === "/dashboard") return "buyer"
    if (pathname === "/creator-dashboard" || pathname === "/upload" || pathname === "/my-shots") return "creator"
    return "guest"
  }

  const currentUserType = getCurrentUserType()
  const isSignedIn = currentUserType !== "guest"

  const handleModeSwitch = () => {
    const targetPath = currentUserType === "buyer" ? "/creator-dashboard" : "/dashboard"
    window.location.href = targetPath
  }

  const handleLogout = () => {
    // Handle logout logic here
    window.location.href = "/"
  }

  return (
    <header className="sticky top-4 z-50 mx-4">
      <div className="box-content max-w-4xl mx-auto px-4">
        <div className="border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90 rounded-2xl px-4 h-14 flex items-center justify-between">
          <Link href="/" onClick={() => window.scrollTo(0, 0)}>
            <ShotlyLogo size="md" />
          </Link>

          {currentUserType === "buyer" && (
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/dashboard"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                My Purchases
              </Link>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Settings
              </a>
            </nav>
          )}

          {currentUserType === "creator" && (
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/creator-dashboard"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                Dashboard
              </Link>
              <Link
                href="/my-shots"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                My Shots
              </Link>
              <Link
                href="/creator-settings"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                Settings
              </Link>
            </nav>
          )}

          {currentUserType === "buyer" && (
            <div className="flex items-center gap-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuItem onClick={handleModeSwitch}>Switch to Creator mode</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}

          {currentUserType === "creator" && (
            <div className="flex items-center gap-3">
              <Link href="/upload" onClick={() => window.scrollTo(0, 0)}>
                <Button variant="ghost">Upload</Button>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Creator" />
                      <AvatarFallback>C</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuItem onClick={handleModeSwitch}>Switch to Viewer mode</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}

          {currentUserType === "guest" && (
            <div className="flex items-center gap-3">
              <Button variant="ghost">About</Button>
              <Button variant="ghost">Sign In</Button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
