"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { ShotlyLogo } from "@/components/shotly-logo"
import { User, AtSign } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ProfileCompletionForm() {
  const [fullName, setFullName] = useState("")
  const [username, setUsername] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const formatUsername = (value: string) => {
    return value
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, "")
      .replace(/--+/g, "-")
      .replace(/^-|-$/g, "")
  }

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatUsername(e.target.value)
    setUsername(formatted)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!fullName.trim() || !username.trim()) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Show success toast
    toast({
      title: "Welcome to Shotly! 🎉",
      description: "Your account has been created successfully. Start uploading your first shot!",
    })

    // Redirect to upload page
    router.push("/upload")
  }

  return (
    <Card className="border-0 shadow-lg">
      <CardContent className="p-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <ShotlyLogo size="lg" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Complete Your Profile</h1>
          <p className="text-muted-foreground">Just a few more details to get you started</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
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
            <Label htmlFor="username">Username</Label>
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
              <p className="text-sm text-muted-foreground">
                Your profile will be available at: shotly.com/creator/{username}
              </p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting || !fullName.trim() || !username.trim()}>
            {isSubmitting ? "Creating Account..." : "Continue"}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            By continuing, you agree to our{" "}
            <a href="/terms" className="text-primary hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
