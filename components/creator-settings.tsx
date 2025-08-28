"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, AlertTriangle, Upload, Mail, Shield, HelpCircle } from "lucide-react"

export function CreatorSettings() {
  const [displayName, setDisplayName] = useState("Malina Nicholson")
  const [handle, setHandle] = useState("malina-nicholson")
  const [bio, setBio] = useState(
    "Professional filmmaker specializing in narrative cinematography and visual storytelling.",
  )
  const [isStripeConnected, setIsStripeConnected] = useState(true)

  const handleStripeConnect = () => {
    // Handle Stripe connection
    console.log("Connecting to Stripe...")
  }

  const handleStripeDisconnect = () => {
    // Handle Stripe disconnection
    setIsStripeConnected(false)
  }

  const handleLogoutEverywhere = () => {
    // Handle logout everywhere
    console.log("Logging out everywhere...")
  }

  const handleContactSupport = () => {
    // Handle contact support
    console.log("Contacting support...")
  }

  return (
    <div className="max-w-4xl mx-auto p-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your creator account and preferences.</p>
      </div>

      <Card>
        <CardContent className="p-8">
          <div className="space-y-12">
            {/* Profile Section */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5" />
                  Profile
                </h2>
                <p className="text-muted-foreground">
                  Your public profile information that appears on your shots and storefront.
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="displayName">Display name (public)</Label>
                  <Input
                    id="displayName"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder="Your display name"
                  />
                  <p className="text-sm text-muted-foreground">This name appears on your Shots and storefront.</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="handle">Handle (public)</Label>
                  <div className="flex items-center">
                    <span className="text-sm text-muted-foreground mr-1">shotly.video/c/</span>
                    <Input
                      id="handle"
                      value={handle}
                      onChange={(e) => setHandle(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ""))}
                      placeholder="your-handle"
                      className="flex-1"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Your unique URL. Only lowercase letters, numbers, and hyphens allowed.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio (public)</Label>
                  <Textarea
                    id="bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Tell people about yourself..."
                    rows={3}
                  />
                  <p className="text-sm text-muted-foreground">Keep it to 1–2 sentences.</p>
                </div>

                <div className="space-y-2">
                  <Label>Profile photo</Label>
                  <div className="flex items-center gap-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src="/malina-avatar.png" alt="Profile" />
                      <AvatarFallback>MN</AvatarFallback>
                    </Avatar>
                    <Button variant="outline" size="sm">
                      <Upload className="w-4 h-4 mr-2" />
                      Change photo
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Email address (read-only)</Label>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">malina@example.com</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Your account email (used for purchases and login).</p>
                </div>

                <Button>Save Profile</Button>
              </div>
            </div>

            <Separator />

            {/* Payout Connection Section */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">Payouts</h2>
                <p className="text-muted-foreground">
                  Connect your Stripe account to receive payments from shot sales.
                </p>
              </div>

              <div className="space-y-4">
                {isStripeConnected ? (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-green-800">Connected to Stripe. Payments will flow automatically.</span>
                    </div>
                    <Button variant="outline" onClick={handleStripeDisconnect}>
                      Disconnect Stripe
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                      <AlertTriangle className="w-5 h-5 text-amber-600" />
                      <span className="text-amber-800">You need to connect Stripe to publish Shots.</span>
                    </div>
                    <Button onClick={handleStripeConnect}>Connect Stripe →</Button>
                  </div>
                )}
                <p className="text-sm text-muted-foreground">
                  All payouts are handled securely via Stripe. We never see your bank details.
                </p>
              </div>
            </div>

            <Separator />

            {/* Security Section */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">Security</h2>
                <p className="text-muted-foreground">
                  Manage your authentication methods. We use passwordless magic links. To sign in, just enter your
                  email.
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <Button variant="outline" onClick={handleLogoutEverywhere}>
                    Log out everywhere
                  </Button>
                </div>
              </div>
            </div>

            <Separator />

            {/* Account Support Section */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold flex items-center gap-2 mb-2">
                  <HelpCircle className="w-5 h-5" />
                  Account Support
                </h2>
                <p className="text-muted-foreground">Get help with your account or request changes.</p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    If you no longer wish to sell on Shotly, you can request account deactivation.
                  </p>
                  <Button variant="outline" onClick={handleContactSupport}>
                    Contact support →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
