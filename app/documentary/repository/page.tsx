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
  Filter,
  ChevronDown,
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
import React, { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"

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

const statuses = ["All Status", "Successful", "Failed", "Pending"]
const dateRanges = [
  "Last Day(24 hours)",
  "Last Week(7 days)",
  "Last 7 Days",
  "Last month(30 Days)",
  "Date Range"
];

const partners = [
  { code: "02787", name: "ADUSA" },
  { code: "ADUSA123", name: "ADUSA" },
  { code: "311135B2BT", name: "AMC" },
  { code: "311135B2BI", name: "AMC_PROD" },
  { code: "ANZCO", name: "ANZCO" },
  { code: "ARLAPROD", name: "Arla Foods" }
];

const wmsOptions = [
  "Agro_RP",
  "AGRORP",
  "ALPHA",
  "AWMS",
  "HJ",
  "HL_GB",
  "INFOR",
  "JDA",
  "KARAT",
  "MAERSK",
  "MANH",
  "REDPRAIRIE",
  "SAP",
  "TMS",
  "WMS1"
];

const documentTypes = [
  "94",
  "1075",
  "1077",
  "1080",
  "1081"
];

const apiStatusOptions = [
  "ACCEPTED",
  "200",
  "404",
  "403",
  "REJECTED",
  "ACCEPTED WITH ERRORS"
];

const correlationOptions = [
  "Cheque Number",
  "Customer Adjustment Number",
  "Depositor Order Number",
  "Direction",
  "File name",
  "GS Number"
];

const statusOptions = [
  "SUCCESS",
  "DROPPED",
  "ERROR"
];

export default function DocumentRepository() {

  const [selectedPartners, setSelectedPartners] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedWMS, setSelectedWMS] = useState<string[]>([]);
  const [wmsSearchTerm, setWmsSearchTerm] = useState('');
  const [isWmsOpen, setIsWmsOpen] = useState(false);
  const [selectedDocType, setSelectedDocType] = useState("Select");
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [statusSearchTerm, setStatusSearchTerm] = useState('');
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState("Select");
  const [selectedApiStatuses, setSelectedApiStatuses] = useState<string[]>([]);
  const [apiStatusSearchTerm, setApiStatusSearchTerm] = useState('');
  const [isApiStatusOpen, setIsApiStatusOpen] = useState(false);
  const [selectedCorrelation, setSelectedCorrelation] = useState("Select");
  const [selectedStatus, setSelectedStatus] = useState("Select");


  const filteredPartners = partners.filter(partner =>
    partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    partner.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Toggle partner selection
  const togglePartner = (partnerCode: string) => {
    setSelectedPartners(prev =>
      prev.includes(partnerCode)
        ? prev.filter(code => code !== partnerCode)
        : [...prev, partnerCode]
    );
  };

  // Toggle select all/none
  const toggleSelectAll = () => {
    if (selectedPartners.length === filteredPartners.length) {
      setSelectedPartners([]);
    } else {
      const filteredCodes = filteredPartners.map(p => p.code);
      setSelectedPartners(prev => [
        ...new Set([...prev, ...filteredCodes])
      ]);
    }
  };

  // Display text for trigger
  const getDisplayText = () => {
    if (selectedPartners.length === 0) return "Select Trading Partner";

    const selectedNames = selectedPartners.slice(0, 2).map(code => {
      const partner = partners.find(p => p.code === code);
      return `${partner?.name}(${code})`;
    });

    if (selectedPartners.length <= 2) {
      return selectedNames.join(", ");
    }
    return `${selectedNames.join(", ")} +${selectedPartners.length - 2}`;
  };

  // Filter WMS based on search
  const filteredWMS = wmsOptions.filter(wms =>
    wms.toLowerCase().includes(wmsSearchTerm.toLowerCase())
  );

  // Toggle WMS selection
  const toggleWMS = (wms: string) => {
    setSelectedWMS(prev =>
      prev.includes(wms)
        ? prev.filter(item => item !== wms)
        : [...prev, wms]
    );
  };

  // Toggle select all/none for WMS
  const toggleSelectAllWMS = () => {
    if (selectedWMS.length === filteredWMS.length) {
      setSelectedWMS([]);
    } else {
      setSelectedWMS(prev => [
        ...new Set([...prev, ...filteredWMS])
      ]);
    }
  };

  // Display text for WMS trigger
  const getWMSDisplayText = () => {
    if (selectedWMS.length === 0) return "Select WMS";
    if (selectedWMS.length === 1) return selectedWMS[0];
    return `${selectedWMS.length} selected`;
  };

  const filteredStatuses = statusOptions.filter(status =>
    status.toLowerCase().includes(statusSearchTerm.toLowerCase())
  );

  // Toggle status selection
  const toggleStatus = (status: string) => {
    setSelectedStatuses(prev =>
      prev.includes(status)
        ? prev.filter(item => item !== status)
        : [...prev, status]
    );
  };

  // Toggle select all/none for statuses
  const toggleSelectAllStatuses = () => {
    if (selectedStatuses.length === filteredStatuses.length) {
      setSelectedStatuses([]);
    } else {
      setSelectedStatuses(prev => [
        ...new Set([...prev, ...filteredStatuses])
      ]);
    }
  };

  // Display text for status trigger
  const getStatusDisplayText = () => {
    if (selectedStatuses.length === 0) return "Select Status";
    if (selectedStatuses.length === 1) return selectedStatuses[0];
    return `${selectedStatuses.length} selected`;
  };

  const filteredApiStatuses = apiStatusOptions.filter(status =>
    status.toLowerCase().includes(apiStatusSearchTerm.toLowerCase())
  );

  // Toggle status selection
  const toggleApiStatus = (status: string) => {
    setSelectedApiStatuses(prev =>
      prev.includes(status)
        ? prev.filter(item => item !== status)
        : [...prev, status]
    );
  };

  // Toggle select all/none
  const toggleSelectAllApiStatuses = () => {
    if (selectedApiStatuses.length === filteredApiStatuses.length) {
      setSelectedApiStatuses([]);
    } else {
      setSelectedApiStatuses(prev => [
        ...new Set([...prev, ...filteredApiStatuses])
      ]);
    }
  };

  // Display text for trigger
  const getApiStatusDisplayText = () => {
    if (selectedApiStatuses.length === 0) return "Select Status";
    if (selectedApiStatuses.length === 1) return selectedApiStatuses[0];
    return `${selectedApiStatuses.length} selected`;
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

      <div className="flex flex-1 flex-col gap-6 p-6 pt-3 bg-brand-subtle">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-brand-black">Document Repository</h2>
          </div>
          <Button className="btn-primary">
            <Upload className="h-4 w-4 mr-2" />
            Upload Document
          </Button>
        </div>

        <Card className="brand-card">
          <CardHeader className="brand-gradient-primary text-white rounded-t-lg py-3 px-6">
            <CardTitle className="text-white">Database: @LIVE_ARCHIVE</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="grid gap-3">
              {/* First Row - Date Filters */}
              <div className="grid grid-cols-4 gap-3">
                <div className="space-y-1">
                  <Label className="text-brand-black text-sm">Date Range</Label>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center justify-between w-full px-3 py-1.5 text-sm border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary h-9">
                      {selectedDateRange}
                      <ChevronDown className="w-4 h-4 ml-2" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[200px] border-brand-light">
                      {dateRanges.map((range) => (
                        <DropdownMenuItem
                          key={range}
                          className={`${selectedDateRange === range ? 'bg-brand-accent text-white' : 'hover:bg-brand-subtle'}`}
                          onClick={() => setSelectedDateRange(range)}
                        >
                          <span className="flex items-center">
                            {selectedDateRange === range && (
                              <Check className="h-4 w-4 mr-2" />
                            )}
                            {range}
                          </span>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="space-y-1">
                  <Label className="text-brand-black text-sm">From Date</Label>
                  <Input
                    type="datetime-local"
                    defaultValue="2025-06-24T00:00"
                    className="border-brand-light focus-brand h-9 py-1.5 text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <Label className="text-brand-black text-sm">To Date</Label>
                  <Input
                    type="datetime-local"
                    defaultValue="2025-06-24T23:59"
                    className="border-brand-light focus-brand h-9 py-1.5 text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <Label className="text-brand-black text-sm">Trading Partner</Label>
                  <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
                    <DropdownMenuTrigger className="flex items-center justify-between w-full px-3 py-1.5 text-sm border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary h-9 text-left">
                      <span className="truncate">{getDisplayText()}</span>
                      <ChevronDown className="w-4 h-4 ml-2 shrink-0" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-[280px] border-brand-light p-0"
                      align="start"
                      onCloseAutoFocus={(e) => e.preventDefault()}
                    >
                      {/* Search and Select All */}
                      <div className="sticky top-0 bg-white z-10 p-2 border-b border-brand-light">
                        <div className="flex items-center gap-2 mb-2">
                          <Checkbox
                            checked={filteredPartners.length > 0 &&
                              filteredPartners.every(p => selectedPartners.includes(p.code))}
                            ref={(el) => {
                              const inputElement = el as HTMLInputElement;
                              if (inputElement) {
                                inputElement.indeterminate = filteredPartners.some(p => selectedPartners.includes(p.code)) &&
                                  !filteredPartners.every(p => selectedPartners.includes(p.code));
                              }
                            }}
                            onCheckedChange={toggleSelectAll}
                            className="h-4 w-4"
                          />
                          <Input
                            placeholder="Search partners..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="h-8 text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
                          />
                        </div>
                      </div>

                      {/* Partners List */}
                      <div className="max-h-[250px] overflow-y-auto">
                        {filteredPartners.length > 0 ? (
                          filteredPartners.map((partner) => (
                            <DropdownMenuItem
                              key={partner.code}
                              className="p-0 hover:bg-brand-subtle focus:bg-brand-subtle"
                              onSelect={(e) => e.preventDefault()}
                            >
                              <div
                                className="flex items-center w-full px-2 py-1.5"
                                onClick={() => togglePartner(partner.code)}
                              >
                                <Checkbox
                                  checked={selectedPartners.includes(partner.code)}
                                  className="mr-2 h-4 w-4"
                                />
                                <span className="text-sm">
                                  {partner.name}({partner.code})
                                </span>
                              </div>
                            </DropdownMenuItem>
                          ))
                        ) : (
                          <div className="px-2 py-3 text-center text-sm text-brand-error">
                            No partners found
                          </div>
                        )}
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

              </div>

              {/* Second Row - Document Filters */}
              <div className="grid grid-cols-4 gap-3">
                <div className="space-y-1">
                  <Label className="text-brand-black text-sm">WMS</Label>
                  <DropdownMenu open={isWmsOpen} onOpenChange={setIsWmsOpen}>
                    <DropdownMenuTrigger className="flex items-center justify-between w-full px-3 py-1.5 text-sm border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary h-9 text-left">
                      <span className="truncate">{getWMSDisplayText()}</span>
                      <ChevronDown className="w-4 h-4 ml-2 shrink-0" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-[250px] border-brand-light p-0"
                      align="start"
                      onCloseAutoFocus={(e) => e.preventDefault()}
                    >
                      {/* Search and Select All */}
                      <div className="sticky top-0 bg-white z-10 p-2 border-b border-brand-light">
                        <div className="flex items-center gap-2 mb-2">
                          <Checkbox
                            checked={filteredWMS.length > 0 &&
                              filteredWMS.every(item => selectedWMS.includes(item))}
                            ref={(el) => {
                              const inputElement = el as HTMLInputElement;
                              if (inputElement) {
                                inputElement.indeterminate = filteredWMS.some(item => selectedWMS.includes(item)) &&
                                  !filteredWMS.every(item => selectedWMS.includes(item));
                              }
                            }}
                            onCheckedChange={toggleSelectAllWMS}
                            className="h-4 w-4"
                          />
                          <Input
                            placeholder="Search WMS..."
                            value={wmsSearchTerm}
                            onChange={(e) => setWmsSearchTerm(e.target.value)}
                            className="h-8 text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
                          />
                        </div>
                      </div>

                      {/* WMS List */}
                      <div className="max-h-[250px] overflow-y-auto">
                        {filteredWMS.length > 0 ? (
                          filteredWMS.map((wms) => (
                            <DropdownMenuItem
                              key={wms}
                              className="p-0 hover:bg-brand-subtle focus:bg-brand-subtle"
                              onSelect={(e) => e.preventDefault()}
                            >
                              <div
                                className="flex items-center w-full px-2 py-1.5"
                                onClick={() => toggleWMS(wms)}
                              >
                                <Checkbox
                                  checked={selectedWMS.includes(wms)}
                                  className="mr-2 h-4 w-4"
                                />
                                <span className="text-sm">
                                  {wms}
                                </span>
                              </div>
                            </DropdownMenuItem>
                          ))
                        ) : (
                          <div className="px-2 py-3 text-center text-sm text-brand-error">
                            No WMS found
                          </div>
                        )}
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="space-y-1">
                  <Label className="text-brand-black text-sm">Document Type</Label>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center justify-between w-full px-3 py-1.5 text-sm border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary h-9">
                      {selectedDocType}
                      <ChevronDown className="w-4 h-4 ml-2" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[200px] border-brand-light">
                      <DropdownMenuItem
                        className={`${selectedDocType === "Select" ? 'bg-brand-accent text-white' : 'hover:bg-brand-subtle'}`}
                        onClick={() => setSelectedDocType("Select")}
                      >
                        <span className="flex items-center">
                          {selectedDocType === "Select" && (
                            <Check className="h-4 w-4 mr-2" />
                          )}
                          Select
                        </span>
                      </DropdownMenuItem>
                      {documentTypes.map((docType) => (
                        <DropdownMenuItem
                          key={docType}
                          className={`${selectedDocType === docType ? 'bg-brand-accent text-white' : 'hover:bg-brand-subtle'}`}
                          onClick={() => setSelectedDocType(docType)}
                        >
                          <span className="flex items-center">
                            {selectedDocType === docType && (
                              <Check className="h-4 w-4 mr-2" />
                            )}
                            {docType}
                          </span>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="space-y-1">
                  <Label className="text-brand-black text-sm">Document #</Label>
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
              </div>

              {/* Third Row - Status Filters */}
              <div className="grid grid-cols-4 gap-3">
                <div className="space-y-1">
                  <Label className="text-brand-black text-sm">ACK/API Status</Label>
                  <DropdownMenu open={isApiStatusOpen} onOpenChange={setIsApiStatusOpen}>
                    <DropdownMenuTrigger className="flex items-center justify-between w-full px-3 py-1.5 text-sm border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary h-9 text-left">
                      <span className="truncate">{getApiStatusDisplayText()}</span>
                      <ChevronDown className="w-4 h-4 ml-2 shrink-0" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-[250px] border-brand-light p-0"
                      align="start"
                      onCloseAutoFocus={(e) => e.preventDefault()}
                    >
                      {/* Search and Select All */}
                      <div className="sticky top-0 bg-white z-10 p-2 border-b border-brand-light">
                        <div className="flex items-center gap-2 mb-2">
                          <Checkbox
                            checked={filteredApiStatuses.length > 0 &&
                              filteredApiStatuses.every(item => selectedApiStatuses.includes(item))}
                            ref={(el) => {
                              const inputElement = el as HTMLInputElement;
                              if (inputElement) {
                                inputElement.indeterminate = filteredApiStatuses.some(item => selectedApiStatuses.includes(item)) &&
                                  !filteredApiStatuses.every(item => selectedApiStatuses.includes(item));
                              }
                            }}
                            onCheckedChange={toggleSelectAllApiStatuses}
                            className="h-4 w-4"
                          />
                          <Input
                            placeholder="Search statuses..."
                            value={apiStatusSearchTerm}
                            onChange={(e) => setApiStatusSearchTerm(e.target.value)}
                            className="h-8 text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
                          />
                        </div>
                      </div>

                      {/* Status List */}
                      <div className="max-h-[250px] overflow-y-auto">
                        {filteredApiStatuses.length > 0 ? (
                          filteredApiStatuses.map((status) => (
                            <DropdownMenuItem
                              key={status}
                              className="p-0 hover:bg-brand-subtle focus:bg-brand-subtle"
                              onSelect={(e) => e.preventDefault()}
                            >
                              <div
                                className="flex items-center w-full px-2 py-1.5"
                                onClick={() => toggleApiStatus(status)}
                              >
                                <Checkbox
                                  checked={selectedApiStatuses.includes(status)}
                                  className="mr-2 h-4 w-4"
                                />
                                <span className="text-sm">
                                  {status}
                                </span>
                              </div>
                            </DropdownMenuItem>
                          ))
                        ) : (
                          <div className="px-2 py-3 text-center text-sm text-brand-error">
                            No statuses found
                          </div>
                        )}
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

              </div>


              <div className="grid grid-cols-4 gap-3">
                <div className="space-y-1">
                  <Label className="text-brand-black text-sm">Correlation</Label>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center justify-between w-full px-3 py-1.5 text-sm border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary h-9">
                      {selectedCorrelation}
                      <ChevronDown className="w-4 h-4 ml-2" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[200px] border-brand-light">
                      <DropdownMenuItem
                        className={`${selectedCorrelation === "Select" ? 'bg-brand-accent text-white' : 'hover:bg-brand-subtle'}`}
                        onClick={() => setSelectedCorrelation("Select")}
                      >
                        <span className="flex items-center">
                          {selectedCorrelation === "Select" && (
                            <Check className="h-4 w-4 mr-2" />
                          )}
                          Select
                        </span>
                      </DropdownMenuItem>
                      {correlationOptions.map((option) => (
                        <DropdownMenuItem
                          key={option}
                          className={`${selectedCorrelation === option ? 'bg-brand-accent text-white' : 'hover:bg-brand-subtle'}`}
                          onClick={() => setSelectedCorrelation(option)}
                        >
                          <span className="flex items-center">
                            {selectedCorrelation === option && (
                              <Check className="h-4 w-4 mr-2" />
                            )}
                            {option}
                          </span>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="space-y-1">
                  <Label className="text-brand-black text-sm">Value</Label>
                  <Input
                    type="text"
                    placeholder="Enter search value"
                    className="border-brand-light focus-brand h-9 py-1.5 text-sm"
                  />
                </div>

                <div className="flex items-end gap-2">
                  <Button variant="outline" className="btn-secondary border-brand-light h-9 text-sm">
                    Add Filter
                  </Button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between items-center mt-2">

                <Button className="btn-primary h-9 text-sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Apply Filters
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>


        {/* <div className="grid gap-6 md:grid-cols-4">
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
        </div> */}

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
    </SidebarInset >
  )
}
