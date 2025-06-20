"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { UserPlus, Save, X } from "lucide-react"
import { Switch } from "@/components/ui/switch"

export default function CreateUser() {
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
                <BreadcrumbPage className="text-brand-black">Create User</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-6 p-6 pt-0 bg-brand-subtle">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-brand-black">Create New User</h2>
            <p className="text-brand-muted">Add a new user to the EDI portal with appropriate roles and permissions</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="brand-card">
            <CardHeader className="brand-gradient-primary text-white rounded-t-lg">
              <CardTitle className="text-white">Basic Information</CardTitle>
              <CardDescription className="text-brand-light">
                Enter the user's personal and contact details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-brand-black">
                    First Name
                  </Label>
                  <Input id="firstName" placeholder="John" className="border-brand-light focus-brand" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-brand-black">
                    Last Name
                  </Label>
                  <Input id="lastName" placeholder="Doe" className="border-brand-light focus-brand" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-brand-black">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@company.com"
                  className="border-brand-light focus-brand"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-brand-black">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="border-brand-light focus-brand"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="department" className="text-brand-black">
                  Department
                </Label>
                <Select>
                  <SelectTrigger className="border-brand-light focus-brand">
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-brand-light">
                    <SelectItem value="it">IT Department</SelectItem>
                    <SelectItem value="operations">Operations</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="logistics">Logistics</SelectItem>
                    <SelectItem value="procurement">Procurement</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="jobTitle" className="text-brand-black">
                  Job Title
                </Label>
                <Input id="jobTitle" placeholder="EDI Analyst" className="border-brand-light focus-brand" />
              </div>
            </CardContent>
          </Card>

          <Card className="brand-card">
            <CardHeader className="brand-gradient-primary text-white rounded-t-lg">
              <CardTitle className="text-white">Account Settings</CardTitle>
              <CardDescription className="text-brand-light">
                Configure user access and authentication settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-brand-black">
                  Username
                </Label>
                <Input id="username" placeholder="john.doe" className="border-brand-light focus-brand" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tempPassword" className="text-brand-black">
                  Temporary Password
                </Label>
                <Input
                  id="tempPassword"
                  type="password"
                  placeholder="Auto-generated"
                  className="border-brand-light focus-brand"
                />
                <p className="text-xs text-brand-muted">User will be required to change password on first login</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="role" className="text-brand-black">
                  User Role
                </Label>
                <Select>
                  <SelectTrigger className="border-brand-light focus-brand">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-brand-light">
                    <SelectItem value="admin">System Administrator</SelectItem>
                    <SelectItem value="analyst">EDI Analyst</SelectItem>
                    <SelectItem value="operator">Operator</SelectItem>
                    <SelectItem value="viewer">Read-Only Viewer</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="mfa" />
                <Label htmlFor="mfa" className="text-brand-black">
                  Enable Multi-Factor Authentication
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="emailNotifications" defaultChecked />
                <Label htmlFor="emailNotifications" className="text-brand-black">
                  Email Notifications
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="accountActive" defaultChecked />
                <Label htmlFor="accountActive" className="text-brand-black">
                  Account Active
                </Label>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="brand-card">
          <CardHeader className="brand-gradient-primary text-white rounded-t-lg">
            <CardTitle className="text-white">Partner Access</CardTitle>
            <CardDescription className="text-brand-light">
              Select which trading partners this user can access
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="walmart" />
                <Label htmlFor="walmart" className="text-brand-black">
                  Walmart Inc.
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="target" />
                <Label htmlFor="target" className="text-brand-black">
                  Target Corporation
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="amazon" />
                <Label htmlFor="amazon" className="text-brand-black">
                  Amazon.com Inc.
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="costco" />
                <Label htmlFor="costco" className="text-brand-black">
                  Costco Wholesale
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="homedepot" />
                <Label htmlFor="homedepot" className="text-brand-black">
                  The Home Depot
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="allPartners" />
                <Label htmlFor="allPartners" className="font-medium text-brand-black">
                  All Partners
                </Label>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="brand-card">
          <CardHeader className="brand-gradient-primary text-white rounded-t-lg">
            <CardTitle className="text-white">Additional Notes</CardTitle>
            <CardDescription className="text-brand-light">
              Any additional information or special instructions
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <Textarea
              placeholder="Enter any additional notes about this user account..."
              className="min-h-[100px] border-brand-light focus-brand"
            />
          </CardContent>
        </Card>

        <div className="flex items-center gap-4">
          <Button className="flex-1 md:flex-none btn-primary">
            <UserPlus className="h-4 w-4 mr-2" />
            Create User
          </Button>
          <Button variant="outline" className="flex-1 md:flex-none btn-accent border-brand-accent">
            <Save className="h-4 w-4 mr-2" />
            Save as Draft
          </Button>
          <Button variant="outline" className="flex-1 md:flex-none btn-secondary border-brand-light">
            <X className="h-4 w-4 mr-2" />
            Cancel
          </Button>
        </div>
      </div>
    </SidebarInset>
  )
}
