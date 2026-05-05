import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import {
  Zap,
  Flame,
  Target,
  Star,
  Award,
  Rocket,
  type LucideIcon,
} from "lucide-react"

interface BadgeItem {
  id: string
  type: string
  name: string
  description: string
  earnedAt?: string
  isEarned: boolean
}

interface BadgeGridProps {
  badges: BadgeItem[]
  title?: string
}

const badgeIcons: Record<string, LucideIcon> = {
  FIRST_TRAINING: Zap,
  STREAK_5: Flame,
  STREAK_10: Flame,
  TOP_SCORER: Target,
  PERFECT_SCORE: Star,
  EARLY_BIRD: Rocket,
  TEAM_PLAYER: Award,
}

const badgeColors: Record<string, { bg: string; icon: string; ring: string }> = {
  FIRST_TRAINING: {
    bg: "bg-emerald-500/20",
    icon: "text-emerald-400",
    ring: "ring-emerald-500/30",
  },
  STREAK_5: {
    bg: "bg-orange-500/20",
    icon: "text-orange-400",
    ring: "ring-orange-500/30",
  },
  STREAK_10: {
    bg: "bg-red-500/20",
    icon: "text-red-400",
    ring: "ring-red-500/30",
  },
  TOP_SCORER: {
    bg: "bg-yellow-500/20",
    icon: "text-yellow-400",
    ring: "ring-yellow-500/30",
  },
  PERFECT_SCORE: {
    bg: "bg-purple-500/20",
    icon: "text-purple-400",
    ring: "ring-purple-500/30",
  },
  EARLY_BIRD: {
    bg: "bg-blue-500/20",
    icon: "text-blue-400",
    ring: "ring-blue-500/30",
  },
  TEAM_PLAYER: {
    bg: "bg-pink-500/20",
    icon: "text-pink-400",
    ring: "ring-pink-500/30",
  },
}

export function BadgeGrid({ badges, title = "Logros" }: BadgeGridProps) {
  return (
    <Card className="border-border bg-card">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg font-semibold">
          <Award className="h-5 w-5 text-purple-400" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <TooltipProvider>
          <div className="flex flex-wrap gap-3">
            {badges.map((badge) => {
              const Icon = badgeIcons[badge.type] || Star
              const colors = badgeColors[badge.type] || badgeColors.FIRST_TRAINING

              return (
                <Tooltip key={badge.id}>
                  <TooltipTrigger asChild>
                    <button
                      className={cn(
                        "flex h-14 w-14 items-center justify-center rounded-full ring-2 transition-all",
                        badge.isEarned
                          ? cn(colors.bg, colors.ring, "hover:scale-110")
                          : "bg-muted/30 ring-muted/20 opacity-40 grayscale"
                      )}
                    >
                      <Icon
                        className={cn(
                          "h-7 w-7",
                          badge.isEarned ? colors.icon : "text-muted-foreground"
                        )}
                      />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="max-w-xs">
                    <p className="font-semibold">{badge.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {badge.description}
                    </p>
                    {badge.earnedAt && (
                      <p className="mt-1 text-xs text-muted-foreground">
                        Obtenido: {badge.earnedAt}
                      </p>
                    )}
                  </TooltipContent>
                </Tooltip>
              )
            })}
          </div>
        </TooltipProvider>
      </CardContent>
    </Card>
  )
}
