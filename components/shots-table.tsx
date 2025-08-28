"use client"

import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Separator } from "@/components/ui/separator"
import { Eye, Edit, EyeOff } from "lucide-react"
import Image from "next/image"
import type { ReactNode } from "react"

interface Shot {
  id: string
  title: string
  thumbnail: string
  price: number
  sales: number
  revenue: number
  tips: number
}

interface ShotsTableProps {
  title: string
  shots: Shot[]
  onView: (id: string) => void
  onEdit: (id: string) => void
  onUnpublish?: (id: string) => void
  showActions?: boolean
  headerAction?: ReactNode
}

export function ShotsTable({
  title,
  shots,
  onView,
  onEdit,
  onUnpublish,
  showActions = true,
  headerAction,
}: ShotsTableProps) {
  const displayTitle = `${shots.length} ${shots.length === 1 ? "shot" : "shots"}`

  return (
    <Card variant="no-padding">
      <CardContent className="p-0">
        {/* Header with title and action */}
        <div className="flex items-center justify-between p-4 pb-0">
          <CardTitle className="text-xl">{displayTitle}</CardTitle>
          {headerAction}
        </div>

        <div className="p-0">
          {shots.map((shot, index) => (
            <div key={shot.id}>
              <div className="flex items-start gap-4 p-4">
                <div className="w-16 h-16 flex-shrink-0">
                  <AspectRatio ratio={1}>
                    <Image
                      src={shot.thumbnail || "/placeholder.svg"}
                      alt={shot.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </AspectRatio>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">{shot.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm font-medium">${shot.price}</span>
                      </div>
                    </div>

                    {showActions && (
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={() => onView(shot.id)}>
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => onEdit(shot.id)}>
                          <Edit className="w-4 h-4 mr-1" />
                          Edit
                        </Button>
                        {onUnpublish && (
                          <Button variant="outline" size="sm" onClick={() => onUnpublish(shot.id)}>
                            <EyeOff className="w-4 h-4 mr-1" />
                            Unpublish
                          </Button>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <span>{shot.sales} sales</span>
                    <span>${shot.revenue.toLocaleString()} revenue</span>
                    <span>${shot.tips} tips</span>
                  </div>
                </div>
              </div>
              {index < shots.length - 1 && <Separator />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
