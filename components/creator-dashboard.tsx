"use client"

import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ShotsTable } from "@/components/shots-table"
import {
  DollarSign,
  TrendingUp,
  ShoppingBag,
  Heart,
  ExternalLink,
  BookOpen,
  Shield,
  Target,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

interface Shot {
  id: string
  title: string
  thumbnail: string
  price: number
  sales: number
  revenue: number
  tips: number
}

interface Tip {
  id: string
  from: string
  amount: number
  message?: string
  date: string
}

const revenueData = [
  { day: "Aug 12", revenue: 24 },
  { day: "Aug 13", revenue: 36 },
  { day: "Aug 14", revenue: 48 },
  { day: "Aug 15", revenue: 72 },
  { day: "Aug 16", revenue: 60 },
  { day: "Aug 17", revenue: 84 },
  { day: "Aug 18", revenue: 96 },
  { day: "Aug 19", revenue: 108 },
  { day: "Aug 20", revenue: 132 },
  { day: "Aug 21", revenue: 120 },
  { day: "Aug 22", revenue: 144 },
  { day: "Aug 23", revenue: 156 },
  { day: "Aug 24", revenue: 168 },
  { day: "Aug 25", revenue: 180 },
]

const shotSalesData = [
  { name: "Cinematic B-Roll", value: 45, color: "#8B5CF6" },
  { name: "Color Grading", value: 30, color: "#06B6D4" },
  { name: "Natural Light", value: 15, color: "#10B981" },
  { name: "Audio Sync", value: 10, color: "#F59E0B" },
]

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
]

const recentTips: Tip[] = [
  {
    id: "1",
    from: "Jordan R.",
    amount: 10,
    message: "Loved the color grading section!",
    date: "2 hours ago",
  },
  {
    id: "2",
    from: "Aisha M.",
    amount: 5,
    date: "5 hours ago",
  },
  {
    id: "3",
    from: "Carlos D.",
    amount: 15,
    message: "Your B-roll tips changed my workflow completely!",
    date: "1 day ago",
  },
  {
    id: "4",
    from: "Emma K.",
    amount: 8,
    date: "2 days ago",
  },
]

const resources = [
  {
    title: "How to film a sellable single tutorial",
    description: "Complete guide to creating tutorials that convert",
    icon: Target,
    href: "#",
  },
  {
    title: "Best pricing strategies",
    description: "Case studies from top-performing creators",
    icon: DollarSign,
    href: "#",
  },
  {
    title: "Protecting your masters",
    description: "Understanding Shotly DRM and content security",
    icon: Shield,
    href: "#",
  },
]

export function CreatorDashboard() {
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

  const handleNewShot = () => {
    // Navigate to create new shot page
  }

  return (
    <div className="max-w-7xl mx-auto p-12">
      {/* Hero / Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, Malina 👋</h1>
            <p className="text-muted-foreground">Here's how your shots are performing this week.</p>
          </div>
          <Button onClick={handleNewShot} className="flex-shrink-0">
            + New Shot
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-8 h-8 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Purchases this week</p>
                  <p className="text-2xl font-bold">34</p>
                  <p className="text-sm text-green-600 flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +12%
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <DollarSign className="w-8 h-8 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Sales this week</p>
                  <p className="text-2xl font-bold">$408</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Heart className="w-8 h-8 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Tips received</p>
                  <p className="text-2xl font-bold">5</p>
                  <p className="text-sm text-muted-foreground">$72</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Shots published</p>
                  <p className="text-2xl font-bold">5</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Sales & Revenue Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <CardTitle className="mb-4">Revenue by Day (Last 14 Days)</CardTitle>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip formatter={(value) => [`$${value}`, "Revenue"]} />
                <Line type="monotone" dataKey="revenue" stroke="#8B5CF6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <CardTitle className="mb-4">Sales by Shot</CardTitle>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={shotSalesData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {shotSalesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              89% to you, 11% to Shotly. Tips are yours 100%.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Your Shots */}
      <div className="mb-8">
        <ShotsTable
          title="Your Shots"
          shots={shots.slice(0, 3)}
          onView={handleViewShot}
          onEdit={handleEditShot}
          onUnpublish={handleUnpublishShot}
          headerAction={
            <Button variant="ghost" asChild>
              <Link href="/my-shots" onClick={() => window.scrollTo(0, 0)}>
                View all &gt;
              </Link>
            </Button>
          }
        />
      </div>

      {/* Tips & Support and Creator Resources */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Tips & Support */}
        <Card>
          <CardContent className="pt-6">
            <CardTitle className="mb-4">Tips & Support</CardTitle>
            <div className="space-y-4">
              {recentTips.map((tip) => (
                <div key={tip.id} className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="font-medium">
                      {tip.from} tipped you ${tip.amount}
                    </p>
                    {tip.message && <p className="text-sm text-muted-foreground mt-1">"{tip.message}"</p>}
                    <p className="text-xs text-muted-foreground mt-1">{tip.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <Separator className="my-4" />
            <Button variant="outline" className="w-full bg-transparent">
              <ExternalLink className="w-4 h-4 mr-2" />
              View all tips
            </Button>
          </CardContent>
        </Card>

        {/* Creator Resources */}
        <Card>
          <CardContent className="pt-6">
            <CardTitle className="mb-4">Creator Resources</CardTitle>
            <div className="space-y-4">
              {resources.map((resource, index) => (
                <Link key={index} href={resource.href} className="block">
                  <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    {resource.icon && <resource.icon className="w-5 h-5 text-primary mt-0.5" />}
                    <div>
                      <h4 className="font-medium">{resource.title}</h4>
                      <p className="text-sm text-muted-foreground">{resource.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Payouts Section */}
      <Card>
        <CardContent className="pt-6">
          <CardTitle className="mb-4">Payouts</CardTitle>
          <div className="flex items-center gap-2 mb-4 p-3 bg-green-50 rounded-lg border border-green-200">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-green-800 font-medium">Connected to Stripe</span>
            <span className="text-green-700">· Next payout: $642 · Aug 30, 2025</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold">$4,438</p>
              <p className="text-sm text-muted-foreground">Total earned to date</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">$642</p>
              <p className="text-sm text-muted-foreground">Upcoming payout</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">$570</p>
              <p className="text-sm text-muted-foreground">Lifetime tips total</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
