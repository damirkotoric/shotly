"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { VideoCard } from "@/components/video-card"
import { Instagram, Twitter, Youtube, Globe } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

interface CreatorProfileProps {
  creatorId: string
}

export function CreatorProfile({ creatorId }: CreatorProfileProps) {
  const [customTipAmount, setCustomTipAmount] = useState("")
  const [showFullBio, setShowFullBio] = useState(false)
  const router = useRouter()

  const creator = {
    id: "malina-nicholson",
    name: "Malina Nicholson",
    tagline: "Turning everyday shoots into cinematic stories.",
    avatar: "/malina-avatar.png",
    stats: {
      shots: 12,
      purchases: 420,
      totalTips: 2150,
      tips: 1250,
    },
    bio: "I'm a filmmaker and educator passionate about teaching creators how to get professional results with minimal gear. From handheld b-roll tricks to color grading shortcuts, my tutorials focus on clarity, repeatability, and calm learning. You'll walk away with skills you can use the same day.",
    socialMedia: [
      { platform: "Instagram", icon: Instagram, url: "https://instagram.com/malinacreates" },
      { platform: "Twitter", icon: Twitter, url: "https://twitter.com/malinacreates" },
      { platform: "YouTube", icon: Youtube, url: "https://youtube.com/malinacreates" },
      { platform: "Website", icon: Globe, url: "https://malinacreates.com" },
    ],
  }

  const featuredShots = [
    {
      id: "cinematic-broll",
      title: "Cinematic B-Roll That Tells a Story",
      creator: "Malina Nicholson",
      price: 10, // reduced from $18 to $10
      duration: "28 min",
      thumbnail: "/cinematic-broll-tutorial-preview.png",
      description:
        "Master advanced B-roll techniques that elevate your storytelling with cinematic movement, composition, and visual flow.",
      category: "Video Production",
      tips: 524,
      level: "Intermediate",
    },
    {
      id: "color-grading-luts",
      title: "Color Grading with LUTs Made Simple",
      creator: "Malina Nicholson",
      price: 10,
      duration: "22 min",
      thumbnail: "/color-grading-interface-with-luts-panel.png",
      description: "Learn professional color grading techniques using LUTs for consistent, cinematic looks.",
      category: "Post-Production",
      tips: 312,
      level: "Beginner",
    },
    {
      id: "natural-light-portraits",
      title: "Natural Light Portraits Indoors",
      creator: "Malina Nicholson",
      price: 9,
      duration: "18 min",
      thumbnail: "/natural-light-portrait-photography-setup-indoors.png",
      description: "Create stunning portraits using only natural light and simple reflectors.",
      category: "Photography",
      tips: 287,
      level: "All levels",
    },
    {
      id: "handheld-stabilization",
      title: "Handheld Stabilization Secrets",
      creator: "Malina Nicholson",
      price: 10, // reduced from $14 to $10
      duration: "25 min",
      thumbnail: "/filmmaker-holding-camera-with-stabilization-techni.png",
      description: "Professional handheld techniques for smooth, cinematic footage without expensive gear.",
      category: "Video Production",
      tips: 198,
      level: "Intermediate",
    },
    {
      id: "audio-sync-tips",
      title: "Audio Sync & Sound Design Basics",
      creator: "Malina Nicholson",
      price: 10, // reduced from $12 to $10
      duration: "20 min",
      thumbnail: "/audio-editing-interface-with-waveforms.png",
      description: "Essential audio techniques for crisp dialogue and immersive sound design.",
      category: "Post-Production",
      tips: 156,
      level: "Beginner",
    },
    {
      id: "drone-cinematography",
      title: "Drone Cinematography Fundamentals",
      creator: "Malina Nicholson",
      price: 10, // reduced from $16 to $10
      duration: "32 min",
      thumbnail: "/drone-flying-over-landscape-for-cinematography.png",
      description: "Master aerial cinematography with composition, movement, and safety best practices.",
      category: "Video Production",
      tips: 243,
      level: "Intermediate",
    },
  ]

  const handleShotClick = (shotId: string) => {
    window.scrollTo(0, 0)
    router.push(`/shot/${shotId}`)
  }

  const handleBuyShot = (shotId: string) => {
    console.log("[v0] Buying shot:", shotId)
  }

  const handlePreviewShot = (shotId: string) => {
    console.log("[v0] Previewing shot:", shotId)
  }

  const handleTip = (amount: number) => {
    console.log("[v0] Tipping creator:", amount)
  }

  const handleCustomTip = () => {
    const amount = Number.parseFloat(customTipAmount)
    if (amount > 0) {
      handleTip(amount)
      setCustomTipAmount("")
    }
  }

  const handleFollow = () => {
    console.log("[v0] Following creator")
  }

  const truncateBio = (text: string, maxLines = 2) => {
    const words = text.split(" ")
    const wordsPerLine = 12 // Approximate words per line
    const maxWords = maxLines * wordsPerLine

    if (words.length <= maxWords) return text
    return words.slice(0, maxWords).join(" ")
  }

  return (
    <div className="max-w-4xl mx-auto px-4 pb-8 pt-16">
      {/* Hero Section */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row md:items-start gap-8">
          {/* Left side - Avatar Card with Stats and Social */}
          <div className="flex-shrink-0">
            <div className="bg-card border rounded-lg p-6 text-center max-w-sm shadow-xl">
              {/* Avatar */}
              <div className="mb-4">
                <Avatar className="w-32 h-32 mx-auto">
                  <AvatarImage src={creator.avatar || "/placeholder.svg"} alt={creator.name} />
                  <AvatarFallback className="text-2xl">MN</AvatarFallback>
                </Avatar>
              </div>

              {/* Social Media Icons */}
              <div className="flex justify-center gap-2">
                {creator.socialMedia.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <Button
                      key={social.platform}
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(social.url, "_blank")}
                    >
                      <IconComponent className="w-4 h-4" />
                    </Button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right side - Title and Tagline */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4">{creator.name}</h1>
            <p className="text-xl text-muted-foreground mb-4">{creator.tagline}</p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {showFullBio ? creator.bio : truncateBio(creator.bio)}
              {!showFullBio && creator.bio.length > truncateBio(creator.bio).length && (
                <Button variant="link" className="p-0 h-auto ml-1 text-lg" onClick={() => setShowFullBio(true)}>
                  more...
                </Button>
              )}
            </p>
            {/* Stats */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between py-2 border-b">
                  <span className="text-2xl font-bold">{creator.stats.shots}</span>
                  <span className="text-muted-foreground">Shots</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <span className="text-2xl font-bold">{creator.stats.purchases}+</span>
                  <span className="text-muted-foreground">Purchases</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <span className="text-2xl font-bold">{creator.stats.totalTips.toLocaleString()}</span>
                  <span className="text-muted-foreground">Total Tips</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-2xl font-bold">${creator.stats.tips.toLocaleString()}</span>
                  <span className="text-muted-foreground">Tips Received</span>
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* Featured Shots */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">12 Shots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredShots.map((shot) => (
            <VideoCard
              key={shot.id}
              {...shot}
              onBuy={() => handleBuyShot(shot.id)}
              onPreview={() => handlePreviewShot(shot.id)}
              aspectRatio={1}
            />
          ))}
        </div>
        <div className="text-center">
          <Button variant="outline" size="lg">
            Load More
          </Button>
        </div>
      </div>

      <Separator className="mb-12" />

      <div className="max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-2">Tip Malina</h2>
        <p className="text-muted-foreground mb-6">100% of tips go to the creator.</p>

        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-3 mb-6">
            <Button
              variant="outline"
              className="h-20 flex flex-col items-center justify-center bg-transparent"
              onClick={() => handleTip(2)}
            >
              <span className="text-lg font-semibold">$2</span>
            </Button>
            <Button
              variant="outline"
              className="h-20 flex flex-col items-center justify-center bg-transparent"
              onClick={() => handleTip(5)}
            >
              <span className="text-lg font-semibold">$5</span>
            </Button>
            <Button
              variant="outline"
              className="h-20 flex flex-col items-center justify-center bg-transparent"
              onClick={() => handleTip(10)}
            >
              <span className="text-lg font-semibold">$10</span>
            </Button>
          </div>

          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold mb-2">Custom</h3>
            <Input
              type="number"
              placeholder="Enter Amount"
              value={customTipAmount}
              onChange={(e) => setCustomTipAmount(e.target.value)}
              className="text-center"
            />
          </div>

          <Button onClick={handleCustomTip} className="w-full h-12 text-lg" size="lg">
            Tip
          </Button>
        </div>
      </div>
    </div>
  )
}
