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
  RotateCcw,
  ChevronDown,
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
import React, { useState } from "react";
import path from "path";
import { useRouter } from "next/navigation";

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

const partnerList = [
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
  "TERMINATED"
];

const roleOptions = [
  "Admin User",
  "B2Bi Super User",
  "B2Bi Basic User",
  "SFG Super User",
  "SFG Basic User",
  "B2Bi/SFG Super User"
];



export default function UserSearch() {

  const [selectedStatus, setSelectedStatus] = useState("Select");
  const [selectedRole, setSelectedRole] = useState("Select");
  const [isAccordianOpen, setIsAccordianOpen] = useState(true);
  const [showTable, setShowTable] = useState(false);
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 8;
  const totalPages = Math.ceil(partnerList.length / rowsPerPage);

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

      <div className="flex flex-1 flex-col gap-6 p-6 pt-2 bg-brand-subtle">

        <Card className="brand-card">
          <CardHeader className="brand-gradient-primary text-white rounded-t-lg py-2 px-4">
            <div className="flex items-center justify-between"> {/* Changed to justify-between */}
              <div className="flex items-center gap-3">
                <CardTitle className="text-white text-sm font-medium">User Search</CardTitle>
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
                    <Label className="text-brand-black text-sm">First Name</Label>
                    <Input
                      type="text"
                      placeholder="Enter First Name"
                      className="border-brand-light focus-brand h-9 py-1.5 text-sm"
                    />
                  </div>

                  <div className="space-y-1">
                    <Label className="text-brand-black text-sm">Last Name</Label>
                    <Input
                      type="text"
                      placeholder="Enter Last Name"
                      className="border-brand-light focus-brand h-9 py-1.5 text-sm"
                    />
                  </div>

                  <div className="space-y-1">
                    <Label className="text-brand-black text-sm">Login Id</Label>
                    <Input
                      type="text"
                      placeholder="Enter Login Id"
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


                <div className="grid grid-cols-4 gap-3">
                  <div className="space-y-1">
                    <Label className="text-brand-black text-sm">Role</Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center justify-between w-full px-3 py-1.5 text-sm border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary h-9">
                        {selectedRole}
                        <ChevronDown className="w-4 h-4 ml-2" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-[200px] border-brand-light">
                        <DropdownMenuItem
                          className={`${selectedRole === "Select" ? 'bg-brand-accent text-white' : 'hover:bg-brand-subtle'}`}
                          onClick={() => setSelectedRole("Select")}
                        >
                          <span className="flex items-center">
                            {selectedRole === "Select" && (
                              <Check className="h-4 w-4 mr-2" />
                            )}
                            Select
                          </span>
                        </DropdownMenuItem>
                        {roleOptions.map((status) => (
                          <DropdownMenuItem
                            key={status}
                            className={`${selectedRole === status ? 'bg-brand-accent text-white' : 'hover:bg-brand-subtle'}`}
                            onClick={() => setSelectedRole(status)}
                          >
                            <span className="flex items-center">
                              {selectedRole === status && (
                                <Check className="h-4 w-4 mr-2" />
                              )}
                              {status}
                            </span>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <div className="flex items-end">
                    <Button className="btn-primary h-9 text-sm w-full"
                      onClick={() => { setShowTable(true) }}
                    >
                      <Filter className="h-4 w-4 mr-2" />
                      Search
                    </Button>
                  </div>

                  <div className="flex items-end">
                    <Button variant="outline" className="h-9 text-sm text-brand-dark border-brand-light w-full"
                      onClick={() => { setShowTable(false) }}
                    >
                      <RotateCcw className="h-4 w-4 mr-2" />
                      Reset
                    </Button>
                  </div>
                </div>

              </div>
            </CardContent>
          )}
        </Card>

        {showTable &&
          <>
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
                            className={`transition-colors border-b border-[#e5e7eb] ${idx % 2 === 0 ? "bg-[#f1f3f7]" : "bg-brand-subtle/50"
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
          </>
        }
      </div>
    </SidebarInset>
  );
}
