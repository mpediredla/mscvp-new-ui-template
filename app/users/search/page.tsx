"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  MoreHorizontal,
  Edit,
  Trash2,
  Power,
  PowerOff,
  Eye,
  Shield,
  Clock,
  Mail,
  Phone,
  UserCheck,
  Filter,
  Download,
  Check,
} from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Checkbox } from "@/components/ui/checkbox"
import React from "react"
import path from "path"

const usersData = [
  {
    id: "1",
    firstName: "John",
    lastName: "Anderson",
    email: "john.anderson@company.com",
    phone: "+1 (555) 123-4567",
    role: "System Administrator",
    department: "IT Department",
    status: "Active",
    lastLogin: "2024-01-15 14:30:22",
    loginCount: 1247,
    createdDate: "2023-03-15",
    mfaEnabled: true,
    partnerAccess: ["Walmart", "Target", "Amazon", "Costco", "Home Depot"],
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "2",
    firstName: "Sarah",
    lastName: "Wilson",
    email: "sarah.wilson@company.com",
    phone: "+1 (555) 234-5678",
    role: "EDI Analyst",
    department: "Operations",
    status: "Active",
    lastLogin: "2024-01-15 13:45:12",
    loginCount: 892,
    createdDate: "2023-05-20",
    mfaEnabled: true,
    partnerAccess: ["Walmart", "Target"],
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "3",
    firstName: "Mike",
    lastName: "Johnson",
    email: "mike.johnson@company.com",
    phone: "+1 (555) 345-6789",
    role: "Operator",
    department: "Operations",
    status: "Active",
    lastLogin: "2024-01-15 12:20:45",
    loginCount: 567,
    createdDate: "2023-07-10",
    mfaEnabled: false,
    partnerAccess: ["Amazon", "Costco"],
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "4",
    firstName: "Lisa",
    lastName: "Chen",
    email: "lisa.chen@company.com",
    phone: "+1 (555) 456-7890",
    role: "EDI Analyst",
    department: "Finance",
    status: "Inactive",
    lastLogin: "2024-01-10 16:15:30",
    loginCount: 234,
    createdDate: "2023-09-05",
    mfaEnabled: true,
    partnerAccess: ["Home Depot"],
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "5",
    firstName: "David",
    lastName: "Brown",
    email: "david.brown@company.com",
    phone: "+1 (555) 567-8901",
    role: "Read-Only Viewer",
    department: "Logistics",
    status: "Active",
    lastLogin: "2024-01-15 09:30:15",
    loginCount: 145,
    createdDate: "2023-11-12",
    mfaEnabled: false,
    partnerAccess: ["Walmart", "Amazon"],
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "6",
    firstName: "Emily",
    lastName: "Davis",
    email: "emily.davis@company.com",
    phone: "+1 (555) 678-9012",
    role: "System Administrator",
    department: "IT Department",
    status: "Locked",
    lastLogin: "2024-01-12 11:45:22",
    loginCount: 678,
    createdDate: "2023-04-18",
    mfaEnabled: true,
    partnerAccess: ["All Partners"],
    avatar: "/placeholder.svg?height=32&width=32",
  },
]

const getRoleIcon = (role: string) => {
  switch (role) {
    case "System Administrator":
      return <Shield className="h-4 w-4 text-brand-error" />
    case "EDI Analyst":
      return <UserCheck className="h-4 w-4 text-brand-primary" />
    case "Operator":
      return <UserCheck className="h-4 w-4 text-brand-accent" />
    case "Read-Only Viewer":
      return <Eye className="h-4 w-4 text-brand-muted" />
    default:
      return <UserCheck className="h-4 w-4 text-brand-muted" />
  }
}

export default function UserSearch() {

  const [selectedRole, setSelectedRole] = React.useState<string | null>("All Roles");
  const [selectedStatus, setSelectedStatus] = React.useState<string | null>("All Status");
  const [selectedDepartment, setSelectedDepartment] = React.useState<string | null>("All Departments");
  const [selectedMfa, setSelectedMfa] = React.useState<string | null>("All");

  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 bg-white border-b border-brand-light">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1 text-brand-muted hover:text-brand-primary" />
          <Separator orientation="vertical" className="mr-2 h-4 bg-brand-light" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#" className="text-brand-muted hover:text-brand-primary">
                  User Management
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block text-brand-light" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-brand-black">User Search</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="ml-auto px-4">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="btn-primary border-brand-primary">
              <Download className="h-4 w-4 mr-2" />
              Export Users
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-6 p-6 pt-0 bg-brand-subtle">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-brand-black">User Search & Management</h2>
            <p className="text-brand-muted">
              Search, view, and manage user accounts with login history and access permissions
            </p>
          </div>
        </div>

        <Card className="brand-card">
          <CardHeader className="brand-gradient-primary text-white rounded-t-lg">
            <CardTitle className="text-white">Search Filters</CardTitle>
            <CardDescription className="text-brand-light">
              Filter users by role, status, department, and other criteria
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid gap-4 md:grid-cols-6">
              <div className="space-y-2">
                <Label htmlFor="search-name" className="text-brand-black">
                  Name/Email
                </Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-muted h-4 w-4" />
                  <Input
                    id="search-name"
                    placeholder="Search users..."
                    className="pl-10 border-brand-light focus-brand"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="role-filter" className="text-brand-black">
                  Role
                </Label>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center justify-between w-full px-3 py-2 text-sm border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary">
                    {selectedRole || "All Roles"}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full border-brand-light">
                    {["All Roles", "System Administrator", "EDI Analyst", "Operator", "Read-Only Viewer"].map((role) => (
                      <DropdownMenuItem
                        key={role}
                        className={`${selectedRole === role ? 'bg-brand-accent text-white' : 'hover:bg-brand-subtle'}`}
                        onClick={() => setSelectedRole(role === "All Roles" ? null : role)}
                      >
                        <span className="flex items-center">
                          {selectedRole === role && (
                            <Check className="h-4 w-4 mr-2" />
                          )}
                          {role}
                        </span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>


              <div className="space-y-2">
                <Label htmlFor="status-filter" className="text-brand-black">
                  Status
                </Label>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center justify-between w-full px-3 py-2 text-sm border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary">
                    {selectedStatus || "All Status"}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full border-brand-light">
                    {["All Status", "Active", "Inactive", "Locked"].map((status) => (
                      <DropdownMenuItem
                        key={status}
                        className={`${selectedStatus === status ? 'bg-brand-accent text-white' : 'hover:bg-brand-subtle'}`}
                        onClick={() => setSelectedStatus(status === "All Status" ? null : status)}
                      >
                        <span className="flex items-center">
                          {selectedStatus === status && (
                            <Check className="h-4 w-4 mr-2" />
                          )}
                          {status}
                        </span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="space-y-2">
                <Label htmlFor="department-filter" className="text-brand-black">
                  Department
                </Label>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center justify-between w-full px-3 py-2 text-sm border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary">
                    {selectedDepartment || "All Departments"}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full border-brand-light">
                    {["All Departments", "IT Department", "Operations", "Finance", "Logistics"].map((dept) => (
                      <DropdownMenuItem
                        key={dept}
                        className={`${selectedDepartment === dept ? 'bg-brand-accent text-white' : 'hover:bg-brand-subtle'}`}
                        onClick={() => setSelectedDepartment(dept === "All Departments" ? null : dept)}
                      >
                        <span className="flex items-center">
                          {selectedDepartment === dept && (
                            <Check className="h-4 w-4 mr-2" />
                          )}
                          {dept}
                        </span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mfa-filter" className="text-brand-black">
                  MFA Status
                </Label>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center justify-between w-full px-3 py-2 text-sm border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary">
                    {selectedMfa || "All"}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full border-brand-light">
                    {["All", "MFA Enabled", "MFA Disabled"].map((mfa) => (
                      <DropdownMenuItem
                        key={mfa}
                        className={`${selectedMfa === mfa ? 'bg-brand-accent text-white' : 'hover:bg-brand-subtle'}`}
                        onClick={() => setSelectedMfa(mfa === "All" ? null : mfa)}
                      >
                        <span className="flex items-center">
                          {selectedMfa === mfa && (
                            <Check className="h-4 w-4 mr-2" />
                          )}
                          {mfa}
                        </span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="space-y-2">
                <Label className="text-brand-black">&nbsp;</Label>
                <Button className="w-full btn-primary">
                  <Filter className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-brand-primary border-brand-primary bg-white">
              Active: 4
            </Badge>
            <Badge variant="outline" className="text-brand-accent border-brand-accent bg-white">
              Inactive: 1
            </Badge>
            <Badge variant="outline" className="text-brand-error border-brand-error bg-white">
              Locked: 1
            </Badge>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Checkbox id="select-all" />
            <Label htmlFor="select-all" className="text-sm text-brand-black">
              Select All
            </Label>
            <Button variant="outline" size="sm" disabled className="btn-secondary border-brand-light">
              Bulk Actions
            </Button>
          </div>
        </div>

        <Card className="brand-card">
          <CardHeader className="brand-gradient-primary text-white rounded-t-lg">
            <CardTitle className="text-white">User Directory</CardTitle>
            <CardDescription className="text-brand-light">
              Complete list of system users with access details and login history
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <Table className="table-brand">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">
                    <Checkbox />
                  </TableHead>
                  <TableHead className="text-brand-black">User</TableHead>
                  <TableHead className="text-brand-black">Role</TableHead>
                  <TableHead className="text-brand-black">Department</TableHead>
                  <TableHead className="text-brand-black">Status</TableHead>
                  <TableHead className="text-brand-black">Last Login</TableHead>
                  <TableHead className="text-right text-brand-black">Login Count</TableHead>
                  <TableHead className="text-brand-black">MFA</TableHead>
                  <TableHead className="text-brand-black">Partner Access</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {usersData.map((user) => (
                  <TableRow key={user.id} className="hover:bg-brand-subtle">
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8 border-2 border-brand-light">
                          <AvatarImage
                            src={user.avatar || "/placeholder.svg"}
                            alt={`${user.firstName} ${user.lastName}`}
                          />
                          <AvatarFallback className="bg-brand-primary text-white">
                            {user.firstName[0]}
                            {user.lastName[0]}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium text-brand-black">
                            {user.firstName} {user.lastName}
                          </div>
                          <div className="text-sm text-brand-muted flex items-center gap-1">
                            <Mail className="h-3 w-3" />
                            {user.email}
                          </div>
                          <div className="text-sm text-brand-muted flex items-center gap-1">
                            <Phone className="h-3 w-3" />
                            {user.phone}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getRoleIcon(user.role)}
                        <span className="text-sm text-brand-black">{user.role}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="badge-brand-outline">
                        {user.department}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          user.status === "Active"
                            ? "default"
                            : user.status === "Inactive"
                              ? "secondary"
                              : "destructive"
                        }
                        className={
                          user.status === "Active"
                            ? "badge-brand-primary"
                            : user.status === "Inactive"
                              ? "badge-brand-secondary"
                              : "badge-brand-error"
                        }
                      >
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1 text-sm text-brand-black">
                        <Clock className="h-3 w-3 text-brand-muted" />
                        {user.lastLogin}
                      </div>
                    </TableCell>
                    <TableCell className="text-right text-brand-black">{user.loginCount.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge
                        variant={user.mfaEnabled ? "default" : "secondary"}
                        className={user.mfaEnabled ? "badge-brand-primary" : "badge-brand-secondary"}
                      >
                        {user.mfaEnabled ? "Enabled" : "Disabled"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="max-w-[200px]">
                        {user.partnerAccess.length > 2 ? (
                          <div className="flex flex-wrap gap-1">
                            <Badge variant="outline" className="text-xs badge-brand-outline">
                              {user.partnerAccess[0]}
                            </Badge>
                            <Badge variant="outline" className="text-xs badge-brand-outline">
                              +{user.partnerAccess.length - 1} more
                            </Badge>
                          </div>
                        ) : (
                          <div className="flex flex-wrap gap-1">
                            {user.partnerAccess.map((partner, index) => (
                              <Badge key={index} variant="outline" className="text-xs badge-brand-outline">
                                {partner}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0 hover:bg-brand-subtle">
                            <MoreHorizontal className="h-4 w-4 text-brand-muted" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-white border-brand-light">
                          <DropdownMenuLabel className="text-brand-black">Actions</DropdownMenuLabel>
                          <DropdownMenuItem className="hover:bg-brand-subtle hover:text-brand-primary">
                            <Eye className="mr-2 h-4 w-4" />
                            View Profile
                          </DropdownMenuItem>
                          <DropdownMenuItem className="hover:bg-brand-subtle hover:text-brand-primary">
                            <Edit className="mr-2 h-4 w-4" />
                            Edit User
                          </DropdownMenuItem>
                          <DropdownMenuSeparator className="bg-brand-light" />
                          <DropdownMenuItem className="hover:bg-brand-subtle hover:text-brand-primary">
                            {user.status === "Active" ? (
                              <>
                                <PowerOff className="mr-2 h-4 w-4" />
                                Deactivate
                              </>
                            ) : (
                              <>
                                <Power className="mr-2 h-4 w-4" />
                                Activate
                              </>
                            )}
                          </DropdownMenuItem>
                          <DropdownMenuItem className="hover:bg-brand-subtle hover:text-brand-primary">
                            <Shield className="mr-2 h-4 w-4" />
                            Reset Password
                          </DropdownMenuItem>
                          <DropdownMenuSeparator className="bg-brand-light" />
                          <DropdownMenuItem className="text-brand-error hover:bg-brand-error hover:text-white">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete User
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="brand-card">
          <CardHeader className="brand-gradient-primary text-white rounded-t-lg">
            <CardTitle className="text-white">User Statistics</CardTitle>
            <CardDescription className="text-brand-light">Overview of user activity and system usage</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid gap-4 md:grid-cols-4">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-brand-black">6</div>
                <div className="text-sm text-brand-muted">Total Users</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-brand-primary">4</div>
                <div className="text-sm text-brand-muted">Active Users</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-brand-accent">4</div>
                <div className="text-sm text-brand-muted">MFA Enabled</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-brand-black">2,763</div>
                <div className="text-sm text-brand-muted">Total Logins</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </SidebarInset>
  )
}
