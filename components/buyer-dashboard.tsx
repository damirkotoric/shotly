"use client"

import { ShotLibraryCard } from "./shot-library-card"

interface PurchasedShot {
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

const purchasedShots: PurchasedShot[] = [
  {
    id: "1",
    title: "Cinematic B-Roll That Tells a Story",
    creator: "Malina Nicholson",
    creatorId: "malina-nicholson",
    duration: "28 min",
    thumbnail: "/cinematic-broll-tutorial-preview.png",
    purchaseDate: "2025-01-15",
    files: [
      { name: "Shot List Template", type: "PDF", size: "210 KB", downloadUrl: "#" },
      { name: "Cinematic LUT Pack", type: "CUBE", size: "3.2 MB", downloadUrl: "#" },
      { name: "Camera Settings Guide", type: "PDF", size: "180 KB", downloadUrl: "#" },
    ],
  },
  {
    id: "2",
    title: "Color Grading with LUTs Made Simple",
    creator: "Malina Nicholson",
    creatorId: "malina-nicholson",
    duration: "22 min",
    thumbnail: "/color-grading-luts-interface-tutorial.png",
    purchaseDate: "2025-01-20",
    files: [],
  },
  {
    id: "3",
    title: "Natural Light Portraits Indoors",
    creator: "Leo Ortega",
    creatorId: "leo-ortega",
    duration: "18 min",
    thumbnail: "/natural-light-portrait-setup-indoors.png",
    purchaseDate: "2025-01-10",
    files: [
      { name: "Lighting Setup Diagrams", type: "PDF", size: "450 KB", downloadUrl: "#" },
      { name: "Portrait Presets", type: "XMP", size: "120 KB", downloadUrl: "#" },
    ],
  },
]

export function BuyerDashboard() {
  const totalShots = purchasedShots.length
  const totalHours = Math.floor(
    purchasedShots.reduce((acc, shot) => {
      const [minutes] = shot.duration.split(" ")
      return acc + Number.parseInt(minutes)
    }, 0) / 60,
  )
  const creatorsFollowed = [...new Set(purchasedShots.map((t) => t.creator))].length

  return (
    <div className="max-w-4xl mx-auto p-12">
      {/* Hero / Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Your Library</h1>
        <p className="text-xl text-muted-foreground mb-6">Buy once. Watch forever. All your shots live here.</p>

        {/* Quick Stats */}
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <span>{totalShots} shots owned</span>
          <span>•</span>
          <span>{totalHours}h of watching</span>
        </div>
      </div>

      {/* Purchased Shots Grid */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Shots you've purchased</h2>
        <div className="grid gap-8">
          {purchasedShots.map((shot) => (
            <ShotLibraryCard key={shot.id} shot={shot} />
          ))}
        </div>
      </div>
    </div>
  )
}
