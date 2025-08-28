"use client"

import { Button } from "@/components/ui/button"
import { ShotsTable } from "@/components/shots-table"
import { Plus } from "lucide-react"
import Link from "next/link"

interface Shot {
  id: string
  title: string
  thumbnail: string
  price: number
  sales: number
  revenue: number
  tips: number
}

const shots: Shot[] = [
  {
    id: "1",
    title: "Cinematic B-Roll That Tells a Story",
    thumbnail: "/cinematic-broll-tutorial-preview.png",
    price: 10,
    sales: 150,
    revenue: 1500,
    tips: 250,
  },
  {
    id: "2",
    title: "Color Grading Like a Pro",
    thumbnail: "/color-grading-luts-interface-tutorial.png",
    price: 10,
    sales: 89,
    revenue: 890,
    tips: 180,
  },
  {
    id: "3",
    title: "Natural Light Portrait Setup",
    thumbnail: "/natural-light-portrait-setup-indoors.png",
    price: 10,
    sales: 67,
    revenue: 670,
    tips: 95,
  },
  {
    id: "4",
    title: "Audio Sync Techniques",
    thumbnail: "/audio-editing-interface-with-waveforms.png",
    price: 10,
    sales: 34,
    revenue: 340,
    tips: 45,
  },
  {
    id: "5",
    title: "Drone Cinematography Basics",
    thumbnail: "/drone-flying-over-landscape-for-cinematography.png",
    price: 10,
    sales: 23,
    revenue: 230,
    tips: 30,
  },
]

export function MyShotsPage() {
  const handleViewShot = (id: string) => {
    window.scrollTo(0, 0)
    // Navigate to shot
  }

  const handleEditShot = (id: string) => {
    // Navigate to edit page
  }

  const handleUnpublishShot = (id: string) => {
    // Handle unpublish
  }

  return (
    <div className="max-w-4xl mx-auto p-12">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">My Shots</h1>
          <p className="text-muted-foreground">Manage all your published shots</p>
        </div>
        <Button asChild>
          <Link href="/upload" onClick={() => window.scrollTo(0, 0)}>
            <Plus className="w-4 h-4 mr-2" />
            New Shot
          </Link>
        </Button>
      </div>

      <ShotsTable shots={shots} onView={handleViewShot} onEdit={handleEditShot} onUnpublish={handleUnpublishShot} />
    </div>
  )
}
