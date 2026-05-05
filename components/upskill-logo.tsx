import { cn } from "@/lib/utils"

interface UpSkillLogoProps {
  className?: string
  showText?: boolean
}

export function UpSkillLogo({ className, showText = true }: UpSkillLogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/25">
        <span className="text-xl font-bold text-primary-foreground">U</span>
        <div className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-success" />
      </div>
      {showText && (
        <span className="text-xl font-bold tracking-tight text-foreground">
          UpSkill
        </span>
      )}
    </div>
  )
}
