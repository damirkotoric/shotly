"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Separator } from "@/components/ui/separator"
import { CreditCard, Heart, Shield, Download } from "lucide-react"

interface CheckoutDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  video: {
    title: string
    creator: string
    price: number
    thumbnail: string
    duration: string
  }
}

export function CheckoutDialog({ open, onOpenChange, video }: CheckoutDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Complete Your Purchase</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Video Preview */}
          <div className="rounded-lg overflow-hidden">
            <AspectRatio ratio={16 / 9}>
              <img
                src={video.thumbnail || "/placeholder.svg"}
                alt={video.title}
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </div>

          {/* Video Details */}
          <div>
            <h3 className="font-semibold text-lg mb-1">{video.title}</h3>
            <p className="text-muted-foreground text-sm mb-2">by {video.creator}</p>
            <Badge variant="outline">{video.duration}</Badge>
          </div>

          <Separator />

          {/* Pricing */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Shot</span>
              <span className="font-semibold">${video.price}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Platform fee (11%)</span>
              <span className="text-sm text-muted-foreground">${(video.price * 0.11).toFixed(2)}</span>
            </div>

            <Separator />

            <div className="flex justify-between items-center text-lg font-bold">
              <span>Total</span>
              <span>${(video.price + video.price * 0.11).toFixed(2)}</span>
            </div>
          </div>

          {/* Tip Option */}
          <div className="bg-muted/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Heart className="w-4 h-4 text-secondary" />
              <span className="font-medium">Support the creator</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">100% of tips go directly to {video.creator}</p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                $2
              </Button>
              <Button variant="outline" size="sm">
                $5
              </Button>
              <Button variant="outline" size="sm">
                $10
              </Button>
              <Button variant="outline" size="sm">
                Custom
              </Button>
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Download className="w-4 h-4" />
              <span>Lifetime access</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-4 h-4" />
              <span>30-day money-back guarantee</span>
            </div>
          </div>
        </div>

        <DialogFooter className="flex-col gap-2">
          <Button className="w-full" size="lg">
            <CreditCard className="w-4 h-4 mr-2" />
            Complete Purchase
          </Button>
          <Button variant="ghost" onClick={() => onOpenChange(false)} className="w-full">
            Continue Browsing
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
