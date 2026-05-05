import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { DashboardTopbar } from "@/components/dashboard-topbar"

// Mock user data - will be replaced with actual auth data
const mockUser = {
  name: "Carlos Mendoza",
  email: "carlos.mendoza@empresa.com",
  avatar: undefined,
  points: 2450,
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar role="EMPLOYEE" />
      <div className="pl-64">
        <DashboardTopbar user={mockUser} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
