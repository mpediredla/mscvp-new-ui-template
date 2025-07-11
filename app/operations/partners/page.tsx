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
import { Plus, Search, MoreHorizontal, Edit, Trash2, Power, PowerOff, Eye, Filter, RotateCcw, ChevronDown, Check, Download } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from "react"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useRouter } from "next/navigation"

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


const partnerList=[
    {
      "sortField": null,
      "sortOrder": null,
      "limit": 0,
      "offSet": 0,
      "countFlag": null,
      "partnerId": null,
      "partnerName": "Michael Foods",
      "internalIdentifier": null,
      "partnerIdentifier": "9268230000T",
      "applicationId": null,
      "countryCode": "USA",
      "status": "ACTIVE",
      "createdBy": "",
      "createdDate": "06/24/2025 07:26 ",
      "changedBy": null,
      "changedDate": null,
      "pointOfContacts": {
        "ediContactName": "",
        "ediTitle": "",
        "ediEmailId": "divya.bucha@americold.com",
        "ediPhoneNumber": "",
        "businessContactName": "",
        "businessTitle": "",
        "businessEmailId": "divya.bucha@americold.com",
        "businessPhoneNumber": "",
        "dlEmail": "divya.bucha@americold.com",
        "dlPhoneNumber": ""
      }
    },
    {
      "sortField": null,
      "sortOrder": null,
      "limit": 0,
      "offSet": 0,
      "countFlag": null,
      "partnerId": null,
      "partnerName": "BUTTER-BALL",
      "internalIdentifier": null,
      "partnerIdentifier": "91965867437040",
      "applicationId": null,
      "countryCode": "USA",
      "status": "ACTIVE",
      "createdBy": "",
      "createdDate": "04/25/2025 09:42 ",
      "changedBy": null,
      "changedDate": null,
      "pointOfContacts": {
        "ediContactName": "B",
        "ediTitle": "",
        "ediEmailId": "divya.bucha1@americold.com",
        "ediPhoneNumber": "",
        "businessContactName": "",
        "businessTitle": "",
        "businessEmailId": "divya.bucha@americold.com",
        "businessPhoneNumber": "",
        "dlEmail": "divya.bucha@americold.com",
        "dlPhoneNumber": ""
      }
    },
    {
      "sortField": null,
      "sortOrder": null,
      "limit": 0,
      "offSet": 0,
      "countFlag": null,
      "partnerId": null,
      "partnerName": "BELPASTRY",
      "internalIdentifier": null,
      "partnerIdentifier": "5413141999952",
      "applicationId": null,
      "countryCode": "USA",
      "status": "ACTIVE",
      "createdBy": "",
      "createdDate": "04/08/2025 06:34 ",
      "changedBy": null,
      "changedDate": null,
      "pointOfContacts": {
        "ediContactName": "",
        "ediTitle": "",
        "ediEmailId": "divya.bucha@americold.com",
        "ediPhoneNumber": "",
        "businessContactName": "",
        "businessTitle": "",
        "businessEmailId": "divya.bucha@americold.com",
        "businessPhoneNumber": "",
        "dlEmail": "divya.bucha@americold.com",
        "dlPhoneNumber": ""
      }
    },
    {
      "sortField": null,
      "sortOrder": null,
      "limit": 0,
      "offSet": 0,
      "countFlag": null,
      "partnerId": null,
      "partnerName": "BELPASTRY",
      "internalIdentifier": null,
      "partnerIdentifier": "5413141999952",
      "applicationId": null,
      "countryCode": "USA",
      "status": "ACTIVE",
      "createdBy": "",
      "createdDate": "04/08/2025 06:34 ",
      "changedBy": null,
      "changedDate": null,
      "pointOfContacts": {
        "ediContactName": "",
        "ediTitle": "",
        "ediEmailId": "divya.bucha@americold.com",
        "ediPhoneNumber": "",
        "businessContactName": "",
        "businessTitle": "",
        "businessEmailId": "divya.bucha@americold.com",
        "businessPhoneNumber": "",
        "dlEmail": "divya.bucha@americold.com",
        "dlPhoneNumber": ""
      }
    },
    {
      "sortField": null,
      "sortOrder": null,
      "limit": 0,
      "offSet": 0,
      "countFlag": null,
      "partnerId": null,
      "partnerName": "BELPASTRY",
      "internalIdentifier": null,
      "partnerIdentifier": "5413141999952",
      "applicationId": null,
      "countryCode": "USA",
      "status": "ACTIVE",
      "createdBy": "",
      "createdDate": "04/08/2025 06:34 ",
      "changedBy": null,
      "changedDate": null,
      "pointOfContacts": {
        "ediContactName": "",
        "ediTitle": "",
        "ediEmailId": "divya.bucha@americold.com",
        "ediPhoneNumber": "",
        "businessContactName": "",
        "businessTitle": "",
        "businessEmailId": "divya.bucha@americold.com",
        "businessPhoneNumber": "",
        "dlEmail": "divya.bucha@americold.com",
        "dlPhoneNumber": ""
      }
    },
    {
      "sortField": null,
      "sortOrder": null,
      "limit": 0,
      "offSet": 0,
      "countFlag": null,
      "partnerId": null,
      "partnerName": "BELPASTRY",
      "internalIdentifier": null,
      "partnerIdentifier": "5413141999952",
      "applicationId": null,
      "countryCode": "USA",
      "status": "ACTIVE",
      "createdBy": "",
      "createdDate": "04/08/2025 06:34 ",
      "changedBy": null,
      "changedDate": null,
      "pointOfContacts": {
        "ediContactName": "",
        "ediTitle": "",
        "ediEmailId": "divya.bucha@americold.com",
        "ediPhoneNumber": "",
        "businessContactName": "",
        "businessTitle": "",
        "businessEmailId": "divya.bucha@americold.com",
        "businessPhoneNumber": "",
        "dlEmail": "divya.bucha@americold.com",
        "dlPhoneNumber": ""
      }
    },
    {
      "sortField": null,
      "sortOrder": null,
      "limit": 0,
      "offSet": 0,
      "countFlag": null,
      "partnerId": null,
      "partnerName": "MEATI FOODS",
      "internalIdentifier": null,
      "partnerIdentifier": "3032000273",
      "applicationId": null,
      "countryCode": "USA",
      "status": "ACTIVE",
      "createdBy": "",
      "createdDate": "03/21/2025 07:20 ",
      "changedBy": null,
      "changedDate": null,
      "pointOfContacts": {
        "ediContactName": "",
        "ediTitle": "",
        "ediEmailId": "123@amc.com",
        "ediPhoneNumber": "1234567890",
        "businessContactName": "",
        "businessTitle": "",
        "businessEmailId": "123@amc.com",
        "businessPhoneNumber": "1234567890",
        "dlEmail": "1234@amc.com",
        "dlPhoneNumber": "1234567890"
      }
    },
    {
      "sortField": null,
      "sortOrder": null,
      "limit": 0,
      "offSet": 0,
      "countFlag": null,
      "partnerId": null,
      "partnerName": "PIZZA HUT / KFC",
      "internalIdentifier": null,
      "partnerIdentifier": "0605100016510",
      "applicationId": null,
      "countryCode": "AU",
      "status": "ACTIVE",
      "createdBy": "",
      "createdDate": "02/25/2025 03:52 ",
      "changedBy": null,
      "changedDate": null,
      "pointOfContacts": {
        "ediContactName": "",
        "ediTitle": "",
        "ediEmailId": "onkar.deshpande@americold.com",
        "ediPhoneNumber": "",
        "businessContactName": "",
        "businessTitle": "",
        "businessEmailId": "onkar.deshpande@americold.com",
        "businessPhoneNumber": "",
        "dlEmail": "onkar.deshpande@americold.com",
        "dlPhoneNumber": "1234"
      }
    },
    {
      "sortField": null,
      "sortOrder": null,
      "limit": 0,
      "offSet": 0,
      "countFlag": null,
      "partnerId": null,
      "partnerName": "Pizza Hut(BCF00545)",
      "internalIdentifier": null,
      "partnerIdentifier": "BCF00545",
      "applicationId": null,
      "countryCode": "AU",
      "status": "ACTIVE",
      "createdBy": "",
      "createdDate": "02/20/2025 11:00 ",
      "changedBy": null,
      "changedDate": null,
      "pointOfContacts": {
        "ediContactName": "",
        "ediTitle": "",
        "ediEmailId": "divya.bucha@americold.com",
        "ediPhoneNumber": "",
        "businessContactName": "",
        "businessTitle": "",
        "businessEmailId": "divya.bucha@americold.com",
        "businessPhoneNumber": "",
        "dlEmail": "divya.bucha@americold.com",
        "dlPhoneNumber": ""
      }
    },
    {
      "sortField": null,
      "sortOrder": null,
      "limit": 0,
      "offSet": 0,
      "countFlag": null,
      "partnerId": null,
      "partnerName": "WOOLWORTHS (NAN-01907)",
      "internalIdentifier": null,
      "partnerIdentifier": "1907",
      "applicationId": null,
      "countryCode": "AU",
      "status": "ACTIVE",
      "createdBy": "",
      "createdDate": "02/18/2025 10:23 ",
      "changedBy": null,
      "changedDate": null,
      "pointOfContacts": {
        "ediContactName": "",
        "ediTitle": "",
        "ediEmailId": "onkar.deshpande@americold.com",
        "ediPhoneNumber": "",
        "businessContactName": "",
        "businessTitle": "",
        "businessEmailId": "onkar.deshpande@americold.com",
        "businessPhoneNumber": "",
        "dlEmail": "onkar.deshpande@americold.com",
        "dlPhoneNumber": ""
      }
    }
  ]


const statusOptions = [
  "Active",
  "INACTIVE",
];


export default function Partners() {

  const [selectedStatus, setSelectedStatus] = useState("Select");
  const [isAccordianOpen, setIsAccordianOpen] = useState(true);
  const [showTable, setShowTable] = useState(false);
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 8;
  const totalPages = Math.ceil(partnerList.length / rowsPerPage);
  
  const handleAddPartner = () => {
    router.push('/operations/partners/addPartners'); 
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
                <BreadcrumbLink href="/operations/partners" className="text-brand-muted hover:text-brand-primary">
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
        <div className="ml-auto px-4">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="btn-primary border-brand-primary"
              onClick={handleAddPartner}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Partner
            </Button>
          </div>
        </div>
      </header>


      <div className="flex flex-1 flex-col gap-2 p-6 pt-2 bg-brand-subtle">
        {/* <div className="flex items-center justify-between">
          <div>
          </div>
          <Button className="btn-primary">
            <Plus className="h-4 w-4 mr-2" />
            Add Partner
          </Button>
        </div> */}

        {/* <div className="flex items-center gap-4">
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
        </div> */}

        <Card className="brand-card">
          <CardHeader className="brand-gradient-primary text-white rounded-t-lg py-2 px-4">
            <div className="flex items-center justify-between"> {/* Changed to justify-between */}
              <div className="flex items-center gap-3">
                <CardTitle className="text-white text-sm font-medium">Partners</CardTitle>
              </div>

              {/* Accordion Toggle Button */}
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/10 p-1 rounded-full"
                onClick={() => setIsAccordianOpen(!isAccordianOpen)} // Add state management
              >
                <ChevronDown className={`h-4 w-4 transition-transform ${isAccordianOpen ? "rotate-180" : ""}`} />
              </Button>
            </div>
          </CardHeader>
          {isAccordianOpen && (
            <CardContent className="pt-4">
              <div className="grid gap-3" >
                <div className="grid grid-cols-4 gap-3">

                  <div className="space-y-1">
                    <Label className="text-brand-black text-sm">Partner Name</Label>
                    <Input
                      type="text"
                      placeholder="Enter Document ID"
                      className="border-brand-light focus-brand h-9 py-1.5 text-sm"
                    />
                  </div>

                  <div className="space-y-1">
                    <Label className="text-brand-black text-sm">Status</Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center justify-between w-full px-3 py-1.5 text-sm border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary h-9">
                        {selectedStatus}
                        <ChevronDown className="w-4 h-4 ml-2" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-[200px] border-brand-light">
                        <DropdownMenuItem
                          className={`${selectedStatus === "Select" ? 'bg-brand-accent text-white' : 'hover:bg-brand-subtle'}`}
                          onClick={() => setSelectedStatus("Select")}
                        >
                          <span className="flex items-center">
                            {selectedStatus === "Select" && (
                              <Check className="h-4 w-4 mr-2" />
                            )}
                            Select
                          </span>
                        </DropdownMenuItem>
                        {statusOptions.map((status) => (
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
                  <div className="space-y-1">
                    <Label className="text-brand-black text-sm">Partner Identifier</Label>
                    <Input
                      type="text"
                      placeholder="Enter Partner Id"
                      className="border-brand-light focus-brand h-9 py-1.5 text-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-brand-black text-sm">Country Code</Label>
                    <Input
                      type="text"
                      placeholder="Enter Country Code"
                      className="border-brand-light focus-brand h-9 py-1.5 text-sm"
                    />
                  </div>
                </div>

                <div className="flex  items-center mt-2 gap-2">
                  <Button className="btn-primary h-9 text-sm"
                    onClick={() => { setShowTable(true) }}
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                  <Button variant="outline" className="h-9 text-sm text-brand-dark border-brand-light"
                    onClick={() => { setShowTable(false) }}
                  >
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Reset
                  </Button>
                </div>
              </div>
            </CardContent>
          )}
        </Card>


        {showTable &&
          <Card className="brand-card  ">
          <CardContent className="pt-6">
            {/* Table for Document List */}
              <div className="overflow-x-auto rounded-lg border border-brand-light bg-white shadow-sm">
                {/* Column selection menu */}
                <Table className="table-brand">
                  <TableHeader >
                    <TableRow className="[&>th]:transition-colors [&>th]:duration-150 [&>th]:ease-in hover:[&>th]:bg-brand-subtle">
                      {/* <TableHead className="w-10 px-3 py-2">
                        <Checkbox className="rounded border-brand-light" />
                      </TableHead> */}
                        <TableHead className="text-[#ffffff] font-semibold text-sm px-3 py-2 whitespace-nowrap">
                         Name
                        </TableHead>
                      <TableHead className="text-[#ffffff] font-semibold text-sm px-3 py-2 whitespace-nowrap">
                          Partner Id
                        </TableHead>
                        <TableHead className="text-[#ffffff] font-semibold text-sm px-3 py-2 whitespace-nowrap">
                          Country
                        </TableHead>
                        <TableHead className="text-[#ffffff] font-semibold text-sm px-3 py-2 whitespace-nowrap">
                          Status
                        </TableHead>
                        <TableHead className="text-[#ffffff] font-semibold text-sm px-3 py-2 whitespace-nowrap">
                         EDI Email
                        </TableHead>
                        <TableHead className="text-[#ffffff] font-semibold text-sm px-3 py-2 whitespace-nowrap">
                          EDI Phone
                        </TableHead>
                        <TableHead className="text-[#ffffff] font-semibold text-sm px-3 py-2 whitespace-nowrap">
                          Business Email
                        </TableHead>
                        <TableHead className="text-[#ffffff] font-semibold text-sm px-3 py-2 whitespace-nowrap">
                         DL Email
                        </TableHead>
                        <TableHead className="text-[#ffffff] font-semibold text-sm px-3 py-2 whitespace-nowrap">
                          Created On
                        </TableHead>
                        <TableHead className="text-[#ffffff] font-semibold text-sm px-3 py-2 whitespace-nowrap">
                          Delete Account
                        </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {partnerList.slice(
                        (currentPage - 1) * rowsPerPage,
                        currentPage * rowsPerPage
                      )
                      .map((pat: any, idx: number) => (
                        <TableRow
                          key={pat.partnerIdentifier ? pat.partnerIdentifier + '-' + idx : idx}
                          className={`transition-colors border-b border-[#e5e7eb] ${idx % 2 === 0
                            ? "bg-[#f1f3f7]"
                            : "bg-brand-subtle/50"
                            } hover:bg-[#e9ecef]`}
                        >
                          {/* <TableCell className="px-3 py-2">
                            <Checkbox className="rounded border-brand-light" />
                          </TableCell> */}
                            <TableCell className="px-3 py-2 text-brand-black whitespace-nowrap">
                              {pat.partnerName}
                            </TableCell>
                            <TableCell className="px-3 py-2 text-brand-black whitespace-nowrap">
                              {pat.partnerIdentifier}
                            </TableCell>
                            <TableCell className="px-3 py-2 text-brand-black whitespace-nowrap">
                              {pat.countryCode}
                            </TableCell>
                            <TableCell className="px-3 py-2 text-brand-black whitespace-nowrap">
                              {pat.status}
                            </TableCell>
                            <TableCell className="px-3 py-2 text-brand-black whitespace-nowrap">
                              {pat.pointOfContacts.ediEmailId}
                            </TableCell>
                            <TableCell className="px-3 py-2 text-brand-black whitespace-nowrap">
                              {pat.pointOfContacts.ediPhoneNumber? pat.pointOfContacts.ediPhoneNumber:"N/A"}
                            </TableCell>
                            <TableCell className="px-3 py-2 text-brand-black whitespace-nowrap">
                              {pat.pointOfContacts.businessEmailId}
                            </TableCell>
                            <TableCell className="px-3 py-2 text-brand-black whitespace-nowrap">
                              {pat.pointOfContacts.dlEmail}
                            </TableCell>
                         
                            <TableCell className="px-3 py-2 text-brand-black whitespace-nowrap">
                              {pat.createdDate}
                            </TableCell>
                            <TableCell className="px-3 py-2 text-brand-black whitespace-nowrap">
                                <div className="flex justify-center">
                                <Button
                                  variant="destructive"
                                  size="icon"
                                  className="h-8 w-8 bg-brand-error"
                                  onClick={() => {
                                  // Add your delete logic here
                                  alert(`Delete partner: ${pat.partnerName}`);
                                }}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                              </div>
                            </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
                {/* Pagination Controls */}
                <div className="flex justify-between items-center px-4 py-2 bg-white border-t border-brand-light">
                  <span className="text-sm text-brand-muted">
                    Page {currentPage} of {currentPage}
                  </span>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 px-2"
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                      }
                      disabled={currentPage === 1}
                    >
                      Prev
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 px-2"
                      onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                      }
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </Button>
                  </div>
                </div>
                {partnerList.length === 0 && (
                  <div className="py-8 text-center text-brand-muted text-sm">
                    No documents found.
                  </div>
                )}
              </div>
          </CardContent>
        </Card>
        }
      </div>
      
    </SidebarInset>
  )
}
