"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { CheckCircle, Download, FileText, ImageIcon, ArrowRight, Heart, DollarSign } from "lucide-react"
import NextImage from "next/image"
import Link from "next/link"

export function PurchaseSuccess() {
  const handleTip = (amount: number) => {
    console.log(`[v0] Tipping creator $${amount}`)
    // Handle tip logic
  }

  const handleCustomTip = () => {
    console.log("[v0] Opening custom tip dialog")
    // Handle custom tip logic
  }

  const handleDownloadAll = () => {
    console.log("[v0] Downloading all files")
    // Handle download logic
  }

  const handleGoToLibrary = () => {
    window.scrollTo(0, 0)
    // Navigate to library
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Hero / Confirmation */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">You now own Cinematic B-Roll That Tells a Story</h1>
        <p className="text-xl text-muted-foreground mb-8">It's yours forever. Find it anytime in your Library.</p>

        <div className="mb-6 max-h-[75vh]">
          <video
            src="https://storage.googleapis.com/damirkotoric/Download.mp4"
            className="bg-black max-h-[75vh] rounded-lg aspect-9/16 mx-auto"
            controls
            preload="metadata"
            poster="/cinematic-broll-tutorial-preview.png"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        <Button variant="outline" size="lg" onClick={handleGoToLibrary}>
          Go to your Library
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

      <div className="space-y-8">
        {/* Order Summary */}
        <Card>
          <CardContent className="pt-6">
            <CardTitle className="mb-4">Order summary</CardTitle>
            <div className="flex gap-4">
              <div className="w-16 h-16 relative flex-shrink-0">
                <AspectRatio ratio={1}>
                  <NextImage
                    src="/cinematic-broll-tutorial-preview.png"
                    alt="Cinematic B-Roll That Tells a Story"
                    fill
                    className="object-cover rounded-lg"
                  />
                </AspectRatio>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">Cinematic B-Roll That Tells a Story</h3>
                <p className="text-sm text-muted-foreground">by Malina Nicholson</p>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Shot price</span>
                <span>$10.00</span>
              </div>
              <Separator />
              <div className="flex justify-between font-semibold">
                <span>Total paid</span>
                <span>$10.00</span>
              </div>
            </div>

            <div className="text-sm text-muted-foreground space-y-1">
              <p>Order #SH-2025-001234 • Jan 25, 2025</p>
              <p>Visa ••••4242</p>
              <p className="flex items-center gap-1">Payment processed securely by Stripe</p>
            </div>
          </CardContent>
        </Card>

        {/* Included Files */}
        <Card>
          <CardContent className="pt-6">
            <CardTitle className="mb-4">Included files</CardTitle>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Shot List Template</p>
                    <p className="text-sm text-muted-foreground">PDF • 210 KB</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Download className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ImageIcon className="w-5 h-5 text-purple-600" />
                  <div>
                    <p className="font-medium">Cinematic LUT Pack</p>
                    <p className="text-sm text-muted-foreground">.cube • 3.2 MB</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Download className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium">Gear Recommendations</p>
                    <p className="text-sm text-muted-foreground">PDF • 80 KB</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <Separator />

            <Button variant="outline" className="w-full bg-transparent" onClick={handleDownloadAll}>
              <Download className="w-4 h-4 mr-2" />
              Download all (.zip)
            </Button>

            <div className="text-sm text-muted-foreground space-y-1">
              <p>Personal use only. Do not redistribute.</p>
              <p>Download links expire, but you can re-download anytime from your Library.</p>
            </div>
          </CardContent>
        </Card>

        {/* Tip Prompt */}
        <Card>
          <CardContent className="pt-6">
            <CardTitle className="flex items-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-red-500" />
              Say thanks to Malina
            </CardTitle>
            <p className="text-sm text-muted-foreground">Tips go 100% to the creator.</p>

            <div className="grid grid-cols-3 gap-2">
              <Button variant="outline" onClick={() => handleTip(2)}>
                $2
              </Button>
              <Button variant="outline" onClick={() => handleTip(5)}>
                $5
              </Button>
              <Button variant="outline" onClick={() => handleTip(10)}>
                $10
              </Button>
            </div>

            <Button variant="ghost" className="w-full" onClick={handleCustomTip}>
              <DollarSign className="w-4 h-4 mr-2" />
              Custom amount
            </Button>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card>
          <CardContent className="pt-6">
            <CardTitle className="mb-4">More from Malina Nicholson</CardTitle>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-16 h-16 relative flex-shrink-0">
                  <AspectRatio ratio={1}>
                    <NextImage
                      src="/color-grading-luts-interface-tutorial.png"
                      alt="Color Grading Mastery"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </AspectRatio>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">Color Grading Mastery</h4>
                  <p className="text-sm text-muted-foreground">$8</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-16 h-16 relative flex-shrink-0">
                  <AspectRatio ratio={1}>
                    <NextImage
                      src="/natural-light-portrait-setup-indoors.png"
                      alt="Natural Light Portraits"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </AspectRatio>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">Natural Light Portraits</h4>
                  <p className="text-sm text-muted-foreground">$6</p>
                </div>
              </div>
            </div>

            <Link href="/creator/malina-nicholson">
              <Button variant="outline" className="w-full bg-transparent">
                See all from this creator
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Access & Policy Notes */}
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Lifetime streaming access</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Refunds within 24h if you watched less than 20%</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Downloads are disabled to protect creators</span>
              </div>
            </div>

            <Separator className="my-4" />

            <p className="text-sm text-muted-foreground">
              Need help?{" "}
              <Link href="/support" className="text-primary hover:underline">
                Contact support
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
