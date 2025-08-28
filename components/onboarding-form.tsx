"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { ShotlyLogo } from "@/components/shotly-logo"
import { Mail, CheckCircle } from "lucide-react"
import Link from "next/link"

export function OnboardingForm() {
  const [email, setEmail] = useState("")
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !agreedToTerms) return

    setIsLoading(true)

    // Simulate sending email
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sage-50 to-lavender-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <CheckCircle className="w-16 h-16 text-sage-600 mx-auto mb-6" />
            <h1 className="text-2xl font-bold mb-4">Check your email</h1>
            <p className="text-muted-foreground mb-6">
              We've sent a verification link to <strong>{email}</strong>. Click the link in the email to continue
              setting up your account.
            </p>
            <p className="text-sm text-muted-foreground">
              Didn't receive the email? Check your spam folder or{" "}
              <button onClick={() => setIsSubmitted(false)} className="text-sage-600 hover:underline">
                try again
              </button>
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 to-lavender-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <ShotlyLogo size="lg" className="mx-auto mb-6" />
            <h1 className="text-2xl font-bold mb-2">Welcome to Shotly</h1>
            <p className="text-muted-foreground">Start sharing your creative tutorials with the world</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="terms"
                checked={agreedToTerms}
                onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                className="mt-1"
              />
              <label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed">
                I agree to the{" "}
                <Link href="/terms" className="text-sage-600 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-sage-600 hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <Button type="submit" className="w-full" disabled={!email || !agreedToTerms || isLoading}>
              {isLoading ? "Sending..." : "Get started"}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link href="/dashboard" className="text-sage-600 hover:underline">
              Sign in
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
