"use client"

import {
  Activity,
  CheckCircle,
  Clock,
  Download,
  XCircle,
  AlertTriangle,
  Building2,
  Zap,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3,
  Calendar,
  RefreshCw,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb"

const transactionVolumeData = [
  { name: "Jan", successful: 4200, failed: 120, pending: 80 },
  { name: "Feb", successful: 3800, failed: 98, pending: 102 },
  { name: "Mar", successful: 5200, failed: 145, pending: 155 },
  { name: "Apr", successful: 4800, failed: 110, pending: 90 },
  { name: "May", successful: 5800, failed: 89, pending: 111 },
  { name: "Jun", successful: 6200, failed: 95, pending: 105 },
  { name: "Jul", successful: 6800, failed: 78, pending: 122 },
]

const partnerVolumeData = [
  { name: "Walmart", volume: 2450, color: "#2368a0" },
  { name: "Amazon", volume: 1890, color: "#00aae7" },
  { name: "Target", volume: 1234, color: "#0d416b" },
  { name: "Costco", volume: 987, color: "#8c8c8c" },
  { name: "Others", volume: 1439, color: "#b7b2b3" },
]

const performanceData = [
  { time: "00:00", responseTime: 1.2, throughput: 450 },
  { time: "04:00", responseTime: 0.9, throughput: 380 },
  { time: "08:00", responseTime: 1.8, throughput: 720 },
  { time: "12:00", responseTime: 2.1, throughput: 890 },
  { time: "16:00", responseTime: 1.6, throughput: 650 },
  { time: "20:00", responseTime: 1.3, throughput: 520 },
]

const recentTransactions = [
  {
    id: "TXN-001",
    partner: "Walmart Inc.",
    type: "Purchase Order",
    status: "success",
    amount: "$12,450.00",
    time: "2 minutes ago",
  },
  {
    id: "TXN-002",
    partner: "Amazon.com",
    type: "Invoice",
    status: "pending",
    amount: "$8,920.50",
    time: "5 minutes ago",
  },
  {
    id: "TXN-003",
    partner: "Target Corp",
    type: "ASN",
    status: "success",
    amount: "$15,230.75",
    time: "8 minutes ago",
  },
  {
    id: "TXN-004",
    partner: "Costco",
    type: "Payment",
    status: "failed",
    amount: "$3,200.00",
    time: "12 minutes ago",
  },
  {
    id: "TXN-005",
    partner: "Home Depot",
    type: "Purchase Order",
    status: "success",
    amount: "$7,890.25",
    time: "15 minutes ago",
  },
]

const alerts = [
  {
    type: "error",
    title: "Connection Timeout",
    message: "Walmart EDI connection experiencing timeouts",
    time: "5 minutes ago",
  },
  {
    type: "warning",
    title: "High Volume Alert",
    message: "Amazon transaction volume 150% above normal",
    time: "12 minutes ago",
  },
  {
    type: "info",
    title: "Maintenance Scheduled",
    message: "System maintenance scheduled for tonight",
    time: "1 hour ago",
  },
]

const chartConfig = {
  successful: {
    label: "Successful",
    color: "#2368a0",
  },
  failed: {
    label: "Failed",
    color: "#ef4048",
  },
  pending: {
    label: "Pending",
    color: "#00aae7",
  },
  responseTime: {
    label: "Response Time (s)",
    color: "#2368a0",
  },
  throughput: {
    label: "Throughput",
    color: "#00aae7",
  },
}

export default function Dashboard() {
  return (
    <SidebarInset className="bg-[#ffffff]">
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 bg-white border-b border-brand-light">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1 text-brand-muted hover:text-brand-primary" />
          <Separator orientation="vertical" className="mr-2 h-4 bg-brand-light" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-brand-black font-semibold">Dashboard</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="ml-auto px-4">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="btn-accent border-brand-accent">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
            <Button size="sm" className="btn-primary">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </header>

      <div className="flex-1 space-y-6 p-6 pt-0 bg-brand-subtle page-transition">
        {/* Header Section */}
        <div className="flex items-center justify-between pt-6">
          <div>
          <h1 className="text-3xl font-bold text-black tracking-tight text-brand-black bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent" style={{color:"black"}}>
              EDI Transaction Dashboard
            </h1>
            <p className="text-brand-muted mt-2">Real-time monitoring and analytics for your EDI transactions</p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-brand-primary border-brand-primary bg-white">
              <div className="w-2 h-2 bg-brand-primary rounded-full mr-2 animate-pulse"></div>
              Live Data
            </Badge>
            <Badge variant="outline" className="text-brand-black border-brand-light bg-white">
              Last Updated: {new Date().toLocaleTimeString()}
            </Badge>
          </div>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Total Transactions",
              value: "45,231",
              change: "+20.1%",
              icon: Activity,
              trend: "up",
              description: "Last 24 hours",
              color: "primary",
            },
            {
              title: "Success Rate",
              value: "98.2%",
              change: "+2.5%",
              icon: CheckCircle,
              trend: "up",
              description: "Above SLA target",
              color: "success",
            },
            {
              title: "Failed Transactions",
              value: "823",
              change: "-12.3%",
              icon: XCircle,
              trend: "down",
              description: "Reduced from yesterday",
              color: "error",
            },
            {
              title: "Avg Response Time",
              value: "1.2s",
              change: "-0.3s",
              icon: Clock,
              trend: "down",
              description: "Performance improved",
              color: "accent",
            },
          ].map((stat, index) => (
            <Card
              key={stat.title}
              className="modern-card animate-fade-in-scale relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-transparent to-brand-accent/10 rounded-bl-full"></div>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-brand-muted">{stat.title}</CardTitle>
                <div
                  className={`p-2 rounded-lg ${stat.color === "primary"
                      ? "bg-brand-primary/10"
                      : stat.color === "success"
                        ? "bg-brand-primary/10"
                        : stat.color === "error"
                          ? "bg-brand-error/10"
                          : "bg-brand-accent/10"
                    }`}
                >
                  <stat.icon
                    className={`h-4 w-4 ${stat.color === "primary"
                        ? "text-brand-primary"
                        : stat.color === "success"
                          ? "text-brand-primary"
                          : stat.color === "error"
                            ? "text-brand-error"
                            : "text-brand-accent"
                      }`}
                  />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-brand-black mb-1">{stat.value}</div>
                <div className="flex items-center justify-between">
                  <p
                    className={`text-xs flex items-center ${stat.trend === "up" ? "text-brand-primary" : "text-brand-error"
                      }`}
                  >
                    {stat.trend === "up" ? (
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                    ) : (
                      <ArrowDownRight className="h-3 w-3 mr-1" />
                    )}
                    {stat.change}
                  </p>
                  <p className="text-xs text-brand-muted">{stat.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6" >
          <TabsList className="modern-card p-1 bg-[#2368a0] backdrop-blur-sm border border-brand-light/30">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-[#2368a0] data-[state=active]:from-brand-primary data-[state=active]:to-brand-accent data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
            >
              <BarChart3 className="h-4 w-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="performance"
              className="data-[state=active]:bg-[#2368a0] data-[state=active]:from-brand-primary data-[state=active]:to-brand-accent data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
            >
              <Zap className="h-4 w-4 mr-2" />
              Performance
            </TabsTrigger>
            <TabsTrigger
              value="partners"
              className="data-[state=active]:bg-[#2368a0] data-[state=active]:from-brand-primary data-[state=active]:to-brand-accent data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
            >
              <Building2 className="h-4 w-4 mr-2" />
              Partners
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6 animate-slide-in-up"  >
            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="modern-card lg:col-span-2">
                <CardHeader className="modern-card-header">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-brand-black font-semibold">Transaction Volume Trends</CardTitle>
                      <CardDescription className="text-brand-muted">
                        Monthly transaction volume breakdown by status
                      </CardDescription>
                    </div>
                    <Button variant="outline" size="sm" className="btn-secondary border-brand-light">
                      <Calendar className="h-4 w-4 mr-2" />
                      Last 7 Months
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ChartContainer config={chartConfig} className="h-[400px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={transactionVolumeData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                          <linearGradient id="successful" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#2368a0" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#2368a0" stopOpacity={0.1} />
                          </linearGradient>
                          <linearGradient id="failed" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#ef4048" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#ef4048" stopOpacity={0.1} />
                          </linearGradient>
                          <linearGradient id="pending" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#00aae7" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#00aae7" stopOpacity={0.1} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(183, 178, 179, 0.3)" />
                        <XAxis dataKey="name" stroke="#8c8c8c" />
                        <YAxis stroke="#8c8c8c" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Area
                          type="monotone"
                          dataKey="successful"
                          stackId="1"
                          stroke="#2368a0"
                          fill="url(#successful)"
                          strokeWidth={2}
                        />
                        <Area
                          type="monotone"
                          dataKey="pending"
                          stackId="1"
                          stroke="#00aae7"
                          fill="url(#pending)"
                          strokeWidth={2}
                        />
                        <Area
                          type="monotone"
                          dataKey="failed"
                          stackId="1"
                          stroke="#ef4048"
                          fill="url(#failed)"
                          strokeWidth={2}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="modern-card lg:col-span-1">
                <CardHeader className="modern-card-header">
                  <CardTitle className="text-brand-black font-semibold">Recent Transactions</CardTitle>
                  <CardDescription className="text-brand-muted">Latest transaction updates</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4 max-h-[400px] overflow-y-auto">
                    {recentTransactions.map((transaction, index) => (
                      <div
                        key={transaction.id}
                        className="flex items-center space-x-4 p-3 rounded-lg bg-white/50 backdrop-blur-sm border border-brand-light/30 hover:shadow-md transition-all duration-200"
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${transaction.status === "success"
                              ? "bg-brand-primary"
                              : transaction.status === "pending"
                                ? "bg-brand-accent"
                                : "bg-brand-error"
                            } animate-pulse`}
                        ></div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-brand-black truncate">{transaction.partner}</p>
                          <p className="text-xs text-brand-muted">
                            {transaction.type} • {transaction.time}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-brand-black">{transaction.amount}</p>
                          <Badge
                            variant={
                              transaction.status === "success"
                                ? "default"
                                : transaction.status === "pending"
                                  ? "secondary"
                                  : "destructive"
                            }
                            className={`text-xs ${transaction.status === "success"
                                ? "badge-brand-primary"
                                : transaction.status === "pending"
                                  ? "badge-brand-accent"
                                  : "badge-brand-error"
                              }`}
                          >
                            {transaction.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Partner Volume and Alerts */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Partner Volume Distribution */}
              <Card className="modern-card">
                <CardHeader className="modern-card-header">
                  <CardTitle className="text-brand-black font-semibold">Partner Volume Distribution</CardTitle>
                  <CardDescription className="text-brand-muted">
                    Transaction volume by trading partner (last 30 days)
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {partnerVolumeData.map((partner, index) => (
                      <div key={partner.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-brand-black">{partner.name}</span>
                          <span className="text-sm text-brand-muted">{partner.volume.toLocaleString()}</span>
                        </div>
                        <Progress
                          value={(partner.volume / Math.max(...partnerVolumeData.map((p) => p.volume))) * 100}
                          className="h-2"
                          style={{
                            background: `linear-gradient(to right, ${partner.color}, ${partner.color})`,
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* System Alerts */}
              <Card className="modern-card">
                <CardHeader className="modern-card-header">
                  <CardTitle className="text-brand-black font-semibold">System Alerts</CardTitle>
                  <CardDescription className="text-brand-muted">Recent system notifications and alerts</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {alerts.map((alert, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-3 rounded-lg bg-white/50 backdrop-blur-sm border border-brand-light/30"
                      >
                        <div
                          className={`p-1 rounded-full ${alert.type === "error"
                              ? "bg-brand-error/10"
                              : alert.type === "warning"
                                ? "bg-brand-accent/10"
                                : "bg-brand-primary/10"
                            }`}
                        >
                          <AlertTriangle
                            className={`h-3 w-3 ${alert.type === "error"
                                ? "text-brand-error"
                                : alert.type === "warning"
                                  ? "text-brand-accent"
                                  : "text-brand-primary"
                              }`}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-brand-black">{alert.title}</p>
                          <p className="text-xs text-brand-muted mt-1">{alert.message}</p>
                          <p className="text-xs text-brand-muted mt-1">{alert.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6 animate-slide-in-up ">
            <Card className="modern-card">
              <CardHeader className="modern-card-header">
                <CardTitle className="text-brand-black font-semibold">System Performance Metrics</CardTitle>
                <CardDescription className="text-brand-muted">
                  Real-time performance monitoring over the last 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ChartContainer config={chartConfig} className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(183, 178, 179, 0.3)" />
                      <XAxis dataKey="time" stroke="#8c8c8c" />
                      <YAxis yAxisId="left" stroke="#8c8c8c" />
                      <YAxis yAxisId="right" orientation="right" stroke="#8c8c8c" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="responseTime"
                        stroke="#2368a0"
                        strokeWidth={3}
                        dot={{ fill: "#2368a0", strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, stroke: "#00aae7", strokeWidth: 2 }}
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="throughput"
                        stroke="#00aae7"
                        strokeWidth={3}
                        dot={{ fill: "#00aae7", strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, stroke: "#2368a0", strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="partners" className="space-y-6 animate-slide-in-up">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="modern-card">
                <CardHeader className="modern-card-header">
                  <CardTitle className="text-brand-black font-semibold">Top Partners by Volume</CardTitle>
                  <CardDescription className="text-brand-muted">
                    Most active trading partners this month
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ChartContainer config={chartConfig} className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={partnerVolumeData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(183, 178, 179, 0.3)" />
                        <XAxis dataKey="name" stroke="#8c8c8c" />
                        <YAxis stroke="#8c8c8c" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="volume" fill="#2368a0" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card className="modern-card">
                <CardHeader className="modern-card-header">
                  <CardTitle className="text-brand-black font-semibold">Partner Status Overview</CardTitle>
                  <CardDescription className="text-brand-muted">
                    Current connection status of all partners
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {[
                      { name: "Walmart Inc.", status: "Connected", sla: 99.2, transactions: 2450 },
                      { name: "Amazon.com", status: "Connected", sla: 98.7, transactions: 1890 },
                      { name: "Target Corp", status: "Warning", sla: 94.1, transactions: 1234 },
                      { name: "Costco", status: "Connected", sla: 97.8, transactions: 987 },
                      { name: "Home Depot", status: "Maintenance", sla: 96.5, transactions: 756 },
                    ].map((partner, index) => (
                      <div
                        key={partner.name}
                        className="flex items-center justify-between p-3 rounded-lg bg-white/50 backdrop-blur-sm border border-brand-light/30"
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-3 h-3 rounded-full ${partner.status === "Connected"
                                ? "bg-brand-primary"
                                : partner.status === "Warning"
                                  ? "bg-brand-error"
                                  : "bg-brand-accent"
                              } animate-pulse`}
                          ></div>
                          <div>
                            <p className="text-sm font-medium text-brand-black">{partner.name}</p>
                            <p className="text-xs text-brand-muted">
                              {partner.transactions.toLocaleString()} transactions
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge
                            variant={
                              partner.status === "Connected"
                                ? "default"
                                : partner.status === "Warning"
                                  ? "destructive"
                                  : "secondary"
                            }
                            className={`text-xs mb-1 ${partner.status === "Connected"
                                ? "badge-brand-primary"
                                : partner.status === "Warning"
                                  ? "badge-brand-error"
                                  : "badge-brand-accent"
                              }`}
                          >
                            {partner.status}
                          </Badge>
                          <p className="text-xs text-brand-muted">SLA: {partner.sla}%</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SidebarInset>
  )
}
