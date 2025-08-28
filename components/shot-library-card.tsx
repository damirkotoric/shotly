"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Download, FileText, ImageIcon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface ShotLibraryCardProps {
  shot: {
    id: string
    title: string
    creator: string
    creatorId: string
    duration: string
    thumbnail: string
    purchaseDate: string
    files: Array<{
      name: string
      type: string
      size: string
      downloadUrl: string
    }>
  }
}

export function ShotLibraryCard({ shot }: ShotLibraryCardProps) {
  const [videoError, setVideoError] = useState(false)

  const handleWatch = () => {
    window.scrollTo(0, 0)
    // Navigate to video player
  }

  const getFileIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "pdf":
        return <FileText className="w-4 h-4" />
      case "cube":
      case "xmp":
        return <ImageIcon className="w-4 h-4" />
      default:
        return <Download className="w-4 h-4" />
    }
  }

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="relative w-full md:w-64 flex-shrink-0">
            <AspectRatio ratio={1 / 1}>
              {!videoError ? (
                <video
                  src={`/api/videos/${shot.id}/full`}
                  poster={shot.thumbnail || "/placeholder.svg"}
                  className="object-cover w-full h-full cursor-pointer"
                  controls
                  onError={() => setVideoError(true)}
                  onClick={handleWatch}
                />
              ) : (
                <img
                  src={shot.thumbnail || "/placeholder.svg"}
                  alt={shot.title}
                  className="object-cover w-full h-full cursor-pointer"
                  onClick={handleWatch}
                />
              )}
            </AspectRatio>
          </div>

          {/* Content */}
          <div className="flex-1 p-6">
            <div className="flex flex-col h-full">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">{shot.title}</h3>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-muted-foreground">by</span>
                  <Link
                    href={`/creator/${shot.creatorId}`}
                    className="font-medium hover:underline"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    {shot.creator}
                  </Link>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">{shot.duration}</span>
                </div>

                {/* Included files */}
                {shot.files.length > 0 && (
                  <div className="pb-6">
                    <h4 className="text-sm font-medium text-muted-foreground mb-3">Included files:</h4>
                    <div className="space-y-2">
                      {shot.files.map((file, index) => (
                        <div key={index} className="flex items-center gap-3 text-sm">
                          {getFileIcon(file.type)}
                          <span className="flex-1">{file.name}</span>
                          <span className="text-muted-foreground">{file.type}</span>
                          <span className="text-muted-foreground">{file.size}</span>
                          <Button variant="ghost" size="sm" className="h-6 px-2">
                            <Download className="w-3 h-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
