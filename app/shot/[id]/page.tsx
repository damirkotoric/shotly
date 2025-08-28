import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ShotDetail } from "@/components/shot-detail"

const sampleShot = {
  id: "cinematic-broll-budget",
  title: "Cinematic B-Roll on a Budget (Handheld & Natural Light)",
  tagline: "Practical, repeatable techniques you can use on your next client shoot.",
  creator: {
    name: "Malina Nicholson",
    bio: "Expert video producer. Minimal rigs, maximal story.",
    avatar: "/malina-avatar.png",
  },
  duration: "27 min",
  compatibility: "Mirrorless / Phone-friendly",
  price: 10, // reduced from $12 to $10
  purchases: 524,
  thumbnail: "/cinematic-broll-tutorial-preview.png",
  previewDuration: "30-second preview",
  badge: "Stand-alone shot",
  files: [
    { name: "Cinematic B-Roll LUT", type: "lut" as const, size: "2.1 MB" },
    { name: "Shot List & Location Checklist", type: "pdf" as const, size: "1.8 MB" },
    { name: "Color Grading Presets", type: "preset" as const, size: "3.2 MB" },
    { name: "Gear List & Budget Alternatives", type: "pdf" as const, size: "950 KB" },
    { name: "Natural Light LUT Pack", type: "lut" as const, size: "4.7 MB" },
    { name: "Export Settings Cheatsheet", type: "pdf" as const, size: "1.2 MB" },
  ],
  description: `🎯 <strong>What you'll learn:</strong><br/>
• Plan b-roll sequences that tell a micro-story in 30–60 seconds<br/>
• Handheld stabilization techniques (4 contact points, micro-moves, parallax)<br/>
• Exposure triangle for natural light interiors (ETTR, zebras, false color)<br/>
• Focus strategies: manual pre-focus vs. AF-C with subject tracking<br/>
• Motion design in-camera: reveals, foreground wipes, lens whips (tasteful)<br/>
• Clean color from mixed lighting and quick, natural-looking grades<br/><br/>

📦 <strong>What's included:</strong><br/>
• HD/4K stream, lifetime access<br/>
• Closed captions (EN)<br/>
• Downloadable Shot List PDF + Location Checklist<br/>
• Project files: 3 ProRes/LUT demo clips + 1 LUT (.cube) + grade presets<br/>
• Gear list with budget alternatives<br/><br/>

❓ <strong>Frequently Asked Questions:</strong><br/>
<strong>Do I need a gimbal?</strong> No. This lesson focuses on handheld craft.<br/>
<strong>Phone okay?</strong> Yes—Log profile recommended; tips included for SDR.<br/>
<strong>Can I download the video?</strong> Streaming only; PDFs/LUTs are downloadable.<br/>
<strong>Where do tips go?</strong> 100% to the creator.`,
  chapters: [
    { time: "00:00", title: "Overview & example sequence" },
    { time: "01:25", title: "Gear & minimal rigging (cage optional)" },
    { time: "04:10", title: "Scouting & natural light mapping" },
    { time: "07:35", title: "Handheld technique: anchors, breath, micro-pans" },
    { time: "12:20", title: "Building a sequence (A-motif, cutaways, transitions)" },
    { time: "17:05", title: "Audio texture (foley on location)" },
    { time: "19:10", title: "Editing flow (rhythm, J/L cuts, speed ramps you won't hate)" },
    { time: "23:30", title: "Color: base correction → creative LUT (subtle)" },
    { time: "26:15", title: "Export settings & delivery cheatsheets" },
  ],
}

export default function ShotPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <ShotDetail shot={sampleShot} />

      <SiteFooter />
    </div>
  )
}
