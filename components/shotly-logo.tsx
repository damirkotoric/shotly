import { Play } from "lucide-react"

interface ShotlyLogoProps {
  variant?: "full" | "icon" | "wordmark"
  size?: "sm" | "md" | "lg"
  className?: string
  color?: "light" | "dark"
}

export function ShotlyLogo({ variant = "full", size = "md", className = "", color = "light" }: ShotlyLogoProps) {
  const sizeClasses = {
    sm: "h-6",
    md: "h-8",
    lg: "h-12",
  }

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-3xl",
  }

  const colorClasses = {
    light: {
      text: "text-foreground",
      iconBg: "bg-background",
      iconText: "text-primary",
    },
    dark: {
      text: "text-white",
      iconBg: "bg-white",
      iconText: "text-primary",
    },
  }

  if (variant === "icon") {
    return (
      <div className={`relative ${sizeClasses[size]} aspect-square ${className}`}>
        {/* Camera aperture-inspired logo */}
        <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary to-secondary p-1">
          <div className={`w-full h-full rounded-full ${colorClasses[color].iconBg} flex items-center justify-center`}>
            <Play className={`w-1/2 h-1/2 ${colorClasses[color].iconText} fill-current ml-0.5`} />
          </div>
        </div>
      </div>
    )
  }

  if (variant === "wordmark") {
    return <div className={`font-bold ${textSizeClasses[size]} ${colorClasses[color].text} ${className}`}>Shotly</div>
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`relative ${sizeClasses[size]} aspect-square`}>
        <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary to-secondary p-1">
          <div className={`w-full h-full rounded-full ${colorClasses[color].iconBg} flex items-center justify-center`}>
            <Play className={`w-1/2 h-1/2 ${colorClasses[color].iconText} fill-current ml-0.5`} />
          </div>
        </div>
      </div>
      <span className={`font-bold ${textSizeClasses[size]} ${colorClasses[color].text}`}>Shotly</span>
    </div>
  )
}
