"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  Video,
  PlusIcon,
  Settings,
  HelpCircle,
  Shield,
  FileText,
  Menu,
  ChevronDown,
  LogOut,
  User,
} from "lucide-react"
import { ShotlyLogo } from "./shotly-logo"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

interface DashboardSidebarProps {
  userType?: "creator" | "buyer"
}

export function DashboardSidebar({ userType = "creator" }: DashboardSidebarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">("desktop")
  const pathname = usePathname()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScreenSize("mobile")
        setIsOpen(false)
      } else if (window.innerWidth < 1024) {
        setScreenSize("tablet")
        setIsOpen(false)
      } else {
        setScreenSize("desktop")
        setIsOpen(true)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const creatorNavItems = [
    { href: "/creator-dashboard", label: "Dashboard", icon: BarChart3 },
    { href: "/my-shots", label: "My Shots", icon: Video },
  ]

  const buyerNavItems = [{ href: "/dashboard", label: "My Purchases", icon: Video }]

  const navItems = userType === "creator" ? creatorNavItems : buyerNavItems

  const helpItems = [
    { href: "/support", label: "Support", icon: HelpCircle },
    { href: "/privacy", label: "Privacy", icon: Shield },
    { href: "/terms", label: "Terms", icon: FileText },
  ]

  const isActive = (href: string) => pathname === href

  const userData = {
    name: "Malina Nicholson",
    email: "malina@example.com",
    avatar: "/malina-avatar.png",
  }

  const handleModeSwitch = () => {
    // Switch between creator and buyer dashboards
    if (userType === "creator") {
      window.location.href = "/dashboard"
    } else {
      window.location.href = "/creator-dashboard"
    }
  }

  const handleLogout = () => {
    // Handle logout functionality
    console.log("Logging out...")
    window.location.href = "/"
  }

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (screenSize === "tablet" && !isOpen) {
      e.preventDefault()
      setIsOpen(true)
      return
    }

    if (screenSize === "tablet" || screenSize === "mobile") {
      setIsOpen(false)
    }
    window.scrollTo(0, 0)
  }

  const handleSidebarClick = () => {
    if (screenSize === "tablet" && !isOpen) {
      setIsOpen(true)
    }
  }

  const getSidebarClasses = () => {
    if (screenSize === "desktop") {
      return "w-64 translate-x-0"
    }

    if (screenSize === "tablet") {
      return `${isOpen ? "w-64 translate-x-0" : "w-16 translate-x-0"}`
    }

    // Mobile
    return `w-64 ${isOpen ? "translate-x-0" : "-translate-x-full"}`
  }

  const showCollapsedContent = screenSize === "tablet" && !isOpen

  return (
    <>
      {/* Mobile/Tablet overlay */}
      {isOpen && screenSize !== "desktop" && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpen(false)} />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed left-0 top-0 h-screen bg-background border-r border-border z-50 flex flex-col
        transition-all duration-300 ease-in-out
        ${getSidebarClasses()}
        lg:relative
      `}
        onClick={handleSidebarClick}
      >
        {/* Header - Fixed */}
        <div className="p-4 border-b border-border flex-shrink-0">
          <div className="flex items-center justify-between">
            <Link href="/creator-dashboard" className="flex items-center">
              <ShotlyLogo variant={showCollapsedContent ? "icon" : "full"} size="md" color="light" />
            </Link>
          </div>
        </div>

        {/* Navigation - Scrollable */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-3">
            {userType === "creator" && (
              <>
                <Link
                  href="/upload"
                  className={`
                    flex items-center gap-3 p-2 rounded-lg transition-colors mb-3
                    ${
                      isActive("/upload")
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }
                  `}
                  onClick={(e) => handleNavClick(e, "/upload")}
                >
                  <PlusIcon className="w-5 h-5 flex-shrink-0" />
                  {!showCollapsedContent && <span className="font-medium">New Shot</span>}
                </Link>
                <Separator className="mb-3" />
              </>
            )}

            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    flex items-center gap-3 p-2 rounded-lg transition-colors mb-1
                    ${
                      isActive(item.href)
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }
                  `}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  {!showCollapsedContent && <span className="font-medium">{item.label}</span>}
                </Link>
              )
            })}
          </div>
        </div>

        {/* Help & Legal - Fixed */}
        <div className="p-4 border-t border-border flex-shrink-0">
          <div className="space-y-1">
            {helpItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  {!showCollapsedContent && <span className="text-sm">{item.label}</span>}
                </Link>
              )
            })}
          </div>
        </div>

        <Separator />

        {/* User Profile - Fixed */}
        <div className="p-4 flex-shrink-0">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-muted transition-colors">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={userData.avatar || "/placeholder.svg"} alt={userData.name} />
                  <AvatarFallback>
                    <User className="w-4 h-4" />
                  </AvatarFallback>
                </Avatar>
                {!showCollapsedContent && (
                  <>
                    <div className="flex-1 text-left">
                      <p className="text-sm font-medium">{userData.name}</p>
                      <p className="text-xs text-muted-foreground capitalize">{userType} mode</p>
                    </div>
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  </>
                )}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem onClick={handleModeSwitch}>
                <User className="w-4 h-4 mr-2" />
                Switch to {userType === "creator" ? "Viewer" : "Creator"} mode
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/settings">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                <LogOut className="w-4 h-4 mr-2" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Toggle button - shows on mobile when closed, on tablet when collapsed */}
      {((screenSize === "mobile" && !isOpen) || (screenSize === "tablet" && !isOpen)) && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsOpen(true)}
          className="fixed top-4 left-4 z-60 bg-background/95 backdrop-blur"
        >
          <Menu className="w-4 h-4" />
        </Button>
      )}
    </>
  )
}
