"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Upload, X, CheckCircle, Clock, FileVideo, ImageIcon, FileText } from "lucide-react"

interface UploadState {
  status: "idle" | "uploading" | "processing" | "ready"
  progress: number
}

export function UploadForm() {
  const [mainVideo, setMainVideo] = useState<UploadState>({ status: "idle", progress: 0 })
  const [previewVideo, setPreviewVideo] = useState<UploadState>({ status: "idle", progress: 0 })
  const [thumbnail, setThumbnail] = useState<UploadState>({ status: "idle", progress: 0 })
  const [attachedFiles, setAttachedFiles] = useState<File[]>([])
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [chapters, setChapters] = useState("")
  const [confirmRights, setConfirmRights] = useState(false)

  const handleFileUpload = (file: File, setState: React.Dispatch<React.SetStateAction<UploadState>>) => {
    setState({ status: "uploading", progress: 0 })

    // Simulate upload progress
    const interval = setInterval(() => {
      setState((prev) => {
        if (prev.progress >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setState({ status: "processing", progress: 100 })
            setTimeout(() => {
              setState({ status: "ready", progress: 100 })
            }, 2000)
          }, 500)
          return prev
        }
        return { ...prev, progress: prev.progress + 10 }
      })
    }, 200)
  }

  const handlePublish = () => {
    if (!confirmRights || mainVideo.status !== "ready") return

    // Simulate publish and redirect
    console.log("[v0] Publishing shot...")
    setTimeout(() => {
      window.location.href = "/shot/cinematic-broll"
    }, 1000)
  }

  const removeFile = (index: number) => {
    setAttachedFiles((files) => files.filter((_, i) => i !== index))
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "uploading":
        return <Clock className="w-4 h-4 text-blue-600" />
      case "processing":
        return <Clock className="w-4 h-4 text-orange-600" />
      case "ready":
        return <CheckCircle className="w-4 h-4 text-green-600" />
      default:
        return null
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "uploading":
        return "Uploading..."
      case "processing":
        return "Processing..."
      case "ready":
        return "Ready"
      default:
        return ""
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-12">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Upload a new Shot</h1>
        <p className="text-xl text-muted-foreground mb-2">
          Upload your tutorial and files. We'll handle pricing, protection, and publishing.
        </p>
        <p className="text-sm text-muted-foreground">All Shots are published immediately after upload.</p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <CardTitle className="mb-6">Upload Shot</CardTitle>
          <div className="space-y-12">
            {/* Main Video Upload */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <FileVideo className="w-5 h-5" />
                <h3 className="text-lg font-semibold">Upload your main video</h3>
              </div>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                {mainVideo.status === "idle" ? (
                  <div>
                    <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-lg mb-2">Drop your .mp4 or .mov here</p>
                    <p className="text-sm text-muted-foreground">
                      Max length: 60 min · Max size: 2 GB · H.264/H.265 recommended
                    </p>
                    <Button
                      className="mt-4"
                      onClick={() => {
                        const input = document.createElement("input")
                        input.type = "file"
                        input.accept = ".mp4,.mov"
                        input.onchange = (e) => {
                          const file = (e.target as HTMLInputElement).files?.[0]
                          if (file) handleFileUpload(file, setMainVideo)
                        }
                        input.click()
                      }}
                    >
                      Choose File
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-3">
                    {getStatusIcon(mainVideo.status)}
                    <span>{getStatusText(mainVideo.status)}</span>
                    {mainVideo.status === "uploading" && (
                      <span className="text-sm text-muted-foreground">{mainVideo.progress}%</span>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Preview Video Upload */}
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Upload a preview video</h3>
                <p className="text-sm text-muted-foreground">
                  This short preview (15–60 seconds) will be shown on the tutorial page before purchase.
                </p>
              </div>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                {previewVideo.status === "idle" ? (
                  <div>
                    <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="mb-2">Drop your preview file here</p>
                    <p className="text-xs text-muted-foreground">.mp4 or .mov · Vertical or horizontal accepted</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-3 bg-transparent"
                      onClick={() => {
                        const input = document.createElement("input")
                        input.type = "file"
                        input.accept = ".mp4,.mov"
                        input.onchange = (e) => {
                          const file = (e.target as HTMLInputElement).files?.[0]
                          if (file) handleFileUpload(file, setPreviewVideo)
                        }
                        input.click()
                      }}
                    >
                      Choose File
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-3">
                    {getStatusIcon(previewVideo.status)}
                    <span>{getStatusText(previewVideo.status)}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Thumbnail */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-5 h-5" />
                <h3 className="text-lg font-semibold">Thumbnail (9:16)</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Upload a cover image for your Shot. This is how it will appear in the catalog.
              </p>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                {thumbnail.status === "idle" ? (
                  <div>
                    <ImageIcon className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-xs text-muted-foreground mb-3">9:16 ratio · JPG or PNG · Min 1080×1920</p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const input = document.createElement("input")
                        input.type = "file"
                        input.accept = ".jpg,.jpeg,.png"
                        input.onchange = (e) => {
                          const file = (e.target as HTMLInputElement).files?.[0]
                          if (file) handleFileUpload(file, setThumbnail)
                        }
                        input.click()
                      }}
                    >
                      Upload Image
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-3">
                    {getStatusIcon(thumbnail.status)}
                    <span>{getStatusText(thumbnail.status)}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Title & Description */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Title & Description</h3>
              <div>
                <label className="text-sm font-medium mb-2 block">Title (required)</label>
                <Input
                  placeholder="Give your Shot a clear title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Description (optional)</label>
                <Textarea
                  placeholder="Add a short description to help buyers know what it's about"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                />
              </div>
            </div>

            {/* Chapters */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Chapters (optional)</h3>
              <Textarea
                placeholder={`Paste or type timecodes + titles. Example:
00:00 Introduction
01:15 Lighting setup
05:30 Handheld technique`}
                value={chapters}
                onChange={(e) => setChapters(e.target.value)}
                rows={4}
              />
              <p className="text-xs text-muted-foreground">We'll parse this into clickable chapters for viewers.</p>
            </div>

            {/* Files */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                <h3 className="text-lg font-semibold">Attach files (optional)</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Add PDFs, presets, LUTs, project files, or checklists. Buyers can download these securely after
                purchase.
              </p>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center mb-4">
                <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <p className="mb-2">Drop files here or click to browse</p>
                <p className="text-xs text-muted-foreground mb-3">PDF, ZIP, CUBE, XML, PNG, etc.</p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const input = document.createElement("input")
                    input.type = "file"
                    input.multiple = true
                    input.onchange = (e) => {
                      const files = Array.from((e.target as HTMLInputElement).files || [])
                      setAttachedFiles((prev) => [...prev, ...files])
                    }
                    input.click()
                  }}
                >
                  Choose Files
                </Button>
              </div>

              {attachedFiles.length > 0 && (
                <div className="space-y-2">
                  {attachedFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-muted rounded">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        <span className="text-sm">{file.name}</span>
                        <span className="text-xs text-muted-foreground">
                          ({(file.size / 1024 / 1024).toFixed(1)} MB)
                        </span>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => removeFile(index)}>
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Publish */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Ready to go live</h3>
              <p className="text-sm text-muted-foreground">
                By clicking Publish, your Shot will be immediately visible and purchasable.
              </p>
              <p className="text-xs text-muted-foreground">Price is automatically set based on video length.</p>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="confirm-rights"
                  checked={confirmRights}
                  onCheckedChange={(checked) => setConfirmRights(checked as boolean)}
                />
                <label
                  htmlFor="confirm-rights"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the terms of use, and confirm this content is my own and I have rights to sell it.
                </label>
              </div>

              <Button
                size="lg"
                className="w-full"
                disabled={!confirmRights || mainVideo.status !== "ready"}
                onClick={handlePublish}
              >
                Publish Shot →
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
