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
import { Download, Filter, TrendingUp, TrendingDown, AlertTriangle } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer, Line, LineChart } from "recharts"
import { Progress } from "@/components/ui/progress"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"


const tpVolumeData = [
  {
    partner: "Walmart Inc.",
    code: "WAL001",
    totalVolume: 125847,
    thisMonth: 12584,
    lastMonth: 11234,
    growth: 12.0,
    avgDaily: 418,
    peakDaily: 892,
    slaCompliance: 99.1,
    status: "Excellent",
    trend: "up",
    transactions: {
      successful: 124523,
      failed: 234,
      pending: 1090,
    },
  },
  {
    partner: "Amazon.com Inc.",
    code: "AMZ001",
    totalVolume: 145623,
    thisMonth: 14562,
    lastMonth: 13890,
    growth: 4.8,
    avgDaily: 485,
    peakDaily: 1024,
    slaCompliance: 97.2,
    status: "Good",
    trend: "up",
    transactions: {
      successful: 140234,
      failed: 1234,
      pending: 4155,
    },
  },
  {
    partner: "Target Corporation",
    code: "TGT001",
    totalVolume: 98234,
    thisMonth: 9823,
    lastMonth: 10456,
    growth: -6.1,
    avgDaily: 327,
    peakDaily: 678,
    slaCompliance: 98.5,
    status: "Good",
    trend: "down",
    transactions: {
      successful: 96789,
      failed: 456,
      pending: 989,
    },
  },
  {
    partner: "Costco Wholesale",
    code: "CST001",
    totalVolume: 75234,
    thisMonth: 7523,
    lastMonth: 8901,
    growth: -15.5,
    avgDaily: 251,
    peakDaily: 534,
    slaCompliance: 95.8,
    status: "Warning",
    trend: "down",
    transactions: {
      successful: 71234,
      failed: 1234,
      pending: 2766,
    },
  },
  {
    partner: "The Home Depot",
    code: "HD001",
    totalVolume: 65123,
    thisMonth: 6512,
    lastMonth: 6234,
    growth: 4.5,
    avgDaily: 217,
    peakDaily: 445,
    slaCompliance: 96.3,
    status: "Good",
    trend: "up",
    transactions: {
      successful: 63456,
      failed: 567,
      pending: 1100,
    },
  },
]

const monthlyTrendData = [
  { month: "Jul", walmart: 11200, amazon: 13400, target: 10100, costco: 8500, homedepot: 6000 },
  { month: "Aug", walmart: 11500, amazon: 13600, target: 10300, costco: 8700, homedepot: 6100 },
  { month: "Sep", walmart: 11800, amazon: 13800, target: 10500, costco: 8900, homedepot: 6200 },
  { month: "Oct", walmart: 12000, amazon: 14000, target: 10400, costco: 8800, homedepot: 6150 },
  { month: "Nov", walmart: 12200, amazon: 14200, target: 10450, costco: 8900, homedepot: 6230 },
  { month: "Dec", walmart: 12584, amazon: 14562, target: 9823, costco: 7523, homedepot: 6512 },
]

const chartConfig = {
  walmart: {
    label: "Walmart",
    color: "#2368a0",
  },
  amazon: {
    label: "Amazon",
    color: "#00aae7",
  },
  target: {
    label: "Target",
    color: "#0d416b",
  },
  costco: {
    label: "Costco",
    color: "#8c8c8c",
  },
  homedepot: {
    label: "Home Depot",
    color: "#b7b2b3",
  },
}

export default function TPVolumes() {

  const [dateRange, setDateRange] = useState("30days");
  const [partnerFilter, setPartnerFilter] = useState("all");
  const [slaFilter, setSlaFilter] = useState("all");

  const dateRangeOptions = [
    { value: "7days", label: "Last 7 days" },
    { value: "30days", label: "Last 30 days" },
    { value: "90days", label: "Last 90 days" },
    { value: "6months", label: "Last 6 months" },
    { value: "1year", label: "Last year" },
  ];

  const partnerOptions = [
    { value: "all", label: "All Partners" },
    { value: "walmart", label: "Walmart" },
    { value: "amazon", label: "Amazon" },
    { value: "target", label: "Target" },
    { value: "costco", label: "Costco" },
    { value: "homedepot", label: "Home Depot" },
  ];

  const slaOptions = [
    { value: "all", label: "All" },
    { value: "excellent", label: "Excellent (>98%)" },
    { value: "good", label: "Good (95-98%)" },
    { value: "warning", label: "Warning (<95%)" },
  ];

  const getSelectedLabel = (options: any[], value: string) => {
    return options.find(option => option.value === value)?.label || "";
  };


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
                <BreadcrumbPage className="text-brand-black">TP Volumes</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="ml-auto px-4">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="btn-primary border-brand-primary">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-6 p-6 pt-0 bg-brand-subtle">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-brand-black">Trading Partner Volumes</h2>
            <p className="text-brand-muted">
              Comprehensive volume analysis and SLA compliance tracking for all trading partners
            </p>
          </div>
        </div>

        <Card className="brand-card">
          <CardHeader className="brand-gradient-primary text-white rounded-t-lg">
            <CardTitle className="text-white">Volume Filters</CardTitle>
            <CardDescription className="text-brand-light">
              Filter and analyze trading partner volumes by various criteria
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid gap-4 md:grid-cols-5">
              <div className="space-y-2">
                <Label htmlFor="date-range" className="text-brand-black">
                  Date Range
                </Label>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center justify-between w-full px-3 py-2 text-sm border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary">
                    {getSelectedLabel(dateRangeOptions, dateRange)}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[200px]">
                    {dateRangeOptions.map((option) => (
                      <DropdownMenuItem
                        key={option.value}
                        className={`${dateRange === option.value ? 'bg-brand-accent text-white' : ''}`}
                        onClick={() => setDateRange(option.value)}
                      >
                        {option.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="space-y-2">
                <Label htmlFor="partner-filter" className="text-brand-black">
                  Partner
                </Label>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center justify-between w-full px-3 py-2 text-sm border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary">
                    {getSelectedLabel(partnerOptions, partnerFilter)}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[200px]">
                    {partnerOptions.map((option) => (
                      <DropdownMenuItem
                        key={option.value}
                        className={`${partnerFilter === option.value ? 'bg-brand-accent text-white' : ''}`}
                        onClick={() => setPartnerFilter(option.value)}
                      >
                        {option.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>


              <div className="space-y-2">
                <Label htmlFor="volume-threshold" className="text-brand-black">
                  Min Volume
                </Label>
                <Input
                  id="volume-threshold"
                  placeholder="1000"
                  type="number"
                  className="border-brand-light focus-brand"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sla-filter" className="text-brand-black">
                  SLA Status
                </Label>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center justify-between w-full px-3 py-2 text-sm border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary">
                    {getSelectedLabel(slaOptions, slaFilter)}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[200px]">
                    {slaOptions.map((option) => (
                      <DropdownMenuItem
                        key={option.value}
                        className={`${slaFilter === option.value ? 'bg-brand-accent text-white' : ''}`}
                        onClick={() => setSlaFilter(option.value)}
                      >
                        {option.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="space-y-2">
                <Label className="text-brand-black">&nbsp;</Label>
                <Button className="btn-primary w-full">
                  <Filter className="h-4 w-4 mr-2" />
                  Apply Filters
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-4">
          <Card className="brand-card brand-card-primary">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-brand-black">Total Volume</CardTitle>
              <TrendingUp className="h-4 w-4 text-brand-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-brand-black">510,061</div>
              <p className="text-xs text-brand-muted">
                <span className="text-brand-primary flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +2.1% from last month
                </span>
              </p>
            </CardContent>
          </Card>

          <Card className="brand-card brand-card-primary">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-brand-black">Avg Daily Volume</CardTitle>
              <TrendingUp className="h-4 w-4 text-brand-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-brand-black">16,969</div>
              <p className="text-xs text-brand-muted">Across all partners</p>
            </CardContent>
          </Card>

          <Card className="brand-card brand-card-primary">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-brand-black">Peak Daily Volume</CardTitle>
              <TrendingUp className="h-4 w-4 text-brand-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-brand-black">3,573</div>
              <p className="text-xs text-brand-muted">Highest single partner</p>
            </CardContent>
          </Card>

          <Card className="brand-card brand-card-primary">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-brand-black">Avg SLA Compliance</CardTitle>
              <AlertTriangle className="h-4 w-4 text-brand-muted" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-brand-black">97.4%</div>
              <p className="text-xs text-brand-muted">Above target (95%)</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="brand-card">
            <CardHeader className="brand-gradient-primary text-white rounded-t-lg">
              <CardTitle className="text-white">Monthly Volume Trends</CardTitle>
              <CardDescription className="text-brand-light">
                Transaction volume trends by trading partner over the last 6 months
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ChartContainer config={chartConfig} className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyTrendData}>
                    <XAxis dataKey="month" stroke="#8c8c8c" />
                    <YAxis stroke="#8c8c8c" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="walmart"
                      stroke="#2368a0"
                      strokeWidth={2}
                      dot={{ r: 4, fill: "#2368a0" }}
                    />
                    <Line
                      type="monotone"
                      dataKey="amazon"
                      stroke="#00aae7"
                      strokeWidth={2}
                      dot={{ r: 4, fill: "#00aae7" }}
                    />
                    <Line
                      type="monotone"
                      dataKey="target"
                      stroke="#0d416b"
                      strokeWidth={2}
                      dot={{ r: 4, fill: "#0d416b" }}
                    />
                    <Line
                      type="monotone"
                      dataKey="costco"
                      stroke="#8c8c8c"
                      strokeWidth={2}
                      dot={{ r: 4, fill: "#8c8c8c" }}
                    />
                    <Line
                      type="monotone"
                      dataKey="homedepot"
                      stroke="#b7b2b3"
                      strokeWidth={2}
                      dot={{ r: 4, fill: "#b7b2b3" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card className="brand-card">
            <CardHeader className="brand-gradient-primary text-white rounded-t-lg">
              <CardTitle className="text-white">Current Month Volume Distribution</CardTitle>
              <CardDescription className="text-brand-light">
                Transaction volume breakdown by partner for current month
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ChartContainer config={chartConfig} className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={[monthlyTrendData[monthlyTrendData.length - 1]]}>
                    <XAxis dataKey="month" stroke="#8c8c8c" />
                    <YAxis stroke="#8c8c8c" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="walmart" fill="#2368a0" />
                    <Bar dataKey="amazon" fill="#00aae7" />
                    <Bar dataKey="target" fill="#0d416b" />
                    <Bar dataKey="costco" fill="#8c8c8c" />
                    <Bar dataKey="homedepot" fill="#b7b2b3" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        <Card className="brand-card">
          <CardHeader className="brand-gradient-primary text-white rounded-t-lg">
            <CardTitle className="text-white">Partner Volume Analysis</CardTitle>
            <CardDescription className="text-brand-light">
              Detailed volume metrics and SLA compliance for each trading partner
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <Table className="table-brand">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-brand-black">Partner</TableHead>
                  <TableHead className="text-right text-brand-black">Total Volume</TableHead>
                  <TableHead className="text-right text-brand-black">This Month</TableHead>
                  <TableHead className="text-right text-brand-black">Growth</TableHead>
                  <TableHead className="text-right text-brand-black">Avg Daily</TableHead>
                  <TableHead className="text-right text-brand-black">Peak Daily</TableHead>
                  <TableHead className="text-right text-brand-black">SLA Compliance</TableHead>
                  <TableHead className="text-brand-black">Status</TableHead>
                  <TableHead className="text-right text-brand-black">Success Rate</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tpVolumeData.map((partner) => (
                  <TableRow key={partner.code} className="hover:bg-brand-subtle">
                    <TableCell>
                      <div>
                        <div className="font-medium text-brand-black">{partner.partner}</div>
                        <div className="text-sm text-brand-muted font-mono">{partner.code}</div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right font-medium text-brand-black">
                      {partner.totalVolume.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right text-brand-black">{partner.thisMonth.toLocaleString()}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end">
                        {partner.trend === "up" ? (
                          <TrendingUp className="h-3 w-3 text-brand-primary mr-1" />
                        ) : (
                          <TrendingDown className="h-3 w-3 text-brand-error mr-1" />
                        )}
                        <span className={partner.growth > 0 ? "text-brand-primary" : "text-brand-error"}>
                          {partner.growth > 0 ? "+" : ""}
                          {partner.growth}%
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right text-brand-black">{partner.avgDaily.toLocaleString()}</TableCell>
                    <TableCell className="text-right text-brand-black">{partner.peakDaily.toLocaleString()}</TableCell>
                    <TableCell className="text-right">
                      <div className="space-y-1">
                        <div className="text-sm font-medium text-brand-black">{partner.slaCompliance}%</div>
                        <Progress value={partner.slaCompliance} className="h-1 progress-brand" />
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          partner.status === "Excellent"
                            ? "default"
                            : partner.status === "Good"
                              ? "secondary"
                              : "destructive"
                        }
                        className={
                          partner.status === "Excellent"
                            ? "badge-brand-primary"
                            : partner.status === "Good"
                              ? "badge-brand-accent"
                              : "badge-brand-error"
                        }
                      >
                        {partner.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Badge variant="outline" className="badge-brand-outline">
                        {((partner.transactions.successful / partner.totalVolume) * 100).toFixed(1)}%
                      </Badge>
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
