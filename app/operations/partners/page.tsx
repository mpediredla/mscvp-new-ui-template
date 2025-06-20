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
import { Plus, Search, MoreHorizontal, Edit, Trash2, Power, PowerOff, Eye } from "lucide-react"
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

const partnersData = [
  {
    id: "1",
    name: "Walmart Inc.",
    code: "WAL001",
    status: "Active",
    integration: "Connected",
    lastTransaction: "2024-01-15 14:30:22",
    totalTransactions: 125847,
    successRate: 98.2,
    contactEmail: "edi@walmart.com",
    slaCompliance: 99.1,
  },
  {
    id: "2",
    name: "Target Corporation",
    code: "TGT001",
    status: "Active",
    integration: "Connected",
    lastTransaction: "2024-01-15 14:28:15",
    totalTransactions: 98234,
    successRate: 97.8,
    contactEmail: "edi@target.com",
    slaCompliance: 98.5,
  },
  {
    id: "3",
    name: "Amazon.com Inc.",
    code: "AMZ001",
    status: "Active",
    integration: "Connected",
    lastTransaction: "2024-01-15 14:31:45",
    totalTransactions: 145623,
    successRate: 96.9,
    contactEmail: "vendor-edi@amazon.com",
    slaCompliance: 97.2,
  },
  {
    id: "4",
    name: "Costco Wholesale",
    code: "CST001",
    status: "Warning",
    integration: "Issues",
    lastTransaction: "2024-01-15 12:15:30",
    totalTransactions: 75234,
    successRate: 94.2,
    contactEmail: "edi@costco.com",
    slaCompliance: 95.8,
  },
  {
    id: "5",
    name: "The Home Depot",
    code: "HD001",
    status: "Inactive",
    integration: "Disconnected",
    lastTransaction: "2024-01-14 16:45:12",
    totalTransactions: 65123,
    successRate: 95.5,
    contactEmail: "edi@homedepot.com",
    slaCompliance: 96.3,
  },
]

export default function Partners() {
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
                  Operations
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block text-brand-light" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-brand-black">Partners</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-6 p-6 pt-0 bg-brand-subtle">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-brand-black">Trading Partners</h2>
            <p className="text-brand-muted">Manage and monitor your EDI trading partner relationships</p>
          </div>
          <Button className="btn-primary">
            <Plus className="h-4 w-4 mr-2" />
            Add Partner
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-muted h-4 w-4" />
            <Input placeholder="Search partners..." className="pl-10 border-brand-light focus-brand" />
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-brand-primary border-brand-primary bg-white">
              Active: 3
            </Badge>
            <Badge variant="outline" className="text-brand-accent border-brand-accent bg-white">
              Warning: 1
            </Badge>
            <Badge variant="outline" className="text-brand-error border-brand-error bg-white">
              Inactive: 1
            </Badge>
          </div>
        </div>

        <Card className="brand-card">
          <CardHeader className="brand-gradient-primary text-white rounded-t-lg">
            <CardTitle className="text-white">Partner Directory</CardTitle>
            <CardDescription className="text-brand-light">
              Complete list of trading partners with integration status and performance metrics
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <Table className="table-brand">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-brand-black">Partner</TableHead>
                  <TableHead className="text-brand-black">Code</TableHead>
                  <TableHead className="text-brand-black">Status</TableHead>
                  <TableHead className="text-brand-black">Integration</TableHead>
                  <TableHead className="text-brand-black">Last Transaction</TableHead>
                  <TableHead className="text-right text-brand-black">Total Transactions</TableHead>
                  <TableHead className="text-right text-brand-black">Success Rate</TableHead>
                  <TableHead className="text-right text-brand-black">SLA Compliance</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {partnersData.map((partner) => (
                  <TableRow key={partner.id} className="hover:bg-brand-subtle">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8 border-2 border-brand-light">
                          <AvatarImage src={`/placeholder.svg?height=32&width=32`} />
                          <AvatarFallback className="bg-brand-primary text-white">
                            {partner.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .slice(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium text-brand-black">{partner.name}</div>
                          <div className="text-sm text-brand-muted">{partner.contactEmail}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="font-mono text-brand-black">{partner.code}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          partner.status === "Active"
                            ? "default"
                            : partner.status === "Warning"
                              ? "secondary"
                              : "destructive"
                        }
                        className={
                          partner.status === "Active"
                            ? "badge-brand-primary"
                            : partner.status === "Warning"
                              ? "badge-brand-accent"
                              : "badge-brand-error"
                        }
                      >
                        {partner.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          partner.integration === "Connected"
                            ? "default"
                            : partner.integration === "Issues"
                              ? "secondary"
                              : "destructive"
                        }
                        className={
                          partner.integration === "Connected"
                            ? "badge-brand-primary"
                            : partner.integration === "Issues"
                              ? "badge-brand-accent"
                              : "badge-brand-error"
                        }
                      >
                        {partner.integration}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-brand-black">{partner.lastTransaction}</TableCell>
                    <TableCell className="text-right text-brand-black">
                      {partner.totalTransactions.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right">
                      <Badge
                        variant={partner.successRate >= 95 ? "default" : "secondary"}
                        className={partner.successRate >= 95 ? "badge-brand-primary" : "badge-brand-secondary"}
                      >
                        {partner.successRate}%
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Badge
                        variant={partner.slaCompliance >= 95 ? "default" : "secondary"}
                        className={partner.slaCompliance >= 95 ? "badge-brand-primary" : "badge-brand-secondary"}
                      >
                        {partner.slaCompliance}%
                      </Badge>
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
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem className="hover:bg-brand-subtle hover:text-brand-primary">
                            <Edit className="mr-2 h-4 w-4" />
                            Edit Partner
                          </DropdownMenuItem>
                          <DropdownMenuSeparator className="bg-brand-light" />
                          <DropdownMenuItem className="hover:bg-brand-subtle hover:text-brand-primary">
                            {partner.status === "Active" ? (
                              <>
                                <PowerOff className="mr-2 h-4 w-4" />
                                Disable
                              </>
                            ) : (
                              <>
                                <Power className="mr-2 h-4 w-4" />
                                Enable
                              </>
                            )}
                          </DropdownMenuItem>
                          <DropdownMenuSeparator className="bg-brand-light" />
                          <DropdownMenuItem className="text-brand-error hover:bg-brand-error hover:text-white">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
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
      </div>
    </SidebarInset>
  )
}
