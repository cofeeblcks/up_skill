import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { DashboardTopbar } from "@/components/dashboard-topbar"

// Mock supervisor user data
const mockSupervisorUser = {
  name: "Roberto Díaz",
  email: "roberto.diaz@empresa.com",
  avatar: undefined,
  points: 1850,
}

export default function SupervisorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar role="SUPERVISOR" />
      <div className="pl-64">
        <DashboardTopbar user={mockSupervisorUser} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
