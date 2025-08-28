"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Play, Clock, ShoppingBagIcon, CoinsIcon, ArrowRight, FileText, Palette, Download } from "lucide-react"
import Link from "next/link"

interface Shot {
  id: string
  title: string
  tagline: string
  creator: {
    name: string
    bio: string
    avatar: string
  }
  duration: string
  price: number
  purchases: number
  thumbnail: string
  previewDuration: string
  description: string
  chapters: { time: string; title: string }[]
  files: { name: string; type: "lut" | "pdf" | "preset"; size: string }[]
}

interface ShotDetailProps {
  shot: Shot
}

export function ShotDetail({ shot }: ShotDetailProps) {
  const handleLinkClick = () => {
    window.scrollTo(0, 0)
  }

  const getFileIcon = (type: string) => {
    switch (type) {
      case "lut":
        return <Palette className="w-5 h-5" />
      case "pdf":
        return <FileText className="w-5 h-5" />
      case "preset":
        return <Download className="w-5 h-5" />
      default:
        return <FileText className="w-5 h-5" />
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 pb-8 pt-14">
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-8 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-3">{shot.title}</h1>
            <p className="text-xl text-muted-foreground mb-4">{shot.tagline}</p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span>
                by{" "}
                <Link
                  href="/creator/malina-nicholson"
                  className="font-medium text-foreground hover:underline"
                  onClick={handleLinkClick}
                >
                  {shot.creator.name}
                </Link>
              </span>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{shot.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <ShoppingBagIcon className="w-4 h-4" />
                <span>{shot.purchases}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="text-3xl font-bold">${shot.price}</div>
              <div className="text-sm text-muted-foreground">Unlimited access to the video</div>
            </div>

            <Button size="lg" className="w-full md:w-auto px-8">
              Buy now
            </Button>
          </div>
        </div>

        {/* Right Column - Video Thumbnail */}
        <div>
          <Card className="p-0">
            <div className="relative">
              <AspectRatio ratio={1}>
                <img
                  src={shot.thumbnail || "/placeholder.svg"}
                  alt={shot.title}
                  className="w-full h-full object-cover rounded-t-xl"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center rounded-t-xl">
                  <Button size="lg" className="bg-white/90 text-black hover:bg-white">
                    <Play className="w-6 h-6 mr-2" />
                    {shot.previewDuration}
                  </Button>
                </div>
              </AspectRatio>
            </div>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground">No subscription. Instant access after purchase.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Files Section */}
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-4">Files Included</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {shot.files.map((file, index) => (
            <div key={index} className="flex items-center gap-3 p-4 border border-border rounded-lg">
              <div className="text-blue-600">{getFileIcon(file.type)}</div>
              <div className="flex-1">
                <div className="font-medium">{file.name}</div>
                <div className="text-sm text-muted-foreground">{file.size}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        {/* Content Cards */}
        <div className="grid gap-8">
          {/* Description */}
          <div className="prose prose-gray max-w-none">
            <div dangerouslySetInnerHTML={{ __html: shot.description.replace(/\n/g, "<br />") }} />
          </div>

          {/* Chapters */}
          <Card>
            <CardContent className="pt-6">
              <CardTitle className="mb-4">Chapters</CardTitle>
              <div className="space-y-3">
                {shot.chapters.map((chapter, index) => (
                  <div key={index} className="flex items-center gap-4 p-2 rounded hover:bg-muted/50 cursor-pointer">
                    <div className="text-sm font-mono text-muted-foreground min-w-[3rem]">{chapter.time}</div>
                    <div className="flex-1">{chapter.title}</div>
                    <Play className="w-4 h-4 text-muted-foreground" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Creator and CTA Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Creator Card */}
          <Card>
            <CardContent className="pt-6">
              <Link
                href="/creator/malina-nicholson"
                className="flex items-center gap-3 hover:opacity-80 transition-opacity mb-4"
                onClick={handleLinkClick}
              >
                <Avatar>
                  <AvatarImage src={shot.creator.avatar || "/placeholder.svg"} />
                  <AvatarFallback>
                    {shot.creator.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{shot.creator.name}</div>
                  <div className="text-sm text-muted-foreground">{shot.creator.bio}</div>
                </div>
              </Link>
              <Link href="/creator/malina-nicholson" onClick={handleLinkClick}>
                <Button variant="ghost" className="w-full bg-transparent">
                  See {shot.creator.name.split(" ")[0]}'s library
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* CTA Block */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <Button size="lg" className="w-full">
                Buy for ${shot.price}
              </Button>
              <Button variant="outline" size="lg" className="w-full bg-transparent">
                <CoinsIcon className="w-4 h-4 mr-2" />
                Tip {shot.creator.name.split(" ")[0]}
              </Button>
              <Separator />
              <Button variant="ghost" className="w-full text-sm">
                Already purchased? Go to your Library →
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
