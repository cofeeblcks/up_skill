import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Mi Perfil
          </h1>
          <p className="text-muted-foreground">
            Gestiona tu información personal y preferencias.
          </p>
        </div>
        <Button>Editar Perfil</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-border bg-card md:col-span-1">
          <CardHeader className="text-center pb-2">
            <Avatar className="w-24 h-24 mx-auto mb-4 border-2 border-primary/20">
              <AvatarImage src="" />
              <AvatarFallback className="text-2xl bg-primary/10 text-primary">CA</AvatarFallback>
            </Avatar>
            <CardTitle className="text-xl">Carlos Mendoza</CardTitle>
            <div className="text-sm text-muted-foreground mt-1">carlos.mendoza@empresa.com</div>
            <Badge className="mt-3 bg-blue-500/20 text-blue-400 hover:bg-blue-500/30">Empleado</Badge>
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-sm text-muted-foreground">Departamento</span>
              <span className="text-sm font-medium">Finanzas</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-sm text-muted-foreground">Posición</span>
              <span className="text-sm font-medium">Analista</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-sm text-muted-foreground">Fecha de Ingreso</span>
              <span className="text-sm font-medium">12 Mar 2023</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-card md:col-span-2">
          <CardHeader>
            <CardTitle>Resumen de Actividad</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-muted-foreground text-sm text-center py-10">
              Más detalles de actividad estarán disponibles pronto.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
