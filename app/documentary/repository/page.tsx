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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  FileText,
  Upload,
  Search,
  Download,
  Eye,
  Trash2,
  MoreHorizontal,
  File,
  FileSpreadsheet,
  FileImage,
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
import { Label } from "@/components/ui/label"
import React from "react"

const documentsData = [
  {
    id: "1",
    name: "EDI Implementation Guide v2.1.pdf",
    type: "PDF",
    category: "Technical Documentation",
    size: "2.4 MB",
    uploadedBy: "John Anderson",
    uploadDate: "2024-01-15",
    lastModified: "2024-01-15",
    downloads: 47,
    status: "Active",
  },
  {
    id: "2",
    name: "Partner Onboarding Checklist.xlsx",
    type: "Excel",
    category: "Operational",
    size: "156 KB",
    uploadedBy: "Sarah Wilson",
    uploadDate: "2024-01-14",
    lastModified: "2024-01-14",
    downloads: 23,
    status: "Active",
  },
  {
    id: "3",
    name: "Transaction Error Codes Reference.docx",
    type: "Word",
    category: "Reference",
    size: "890 KB",
    uploadedBy: "Mike Johnson",
    uploadDate: "2024-01-13",
    lastModified: "2024-01-13",
    downloads: 156,
    status: "Active",
  },
  {
    id: "4",
    name: "SLA Agreement Template.pdf",
    type: "PDF",
    category: "Legal",
    size: "1.2 MB",
    uploadedBy: "Lisa Chen",
    uploadDate: "2024-01-12",
    lastModified: "2024-01-12",
    downloads: 34,
    status: "Active",
  },
  {
    id: "5",
    name: "Network Architecture Diagram.png",
    type: "Image",
    category: "Technical Documentation",
    size: "3.1 MB",
    uploadedBy: "David Brown",
    uploadDate: "2024-01-11",
    lastModified: "2024-01-11",
    downloads: 89,
    status: "Archived",
  },
]

const getFileIcon = (type: string) => {
  switch (type.toLowerCase()) {
    case "pdf":
      return <FileText className="h-4 w-4 text-brand-error" />
    case "excel":
      return <FileSpreadsheet className="h-4 w-4 text-brand-primary" />
    case "word":
      return <File className="h-4 w-4 text-brand-accent" />
    case "image":
      return <FileImage className="h-4 w-4 text-brand-muted" />
    default:
      return <FileText className="h-4 w-4 text-brand-muted" />
  }
}

export default function DocumentRepository() {

  const [selectedPartner, setSelectedPartner] = React.useState("Category")
  const partners = ["All Categories", "Technical Documentation", "Operational", "Reference", "Legal"]
  const [fileType, setFileType] = React.useState("File Type")
  const files = ["All Types", "PDF", "Excel", "Word", "Image"]

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
                  Documentary
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block text-brand-light" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-brand-black">Document Repository</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-6 p-6 pt-0 bg-brand-subtle">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-brand-black">Document Repository</h2>
            <p className="text-brand-muted">Centralized storage for technical and operational documentation</p>
          </div>
          <Button className="btn-primary">
            <Upload className="h-4 w-4 mr-2" />
            Upload Document
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-muted h-4 w-4" />
            <Input placeholder="Search documents..." className="pl-10 border-brand-light focus-brand" />
          </div>

          <div className="space-y-2">
            {/* <Label htmlFor="partner" className="text-brand-black">
                  Partner
                </Label> */}
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
            {/* <Label htmlFor="partner" className="text-brand-black">
                  Partner
                </Label> */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center justify-between w-full px-3 py-2 text-sm border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary">
                {fileType}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[200px] border-brand-light">
                {files.map((file) => (
                  <DropdownMenuItem
                    key={file}
                    className={`${fileType === file ? 'bg-brand-accent text-white' : 'hover:bg-brand-subtle'}`}
                    onClick={() => setFileType(file)}
                  >
                    <span className="flex items-center">
                      {fileType === file && (
                        <Check className="h-4 w-4 mr-2" />
                      )}
                      {file}
                    </span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

        </div>

        <div className="grid gap-6 md:grid-cols-4">
          <Card className="brand-card brand-card-primary">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-brand-black">Total Documents</CardTitle>
              <FileText className="h-4 w-4 text-brand-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-brand-black">247</div>
              <p className="text-xs text-brand-muted">+12 this month</p>
            </CardContent>
          </Card>

          <Card className="brand-card brand-card-primary">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-brand-black">Categories</CardTitle>
              <File className="h-4 w-4 text-brand-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-brand-black">8</div>
              <p className="text-xs text-brand-muted">Active categories</p>
            </CardContent>
          </Card>

          <Card className="brand-card brand-card-primary">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-brand-black">Storage Used</CardTitle>
              <FileSpreadsheet className="h-4 w-4 text-brand-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-brand-black">1.2 GB</div>
              <p className="text-xs text-brand-muted">of 10 GB limit</p>
            </CardContent>
          </Card>

          <Card className="brand-card brand-card-primary">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-brand-black">Downloads</CardTitle>
              <Download className="h-4 w-4 text-brand-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-brand-black">2,847</div>
              <p className="text-xs text-brand-muted">This month</p>
            </CardContent>
          </Card>
        </div>

        <Card className="brand-card">
          <CardHeader className="brand-gradient-primary text-white rounded-t-lg">
            <CardTitle className="text-white">Document Library</CardTitle>
            <CardDescription className="text-brand-light">Browse and manage all uploaded documents</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <Table className="table-brand">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-brand-black">Document</TableHead>
                  <TableHead className="text-brand-black">Category</TableHead>
                  <TableHead className="text-brand-black">Size</TableHead>
                  <TableHead className="text-brand-black">Uploaded By</TableHead>
                  <TableHead className="text-brand-black">Upload Date</TableHead>
                  <TableHead className="text-right text-brand-black">Downloads</TableHead>
                  <TableHead className="text-brand-black">Status</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {documentsData.map((doc) => (
                  <TableRow key={doc.id} className="hover:bg-brand-subtle">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        {getFileIcon(doc.type)}
                        <div>
                          <div className="font-medium text-brand-black">{doc.name}</div>
                          <div className="text-sm text-brand-muted">{doc.type}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="badge-brand-outline">
                        {doc.category}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-brand-black">{doc.size}</TableCell>
                    <TableCell className="text-brand-black">{doc.uploadedBy}</TableCell>
                    <TableCell className="text-brand-black">{doc.uploadDate}</TableCell>
                    <TableCell className="text-right text-brand-black">{doc.downloads}</TableCell>
                    <TableCell>
                      <Badge
                        variant={doc.status === "Active" ? "default" : "secondary"}
                        className={doc.status === "Active" ? "badge-brand-primary" : "badge-brand-secondary"}
                      >
                        {doc.status}
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
                            Preview
                          </DropdownMenuItem>
                          <DropdownMenuItem className="hover:bg-brand-subtle hover:text-brand-primary">
                            <Download className="mr-2 h-4 w-4" />
                            Download
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
