"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, Palette, Settings } from "lucide-react"

interface DownloadsSectionProps {
  shots: Array<{
    id: string
    title: string
    files: Array<{
      name: string
      type: string
      size: string
      downloadUrl: string
    }>
  }>
}

export function DownloadsSection({ shots }: DownloadsSectionProps) {
  const getFileIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "pdf":
        return <FileText className="w-5 h-5 text-red-600" />
      case "cube":
        return <Palette className="w-5 h-5 text-purple-600" />
      case "xmp":
        return <Settings className="w-5 h-5 text-blue-600" />
      default:
        return <Download className="w-5 h-5 text-gray-600" />
    }
  }

  const handleDownload = (file: { name: string; downloadUrl: string }) => {
    // Handle file download
    console.log(`[v0] Downloading ${file.name}`)
  }

  const allFiles = shots.flatMap((shot) =>
    shot.files.map((file) => ({
      ...file,
      shotTitle: shot.title,
    })),
  )

  if (allFiles.length === 0) {
    return null
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">All Downloads</h2>
      <div className="grid gap-4">
        {allFiles.map((file, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                {getFileIcon(file.type)}
                <div className="flex-1">
                  <h3 className="font-medium">{file.name}</h3>
                  <p className="text-sm text-muted-foreground">From: {file.shotTitle}</p>
                  <p className="text-sm text-muted-foreground">
                    {file.type.toUpperCase()} • {file.size}
                  </p>
                </div>
                <Button onClick={() => handleDownload(file)} variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
