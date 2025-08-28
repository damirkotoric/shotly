"use client"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card"
import { ShoppingBag, User } from "lucide-react"
import { useState } from "react"

interface VideoCardProps {
  title: string
  creator: string
  price: number
  duration: string
  thumbnail: string
  description: string
  category: string
  purchases?: number
  onBuy: () => void
  onPreview: () => void
  aspectRatio?: number
}

export function VideoCard({
  title,
  creator,
  price,
  duration,
  thumbnail,
  description,
  category,
  purchases = 0,
  onBuy,
  onPreview,
  aspectRatio = 1,
}: VideoCardProps) {
  const [videoError, setVideoError] = useState(false)

  const formatDuration = (duration: string) => {
    const [minutes] = duration.split(":")
    return `${minutes} min`
  }

  return (
    <Card
      className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-0 cursor-pointer flex flex-col h-full"
      onClick={onBuy}
    >
      <div className="p-0">
        <div className="relative overflow-hidden rounded-t-xl">
          <AspectRatio ratio={aspectRatio}>
            {!videoError ? (
              <video
                src={`/api/videos/${title.toLowerCase().replace(/\s+/g, "-")}/preview`}
                poster={thumbnail || "/placeholder.svg"}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                muted
                loop
                onError={() => setVideoError(true)}
                onMouseEnter={(e) => {
                  e.currentTarget.play().catch(() => setVideoError(true))
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.pause()
                  e.currentTarget.currentTime = 0
                }}
              />
            ) : (
              <img
                src={thumbnail || "/placeholder.svg"}
                alt={title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            )}
          </AspectRatio>
          <Badge variant="secondary" className="absolute top-3 left-3">
            {category}
          </Badge>
          <div className="absolute top-3 right-3 bg-black/50 text-white px-2 py-1 rounded text-xs">
            {formatDuration(duration)}
          </div>
        </div>
      </div>

      <CardContent className="p-3 flex-1">
        <CardTitle className="text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">{title}</CardTitle>
        <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
          <User className="w-4 h-4" />
          <span>{creator}</span>
          {purchases > 0 && (
            <>
              <span>•</span>
              <div className="flex items-center gap-1">
                <ShoppingBag className="w-4 h-4" />
                <span>{purchases}</span>
              </div>
            </>
          )}
        </div>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardContent>

      <CardFooter className="p-3 flex items-center justify-between">
        <span className="text-2xl font-bold text-primary">${price}</span>
        <Button
          onClick={(e) => {
            e.stopPropagation()
            onBuy()
          }}
          className="font-semibold"
        >
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  )
}
