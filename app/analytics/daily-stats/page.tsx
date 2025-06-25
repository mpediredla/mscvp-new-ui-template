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
import { Download, Filter, Check } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import React from "react"

const dailyStatsData = [
  {
    date: "2024-01-15",
    partner: "Walmart",
    totalTransactions: 1250,
    successful: 1198,
    failed: 12,
    pending: 40,
    successRate: 95.8,
    avgResponseTime: "2.1s",
  },
  {
    date: "2024-01-15",
    partner: "Target",
    totalTransactions: 980,
    successful: 945,
    failed: 8,
    pending: 27,
    successRate: 96.4,
    avgResponseTime: "1.8s",
  },
  {
    date: "2024-01-15",
    partner: "Amazon",
    totalTransactions: 1450,
    successful: 1389,
    failed: 15,
    pending: 46,
    successRate: 95.8,
    avgResponseTime: "2.3s",
  },
  {
    date: "2024-01-15",
    partner: "Costco",
    totalTransactions: 750,
    successful: 720,
    failed: 5,
    pending: 25,
    successRate: 96.0,
    avgResponseTime: "2.0s",
  },
  {
    date: "2024-01-15",
    partner: "Home Depot",
    totalTransactions: 650,
    successful: 625,
    failed: 3,
    pending: 22,
    successRate: 96.2,
    avgResponseTime: "1.9s",
  },
]

export default function DailyStats() {
  const [selectedPartner, setSelectedPartner] = React.useState("All Partners")
  const [selectedStatus, setSelectedStatus] = React.useState("All Status")
  const [dateFrom, setDateFrom] = React.useState("2024-01-15")
  const [dateTo, setDateTo] = React.useState("2024-01-15")

  const partners = ["All Partners", "Walmart", "Target", "Amazon", "Costco", "Home Depot"]
  const statuses = ["All Status", "Successful", "Failed", "Pending"]


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
                  Analytics
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block text-brand-light" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-brand-black">Daily Stats</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-6 p-6 pt-0 bg-brand-subtle">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-brand-black">Daily Statistics</h2>
            <p className="text-brand-muted">Detailed breakdown of EDI transactions by date and partner</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="btn-primary border-brand-primary">
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </Button>
            <Button variant="outline" size="sm" className="btn-accent border-brand-accent">
              <Download className="h-4 w-4 mr-2" />
              Export PDF
            </Button>
          </div>
        </div>

        <Card className="brand-card">
          <CardHeader className="brand-gradient-primary text-white rounded-t-lg">
            <CardTitle className="text-white">Filters</CardTitle>
            <CardDescription className="text-brand-light">
              Filter transactions by date range, partner, and status
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid gap-4 md:grid-cols-4">
              <div className="space-y-2">
                <Label htmlFor="date-from" className="text-brand-black">
                  From Date
                </Label>
                <Input
                  id="date-from"
                  type="date"
                  defaultValue="2024-01-15"
                  className="border-brand-light focus-brand"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="date-to" className="text-brand-black">
                  To Date
                </Label>
                <Input id="date-to" type="date" defaultValue="2024-01-15" className="border-brand-light focus-brand" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="partner" className="text-brand-black">
                  Partner
                </Label>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center justify-between w-full px-3 py-2 text-sm border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary">
                    {selectedPartner}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[200px] border-brand-light">
                    {partners.map((partner) => (
                      <DropdownMenuItem
                        key={partner}
                        className={`${selectedPartner === partner ? 'bg-brand-accent text-white' : 'hover:bg-brand-subtle'}`}
                        onClick={() => setSelectedPartner(partner)}
                      >
                        <span className="flex items-center">
                          {selectedPartner === partner && (
                            <Check className="h-4 w-4 mr-2" />
                          )}
                          {partner}
                        </span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="space-y-2">
                <Label htmlFor="status" className="text-brand-black">
                  Status
                </Label>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center justify-between w-full px-3 py-2 text-sm border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary">
                    {selectedStatus}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[200px] border-brand-light">
                    {statuses.map((status) => (
                      <DropdownMenuItem
                        key={status}
                        className={`${selectedStatus === status ? 'bg-brand-accent text-white' : 'hover:bg-brand-subtle'}`}
                        onClick={() => setSelectedStatus(status)}
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
            </div>

          <div className="flex items-center gap-2 mt-4">
            <Button className="btn-primary">
              <Filter className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button variant="outline" className="btn-secondary border-brand-light">
              Clear Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="brand-card">
        <CardHeader className="brand-gradient-primary text-white rounded-t-lg">
          <CardTitle className="text-white">Transaction Statistics</CardTitle>
          <CardDescription className="text-brand-light">
            Daily transaction breakdown by trading partner
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <Table className="table-brand">
            <TableHeader>
              <TableRow>
                <TableHead className="text-brand-black">Date</TableHead>
                <TableHead className="text-brand-black">Partner</TableHead>
                <TableHead className="text-right text-brand-black">Total</TableHead>
                <TableHead className="text-right text-brand-black">Successful</TableHead>
                <TableHead className="text-right text-brand-black">Failed</TableHead>
                <TableHead className="text-right text-brand-black">Pending</TableHead>
                <TableHead className="text-right text-brand-black">Success Rate</TableHead>
                <TableHead className="text-right text-brand-black">Avg Response</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dailyStatsData.map((row, index) => (
                <TableRow key={index} className="hover:bg-brand-subtle">
                  <TableCell className="font-medium text-brand-black">{row.date}</TableCell>
                  <TableCell className="text-brand-black">{row.partner}</TableCell>
                  <TableCell className="text-right text-brand-black">
                    {row.totalTransactions.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right text-brand-primary font-medium">
                    {row.successful.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right text-brand-error font-medium">{row.failed}</TableCell>
                  <TableCell className="text-right text-brand-accent font-medium">{row.pending}</TableCell>
                  <TableCell className="text-right">
                    <Badge
                      variant={row.successRate >= 95 ? "default" : "secondary"}
                      className={row.successRate >= 95 ? "badge-brand-primary" : "badge-brand-secondary"}
                    >
                      {row.successRate}%
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right text-brand-black">{row.avgResponseTime}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
    </SidebarInset >
  )
}