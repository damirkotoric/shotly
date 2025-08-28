"use client"

import { VideoCard } from "./video-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Filter, Grid, List } from "lucide-react"
import { useRouter } from "next/navigation"

const sampleVideos = [
  {
    id: 9,
    title: "Cinematic B-Roll That Tells a Story",
    creator: "Malina Nicholson",
    price: 7, // Updated price to correlate with 7 min duration
    duration: "7:00", // Reduced from 42:30 to 7 minutes max
    thumbnail: "/cinematic-broll-tutorial-preview.png",
    description:
      "Master advanced B-roll techniques that elevate your storytelling with cinematic movement, lighting, and composition.",
    category: "Video Production",
    purchases: 524,
  },
  {
    id: 1,
    title: "Growing Perfect Tomatoes: From Seed to Harvest",
    creator: "Maria Gonzalez",
    price: 4, // Updated price to correlate with 4 min duration
    duration: "4:15", // Reduced from 18:45 to under 7 minutes
    thumbnail: "/tomato-plants-growing-in-garden.png",
    description:
      "Learn the secrets to growing juicy, flavorful tomatoes in any climate with proper soil prep and care techniques.",
    category: "Gardening",
    purchases: 342,
  },
  {
    id: 2,
    title: "Fix a Leaky Faucet in 10 Minutes",
    creator: "Bob Martinez",
    price: 3, // Updated price to correlate with 3 min duration
    duration: "3:30", // Reduced from 12:30 to under 7 minutes
    thumbnail: "/plumber-fixing-kitchen-faucet-with-tools.png",
    description: "Step-by-step guide to diagnosing and fixing common faucet leaks without calling a plumber.",
    category: "Home Repair",
    purchases: 189,
  },
  {
    id: 3,
    title: "Cinematic B-Roll: Elevate Your Videos",
    creator: "Jake Thompson",
    price: 6, // Updated price to correlate with 6 min duration
    duration: "6:20", // Reduced from 28:20 to under 7 minutes
    thumbnail: "/filmmaker-shooting-cinematic-b-roll-with-camera.png",
    description:
      "Master the art of capturing compelling B-roll footage that transforms ordinary videos into cinematic stories.",
    category: "Video Production",
    purchases: 267,
  },
  {
    id: 4,
    title: "Overcome Procrastination: The 2-Minute Rule",
    creator: "Dr. Sarah Kim",
    price: 5, // Updated price to correlate with 5 min duration
    duration: "5:15", // Reduced from 22:15 to under 7 minutes
    thumbnail: "/person-organizing-desk-and-planning-tasks-producti.png",
    description: "Break the procrastination cycle with proven psychological techniques and practical daily habits.",
    category: "Self-Help",
    purchases: 428,
  },
  {
    id: 5,
    title: "Sourdough Starter: Never Buy Bread Again",
    creator: "Chef Antoine Dubois",
    price: 7, // Updated price to correlate with 7 min duration
    duration: "7:00", // Reduced from 31:40 to 7 minutes max
    thumbnail: "/hands-kneading-sourdough-bread-dough-in-kitchen.png",
    description: "Create and maintain a healthy sourdough starter, plus master three essential bread recipes.",
    category: "Cooking",
    purchases: 156,
  },
  {
    id: 6,
    title: "Watercolor Landscapes for Beginners",
    creator: "Emma Chen",
    price: 6, // Updated price to correlate with 6 min duration
    duration: "6:50", // Reduced from 35:50 to under 7 minutes
    thumbnail: "/watercolor-painting-of-mountain-landscape-on-easel.png",
    description:
      "Paint stunning watercolor landscapes with basic techniques for color mixing, wet-on-wet, and composition.",
    category: "Art",
    purchases: 203,
  },
  {
    id: 7,
    title: "Small Space Organization Hacks",
    creator: "Jennifer Walsh",
    price: 4, // Updated price to correlate with 4 min duration
    duration: "4:25", // Reduced from 19:25 to under 7 minutes
    thumbnail: "/organized-small-apartment-with-clever-storage-solu.png",
    description:
      "Transform cramped spaces into organized, functional areas with clever storage solutions and decluttering tips.",
    category: "Organization",
    purchases: 312,
  },
  {
    id: 8,
    title: "Dog Training: Stop Excessive Barking",
    creator: "Mike Rodriguez",
    price: 5, // Updated price to correlate with 5 min duration
    duration: "5:10", // Reduced from 24:10 to under 7 minutes
    thumbnail: "/dog-trainer-working-with-golden-retriever-in-backy.png",
    description: "Effective, humane techniques to reduce excessive barking and improve your dog's behavior.",
    category: "Pet Care",
    purchases: 178,
  },
]

const categories = [
  "All",
  "Gardening",
  "Home Repair",
  "Video Production",
  "Self-Help",
  "Cooking",
  "Art",
  "Organization",
  "Pet Care",
]

export function VideoStorefront() {
  const router = useRouter()

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Learn from the best creators</h1>
        <p className="text-muted-foreground text-lg">
          Buy individual shots. No subscriptions. Support creators directly.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input type="text" placeholder="Search shots..." className="pl-10" />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Grid className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm">
            <List className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={category === "All" ? "default" : "outline"}
            className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {sampleVideos.map((video) => (
          <VideoCard
            key={video.id}
            title={video.title}
            creator={video.creator}
            price={video.price}
            duration={video.duration}
            thumbnail={video.thumbnail}
            description={video.description}
            category={video.category}
            purchases={video.purchases}
            onBuy={() => {
              window.scrollTo(0, 0)
              router.push(`/shot/${video.id}`)
            }}
            onPreview={() => console.log("Preview:", video.title)}
          />
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" size="lg">
          Load More Shots
        </Button>
      </div>
    </div>
  )
}
