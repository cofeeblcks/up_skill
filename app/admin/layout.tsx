import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { DashboardTopbar } from "@/components/dashboard-topbar"

// Mock admin user data - will be replaced with actual auth data
const mockAdminUser = {
  name: "María González",
  email: "maria.gonzalez@empresa.com",
  avatar: undefined,
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar role="ADMIN_HR" />
      <div className="pl-64">
        <DashboardTopbar user={mockAdminUser} title="Gestión de Plataforma" showPoints={false} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
