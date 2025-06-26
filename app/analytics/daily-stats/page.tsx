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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import React, { useState } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  Pie,
  PieChart,
  Cell,
} from "recharts";
import { ChartLegendContent } from "@/components/ui/chart"

const transactionData = [
  { time: "11:00", orders: 1.2, shipments: 0.8, receipts: 0.5 },
  { time: "12:00", orders: 1.5, shipments: 1.0, receipts: 0.7 },
  { time: "13:00", orders: 1.8, shipments: 1.2, receipts: 0.9 },
  { time: "14:00", orders: 1.3, shipments: 0.9, receipts: 0.6 },
  { time: "15:00", orders: 1.6, shipments: 1.1, receipts: 0.8 },
];

const pieChartData = [
  { name: "Orders", value: 1250 },
  { name: "Shipments", value: 980 },
  { name: "Receipts", value: 750 },
];

const pieChartData1 = [
  { name: "Success", value: 1250 },
  { name: "Failure", value: 980 },
  { name: "Pending", value: 750 },
];


const data = [
  { ob: 10, ib: 0, day: "May 28" },
  { ob: 1, ib: 1, day: "May 29" },
  { ob: 0, ib: 10, day: "May 30" },
  // ... rest of your original data
];

const partnerData = [
  { partner: 'PARTNER A', ib: -0.8, ob: 0.6 },
  { partner: 'PARTNER B', ib: -0.6, ob: 0.4 },
  { partner: 'PARTNER C', ib: -0.4, ob: 0.9 },
  { partner: 'PARTNER D', ib: -0.2, ob: 0.3 },
  { partner: 'PARTNER E', ib: -0.9, ob: 0.1 },
  { partner: 'PARTNER F', ib: -0.3, ob: 0.7 },
  { partner: 'PARTNER G', ib: -0.5, ob: 0.5 },
  { partner: 'PARTNER H', ib: -0.7, ob: 0.2 },
  { partner: 'PARTNER I', ib: -0.1, ob: 0.8 },
  { partner: 'PARTNER J', ib: -1.0, ob: 0.4 }
];

const COLORS = ["#b7b2b3", "#2368a0", "#00aae7"];
const COLORS1 = ["#00aae7", "#ef4048", "#8c8c8c"];


export default function DailyStats() {
  const [dayRange, setDayRange] = useState(30);
  const data = [
    { hour: '11:00', count: 1 },
    // Add more hours as needed
  ];

  const filteredData = data.slice(-dayRange);

  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 bg-white border-b border-brand-light">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1 text-brand-muted hover:text-brand-primary" />
          <Separator orientation="vertical" className="mr-2 h-4 bg-brand-light" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/analytics/daily-stats" className="text-brand-muted hover:text-brand-primary">
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


      <div className="p-6 grid gap-6">
        <div className="flex flex-row gap-4 w-full">
          {/* Transaction Volumes Card */}
          <Card className="text-brand-subtle border-[#2368a0] flex-1">
            <CardHeader className="brand-gradient-primary text-white rounded-t-lg py-3 px-4">
              <CardTitle className="text-white text-md font-medium">Transaction Volumes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieChartData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {pieChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value} transactions`, "Count"]} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Transactions / Hour Card */}
          <Card className="text-brand-subtle border-[#2368a0] flex-1">
            <CardHeader className="brand-gradient-primary text-white rounded-t-lg py-3 px-4">
              <CardTitle className="text-white text-md font-medium">Transactions / Hour</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] pt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={data}
                    margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
                    barSize={30}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      horizontal={true}
                      vertical={false}
                      stroke="#8c8c8c"
                    />
                    <XAxis
                      dataKey="hour"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis
                      domain={[0, 2]}
                      ticks={[0, 0.5, 1.0, 1.5, 2.0]}
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12 }}
                    />
                    <Bar
                      dataKey="count"
                      fill="#2368a0"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-[#2368a0] bg-[#ffffff]">
          <CardHeader className="bg-[#2368a0] text-white rounded-t-lg py-3 px-4 flex justify-between items-left display-flex">
            <CardTitle className="text-white text-md font-medium">Last
              <select
                value={dayRange}
                onChange={(e) => setDayRange(Number(e.target.value))}
                className="bg-white text-gray-800 rounded px-2 py-1 text-sm ml-3 no-hover-border"
                style={{ borderColor: 'transparent' }}
              >
                <option value={1}>1 day</option>
                <option value={7}>7 days</option>
                <option value={15}>15 days</option>
                <option value={28}>28 days</option>
                <option value={30}>30 days</option>
              </select>
              &nbsp;&nbsp;&nbsp;volumes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full mt-2 ">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={filteredData}
                  margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
                  barSize={20}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#8c8c8c" horizontal={true} vertical={false} />
                  <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12 }}
                    interval={Math.ceil(dayRange / 10)}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12 }}
                  />
                  {/* Show both ob and ib as separate bars */}
                  <Bar dataKey="ob" fill="#2368a0" stackId="a" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="ib" fill="#82ca9d" stackId="a" radius={[0, 0, 4, 4]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>


        <div className="flex flex-row gap-4 w-full">
          {/* Transaction Volumes Card */}
          <Card className="text-brand-subtle border-[#2368a0] flex-1">
            <CardHeader className="brand-gradient-primary text-white rounded-t-lg py-3 px-4">
              <CardTitle className="text-white text-md font-medium">Daily Failure Rate (% wise)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieChartData1}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {pieChartData1.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS1[index % COLORS1.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value} transactions`, "Count"]} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Transactions / Hour Card */}
          {/* <Card className="text-brand-subtle border-[#2368a0] flex-1">
            <CardHeader className="brand-gradient-primary text-white rounded-t-lg py-3 px-4">
              <CardTitle className="text-white text-md font-medium">Transactions / Hour</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] pt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={data}
                    margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
                    barSize={30}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      horizontal={true}
                      vertical={false}
                      stroke="#8c8c8c"
                    />
                    <XAxis
                      dataKey="hour"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis
                      domain={[0, 2]}
                      ticks={[0, 0.5, 1.0, 1.5, 2.0]}
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12 }}
                    />
                    <Bar
                      dataKey="count"
                      fill="#8884d8"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card> */}

          <Card className="text-brand-subtle border-[#2368a0] flex-1">
            <CardHeader className="bg-[#2368a0] text-white rounded-t-lg py-3 px-4">
              <CardTitle className="text-white text-md font-medium">Top ten TP volumes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={partnerData}
                    layout="vertical"
                    margin={{ top: 20, right: 30, left: 80, bottom: 20 }}
                    barCategoryGap={10}
                    stackOffset="sign"
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#8c8c8c" horizontal={false} />
                    <XAxis
                      type="number"
                      domain={[-1, 1]}
                      ticks={[-1.0, -0.8, -0.6, -0.4, -0.2, 0, 0.2, 0.4, 0.6, 0.8, 1.0]}
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis
                      dataKey="partner"
                      type="category"
                      width={100}
                      tick={{ fontSize: 12 }}
                    />
                    <Tooltip />
                    <Bar dataKey="ib" fill="#2368a0" name="IB" stackId="stack" />
                    <Bar dataKey="ob" fill="#00aae7" name="OB" stackId="stack" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>



        {/* <Card className="text-brand-subtle border-[#2368a0]">
          <CardHeader>
            <CardTitle>Transaction Volumes</CardTitle>
            <CardDescription>Hourly transaction breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={transactionData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis label={{ value: 'Transactions / Hour', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <ChartLegendContent />
                  <Bar dataKey="orders" fill="#8884d8" name="Orders" />
                  <Bar dataKey="shipments" fill="#82ca9d" name="Shipments" />
                  <Bar dataKey="receipts" fill="#ffc658" name="Receipts" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card> */}

        {/* Success Rate Chart */}
        {/* <Card>
          <CardHeader>
            <CardTitle>Success Rate</CardTitle>
            <CardDescription>Hourly transaction success rate</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={successRateData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis label={{ value: 'Success Rate (%)', angle: -90, position: 'insideLeft' }} domain={[90, 100]} />
                  <Tooltip />
                  <ChartLegend />
                  <Line type="monotone" dataKey="successRate" stroke="#8884d8" name="Success Rate" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card> */}
      </div>


      {/* <div className="flex flex-1 flex-col gap-6 p-6 pt-0 bg-brand-subtle">
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
    </div> */}
    </SidebarInset >
  )
}