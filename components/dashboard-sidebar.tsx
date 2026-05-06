"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { UpSkillLogo } from "@/components/upskill-logo"
import {
  LayoutDashboard,
  BookOpen,
  Trophy,
  User,
  Users,
  BarChart3,
  Settings,
  LogOut,
  Loader2,
} from "lucide-react"

const employeeNavItems = [
  { href: "/dashboard", label: "Inicio", icon: LayoutDashboard },
  { href: "/dashboard/trainings", label: "Mis Capacitaciones", icon: BookOpen },
  { href: "/dashboard/achievements", label: "Logros", icon: Trophy },
  { href: "/dashboard/profile", label: "Perfil", icon: User },
]

const supervisorNavItems = [
  { href: "/supervisor", label: "Mi Equipo", icon: Users },
  { href: "/supervisor/reports", label: "Reportes", icon: BarChart3 },
]

const adminNavItems = [
  { href: "/admin", label: "Panel", icon: LayoutDashboard },
  { href: "/admin/trainings", label: "Capacitaciones", icon: BookOpen },
  { href: "/admin/employees", label: "Empleados", icon: Users },
  { href: "/admin/analytics", label: "Analíticas", icon: BarChart3 },
  { href: "/admin/settings", label: "Configuración", icon: Settings },
]

interface DashboardSidebarProps {
  role?: "EMPLOYEE" | "SUPERVISOR" | "ADMIN_HR"
}

export function DashboardSidebar({ role = "EMPLOYEE" }: DashboardSidebarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [isSigningOut, setIsSigningOut] = useState(false)

  const handleSignOut = async () => {
    setIsSigningOut(true)
    // Simulate sign-out (replace with real auth signout)
    await new Promise((res) => setTimeout(res, 600))
    router.push("/")
  }

  const navItems =
    role === "ADMIN_HR"
      ? adminNavItems
      : role === "SUPERVISOR"
        ? [...employeeNavItems, ...supervisorNavItems]
        : employeeNavItems

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-border bg-secondary">
      <div className="flex h-16 items-center gap-2 border-b border-border px-6">
        <UpSkillLogo />
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
        {navItems.map((item) => {
          // Exact match for root dashboard routes, startsWith for nested routes
          const isActive =
            item.href.split("/").length > 2
              ? pathname === item.href || pathname.startsWith(item.href + "/")
              : pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm shadow-primary/30"
                  : "text-muted-foreground hover:bg-card hover:text-foreground"
              )}
            >
              <item.icon className={cn("h-5 w-5 transition-transform duration-200", isActive && "scale-110")} />
              {item.label}
              {isActive && (
                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary-foreground/70" />
              )}
            </Link>
          )
        })}
      </nav>

      <div className="border-t border-border p-3 space-y-1">
        <button
          onClick={handleSignOut}
          disabled={isSigningOut}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 text-muted-foreground hover:bg-destructive/10 hover:text-destructive disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSigningOut ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <LogOut className="h-5 w-5" />
          )}
          {isSigningOut ? "Cerrando sesión..." : "Cerrar Sesión"}
        </button>
      </div>
    </aside>
  )
}
