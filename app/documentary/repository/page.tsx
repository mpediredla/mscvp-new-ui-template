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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FileText,
  Trash2,
  MoreHorizontal,
  File,
  FileSpreadsheet,
  FileImage,
  Check,
  Filter,
  ChevronDown,
  PlusIcon,
  RotateCcw,
  RefreshCw,
  Recycle,
  AlertTriangle,
  ChevronUp,
  IdCard
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
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";

const getFileIcon = (type: string) => {
  switch (type.toLowerCase()) {
    case "pdf":
      return <FileText className="h-4 w-4 text-brand-error" />;
    case "excel":
      return <FileSpreadsheet className="h-4 w-4 text-brand-primary" />;
    case "word":
      return <File className="h-4 w-4 text-brand-accent" />;
    case "image":
      return <FileImage className="h-4 w-4 text-brand-muted" />;
    default:
      return <FileText className="h-4 w-4 text-brand-muted" />;
  }
};

const statuses = ["All Status", "Successful", "Failed", "Pending"];
const dateRanges = [
  "Last Day(24 hours)",
  "Last Week(7 days)",
  "Last 7 Days",
  "Last month(30 Days)",
  "Date Range",
];

const partners = [
  { code: "02787", name: "ADUSA" },
  { code: "ADUSA123", name: "ADUSA" },
  { code: "311135B2BT", name: "AMC" },
  { code: "311135B2BI", name: "AMC_PROD" },
  { code: "ANZCO", name: "ANZCO" },
  { code: "ARLAPROD", name: "Arla Foods" },
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
  "WMS1",
];

const documentTypes = ["94", "1075", "1077", "1080", "1081"];

const apiStatusOptions = [
  "ACCEPTED",
  "200",
  "404",
  "403",
  "REJECTED",
  "ACCEPTED WITH ERRORS",
];

const correlationOptions = [
  "Cheque Number",
  "Customer Adjustment Number",
  "Depositor Order Number",
  "Direction",
  "File name",
  "GS Number",
];

const statusOptions = ["SUCCESS", "DROPPED", "ERROR"];

const documentsApiData = {
  data: [
    {
      id: 4242,
      fileId: "2163332",
      fileType: "VXML",
      fileOrigin: null,
      transactionType: "846",
      direction: "OUTBOUND",
      status: "ERROR",
      ackStatus: "PENDING",
      warehouse: "",
      parentWarehouse: "VIZION",
      senderId: "SCHWANSGLOBAL",
      receiverId: null,
      primaryKeyType: null,
      primaryKeyValue: "SCHWANSGLOBAL",
      secondaryKeyType: null,
      secondaryKeyValue: null,
      dateTimeReceived: "06/24/2025 07:15 ",
      isaControlNumber: "-",
      isaDate: null,
      isaTime: null,
      gsControlNumber: "-",
      stControlNumber: "-",
      fileName: "SCHWANSGLOBAL.846.20250527203120.dat",
      postTransFileName: "-",
      ackFilePath: null,
      orgFilePath: null,
      preTransFilePath: null,
      postTransFilePath: null,
      errorReportFilePath: null,
      errorMessage: null,
      reProcessStatus: "-",
      senderName: null,
      receiverName: null,
      partnerName: "-",
      shipmentId: "SCHWANSGLOBAL",
      poNumber: null,
      filePath: null,
      toAddress: null,
      body: null,
      subject: null,
      errFileId: "2163334",
      resubmittedBy: "-",
    },
    {
      id: 4241,
      fileId: "2160746",
      fileType: "XML FILE",
      fileOrigin: null,
      transactionType: "945",
      direction: "OUTBOUND",
      status: "SUCCESS",
      ackStatus: "PENDING",
      warehouse: "",
      parentWarehouse: "",
      senderId: "",
      receiverId: null,
      primaryKeyType: null,
      primaryKeyValue: "CTV-430982",
      secondaryKeyType: null,
      secondaryKeyValue: null,
      dateTimeReceived: "06/23/2025 10:54 ",
      isaControlNumber: "-",
      isaDate: null,
      isaTime: null,
      gsControlNumber: "-",
      stControlNumber: "-",
      fileName: "945F_12127_AT_250527115816_CTV-430982_ErrorFile.xml",
      postTransFileName: "-",
      ackFilePath: null,
      orgFilePath: null,
      preTransFilePath: null,
      postTransFilePath: null,
      errorReportFilePath: null,
      errorMessage: null,
      reProcessStatus: "-",
      senderName: null,
      receiverName: null,
      partnerName: "-",
      shipmentId: "CTV-430982 Id:77274",
      poNumber: null,
      filePath: null,
      toAddress: null,
      body: null,
      subject: null,
      errFileId: "-",
      resubmittedBy: "-",
    },
    {
      id: 4240,
      fileId: "2160321",
      fileType: "FLAT FILE",
      fileOrigin: null,
      transactionType: "945",
      direction: "OUTBOUND",
      status: "SUCCESS",
      ackStatus: "PENDING",
      warehouse: "Kentile",
      parentWarehouse: "HJ_Halls",
      senderId: "311135B2BT",
      receiverId: null,
      primaryKeyType: null,
      primaryKeyValue: "9579036",
      secondaryKeyType: null,
      secondaryKeyValue: null,
      dateTimeReceived: "06/23/2025 07:25 ",
      isaControlNumber: "000000445",
      isaDate: null,
      isaTime: null,
      gsControlNumber: "68",
      stControlNumber: "5625",
      fileName: "945_250206390006.txt",
      postTransFileName: "945_W1_MICINC_20250623072529616.txt",
      ackFilePath: null,
      orgFilePath: null,
      preTransFilePath: null,
      postTransFilePath: null,
      errorReportFilePath: null,
      errorMessage: null,
      reProcessStatus: "-",
      senderName: null,
      receiverName: null,
      partnerName: "-",
      shipmentId: "0086142686 Id:77267",
      poNumber: null,
      filePath: null,
      toAddress: null,
      body: null,
      subject: null,
      errFileId: "-",
      resubmittedBy: "-",
    },
    {
      id: 4239,
      fileId: "2160269",
      fileType: "XML FILE",
      fileOrigin: null,
      transactionType: "947",
      direction: "OUTBOUND",
      status: "SUCCESS",
      ackStatus: "PENDING",
      warehouse: "ROCHELLE",
      parentWarehouse: "JDA",
      senderId: "311135B2BI",
      receiverId: null,
      primaryKeyType: null,
      primaryKeyValue: "0581493782080",
      secondaryKeyType: null,
      secondaryKeyValue: null,
      dateTimeReceived: "06/23/2025 07:07 ",
      isaControlNumber: "000018309",
      isaDate: null,
      isaTime: null,
      gsControlNumber: "27199",
      stControlNumber: "2087",
      fileName: "947_InvAdj_291942427_20250217132422.txt",
      postTransFileName: "947_IL-RO-PUB_29248_20250623070729196.txt",
      ackFilePath: null,
      orgFilePath: null,
      preTransFilePath: null,
      postTransFilePath: null,
      errorReportFilePath: null,
      errorMessage: null,
      reProcessStatus: "-",
      senderName: null,
      receiverName: null,
      partnerName: "Lambweston",
      shipmentId: "00000000000291942427 Id:77262",
      poNumber: null,
      filePath: null,
      toAddress: null,
      body: null,
      subject: null,
      errFileId: "-",
      resubmittedBy: "-",
    },
    {
      id: 4238,
      fileId: "2160249",
      fileType: "FLAT FILE",
      fileOrigin: null,
      transactionType: "944",
      direction: "OUTBOUND",
      status: "SUCCESS",
      ackStatus: "PENDING",
      warehouse: "NewPort",
      parentWarehouse: "HJ",
      senderId: "311135B2BI",
      receiverId: null,
      primaryKeyType: null,
      primaryKeyValue: "79504",
      secondaryKeyType: null,
      secondaryKeyValue: null,
      dateTimeReceived: "06/23/2025 07:04 ",
      isaControlNumber: "000018308",
      isaDate: null,
      isaTime: null,
      gsControlNumber: "374",
      stControlNumber: "0055",
      fileName: "944_M7_LAMBWESTON_250218233.txt",
      postTransFileName: "944_M7_LAMBWESTON_20250623070429301.txt",
      ackFilePath: null,
      orgFilePath: null,
      preTransFilePath: null,
      postTransFilePath: null,
      errorReportFilePath: null,
      errorMessage: null,
      reProcessStatus: "-",
      senderName: null,
      receiverName: null,
      partnerName: "Lambweston",
      shipmentId: "4201322037 Id:77253",
      poNumber: null,
      filePath: null,
      toAddress: null,
      body: null,
      subject: null,
      errFileId: "-",
      resubmittedBy: "-",
    },
    {
      id: 4237,
      fileId: "2160219",
      fileType: "FLAT FILE",
      fileOrigin: null,
      transactionType: "945",
      direction: "OUTBOUND",
      status: "SUCCESS",
      ackStatus: "PENDING",
      warehouse: "Kentile",
      parentWarehouse: "HJ_Halls",
      senderId: "311135B2BT",
      receiverId: null,
      primaryKeyType: null,
      primaryKeyValue: "9579036",
      secondaryKeyType: null,
      secondaryKeyValue: null,
      dateTimeReceived: "06/23/2025 06:59 ",
      isaControlNumber: "000000444",
      isaDate: null,
      isaTime: null,
      gsControlNumber: "67",
      stControlNumber: "5624",
      fileName: "945_250206390006.txt",
      postTransFileName: "945_W1_MICINC_20250623065929493.txt",
      ackFilePath: null,
      orgFilePath: null,
      preTransFilePath: null,
      postTransFilePath: null,
      errorReportFilePath: null,
      errorMessage: null,
      reProcessStatus: "-",
      senderName: null,
      receiverName: null,
      partnerName: "-",
      shipmentId: "0086142686 Id:77244",
      poNumber: null,
      filePath: null,
      toAddress: null,
      body: null,
      subject: null,
      errFileId: "-",
      resubmittedBy: "-",
    },
    {
      id: 4236,
      fileId: "2151889",
      fileType: "JSON",
      fileOrigin: null,
      transactionType: "1117",
      direction: "INBOUND",
      status: "SUCCESS",
      ackStatus: "PENDING",
      warehouse: "-",
      parentWarehouse: "JDA",
      senderId: "02787",
      receiverId: null,
      primaryKeyType: null,
      primaryKeyValue: "DCAU2401-8523471-001-20250415",
      secondaryKeyType: null,
      secondaryKeyValue: null,
      dateTimeReceived: "06/20/2025 08:12 ",
      isaControlNumber: "-",
      isaDate: null,
      isaTime: null,
      gsControlNumber: "-",
      stControlNumber: "-",
      fileName: "-",
      postTransFileName: "xmlappointment_ADUSA_2151899_202506200813077676.xml",
      ackFilePath: null,
      orgFilePath: null,
      preTransFilePath: null,
      postTransFilePath: null,
      errorReportFilePath: null,
      errorMessage: null,
      reProcessStatus: "-",
      senderName: null,
      receiverName: null,
      partnerName: "ADUSA",
      shipmentId: "CS06653142",
      poNumber: null,
      filePath: null,
      toAddress: null,
      body: null,
      subject: null,
      errFileId: "-",
      resubmittedBy: "-",
    },
    {
      id: 4235,
      fileId: "2149297",
      fileType: "EDI",
      fileOrigin: null,
      transactionType: "943",
      direction: "INBOUND",
      status: "SUCCESS",
      ackStatus: "PENDING",
      warehouse: "-",
      parentWarehouse: "-",
      senderId: "91965867437041",
      receiverId: null,
      primaryKeyType: null,
      primaryKeyValue: "F 0082427968 20250618 N 4500559478",
      secondaryKeyType: null,
      secondaryKeyValue: null,
      dateTimeReceived: "06/19/2025 10:50 ",
      isaControlNumber: "000030352",
      isaDate: null,
      isaTime: null,
      gsControlNumber: "38668",
      stControlNumber: "0001",
      fileName: "Butterball_943_P2_Russelville_EDI",
      postTransFileName: "POP2149310.txt",
      ackFilePath: null,
      orgFilePath: null,
      preTransFilePath: null,
      postTransFilePath: null,
      errorReportFilePath: null,
      errorMessage: null,
      reProcessStatus: "-",
      senderName: null,
      receiverName: null,
      partnerName: "-",
      shipmentId: "0082427968 Id:77225",
      poNumber: null,
      filePath: null,
      toAddress: null,
      body: null,
      subject: null,
      errFileId: "-",
      resubmittedBy: "-",
    },
    {
      id: 4234,
      fileId: "2149157",
      fileType: "EDI",
      fileOrigin: null,
      transactionType: "943",
      direction: "INBOUND",
      status: "SUCCESS",
      ackStatus: "PENDING",
      warehouse: "-",
      parentWarehouse: "-",
      senderId: "91965867437041",
      receiverId: null,
      primaryKeyType: null,
      primaryKeyValue: "F 0082427968 20250618 N 4500559478",
      secondaryKeyType: null,
      secondaryKeyValue: null,
      dateTimeReceived: "06/19/2025 10:05 ",
      isaControlNumber: "000030352",
      isaDate: null,
      isaTime: null,
      gsControlNumber: "38668",
      stControlNumber: "0001",
      fileName: "Butterball_943_P2_Russelville_EDI",
      postTransFileName: "-",
      ackFilePath: null,
      orgFilePath: null,
      preTransFilePath: null,
      postTransFilePath: null,
      errorReportFilePath: null,
      errorMessage: null,
      reProcessStatus: "-",
      senderName: null,
      receiverName: null,
      partnerName: "-",
      shipmentId: "0082427968 Id:77216",
      poNumber: null,
      filePath: null,
      toAddress: null,
      body: null,
      subject: null,
      errFileId: "-",
      resubmittedBy: "-",
    },
    {
      id: 4233,
      fileId: "2148861",
      fileType: "EDI",
      fileOrigin: null,
      transactionType: "943",
      direction: "INBOUND",
      status: "SUCCESS",
      ackStatus: "PENDING",
      warehouse: "AMC Fort Smith",
      parentWarehouse: "ALPHA",
      senderId: "91965867437040",
      receiverId: null,
      primaryKeyType: null,
      primaryKeyValue: "F 0082426323 20250612 N 4500559056",
      secondaryKeyType: null,
      secondaryKeyValue: null,
      dateTimeReceived: "06/19/2025 07:44 ",
      isaControlNumber: "000037605",
      isaDate: null,
      isaTime: null,
      gsControlNumber: "38529",
      stControlNumber: "0001",
      fileName: "Butterball_943_Alpha_Fort Smith_EDI_0614",
      postTransFileName: "FTSM_943_2506190745148873.txt",
      ackFilePath: null,
      orgFilePath: null,
      preTransFilePath: null,
      postTransFilePath: null,
      errorReportFilePath: null,
      errorMessage: null,
      reProcessStatus: "-",
      senderName: null,
      receiverName: null,
      partnerName: "BUTTER-BALL",
      shipmentId: "0082426323 Id:77208",
      poNumber: null,
      filePath: null,
      toAddress: null,
      body: null,
      subject: null,
      errFileId: "-",
      resubmittedBy: "-",
    },
  ],
  totalRecordsCount: 51,
};

export default function DocumentRepository() {
  const [selectedPartners, setSelectedPartners] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedWMS, setSelectedWMS] = useState<string[]>([]);
  const [wmsSearchTerm, setWmsSearchTerm] = useState("");
  const [isWmsOpen, setIsWmsOpen] = useState(false);
  const [selectedDocType, setSelectedDocType] = useState("Select");
  const [statusSearchTerm, setStatusSearchTerm] = useState("");
  const [selectedDateRange, setSelectedDateRange] = useState("Select");
  const [selectedApiStatuses, setSelectedApiStatuses] = useState<string[]>([]);
  const [apiStatusSearchTerm, setApiStatusSearchTerm] = useState("");
  const [isApiStatusOpen, setIsApiStatusOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("Select");
  const [database, setDatabase] = useState("LIVE");
  const [showAllFilters, setShowAllFilters] = useState(false);
  const [documentList, setDocumentList] = useState(documentsApiData);
  const [open, setOpen] = useState(false);
  const [isAccordianOpen, setIsAccordianOpen] = useState(true); // Default to open
  const [visibleColumns, setVisibleColumns] = useState<string[]>([
    "dateTimeReceived",
    "fileId",
    "senderId",
    "parentWarehouse",
    "warehouse",
    "partnerName",
    "direction",
    "transactionType",
    "reProcessStatus",
    "ackStatus",
  ]);

  const [filters, setFilters] = useState([
    {
      correlation: "Select",
      value: "",
    },
  ]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 8;
  const totalPages = Math.ceil(documentList.data.length / rowsPerPage);

  const filteredPartners = partners.filter(
    (partner) =>
      partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      partner.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Toggle partner selection
  const togglePartner = (partnerCode: string) => {
    setSelectedPartners((prev) =>
      prev.includes(partnerCode)
        ? prev.filter((code) => code !== partnerCode)
        : [...prev, partnerCode]
    );
  };

  // Toggle select all/none
  const toggleSelectAll = () => {
    if (selectedPartners.length === filteredPartners.length) {
      setSelectedPartners([]);
    } else {
      const filteredCodes = filteredPartners.map((p) => p.code);
      setSelectedPartners((prev) => [...new Set([...prev, ...filteredCodes])]);
    }
  };

  // Display text for trigger
  const getDisplayText = () => {
    if (selectedPartners.length === 0) return "Select Trading Partner";

    const selectedNames = selectedPartners.slice(0, 2).map((code) => {
      const partner = partners.find((p) => p.code === code);
      return `${partner?.name}(${code})`;
    });

    if (selectedPartners.length <= 2) {
      return selectedNames.join(", ");
    }
    return `${selectedNames.join(", ")} +${selectedPartners.length - 2}`;
  };

  // Filter WMS based on search
  const filteredWMS = wmsOptions.filter((wms) =>
    wms.toLowerCase().includes(wmsSearchTerm.toLowerCase())
  );

  // Toggle WMS selection
  const toggleWMS = (wms: string) => {
    setSelectedWMS((prev) =>
      prev.includes(wms) ? prev.filter((item) => item !== wms) : [...prev, wms]
    );
  };

  // Toggle select all/none for WMS
  const toggleSelectAllWMS = () => {
    if (selectedWMS.length === filteredWMS.length) {
      setSelectedWMS([]);
    } else {
      setSelectedWMS((prev) => [...new Set([...prev, ...filteredWMS])]);
    }
  };

  // Display text for WMS trigger
  const getWMSDisplayText = () => {
    if (selectedWMS.length === 0) return "Select WMS";
    if (selectedWMS.length === 1) return selectedWMS[0];
    return `${selectedWMS.length} selected`;
  };

  const filteredStatuses = statusOptions.filter((status) =>
    status.toLowerCase().includes(statusSearchTerm.toLowerCase())
  );

  const filteredApiStatuses = apiStatusOptions.filter((status) =>
    status.toLowerCase().includes(apiStatusSearchTerm.toLowerCase())
  );

  // Toggle status selection
  const toggleApiStatus = (status: string) => {
    setSelectedApiStatuses((prev) =>
      prev.includes(status)
        ? prev.filter((item) => item !== status)
        : [...prev, status]
    );
  };

  // Toggle select all/none
  const toggleSelectAllApiStatuses = () => {
    if (selectedApiStatuses.length === filteredApiStatuses.length) {
      setSelectedApiStatuses([]);
    } else {
      setSelectedApiStatuses((prev) => [
        ...new Set([...prev, ...filteredApiStatuses]),
      ]);
    }
  };

  // Display text for trigger
  const getApiStatusDisplayText = () => {
    if (selectedApiStatuses.length === 0) return "Select Status";
    if (selectedApiStatuses.length === 1) return selectedApiStatuses[0];
    return `${selectedApiStatuses.length} selected`;
  };

  const addFilter = () => {
    if (filters.length < 3) {
      setFilters([
        ...filters,
        {
          correlation: "Select",
          value: "",
        },
      ]);
    }
  };

  const removeFilter = (index: number) => {
    if (filters.length > 1) {
      const newFilters = [...filters];
      newFilters.splice(index, 1);
      setFilters(newFilters);
    }
  };

  const updateCorrelation = (index: number, value: string) => {
    const newFilters = [...filters];
    newFilters[index].correlation = value;
    setFilters(newFilters);
  };

  const updateValue = (index: number, value: string) => {
    const newFilters = [...filters];
    newFilters[index].value = value;
    setFilters(newFilters);
  };

  const handleConfirmReprocess = () => {
    // Add your reprocess logic here
    console.log("Reprocessing initiated");
    setOpen(false);
  };

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
                  Documentary
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block text-brand-light" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-brand-black">
                  Document Repository
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-1 p-6 pt-3 bg-brand-subtle">
        <Card className="brand-card">
          <CardHeader className="brand-gradient-primary text-white rounded-t-lg py-2 px-4">
            <div className="flex items-center justify-between">
              {" "}
              {/* Changed to justify-between */}
              <div className="flex items-center gap-3">
                <CardTitle className="text-white text-sm font-medium">
                  Database:
                </CardTitle>
                <RadioGroup
                  value={database}
                  onValueChange={setDatabase}
                  className="flex items-center gap-3"
                >
                  <div className="flex items-center space-x-1.5">
                    <RadioGroupItem value="LIVE" id="r1" />
                    <label
                      htmlFor="r1"
                      className={`text-xs cursor-pointer transition-colors ${database === "LIVE"
                        ? "text-white font-medium"
                        : "text-white/80"
                        }`}
                    >
                      LIVE
                    </label>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <RadioGroupItem value="ARCHIVE" id="r2" />
                    <label
                      htmlFor="r2"
                      className={`text-xs cursor-pointer transition-colors ${database === "ARCHIVE"
                        ? "text-white font-medium"
                        : "text-white/80"
                        }`}
                    >
                      ARCHIVE
                    </label>
                  </div>
                </RadioGroup>
              </div>
              {/* Accordion Toggle Button */}
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/10 p-1 rounded-full"
                onClick={() => setIsAccordianOpen(!isAccordianOpen)} // Add state management
              >
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""
                    }`}
                />
              </Button>
            </div>
          </CardHeader>
          {isAccordianOpen && (
            <CardContent className="pt-4">
              <div className="grid gap-3">
                {/* First Row - Date Filters */}
                <div className="grid grid-cols-4 gap-3">
                  {database === "LIVE" && (
                    <div className="space-y-1">
                      <Label className="text-brand-black text-sm">
                        Date Range
                      </Label>
                      <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center justify-between w-full px-3 py-1.5 text-sm border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary h-9">
                          {selectedDateRange}
                          <ChevronDown className="w-4 h-4 ml-2" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[200px] border-brand-light">
                          {dateRanges.map((range) => (
                            <DropdownMenuItem
                              key={range}
                              className={`${selectedDateRange === range
                                ? "bg-brand-accent text-white"
                                : "hover:bg-brand-subtle"
                                }`}
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
                  )}
                  <div className="space-y-1">
                    <Label className="text-brand-black text-sm">
                      From Date
                    </Label>
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
                    <Label className="text-brand-black text-sm">
                      Trading Partner
                    </Label>
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
                              checked={
                                filteredPartners.length > 0 &&
                                filteredPartners.every((p) =>
                                  selectedPartners.includes(p.code)
                                )
                              }
                              ref={(el) => {
                                const inputElement = el as HTMLInputElement;
                                if (inputElement) {
                                  inputElement.indeterminate =
                                    filteredPartners.some((p) =>
                                      selectedPartners.includes(p.code)
                                    ) &&
                                    !filteredPartners.every((p) =>
                                      selectedPartners.includes(p.code)
                                    );
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
                                    checked={selectedPartners.includes(
                                      partner.code
                                    )}
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
                              checked={
                                filteredWMS.length > 0 &&
                                filteredWMS.every((item) =>
                                  selectedWMS.includes(item)
                                )
                              }
                              ref={(el) => {
                                const inputElement = el as HTMLInputElement;
                                if (inputElement) {
                                  inputElement.indeterminate =
                                    filteredWMS.some((item) =>
                                      selectedWMS.includes(item)
                                    ) &&
                                    !filteredWMS.every((item) =>
                                      selectedWMS.includes(item)
                                    );
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
                                  <span className="text-sm">{wms}</span>
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
                    <Label className="text-brand-black text-sm">
                      Document Type
                    </Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center justify-between w-full px-3 py-1.5 text-sm border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary h-9">
                        {selectedDocType}
                        <ChevronDown className="w-4 h-4 ml-2" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-[200px] border-brand-light">
                        <DropdownMenuItem
                          className={`${selectedDocType === "Select"
                            ? "bg-brand-accent text-white"
                            : "hover:bg-brand-subtle"
                            }`}
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
                            className={`${selectedDocType === docType
                              ? "bg-brand-accent text-white"
                              : "hover:bg-brand-subtle"
                              }`}
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
                    <Label className="text-brand-black text-sm">
                      Document #
                    </Label>
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
                          className={`${selectedStatus === "Select"
                            ? "bg-brand-accent text-white"
                            : "hover:bg-brand-subtle"
                            }`}
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
                            className={`${selectedStatus === status
                              ? "bg-brand-accent text-white"
                              : "hover:bg-brand-subtle"
                              }`}
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
                {showAllFilters && (
                  <>
                    <div className="grid grid-cols-4 gap-3">
                      <div className="space-y-1">
                        <Label className="text-brand-black text-sm">
                          ACK/API Status
                        </Label>
                        <DropdownMenu
                          open={isApiStatusOpen}
                          onOpenChange={setIsApiStatusOpen}
                        >
                          <DropdownMenuTrigger className="flex items-center justify-between w-full px-3 py-1.5 text-sm border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary h-9 text-left">
                            <span className="truncate">
                              {getApiStatusDisplayText()}
                            </span>
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
                                  checked={
                                    filteredApiStatuses.length > 0 &&
                                    filteredApiStatuses.every((item) =>
                                      selectedApiStatuses.includes(item)
                                    )
                                  }
                                  ref={(el) => {
                                    const inputElement = el as HTMLInputElement;
                                    if (inputElement) {
                                      inputElement.indeterminate =
                                        filteredApiStatuses.some((item) =>
                                          selectedApiStatuses.includes(item)
                                        ) &&
                                        !filteredApiStatuses.every((item) =>
                                          selectedApiStatuses.includes(item)
                                        );
                                    }
                                  }}
                                  onCheckedChange={toggleSelectAllApiStatuses}
                                  className="h-4 w-4"
                                />
                                <Input
                                  placeholder="Search statuses..."
                                  value={apiStatusSearchTerm}
                                  onChange={(e) =>
                                    setApiStatusSearchTerm(e.target.value)
                                  }
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
                                        checked={selectedApiStatuses.includes(
                                          status
                                        )}
                                        className="mr-2 h-4 w-4"
                                      />
                                      <span className="text-sm">{status}</span>
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

                    <div className="space-y-3">
                      {filters.map((filter, index) => (
                        <div
                          key={index}
                          className="grid grid-cols-4 gap-3 items-end"
                        >
                          <div className="space-y-1">
                            <Label className="text-brand-black text-sm">
                              Correlation
                            </Label>
                            <DropdownMenu>
                              <DropdownMenuTrigger className="flex items-center justify-between w-full px-3 py-1.5 text-sm border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary h-9">
                                {filter.correlation}
                                <ChevronDown className="w-4 h-4 ml-2" />
                              </DropdownMenuTrigger>
                              <DropdownMenuContent className="w-[200px] border-brand-light">
                                <DropdownMenuItem
                                  className={`${filter.correlation === "Select"
                                    ? "bg-brand-accent text-white"
                                    : "hover:bg-brand-subtle"
                                    }`}
                                  onClick={() =>
                                    updateCorrelation(index, "Select")
                                  }
                                >
                                  <span className="flex items-center">
                                    {filter.correlation === "Select" && (
                                      <Check className="h-4 w-4 mr-2" />
                                    )}
                                    Select
                                  </span>
                                </DropdownMenuItem>
                                {correlationOptions.map((option) => (
                                  <DropdownMenuItem
                                    key={option}
                                    className={`${filter.correlation === option
                                      ? "bg-brand-accent text-white"
                                      : "hover:bg-brand-subtle"
                                      }`}
                                    onClick={() =>
                                      updateCorrelation(index, option)
                                    }
                                  >
                                    <span className="flex items-center">
                                      {filter.correlation === option && (
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
                            <Label className="text-brand-black text-sm">
                              Value
                            </Label>
                            <Input
                              type="text"
                              placeholder="Enter search value"
                              className="border-brand-light focus-brand h-9 py-1.5 text-sm"
                              value={filter.value}
                              onChange={(e) =>
                                updateValue(index, e.target.value)
                              }
                            />
                          </div>

                          <div className="flex items-end gap-2">
                            {index === 0 && filters.length < 3 && (
                              <Button
                                variant="outline"
                                className="btn-secondary border-brand-light h-9 w-9 p-0 flex items-center justify-center"
                                onClick={addFilter}
                                aria-label="Add filter"
                              >
                                <PlusIcon className="h-4 w-4 text-brand-subtle" />
                              </Button>
                            )}
                            {index > 0 && (
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-9 w-9 text-brand-error hover:bg-brand-error/10"
                                onClick={() => removeFilter(index)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Action Buttons */}
                <div className="flex  items-center mt-2 gap-2">
                  <div className="flex justify-end">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-brand-primary hover:text-brand-primary-dark text-sm flex items-center gap-1"
                      onClick={() => setShowAllFilters(!showAllFilters)}
                    >
                      {showAllFilters ? (
                        <>
                          <ChevronUp className="h-4 w-4" />
                          Less Filters
                        </>
                      ) : (
                        <>
                          <ChevronDown className="h-4 w-4" />
                          More Filters
                        </>
                      )}
                    </Button>
                  </div>

                  <Button className="btn-primary h-9 text-sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                  <Button
                    variant="outline"
                    className="h-9 text-sm text-brand-dark border-brand-light"
                  >
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Reset
                  </Button>
                </div>
              </div>
            </CardContent>
          )}
        </Card>

        <div className="flex justify-end items-center px-4 pt-4" >
          <div className="flex items-center gap-2">
            {/* Switch toggle for Cards/Table view */}
            <div className="flex items-center gap-2">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  id="view-toggle"
                  className="sr-only peer"
                  checked={visibleColumns.length === 0}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setVisibleColumns([]);
                    } else {
                      setVisibleColumns([
                        "dateTimeReceived",
                        "fileId",
                        "senderId",
                        "parentWarehouse",
                        "warehouse",
                        "partnerName",
                        "direction",
                        "transactionType",
                        "reProcessStatus",
                        "ackStatus",
                      ]);
                    }
                  }}
                />
                <div className="w-16 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-brand-primary rounded-full peer transition-colors flex items-center justify-between px-2">
                  <IdCard
                    className={`h-5 w-5 transition-all ${visibleColumns.length === 0 ? "text-brand-primary" : "text-gray-400"}`}
                  />
                  <FileSpreadsheet
                    className={`h-5 w-5 transition-all ${visibleColumns.length !== 0 ? "text-brand-primary" : "text-gray-400"}`}
                  />
                </div>
                <span className="sr-only">Toggle view</span>
              </label>
            </div>
          </div>
        </div>
        <Card className="brand-card  ">
          <CardContent className="pt-6">
            {/* Card Grid for Document List */}
            {visibleColumns.length === 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 py-4">
                {documentList.data
                  .slice(
                    (currentPage - 1) * rowsPerPage,
                    currentPage * rowsPerPage
                  )
                  .map((doc: any) => (
                    <Card
                      key={doc.id}
                      className="border border-brand-light shadow-sm h-full flex flex-col bg-[white]"
                    >
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <div className="flex items-center gap-2">
                          {getFileIcon(doc.fileType)}
                          <span className="text-brand-primary font-semibold text-sm">
                            {doc.fileType}
                          </span>
                        </div>
                        <Badge
                          variant="outline"
                          className={`text-xs px-2 py-0.5 rounded ${doc.status === "SUCCESS"
                            ? "bg-green-100 text-green-800"
                            : doc.status === "ERROR"
                              ? "bg-red-100 text-red-800"
                              : "bg-yellow-100 text-yellow-800"
                            }`}
                        >
                          {doc.status}
                        </Badge>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col gap-2">
                        <div className="text-xs text-brand-muted mb-1">
                          {doc.dateTimeReceived}
                        </div>
                        <div className="text-sm font-medium text-brand-black truncate mb-1">
                          {doc.fileName || doc.fileId}
                        </div>
                        <div className="flex flex-col gap-1 text-xs">
                          {visibleColumns.includes("transactionType") && (
                            <div>
                              <span className="font-semibold text-brand-dark">
                                Transaction:{" "}
                              </span>
                              {doc.transactionType}
                            </div>
                          )}
                          {visibleColumns.includes("senderId") && (
                            <div>
                              <span className="font-semibold text-brand-dark">
                                Sender:{" "}
                              </span>
                              {doc.senderId}
                            </div>
                          )}
                          {visibleColumns.includes("parentWarehouse") && (
                            <div>
                              <span className="font-semibold text-brand-dark">
                                WSM:{" "}
                              </span>
                              {doc.parentWarehouse}
                            </div>
                          )}
                          {visibleColumns.includes("warehouse") && (
                            <div>
                              <span className="font-semibold text-brand-dark">
                                Warehouse:{" "}
                              </span>
                              {doc.warehouse}
                            </div>
                          )}
                          {visibleColumns.includes("partnerName") && (
                            <div>
                              <span className="font-semibold text-brand-dark">
                                Partner:{" "}
                              </span>
                              {doc.partnerName}
                            </div>
                          )}
                          {visibleColumns.includes("direction") && (
                            <div>
                              <span className="font-semibold text-brand-dark">
                                Direction:{" "}
                              </span>
                              {doc.direction}
                            </div>
                          )}
                          {visibleColumns.includes("isaControlNumber") && (
                            <div>
                              <span className="font-semibold text-brand-dark">
                                ISACTRL:{" "}
                              </span>
                              {doc.isaControlNumber}
                            </div>
                          )}
                          {visibleColumns.includes("ackStatus") && (
                            <div>
                              <span className="font-semibold text-brand-dark">
                                ACK Status:{" "}
                              </span>
                              <span
                                className={`px-2 py-0.5 rounded text-xs font-medium ${doc.ackStatus === "PENDING"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : doc.ackStatus === "SUCCESS"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-red-100 text-red-800"
                                  }`}
                              >
                                {doc.ackStatus}
                              </span>
                            </div>
                          )}
                          {visibleColumns.includes("reProcessStatus") && (
                            <div>
                              <span className="font-semibold text-brand-dark">
                                ReProcess:{" "}
                              </span>
                              {doc.reProcessStatus}
                            </div>
                          )}
                          {visibleColumns.includes("resubmittedBy") && (
                            <div>
                              <span className="font-semibold text-brand-dark">
                                Resubmitted:{" "}
                              </span>
                              {doc.resubmittedBy}
                            </div>
                          )}
                          {/* Additional values */}
                          <div>
                            <span className="font-semibold text-brand-dark">
                              File ID:{" "}
                            </span>
                            {doc.fileId}
                          </div>
                          <div>
                            <span className="font-semibold text-brand-dark">
                              Post Trans File Name:{" "}
                            </span>
                            {doc.postTransFileName}
                          </div>
                          <div>
                            <span className="font-semibold text-brand-dark">
                              Shipment ID:{" "}
                            </span>
                            {doc.shipmentId}
                          </div>
                          <div>
                            <span className="font-semibold text-brand-dark">
                              GS Control #:{" "}
                            </span>
                            {doc.gsControlNumber}
                          </div>
                          <div>
                            <span className="font-semibold text-brand-dark">
                              ST Control #:{" "}
                            </span>
                            {doc.stControlNumber}
                          </div>
                        </div>
                      </CardContent>
                      <div className="flex items-center gap-2 px-4 pb-4">
                        <Button
                          variant="outline"
                          className="h-9 text-sm text-brand-dark border-brand-light"
                          onClick={() => setOpen(true)}
                        >
                          <RefreshCw className="h-4 w-4 mr-2" />
                        </Button>
                        <Button
                          variant="outline"
                          className="h-9 text-sm text-brand-dark border-brand-light"
                        >
                          <Recycle className="h-4 w-4 mr-2" />
                        </Button>
                        <Button className="btn-primary h-9 text-sm ml-2">
                          <FileText className="h-4 w-4 mr-2" />
                        </Button>
                      </div>
                    </Card>
                  ))}
              </div>
            )}
            {/* Table for Document List */}
            {visibleColumns.length !== 0 && (
              <div className="overflow-x-auto rounded-lg border border-brand-light bg-white shadow-sm">
                {/* Column selection menu */}
                <div className="flex justify-end items-center px-4 py-2 bg-white border-b border-brand-light">
                  <div className="flex items-center gap-4 flex-1">
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
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="h-8 px-2">
                        <MoreHorizontal className="h-4 w-4 mr-1" />
                        Columns
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      {[
                        { key: "dateTimeReceived", label: "Date Time" },
                        { key: "fileId", label: "Instance Id" },
                        { key: "senderId", label: "Sender" },
                        { key: "parentWarehouse", label: "WSM" },
                        { key: "warehouse", label: "Warehouse" },
                        { key: "partnerName", label: "Partner" },
                        { key: "transactionType", label: "Transaction" },
                        { key: "isaControlNumber", label: "ISACTRL" },
                        { key: "direction", label: "Direction" },
                        { key: "fileType", label: "File Format" },
                        { key: "ackStatus", label: "ACK Status" },
                        { key: "reProcessStatus", label: "ReProcess" },
                        { key: "resubmittedBy", label: "Resubmitted" },
                      ].map((col) => (
                        <DropdownMenuItem
                          key={col.key}
                          className="flex items-center gap-2"
                          onSelect={(e) => {
                            e.preventDefault();
                            setVisibleColumns(
                              (prev) =>
                                prev.includes(col.key)
                                  ? prev.length > 8
                                    ? prev.filter((k) => k !== col.key)
                                    : prev // Don't allow less than 8 columns
                                  : prev.length < 12
                                    ? [...prev, col.key]
                                    : prev // Max 12 columns
                            );
                          }}
                        >
                          <Checkbox
                            checked={visibleColumns.includes(col.key)}
                            disabled={
                              visibleColumns.includes(col.key) &&
                              visibleColumns.length === 8
                            }
                            className="mr-2 h-4 w-4"
                          />
                          {col.label}
                        </DropdownMenuItem>
                      ))}
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onSelect={(e) => {
                          e.preventDefault();
                          setVisibleColumns([
                            "dateTimeReceived",
                            "fileId",
                            "senderId",
                            "parentWarehouse",
                            "warehouse",
                            "partnerName",
                            "direction",
                            "transactionType",
                            "reProcessStatus",
                            "ackStatus",
                          ]);
                        }}
                      >
                        Reset to Default
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <Table className="table-brand">
                  <TableHeader >
                    <TableRow className="[&>th]:transition-colors [&>th]:duration-150 [&>th]:ease-in hover:[&>th]:bg-brand-subtle">
                      <TableHead className="w-10 px-3 py-2">
                        <Checkbox className="rounded border-brand-light" />
                      </TableHead>
                      {visibleColumns.includes("dateTimeReceived") && (
                        <TableHead className="text-[#ffffff] font-semibold text-sm px-3 py-2 whitespace-nowrap">
                          Date Time
                        </TableHead>
                      )}
                      {visibleColumns.includes("fileId") && (
                        <TableHead className="text-[#ffffff] font-semibold text-sm px-3 py-2 whitespace-nowrap">
                          Instance Id
                        </TableHead>
                      )}
                      {visibleColumns.includes("senderId") && (
                        <TableHead className="text-[#ffffff] font-semibold text-sm px-3 py-2 whitespace-nowrap">
                          Sender
                        </TableHead>
                      )}
                      {visibleColumns.includes("parentWarehouse") && (
                        <TableHead className="text-[#ffffff] font-semibold text-sm px-3 py-2 whitespace-nowrap">
                          WSM
                        </TableHead>
                      )}
                      {visibleColumns.includes("warehouse") && (
                        <TableHead className="text-[#ffffff] font-semibold text-sm px-3 py-2 whitespace-nowrap">
                          Warehouse
                        </TableHead>
                      )}
                      {visibleColumns.includes("partnerName") && (
                        <TableHead className="text-[#ffffff] font-semibold text-sm px-3 py-2 whitespace-nowrap">
                          Partner
                        </TableHead>
                      )}
                      {visibleColumns.includes("transactionType") && (
                        <TableHead className="text-[#ffffff] font-semibold text-sm px-3 py-2 whitespace-nowrap">
                          Transaction
                        </TableHead>
                      )}
                      {visibleColumns.includes("isaControlNumber") && (
                        <TableHead className="text-[#ffffff] font-semibold text-sm px-3 py-2 whitespace-nowrap">
                          ISACTRL
                        </TableHead>
                      )}
                      {visibleColumns.includes("direction") && (
                        <TableHead className="text-[#ffffff] font-semibold text-sm px-3 py-2 whitespace-nowrap">
                          Direction
                        </TableHead>
                      )}
                      {visibleColumns.includes("fileType") && (
                        <TableHead className="text-[#ffffff] font-semibold text-sm px-3 py-2 whitespace-nowrap">
                          File Format
                        </TableHead>
                      )}
                      {visibleColumns.includes("ackStatus") && (
                        <TableHead className="text-[#ffffff] font-semibold text-sm px-3 py-2 whitespace-nowrap">
                          ACK Status
                        </TableHead>
                      )}
                      {visibleColumns.includes("reProcessStatus") && (
                        <TableHead className="text-[#ffffff] font-semibold text-sm px-3 py-2 whitespace-nowrap">
                          ReProcess
                        </TableHead>
                      )}
                      {visibleColumns.includes("resubmittedBy") && (
                        <TableHead className="text-[#ffffff] font-semibold text-sm px-3 py-2 whitespace-nowrap">
                          Resubmitted
                        </TableHead>
                      )}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {documentList.data
                      .slice(
                        (currentPage - 1) * rowsPerPage,
                        currentPage * rowsPerPage
                      )
                      .map((doc: any, idx: number) => (
                        <TableRow
                          key={doc.id}
                          className={`transition-colors border-b border-[#e5e7eb] ${idx % 2 === 0
                            ? "bg-[#f1f3f7]"
                            : "bg-brand-subtle/50"
                            } hover:bg-[#e9ecef]`}
                        >
                          <TableCell className="px-3 py-2">
                            <Checkbox className="rounded border-brand-light" />
                          </TableCell>
                          {visibleColumns.includes("dateTimeReceived") && (
                            <TableCell className="px-3 py-2 text-brand-black whitespace-nowrap">
                              {doc.dateTimeReceived}
                            </TableCell>
                          )}
                          {visibleColumns.includes("fileId") && (
                            <TableCell className="px-3 py-2 text-brand-black whitespace-nowrap">
                              {doc.fileId}
                            </TableCell>
                          )}
                          {visibleColumns.includes("senderId") && (
                            <TableCell className="px-3 py-2 text-brand-black whitespace-nowrap">
                              {doc.senderId}
                            </TableCell>
                          )}
                          {visibleColumns.includes("parentWarehouse") && (
                            <TableCell className="px-3 py-2 text-brand-black whitespace-nowrap">
                              {doc.parentWarehouse}
                            </TableCell>
                          )}
                          {visibleColumns.includes("warehouse") && (
                            <TableCell className="px-3 py-2 text-brand-black whitespace-nowrap">
                              {doc.warehouse}
                            </TableCell>
                          )}
                          {visibleColumns.includes("partnerName") && (
                            <TableCell className="px-3 py-2 text-brand-black whitespace-nowrap">
                              {doc.partnerName}
                            </TableCell>
                          )}
                          {visibleColumns.includes("transactionType") && (
                            <TableCell className="px-3 py-2 text-brand-black whitespace-nowrap">
                              {doc.transactionType}
                            </TableCell>
                          )}
                          {visibleColumns.includes("isaControlNumber") && (
                            <TableCell className="px-3 py-2 text-brand-black whitespace-nowrap">
                              {doc.isaControlNumber}
                            </TableCell>
                          )}
                          {visibleColumns.includes("direction") && (
                            <TableCell className="px-3 py-2 text-brand-black whitespace-nowrap">
                              <Badge variant="outline" 
                              className={
                                doc.direction === "INBOUND"?"text-brand-accent border-brand-accent bg-white":"text-brand-primary border-brand-primary bg-white"}
                              >
                              {doc.direction}
                              </Badge>
                            </TableCell>
                          )}
                          {visibleColumns.includes("fileType") && (
                            <TableCell className="px-3 py-2 text-brand-black whitespace-nowrap">
                              <span className="inline-flex items-center gap-1">
                                {getFileIcon(doc.fileType)}
                                <span>{doc.fileType}</span>
                              </span>
                            </TableCell>
                          )}
                          {visibleColumns.includes("ackStatus") && (
                            <TableCell className="px-3 py-2 whitespace-nowrap">
                              <span
                                className={`px-2 py-1 rounded text-xs font-medium ${doc.ackStatus === "PENDING"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : doc.ackStatus === "SUCCESS"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-red-100 text-red-800"
                                  }`}
                              >
                                {doc.ackStatus}
                              </span>
                            </TableCell>
                          )}
                          {visibleColumns.includes("reProcessStatus") && (
                            <TableCell className="px-3 py-2 text-brand-black whitespace-nowrap">
                              {doc.reProcessStatus}
                            </TableCell>
                          )}
                          {visibleColumns.includes("resubmittedBy") && (
                            <TableCell className="px-3 py-2 text-brand-black whitespace-nowrap">
                              {doc.resubmittedBy}
                            </TableCell>
                          )}
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
                {documentList.data.length === 0 && (
                  <div className="py-8 text-center text-brand-muted text-sm">
                    No documents found.
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    className="h-9 text-sm text-brand-dark border-brand-light"
                    onClick={() => setOpen(true)}
                  >
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Reprocess
                  </Button>

                  <Button
                    variant="outline"
                    className="h-9 text-sm text-brand-dark border-brand-light"
                  >
                    <Recycle className="h-4 w-4 mr-2" />
                    Life Cycle
                  </Button>

                  <Button className="btn-primary h-9 text-sm ml-2">
                    <FileText className="h-4 w-4 mr-2" />
                    Generate Excel
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader className="space-y-7">
            <DialogTitle className="text-brand-dark">Confirmation</DialogTitle>
            <div className="flex items-start">
              {" "}
              {/* Changed to flex container */}
              <AlertTriangle className="h-5 w-5 text-brand-warning mr-2 mt-0.5 flex-shrink-0" />{" "}
              {/* Alert icon */}
              <DialogDescription className="text-brand-black">
                Are you sure that you want to reprocess?
              </DialogDescription>
            </div>
          </DialogHeader>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
              className="h-9 text-sm border-brand-light text-brand-dark hover:bg-brand-subtle"
            >
              No
            </Button>
            <Button
              onClick={handleConfirmReprocess}
              className="h-9 text-sm bg-brand-primary hover:bg-brand-primary-dark text-white"
            >
              Yes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </SidebarInset>
  );
}
