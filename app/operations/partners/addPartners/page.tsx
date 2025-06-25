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
import { Plus, Search, MoreHorizontal, Edit, Trash2, Power, PowerOff, Eye, Filter, RotateCcw, ChevronDown, Check, Download, ArrowLeft, X, Save } from "lucide-react"
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
import { useState } from "react"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"

const statusOptions = [
  "Active",
  "INACTIVE",
];


export default function addPartner() {

  const [selectedStatus, setSelectedStatus] = useState("Select");
  const [isAccordianOpen, setIsAccordianOpen] = useState(true);
  const [showTable, setShowTable] = useState(false);
  const router = useRouter();

  const backHandler = () => {
    router.push('/operations/partners');
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
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/operations/partners" className="text-brand-muted hover:text-brand-primary">
                  Partners
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block text-brand-light" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-brand-black">Add Partner</BreadcrumbPage>
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
              onClick={backHandler}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </div>
        </div>
      </header>


      <div className="flex flex-1 flex-col gap-2 p-6 pt-2 bg-brand-subtle">

        <Card className="brand-card">
          <CardHeader className="brand-gradient-primary text-white rounded-t-lg py-2 px-4">
            <div className="flex items-center justify-between"> {/* Changed to justify-between */}
              <div className="flex items-center gap-3">
                <CardTitle className="text-white text-sm font-medium">Add Partner</CardTitle>
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
              <div className="grid gap-3">
                {/* Partner Information Section */}
                <div className="grid grid-cols-4 gap-3">
                  <div className="space-y-1">
                    <Label className="text-brand-black text-sm">Partner Name</Label>
                    <Input
                      type="text"
                      placeholder="Partner Name"
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

                {/* Country Code Contact Section */}
                <div className="pt-5">
                  <div className="bg-[#f1f3f7] text-brand-black rounded-t-lg py-1 px-2">EDI Contact</div>
                  <div className="grid grid-cols-4 gap-3">
                    <div className="space-y-1">
                      <Label className="text-brand-black text-sm">Name</Label>
                      <Input
                        type="text"
                        placeholder="Name"
                        className="border-brand-light focus-brand h-9 py-1.5 text-sm"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-brand-black text-sm">Title</Label>
                      <Input
                        type="text"
                        placeholder="Enter Title"
                        className="border-brand-light focus-brand h-9 py-1.5 text-sm"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-brand-black text-sm">Email Id</Label>
                      <Input
                        type="text"
                        placeholder="Email Id"
                        className="border-brand-light focus-brand h-9 py-1.5 text-sm"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-brand-black text-sm">Phone</Label>
                      <Input
                        type="text"
                        placeholder="Enter Phone Number"
                        className="border-brand-light focus-brand h-9 py-1.5 text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Business Contact Section */}
                <div className="pt-5">
                  <div className="bg-[#f1f3f7] text-brand-black rounded-t-lg py-1 px-2">Business Contact</div>
                  <div className="grid grid-cols-4 gap-3">
                    <div className="space-y-1">
                      <Label className="text-brand-black text-sm">Name</Label>
                      <Input
                        type="text"
                        placeholder="Name"
                        className="border-brand-light focus-brand h-9 py-1.5 text-sm"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-brand-black text-sm">Title</Label>
                      <Input
                        type="text"
                        placeholder="Enter Title"
                        className="border-brand-light focus-brand h-9 py-1.5 text-sm"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-brand-black text-sm">Email Id</Label>
                      <Input
                        type="text"
                        placeholder="Email Id"
                        className="border-brand-light focus-brand h-9 py-1.5 text-sm"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-brand-black text-sm">Phone</Label>
                      <Input
                        type="text"
                        placeholder="Enter Phone Number"
                        className="border-brand-light focus-brand h-9 py-1.5 text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* DL Contact Section */}
                <div className="pt-5">
                  <div className="bg-[#f1f3f7] text-brand-black rounded-t-lg py-1 px-2">DL Contact</div>
                  <div className="grid grid-cols-4 gap-3">
                    <div className="space-y-1">
                      <Label className="text-brand-black text-sm">Email Id</Label>
                      <Input
                        type="text"
                        placeholder="Email Id"
                        className="border-brand-light focus-brand h-9 py-1.5 text-sm"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-brand-black text-sm">Phone</Label>
                      <Input
                        type="text"
                        placeholder="Enter Phone Number"
                        className="border-brand-light focus-brand h-9 py-1.5 text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end items-center mt-2 gap-2">
                  <Button
                    variant="outline"
                    className="h-9 text-sm text-brand-dark border-brand-light"
                    onClick={() => { setShowTable(false) }}
                  >
                    <X className="h-4 w-4 mr-2" />
                    Cancel
                  </Button>
                  <Button
                    className="btn-primary h-9 text-sm"
                    onClick={() => { setShowTable(true) }}
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                </div>
              </div>
            </CardContent>
          )}
        </Card>

      </div>
    </SidebarInset>
  )
}
