import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import { BookOpen, Clock, Play, CheckCircle2 } from "lucide-react"

interface TrainingCardProps {
  title: string
  category: string
  duration: number
  progress: number
  status: "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED"
  dueDate?: string
}

const statusConfig = {
  NOT_STARTED: {
    label: "Pendiente",
    className: "bg-pending/20 text-pending border-pending/30",
    icon: Clock,
  },
  IN_PROGRESS: {
    label: "En Curso",
    className: "bg-warning/20 text-warning border-warning/30",
    icon: Play,
  },
  COMPLETED: {
    label: "Completado",
    className: "bg-success/20 text-success border-success/30",
    icon: CheckCircle2,
  },
}

const categoryColors: Record<string, string> = {
  Cumplimiento: "bg-blue-500/20 text-blue-400",
  Liderazgo: "bg-purple-500/20 text-purple-400",
  Técnico: "bg-emerald-500/20 text-emerald-400",
  Seguridad: "bg-orange-500/20 text-orange-400",
  "Habilidades Blandas": "bg-pink-500/20 text-pink-400",
}

export function TrainingCard({
  title,
  category,
  duration,
  progress,
  status,
  dueDate,
}: TrainingCardProps) {
  const config = statusConfig[status]
  const StatusIcon = config.icon

  return (
    <Card className="group relative overflow-hidden border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 transition-opacity group-hover:opacity-100" />
      
      <CardContent className="p-5">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <Badge
            variant="outline"
            className={cn("border", config.className)}
          >
            <StatusIcon className="mr-1 h-3 w-3" />
            {config.label}
          </Badge>
        </div>

        <h3 className="mb-2 line-clamp-2 text-base font-semibold text-foreground">
          {title}
        </h3>

        <div className="mb-4 flex items-center gap-3">
          <Badge
            variant="secondary"
            className={cn(
              "text-xs",
              categoryColors[category] || "bg-muted text-muted-foreground"
            )}
          >
            {category}
          </Badge>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            {duration} min
          </span>
        </div>

        {status !== "NOT_STARTED" && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Progreso</span>
              <span className="font-medium text-foreground">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}

        {dueDate && (
          <p className="mt-3 text-xs text-muted-foreground">
            Fecha límite: <span className="text-foreground">{dueDate}</span>
          </p>
        )}
      </CardContent>

      <CardFooter className="border-t border-border bg-secondary/30 p-4">
        <Button
          className="w-full"
          variant={status === "COMPLETED" ? "secondary" : "default"}
        >
          {status === "NOT_STARTED"
            ? "Comenzar"
            : status === "IN_PROGRESS"
              ? "Continuar"
              : "Ver Certificado"}
        </Button>
      </CardFooter>
    </Card>
  )
}
