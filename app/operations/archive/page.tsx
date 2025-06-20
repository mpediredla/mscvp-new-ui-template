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
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import {
  Archive,
  Trash2,
  Calendar,
  HardDrive,
  AlertTriangle,
  CheckCircle,
  Clock,
  Download,
  Settings,
  FileText,
  Shield,
} from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const archiveJobsData = [
  {
    id: "ARC-001",
    name: "Q3 2023 Transaction Archive",
    type: "Transaction Logs",
    status: "Completed",
    startDate: "2024-01-10 02:00:00",
    endDate: "2024-01-10 04:30:00",
    recordsProcessed: 2847563,
    sizeArchived: "12.4 GB",
    retentionPeriod: "7 years",
    location: "AWS S3 - Archive Tier",
    createdBy: "System Scheduler",
  },
  {
    id: "ARC-002",
    name: "Partner Communication Archive",
    type: "Communication Logs",
    status: "In Progress",
    startDate: "2024-01-15 01:00:00",
    endDate: null,
    recordsProcessed: 1245789,
    sizeArchived: "5.2 GB",
    retentionPeriod: "5 years",
    location: "AWS S3 - Archive Tier",
    createdBy: "John Anderson",
  },
  {
    id: "ARC-003",
    name: "Error Log Archive - 2023",
    type: "Error Logs",
    status: "Scheduled",
    startDate: "2024-01-20 03:00:00",
    endDate: null,
    recordsProcessed: 0,
    sizeArchived: "0 GB",
    retentionPeriod: "3 years",
    location: "AWS S3 - Archive Tier",
    createdBy: "Sarah Wilson",
  },
]

const purgeJobsData = [
  {
    id: "PUR-001",
    name: "Old Debug Logs Purge",
    type: "Debug Logs",
    status: "Completed",
    startDate: "2024-01-12 03:00:00",
    endDate: "2024-01-12 03:15:00",
    recordsPurged: 5847291,
    sizeFreed: "28.7 GB",
    criteria: "Older than 90 days",
    approvedBy: "John Anderson",
  },
  {
    id: "PUR-002",
    name: "Temporary Files Cleanup",
    type: "Temporary Files",
    status: "Failed",
    startDate: "2024-01-14 02:30:00",
    endDate: "2024-01-14 02:35:00",
    recordsPurged: 0,
    sizeFreed: "0 GB",
    criteria: "Older than 30 days",
    approvedBy: "Mike Johnson",
  },
  {
    id: "PUR-003",
    name: "Archived Transaction Purge",
    type: "Archived Transactions",
    status: "Pending Approval",
    startDate: null,
    endDate: null,
    recordsPurged: 0,
    sizeFreed: "0 GB",
    criteria: "Older than 10 years",
    approvedBy: null,
  },
]

const retentionPolicies = [
  {
    id: "POL-001",
    name: "Transaction Data Retention",
    dataType: "Transaction Logs",
    retentionPeriod: "7 years",
    archiveAfter: "1 year",
    purgeAfter: "7 years",
    status: "Active",
    lastUpdated: "2023-12-15",
    compliance: "SOX, GDPR",
  },
  {
    id: "POL-002",
    name: "Communication Log Retention",
    dataType: "Communication Logs",
    retentionPeriod: "5 years",
    archiveAfter: "6 months",
    purgeAfter: "5 years",
    status: "Active",
    lastUpdated: "2023-11-20",
    compliance: "GDPR, HIPAA",
  },
  {
    id: "POL-003",
    name: "Error Log Retention",
    dataType: "Error Logs",
    retentionPeriod: "3 years",
    archiveAfter: "3 months",
    purgeAfter: "3 years",
    status: "Active",
    lastUpdated: "2023-10-10",
    compliance: "Internal Policy",
  },
  {
    id: "POL-004",
    name: "Debug Log Retention",
    dataType: "Debug Logs",
    retentionPeriod: "90 days",
    archiveAfter: "30 days",
    purgeAfter: "90 days",
    status: "Active",
    lastUpdated: "2024-01-05",
    compliance: "Internal Policy",
  },
]

export default function ArchivePurge() {
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
                <BreadcrumbPage className="text-brand-black">Archive & Purge</BreadcrumbPage>
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
            <Button variant="outline" size="sm" className="btn-accent border-brand-accent">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-6 p-6 pt-0 bg-brand-subtle">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-brand-black">Archive & Purge Management</h2>
            <p className="text-brand-muted">
              Manage data lifecycle with automated archiving and purging based on retention policies
            </p>
          </div>
        </div>

        <Alert className="alert-brand-info border-brand-accent bg-white">
          <Shield className="h-4 w-4 text-brand-accent" />
          <AlertTitle className="text-brand-black">Data Lifecycle Management</AlertTitle>
          <AlertDescription className="text-brand-muted">
            All archive and purge operations are logged and require appropriate permissions. Ensure compliance with your
            organization's data retention policies.
          </AlertDescription>
        </Alert>

        <div className="grid gap-6 md:grid-cols-4">
          <Card className="brand-card brand-card-primary">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-brand-black">Total Archived</CardTitle>
              <Archive className="h-4 w-4 text-brand-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-brand-black">847 GB</div>
              <p className="text-xs text-brand-muted">Across all data types</p>
            </CardContent>
          </Card>

          <Card className="brand-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-brand-black">Space Freed</CardTitle>
              <HardDrive className="h-4 w-4 text-brand-muted" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-brand-black">1.2 TB</div>
              <p className="text-xs text-brand-muted">This month</p>
            </CardContent>
          </Card>

          <Card className="brand-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-brand-black">Active Jobs</CardTitle>
              <Clock className="h-4 w-4 text-brand-muted" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-brand-black">3</div>
              <p className="text-xs text-brand-muted">1 in progress</p>
            </CardContent>
          </Card>

          <Card className="brand-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-brand-black">Retention Policies</CardTitle>
              <FileText className="h-4 w-4 text-brand-muted" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-brand-black">4</div>
              <p className="text-xs text-brand-muted">All active</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="brand-card">
            <CardHeader className="brand-gradient-primary text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-white">
                <Archive className="h-5 w-5" />
                Create Archive Job
              </CardTitle>
              <CardDescription className="text-brand-light">Schedule a new data archiving operation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-2">
                <Label htmlFor="archive-name" className="text-brand-black">
                  Job Name
                </Label>
                <Input
                  id="archive-name"
                  placeholder="Q4 2023 Transaction Archive"
                  className="border-brand-light focus-brand"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="data-type" className="text-brand-black">
                  Data Type
                </Label>
                <Select>
                  <SelectTrigger className="border-brand-light focus-brand">
                    <SelectValue placeholder="Select data type" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-brand-light">
                    <SelectItem value="transactions">Transaction Logs</SelectItem>
                    <SelectItem value="communications">Communication Logs</SelectItem>
                    <SelectItem value="errors">Error Logs</SelectItem>
                    <SelectItem value="debug">Debug Logs</SelectItem>
                    <SelectItem value="audit">Audit Logs</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="start-date" className="text-brand-black">
                    Start Date
                  </Label>
                  <Input id="start-date" type="date" className="border-brand-light focus-brand" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="end-date" className="text-brand-black">
                    End Date
                  </Label>
                  <Input id="end-date" type="date" className="border-brand-light focus-brand" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="archive-location" className="text-brand-black">
                  Archive Location
                </Label>
                <Select>
                  <SelectTrigger className="border-brand-light focus-brand">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-brand-light">
                    <SelectItem value="s3-standard">AWS S3 - Standard</SelectItem>
                    <SelectItem value="s3-archive">AWS S3 - Archive Tier</SelectItem>
                    <SelectItem value="s3-glacier">AWS S3 - Glacier</SelectItem>
                    <SelectItem value="local">Local Storage</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="schedule-job" />
                <Label htmlFor="schedule-job" className="text-brand-black">
                  Schedule for later execution
                </Label>
              </div>

              <Button className="w-full btn-primary">
                <Archive className="h-4 w-4 mr-2" />
                Create Archive Job
              </Button>
            </CardContent>
          </Card>

          <Card className="brand-card">
            <CardHeader className="bg-brand-error text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-white">
                <Trash2 className="h-5 w-5" />
                Create Purge Job
              </CardTitle>
              <CardDescription className="text-white opacity-90">Schedule a data purging operation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-2">
                <Label htmlFor="purge-name" className="text-brand-black">
                  Job Name
                </Label>
                <Input id="purge-name" placeholder="Old Debug Logs Purge" className="border-brand-light focus-brand" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="purge-data-type" className="text-brand-black">
                  Data Type
                </Label>
                <Select>
                  <SelectTrigger className="border-brand-light focus-brand">
                    <SelectValue placeholder="Select data type" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-brand-light">
                    <SelectItem value="debug">Debug Logs</SelectItem>
                    <SelectItem value="temp">Temporary Files</SelectItem>
                    <SelectItem value="archived">Archived Data</SelectItem>
                    <SelectItem value="backup">Backup Files</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="purge-criteria" className="text-brand-black">
                  Purge Criteria
                </Label>
                <Select>
                  <SelectTrigger className="border-brand-light focus-brand">
                    <SelectValue placeholder="Select criteria" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-brand-light">
                    <SelectItem value="30days">Older than 30 days</SelectItem>
                    <SelectItem value="90days">Older than 90 days</SelectItem>
                    <SelectItem value="1year">Older than 1 year</SelectItem>
                    <SelectItem value="3years">Older than 3 years</SelectItem>
                    <SelectItem value="custom">Custom criteria</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="purge-notes" className="text-brand-black">
                  Notes
                </Label>
                <Textarea
                  id="purge-notes"
                  placeholder="Additional notes or justification..."
                  className="min-h-[80px] border-brand-light focus-brand"
                />
              </div>

              <Alert className="alert-brand-warning border-brand-error bg-white">
                <AlertTriangle className="h-4 w-4 text-brand-error" />
                <AlertDescription className="text-brand-black">
                  Purge operations are irreversible. Ensure data is properly archived before purging.
                </AlertDescription>
              </Alert>

              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full btn-danger">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Create Purge Job
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-white border-brand-light">
                  <DialogHeader>
                    <DialogTitle className="text-brand-black">Confirm Purge Job Creation</DialogTitle>
                    <DialogDescription className="text-brand-muted">
                      This action will create a purge job that will permanently delete data. This operation cannot be
                      undone.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="confirm-backup" />
                      <Label htmlFor="confirm-backup" className="text-brand-black">
                        I confirm that data has been properly backed up
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="confirm-approval" />
                      <Label htmlFor="confirm-approval" className="text-brand-black">
                        I have the necessary approval for this operation
                      </Label>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" className="btn-secondary border-brand-light">
                      Cancel
                    </Button>
                    <Button variant="destructive" className="btn-danger">
                      Create Purge Job
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>

        <Card className="brand-card">
          <CardHeader className="brand-gradient-primary text-white rounded-t-lg">
            <CardTitle className="text-white">Archive Jobs</CardTitle>
            <CardDescription className="text-brand-light">Monitor and manage data archiving operations</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <Table className="table-brand">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-brand-black">Job Name</TableHead>
                  <TableHead className="text-brand-black">Type</TableHead>
                  <TableHead className="text-brand-black">Status</TableHead>
                  <TableHead className="text-brand-black">Start Date</TableHead>
                  <TableHead className="text-right text-brand-black">Records</TableHead>
                  <TableHead className="text-right text-brand-black">Size</TableHead>
                  <TableHead className="text-brand-black">Retention</TableHead>
                  <TableHead className="text-brand-black">Location</TableHead>
                  <TableHead className="text-brand-black">Created By</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {archiveJobsData.map((job) => (
                  <TableRow key={job.id} className="hover:bg-brand-subtle">
                    <TableCell>
                      <div>
                        <div className="font-medium text-brand-black">{job.name}</div>
                        <div className="text-sm text-brand-muted">{job.id}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="badge-brand-outline">
                        {job.type}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          job.status === "Completed"
                            ? "default"
                            : job.status === "In Progress"
                              ? "secondary"
                              : "outline"
                        }
                        className={
                          job.status === "Completed"
                            ? "badge-brand-primary"
                            : job.status === "In Progress"
                              ? "badge-brand-accent"
                              : "badge-brand-outline"
                        }
                      >
                        {job.status === "In Progress" && <Clock className="h-3 w-3 mr-1" />}
                        {job.status === "Completed" && <CheckCircle className="h-3 w-3 mr-1" />}
                        {job.status === "Scheduled" && <Calendar className="h-3 w-3 mr-1" />}
                        {job.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-brand-black">{job.startDate}</TableCell>
                    <TableCell className="text-right text-brand-black">
                      {job.recordsProcessed.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right font-medium text-brand-black">{job.sizeArchived}</TableCell>
                    <TableCell className="text-brand-black">{job.retentionPeriod}</TableCell>
                    <TableCell className="text-sm text-brand-black">{job.location}</TableCell>
                    <TableCell className="text-brand-black">{job.createdBy}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="brand-card">
          <CardHeader className="brand-gradient-primary text-white rounded-t-lg">
            <CardTitle className="text-white">Purge Jobs</CardTitle>
            <CardDescription className="text-brand-light">Monitor and manage data purging operations</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <Table className="table-brand">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-brand-black">Job Name</TableHead>
                  <TableHead className="text-brand-black">Type</TableHead>
                  <TableHead className="text-brand-black">Status</TableHead>
                  <TableHead className="text-brand-black">Start Date</TableHead>
                  <TableHead className="text-right text-brand-black">Records Purged</TableHead>
                  <TableHead className="text-right text-brand-black">Space Freed</TableHead>
                  <TableHead className="text-brand-black">Criteria</TableHead>
                  <TableHead className="text-brand-black">Approved By</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {purgeJobsData.map((job) => (
                  <TableRow key={job.id} className="hover:bg-brand-subtle">
                    <TableCell>
                      <div>
                        <div className="font-medium text-brand-black">{job.name}</div>
                        <div className="text-sm text-brand-muted">{job.id}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="badge-brand-outline">
                        {job.type}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          job.status === "Completed" ? "default" : job.status === "Failed" ? "destructive" : "secondary"
                        }
                        className={
                          job.status === "Completed"
                            ? "badge-brand-primary"
                            : job.status === "Failed"
                              ? "badge-brand-error"
                              : "badge-brand-accent"
                        }
                      >
                        {job.status === "Completed" && <CheckCircle className="h-3 w-3 mr-1" />}
                        {job.status === "Failed" && <AlertTriangle className="h-3 w-3 mr-1" />}
                        {job.status === "Pending Approval" && <Clock className="h-3 w-3 mr-1" />}
                        {job.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-brand-black">{job.startDate || "Not started"}</TableCell>
                    <TableCell className="text-right text-brand-black">{job.recordsPurged.toLocaleString()}</TableCell>
                    <TableCell className="text-right font-medium text-brand-black">{job.sizeFreed}</TableCell>
                    <TableCell className="text-brand-black">{job.criteria}</TableCell>
                    <TableCell className="text-brand-black">{job.approvedBy || "Pending"}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="brand-card">
          <CardHeader className="brand-gradient-primary text-white rounded-t-lg">
            <CardTitle className="text-white">Data Retention Policies</CardTitle>
            <CardDescription className="text-brand-light">
              Configure and manage automated data lifecycle policies
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-brand-primary border-brand-primary bg-white">
                  Active: 4
                </Badge>
              </div>
              <Button className="btn-primary">
                <Settings className="h-4 w-4 mr-2" />
                Create Policy
              </Button>
            </div>
            <Table className="table-brand">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-brand-black">Policy Name</TableHead>
                  <TableHead className="text-brand-black">Data Type</TableHead>
                  <TableHead className="text-brand-black">Archive After</TableHead>
                  <TableHead className="text-brand-black">Purge After</TableHead>
                  <TableHead className="text-brand-black">Status</TableHead>
                  <TableHead className="text-brand-black">Compliance</TableHead>
                  <TableHead className="text-brand-black">Last Updated</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {retentionPolicies.map((policy) => (
                  <TableRow key={policy.id} className="hover:bg-brand-subtle">
                    <TableCell>
                      <div>
                        <div className="font-medium text-brand-black">{policy.name}</div>
                        <div className="text-sm text-brand-muted">{policy.id}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="badge-brand-outline">
                        {policy.dataType}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-brand-black">{policy.archiveAfter}</TableCell>
                    <TableCell className="text-brand-black">{policy.purgeAfter}</TableCell>
                    <TableCell>
                      <Badge variant="default" className="badge-brand-primary">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        {policy.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {policy.compliance.split(", ").map((comp, index) => (
                          <Badge key={index} variant="secondary" className="text-xs badge-brand-secondary">
                            {comp}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="text-sm text-brand-black">{policy.lastUpdated}</TableCell>
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
