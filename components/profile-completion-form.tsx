"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { ShotlyLogo } from "@/components/shotly-logo"
import { User, AtSign } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ProfileCompletionForm() {
  const [fullName, setFullName] = useState("")
  const [username, setUsername] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const formatUsername = (value: string) => {
    return value
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "")
      .slice(0, 20)
  }

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatUsername(e.target.value)
    setUsername(formatted)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!fullName.trim() || !username.trim()) return

    setIsLoading(true)

    // Simulate account creation
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Show success toast
    toast({
      title: "Welcome to Shotly!",
      description: "Your account has been created successfully.",
    })

    // Redirect to upload page
    router.push("/upload")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 to-lavender-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <ShotlyLogo size="lg" className="mx-auto mb-6" />
            <h1 className="text-2xl font-bold mb-2">Complete your profile</h1>
            <p className="text-muted-foreground">Just a few more details to get you started</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-sm font-medium">
                Full name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium">
                Username
              </label>
              <div className="relative">
                <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  id="username"
                  type="text"
                  placeholder="Choose a username"
                  value={username}
                  onChange={handleUsernameChange}
                  className="pl-10"
                  required
                />
              </div>
              {username && (
                <p className="text-xs text-muted-foreground">
                  Your profile will be available at: shotly.com/creator/{username}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full" disabled={!fullName.trim() || !username.trim() || isLoading}>
              {isLoading ? "Creating account..." : "Continue"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
