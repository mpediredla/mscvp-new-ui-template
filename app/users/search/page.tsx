"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  MoreHorizontal,
  Edit,
  Trash2,
  Power,
  PowerOff,
  Eye,
  Shield,
  Clock,
  Mail,
  Phone,
  UserCheck,
  Filter,
  Download,
  Check,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";
import path from "path";

const userList = [
  {
    sortField: null,
    sortOrder: null,
    limit: 0,
    offSet: 0,
    countFlag: null,
    userId: 10000,
    loginId: "admin",
    password: null,
    active: null,
    status: "Active",
    primaryFlowId: 0,
    roleId: 1,
    roleName: "Admin User",
    firstName: null,
    lastName: null,
    userName: "Web Admin",
    email: "mscvp_alerts@miraclesoft.com",
    departmentId: 0,
    organization: null,
    designation: null,
    location: null,
    phoneNumber: null,
    officePhone: "2482320225",
    education: null,
    imageUpdateFileName: null,
    createdBy: null,
    confirmPassword: null,
    newPassword: null,
    oldPassword: null,
    manufacturing: false,
    logistics: false,
    partnerIds: [
      "02787",
      "ADUSA123",
      "311135B2BT",
      "311135B2BI",
      "ANZCO",
      "ARLAPROD",
      "ARLATEST",
      "6512245761T",
      "5413141999952",
      "5413141999952",
      "6144912225",
      "91965867437040",
      "91965867437198",
      "91965867437128",
      "91965867437062",
      "91965867437029",
      "5006",
      "9056720450",
      "0713748540000",
      "0713748540000T",
      "CARGILLCKN",
      "CARGILLDUN",
      "6083288672T",
      "045467826",
      "29244",
      "kkk",
      "884226002",
      "FINLANDIA",
      "7062168640",
      "I3PLORDENT",
      "371732729",
      "NZA14271",
      "120174",
      "LAMBWSTUSP",
      "4054990114",
      "HAVIGSPRDMS",
      "M01-M02",
      "M03-M04",
      "M05-M06",
      "M07-M08",
      "M09-M10",
      "M53-M54",
      "M55-M56",
      "M57-M58",
      "3032000273",
      "9268230000T",
      "788333706",
      "056879",
      "7705797651",
      "0605100016510",
      "BCF00545",
      "937429POPP",
      "152239336",
      "PREWIN",
      "80077934YK",
      "0010014066",
      "925979001ENC68",
      "11223344YK",
      "2083848255",
      "SKYLINE",
      "93NZA11125",
      "STAPLESADVT",
      "0000103541",
      "STPAULBEVE",
      "test",
      "testing",
      "EEC9096351000T",
      "EEC9096351000",
      "9300663000005",
      "3474109330",
      "21292448YK",
      "WF7705382120",
      "1907",
      "NAN01907",
    ],
    sfgPartnersNames: null,
    fileVisibility: true,
    timeZone: "est",
    addPartnersAccess: false,
    createdDate: "2024-02-06T18:32:27.000+00:00",
  },
  {
    sortField: null,
    sortOrder: null,
    limit: 0,
    offSet: 0,
    countFlag: null,
    userId: 10106,
    loginId: "gomathi.nandhakumar",
    password: null,
    active: null,
    status: "Active",
    primaryFlowId: 0,
    roleId: 1,
    roleName: "Admin User",
    firstName: null,
    lastName: null,
    userName: "Gomathi Nandhakumar",
    email: "gomathi.nandhakumar@americold.com",
    departmentId: 0,
    organization: null,
    designation: null,
    location: null,
    phoneNumber: null,
    officePhone: "5967868798",
    education: null,
    imageUpdateFileName: null,
    createdBy: null,
    confirmPassword: null,
    newPassword: null,
    oldPassword: null,
    manufacturing: false,
    logistics: false,
    partnerIds: [
      "02787",
      "ADUSA123",
      "311135B2BT",
      "311135B2BI",
      "ANZCO",
      "ARLAPROD",
      "ARLATEST",
      "6512245761T",
      "5413141999952",
      "5413141999952",
      "6144912225",
      "91965867437040",
      "91965867437198",
      "91965867437128",
      "91965867437062",
      "91965867437029",
      "5006",
      "9056720450",
      "0713748540000",
      "0713748540000T",
      "CARGILLCKN",
      "CARGILLDUN",
      "6083288672T",
      "045467826",
      "29244",
      "kkk",
      "884226002",
      "FINLANDIA",
      "7062168640",
      "I3PLORDENT",
      "371732729",
      "NZA14271",
      "120174",
      "LAMBWSTUSP",
      "4054990114",
      "HAVIGSPRDMS",
      "M01-M02",
      "M03-M04",
      "M05-M06",
      "M07-M08",
      "M09-M10",
      "M53-M54",
      "M55-M56",
      "M57-M58",
      "3032000273",
      "9268230000T",
      "788333706",
      "056879",
      "7705797651",
      "0605100016510",
      "BCF00545",
      "937429POPP",
      "152239336",
      "PREWIN",
      "80077934YK",
      "0010014066",
      "925979001ENC68",
      "11223344YK",
      "2083848255",
      "SKYLINE",
      "93NZA11125",
      "STAPLESADVT",
      "0000103541",
      "STPAULBEVE",
      "test",
      "testing",
      "EEC9096351000T",
      "EEC9096351000",
      "9300663000005",
      "3474109330",
      "21292448YK",
      "WF7705382120",
      "1907",
      "NAN01907",
    ],
    sfgPartnersNames: null,
    fileVisibility: true,
    timeZone: "est",
    addPartnersAccess: false,
    createdDate: "2024-02-14T18:44:13.000+00:00",
  },
  {
    sortField: null,
    sortOrder: null,
    limit: 0,
    offSet: 0,
    countFlag: null,
    userId: 10166,
    loginId: "sgeddada",
    password: null,
    active: null,
    status: "Active",
    primaryFlowId: 0,
    roleId: 1,
    roleName: "Admin User",
    firstName: null,
    lastName: null,
    userName: "Siva Geddada",
    email: "sgeddada@miraclesoft.com",
    departmentId: 0,
    organization: null,
    designation: null,
    location: null,
    phoneNumber: null,
    officePhone: "7658920238",
    education: null,
    imageUpdateFileName: null,
    createdBy: null,
    confirmPassword: null,
    newPassword: null,
    oldPassword: null,
    manufacturing: false,
    logistics: false,
    partnerIds: [
      "02787",
      "ADUSA123",
      "311135B2BT",
      "311135B2BI",
      "ANZCO",
      "ARLAPROD",
      "ARLATEST",
      "6512245761T",
      "5413141999952",
      "5413141999952",
      "6144912225",
      "91965867437040",
      "91965867437198",
      "91965867437128",
      "91965867437062",
      "91965867437029",
      "5006",
      "9056720450",
      "0713748540000",
      "0713748540000T",
      "CARGILLCKN",
      "CARGILLDUN",
      "6083288672T",
      "045467826",
      "29244",
      "kkk",
      "884226002",
      "FINLANDIA",
      "7062168640",
      "I3PLORDENT",
      "371732729",
      "NZA14271",
      "120174",
      "LAMBWSTUSP",
      "4054990114",
      "HAVIGSPRDMS",
      "M01-M02",
      "M03-M04",
      "M05-M06",
      "M07-M08",
      "M09-M10",
      "M53-M54",
      "M55-M56",
      "M57-M58",
      "3032000273",
      "9268230000T",
      "788333706",
      "056879",
      "7705797651",
      "0605100016510",
      "BCF00545",
      "937429POPP",
      "152239336",
      "PREWIN",
      "80077934YK",
      "0010014066",
      "925979001ENC68",
      "11223344YK",
      "2083848255",
      "SKYLINE",
      "93NZA11125",
      "STAPLESADVT",
      "0000103541",
      "STPAULBEVE",
      "test",
      "testing",
      "EEC9096351000T",
      "EEC9096351000",
      "9300663000005",
      "3474109330",
      "21292448YK",
      "WF7705382120",
      "1907",
      "NAN01907",
    ],
    sfgPartnersNames: null,
    fileVisibility: true,
    timeZone: "est",
    addPartnersAccess: false,
    createdDate: "2024-10-25T14:36:35.000+00:00",
  },
  {
    sortField: null,
    sortOrder: null,
    limit: 0,
    offSet: 0,
    countFlag: null,
    userId: 10186,
    loginId: "test",
    password: null,
    active: null,
    status: "Active",
    primaryFlowId: 0,
    roleId: 1,
    roleName: "Admin User",
    firstName: null,
    lastName: null,
    userName: "aaa sss",
    email: "test@miracles.com",
    departmentId: 0,
    organization: null,
    designation: null,
    location: null,
    phoneNumber: null,
    officePhone: "1234567894",
    education: null,
    imageUpdateFileName: null,
    createdBy: null,
    confirmPassword: null,
    newPassword: null,
    oldPassword: null,
    manufacturing: false,
    logistics: false,
    partnerIds: [
      "02787",
      "ADUSA123",
      "311135B2BT",
      "311135B2BI",
      "ANZCO",
      "ARLAPROD",
      "ARLATEST",
      "6512245761T",
      "5413141999952",
      "5413141999952",
      "6144912225",
      "91965867437040",
      "91965867437198",
      "91965867437128",
      "91965867437062",
      "91965867437029",
      "5006",
      "9056720450",
      "0713748540000",
      "0713748540000T",
      "CARGILLCKN",
      "CARGILLDUN",
      "6083288672T",
      "045467826",
      "29244",
      "kkk",
      "884226002",
      "FINLANDIA",
      "7062168640",
      "I3PLORDENT",
      "371732729",
      "NZA14271",
      "120174",
      "LAMBWSTUSP",
      "4054990114",
      "HAVIGSPRDMS",
      "M01-M02",
      "M03-M04",
      "M05-M06",
      "M07-M08",
      "M09-M10",
      "M53-M54",
      "M55-M56",
      "M57-M58",
      "3032000273",
      "9268230000T",
      "788333706",
      "056879",
      "7705797651",
      "0605100016510",
      "BCF00545",
      "937429POPP",
      "152239336",
      "PREWIN",
      "80077934YK",
      "0010014066",
      "925979001ENC68",
      "11223344YK",
      "2083848255",
      "SKYLINE",
      "93NZA11125",
      "STAPLESADVT",
      "0000103541",
      "STPAULBEVE",
      "test",
      "testing",
      "EEC9096351000T",
      "EEC9096351000",
      "9300663000005",
      "3474109330",
      "21292448YK",
      "WF7705382120",
      "1907",
      "NAN01907",
    ],
    sfgPartnersNames: null,
    fileVisibility: true,
    timeZone: "est",
    addPartnersAccess: false,
    createdDate: "2025-04-09T14:23:38.000+00:00",
  },
  {
    sortField: null,
    sortOrder: null,
    limit: 0,
    offSet: 0,
    countFlag: null,
    userId: 10187,
    loginId: "aaa",
    password: null,
    active: null,
    status: "Active",
    primaryFlowId: 0,
    roleId: 1,
    roleName: "Admin User",
    firstName: null,
    lastName: null,
    userName: "aaa aaa",
    email: "aaa@cog.com",
    departmentId: 0,
    organization: null,
    designation: null,
    location: null,
    phoneNumber: null,
    officePhone: "1235648795",
    education: null,
    imageUpdateFileName: null,
    createdBy: null,
    confirmPassword: null,
    newPassword: null,
    oldPassword: null,
    manufacturing: false,
    logistics: false,
    partnerIds: [
      "02787",
      "ADUSA123",
      "311135B2BT",
      "311135B2BI",
      "ANZCO",
      "ARLAPROD",
      "ARLATEST",
      "6512245761T",
      "5413141999952",
      "5413141999952",
      "6144912225",
      "91965867437040",
      "91965867437198",
      "91965867437128",
      "91965867437062",
      "91965867437029",
      "5006",
      "9056720450",
      "0713748540000",
      "0713748540000T",
      "CARGILLCKN",
      "CARGILLDUN",
      "6083288672T",
      "045467826",
      "29244",
      "kkk",
      "884226002",
      "FINLANDIA",
      "7062168640",
      "I3PLORDENT",
      "371732729",
      "NZA14271",
      "120174",
      "LAMBWSTUSP",
      "4054990114",
      "HAVIGSPRDMS",
      "M01-M02",
      "M03-M04",
      "M05-M06",
      "M07-M08",
      "M09-M10",
      "M53-M54",
      "M55-M56",
      "M57-M58",
      "3032000273",
      "9268230000T",
      "788333706",
      "056879",
      "7705797651",
      "0605100016510",
      "BCF00545",
      "937429POPP",
      "152239336",
      "PREWIN",
      "80077934YK",
      "0010014066",
      "925979001ENC68",
      "11223344YK",
      "2083848255",
      "SKYLINE",
      "93NZA11125",
      "STAPLESADVT",
      "0000103541",
      "STPAULBEVE",
      "test",
      "testing",
      "EEC9096351000T",
      "EEC9096351000",
      "9300663000005",
      "3474109330",
      "21292448YK",
      "WF7705382120",
      "1907",
      "NAN01907",
    ],
    sfgPartnersNames: null,
    fileVisibility: true,
    timeZone: "est",
    addPartnersAccess: false,
    createdDate: "2025-04-09T14:26:28.000+00:00",
  },
  {
    sortField: null,
    sortOrder: null,
    limit: 0,
    offSet: 0,
    countFlag: null,
    userId: 10193,
    loginId: "t",
    password: null,
    active: null,
    status: "Terminated",
    primaryFlowId: 0,
    roleId: 1,
    roleName: "Admin User",
    firstName: null,
    lastName: null,
    userName: "t t",
    email: "t@t.com",
    departmentId: 0,
    organization: null,
    designation: null,
    location: null,
    phoneNumber: null,
    officePhone: "7658920238",
    education: null,
    imageUpdateFileName: null,
    createdBy: null,
    confirmPassword: null,
    newPassword: null,
    oldPassword: null,
    manufacturing: false,
    logistics: false,
    partnerIds: [
      "02787",
      "ADUSA123",
      "311135B2BT",
      "311135B2BI",
      "ANZCO",
      "ARLAPROD",
      "ARLATEST",
      "6512245761T",
      "5413141999952",
      "5413141999952",
      "6144912225",
      "91965867437040",
      "91965867437198",
      "91965867437128",
      "91965867437062",
      "91965867437029",
      "5006",
      "9056720450",
      "0713748540000",
      "0713748540000T",
      "CARGILLCKN",
      "CARGILLDUN",
      "6083288672T",
      "045467826",
      "29244",
      "kkk",
      "884226002",
      "FINLANDIA",
      "7062168640",
      "I3PLORDENT",
      "371732729",
      "NZA14271",
      "120174",
      "LAMBWSTUSP",
      "4054990114",
      "HAVIGSPRDMS",
      "M01-M02",
      "M03-M04",
      "M05-M06",
      "M07-M08",
      "M09-M10",
      "M53-M54",
      "M55-M56",
      "M57-M58",
      "3032000273",
      "9268230000T",
      "788333706",
      "056879",
      "7705797651",
      "0605100016510",
      "BCF00545",
      "937429POPP",
      "152239336",
      "PREWIN",
      "80077934YK",
      "0010014066",
      "925979001ENC68",
      "11223344YK",
      "2083848255",
      "SKYLINE",
      "93NZA11125",
      "STAPLESADVT",
      "0000103541",
      "STPAULBEVE",
      "test",
      "testing",
      "EEC9096351000T",
      "EEC9096351000",
      "9300663000005",
      "3474109330",
      "21292448YK",
      "WF7705382120",
      "1907",
      "NAN01907",
    ],
    sfgPartnersNames: null,
    fileVisibility: true,
    timeZone: "est",
    addPartnersAccess: false,
    createdDate: "2025-05-16T09:51:17.000+00:00",
  },
];


export default function UserSearch() {
  const [selectedRole, setSelectedRole] = React.useState<string | null>(
    "All Roles"
  );
  const [selectedStatus, setSelectedStatus] = React.useState<string | null>(
    "All Status"
  );
  const [selectedDepartment, setSelectedDepartment] = React.useState<
    string | null
  >("All Departments");
  const [selectedMfa, setSelectedMfa] = React.useState<string | null>("All");
 const [currentPage, setCurrentPage] = React.useState(1);
  const rowsPerPage = 8;
  const totalPages = Math.ceil(userList.length / rowsPerPage);
  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 bg-white border-b border-brand-light">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1 text-brand-muted hover:text-brand-primary" />
          <Separator
            orientation="vertical"
            className="mr-2 h-4 bg-brand-light"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink
                  href="#"
                  className="text-brand-muted hover:text-brand-primary"
                >
                  User Management
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block text-brand-light" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-brand-black">
                  User Search
                </BreadcrumbPage>
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
            >
              <Download className="h-4 w-4 mr-2" />
              Export Users
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-6 p-6 pt-0 bg-brand-subtle">

        <Card className="brand-card">
          <CardHeader className="brand-gradient-primary text-white rounded-t-lg">
            <CardTitle className="text-white">Search Filters</CardTitle>
            <CardDescription className="text-brand-light">
              Filter users by role, status, department, and other criteria
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid gap-4 md:grid-cols-6">
              <div className="space-y-2">
                <Label htmlFor="search-name" className="text-brand-black">
                  Name/Email
                </Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-muted h-4 w-4" />
                  <Input
                    id="search-name"
                    placeholder="Search users..."
                    className="pl-10 border-brand-light focus-brand"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="role-filter" className="text-brand-black">
                  Role
                </Label>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center justify-between w-full px-3 py-2 text-sm border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary">
                    {selectedRole || "All Roles"}
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full border-brand-light">
                    {[
                      "All Roles",
                      "System Administrator",
                      "EDI Analyst",
                      "Operator",
                      "Read-Only Viewer",
                    ].map((role) => (
                      <DropdownMenuItem
                        key={role}
                        className={`${
                          selectedRole === role
                            ? "bg-brand-accent text-white"
                            : "hover:bg-brand-subtle"
                        }`}
                        onClick={() =>
                          setSelectedRole(role === "All Roles" ? null : role)
                        }
                      >
                        <span className="flex items-center">
                          {selectedRole === role && (
                            <Check className="h-4 w-4 mr-2" />
                          )}
                          {role}
                        </span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="space-y-2">
                <Label htmlFor="status-filter" className="text-brand-black">
                  Status
                </Label>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center justify-between w-full px-3 py-2 text-sm border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary">
                    {selectedStatus || "All Status"}
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full border-brand-light">
                    {["All Status", "Active", "Inactive", "Locked"].map(
                      (status) => (
                        <DropdownMenuItem
                          key={status}
                          className={`${
                            selectedStatus === status
                              ? "bg-brand-accent text-white"
                              : "hover:bg-brand-subtle"
                          }`}
                          onClick={() =>
                            setSelectedStatus(
                              status === "All Status" ? null : status
                            )
                          }
                        >
                          <span className="flex items-center">
                            {selectedStatus === status && (
                              <Check className="h-4 w-4 mr-2" />
                            )}
                            {status}
                          </span>
                        </DropdownMenuItem>
                      )
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="space-y-2">
                <Label htmlFor="department-filter" className="text-brand-black">
                  Department
                </Label>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center justify-between w-full px-3 py-2 text-sm border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary">
                    {selectedDepartment || "All Departments"}
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full border-brand-light">
                    {[
                      "All Departments",
                      "IT Department",
                      "Operations",
                      "Finance",
                      "Logistics",
                    ].map((dept) => (
                      <DropdownMenuItem
                        key={dept}
                        className={`${
                          selectedDepartment === dept
                            ? "bg-brand-accent text-white"
                            : "hover:bg-brand-subtle"
                        }`}
                        onClick={() =>
                          setSelectedDepartment(
                            dept === "All Departments" ? null : dept
                          )
                        }
                      >
                        <span className="flex items-center">
                          {selectedDepartment === dept && (
                            <Check className="h-4 w-4 mr-2" />
                          )}
                          {dept}
                        </span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mfa-filter" className="text-brand-black">
                  MFA Status
                </Label>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center justify-between w-full px-3 py-2 text-sm border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary">
                    {selectedMfa || "All"}
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full border-brand-light">
                    {["All", "MFA Enabled", "MFA Disabled"].map((mfa) => (
                      <DropdownMenuItem
                        key={mfa}
                        className={`${
                          selectedMfa === mfa
                            ? "bg-brand-accent text-white"
                            : "hover:bg-brand-subtle"
                        }`}
                        onClick={() =>
                          setSelectedMfa(mfa === "All" ? null : mfa)
                        }
                      >
                        <span className="flex items-center">
                          {selectedMfa === mfa && (
                            <Check className="h-4 w-4 mr-2" />
                          )}
                          {mfa}
                        </span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="space-y-2">
                <Label className="text-brand-black">&nbsp;</Label>
                <Button className="w-full btn-primary">
                  <Filter className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className="text-brand-primary border-brand-primary bg-white"
            >
              Active: 4
            </Badge>
            <Badge
              variant="outline"
              className="text-brand-accent border-brand-accent bg-white"
            >
              Inactive: 1
            </Badge>
            <Badge
              variant="outline"
              className="text-brand-error border-brand-error bg-white"
            >
              Terminated: 1
            </Badge>
          </div>
        </div>

        <Card className="brand-card  ">
          <CardContent className="pt-6">
            {/* Table for Document List */}
            <div className="overflow-x-auto rounded-lg border border-brand-light bg-white shadow-sm">
              {/* Column selection menu */}
              <Table className="table-brand">
                <TableHeader>
                  <TableRow className="[&>th]:transition-colors [&>th]:duration-150 [&>th]:ease-in hover:[&>th]:bg-brand-subtle">
                    {/* <TableHead className="w-10 px-3 py-2">
                               <Checkbox className="rounded border-brand-light" />
                             </TableHead> */}
                    <TableHead className="text-[#ffffff] font-semibold text-sm px-3 py-2 whitespace-nowrap">
                      Login Id
                    </TableHead>
                    <TableHead className="text-[#ffffff] font-semibold text-sm px-3 py-2 whitespace-nowrap">
                      Name
                    </TableHead>
                    <TableHead className="text-[#ffffff] font-semibold text-sm px-3 py-2 whitespace-nowrap">
                      Email
                    </TableHead>
                    <TableHead className="text-[#ffffff] font-semibold text-sm px-3 py-2 whitespace-nowrap">
                      Office Phone
                    </TableHead>
                    <TableHead className="text-[#ffffff] font-semibold text-sm px-3 py-2 whitespace-nowrap">
                      Role
                    </TableHead>
                    <TableHead className="text-[#ffffff] font-semibold text-sm px-3 py-2 whitespace-nowrap">
                      Status
                    </TableHead>

                    <TableHead className="text-[#ffffff] font-semibold text-sm px-3 py-2 whitespace-nowrap">
                      Action
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {userList
                    .slice(
                      (currentPage - 1) * rowsPerPage,
                      currentPage * rowsPerPage
                    )
                    .map((user: any, idx: number) => (
                      <TableRow
                        key={
                          user.partnerIdentifier
                            ? user.partnerIdentifier + "-" + idx
                            : idx
                        }
                        className={`transition-colors border-b border-[#e5e7eb] ${
                          idx % 2 === 0 ? "bg-[#f1f3f7]" : "bg-brand-subtle/50"
                        } hover:bg-[#e9ecef]`}
                      >
                        {/* <TableCell className="px-3 py-2">
                                   <Checkbox className="rounded border-brand-light" />
                                 </TableCell> */}
                        <TableCell className="px-3 py-2 text-brand-black whitespace-nowrap">
                          {user.loginId}
                        </TableCell>
                        <TableCell className="px-3 py-2 text-brand-black whitespace-nowrap">
                          {user.userName}
                        </TableCell>
                        <TableCell className="px-3 py-2 text-brand-black whitespace-nowrap">
                          {user.email}
                        </TableCell>
                        <TableCell className="px-3 py-2 text-brand-black whitespace-nowrap">
                          {user.officePhone}
                        </TableCell>
                        <TableCell className="px-3 py-2 text-brand-black whitespace-nowrap">
                          {user.roleName}
                        </TableCell>
                        <TableCell className="px-3 py-2 text-brand-black whitespace-nowrap">
                          {user.status}
                        </TableCell>
                        <TableCell className="px-3 py-2 text-brand-black whitespace-nowrap">
                          <div className="flex justify-center">
                            <Button
                              variant="destructive"
                              size="icon"
                              className="h-8 w-8 bg-brand-error"
                              onClick={() => {
                                // Add your delete logic here
                                alert(`Delete partner: ${user.userName}`);
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
              {userList.length === 0 && (
                <div className="py-8 text-center text-brand-muted text-sm">
                  No documents found.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </SidebarInset>
  );
}
