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
import { Download, Filter, TrendingUp, TrendingDown, AlertTriangle, ChevronDown, RotateCcw, Check, FileText, FileSpreadsheet } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer, Line, LineChart, PieChart, Pie, Legend, Cell, Tooltip } from "recharts"
import { Progress } from "@/components/ui/progress"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"


const tpVolumeData = [
  {
    partner: "Walmart Inc.",
    code: "WAL001",
    totalVolume: 125847,
    thisMonth: 12584,
    lastMonth: 11234,
    growth: 12.0,
    avgDaily: 418,
    peakDaily: 892,
    slaCompliance: 99.1,
    status: "Excellent",
    trend: "up",
    transactions: {
      successful: 124523,
      failed: 234,
      pending: 1090,
    },
  },
  {
    partner: "Amazon.com Inc.",
    code: "AMZ001",
    totalVolume: 145623,
    thisMonth: 14562,
    lastMonth: 13890,
    growth: 4.8,
    avgDaily: 485,
    peakDaily: 1024,
    slaCompliance: 97.2,
    status: "Good",
    trend: "up",
    transactions: {
      successful: 140234,
      failed: 1234,
      pending: 4155,
    },
  },
  {
    partner: "Target Corporation",
    code: "TGT001",
    totalVolume: 98234,
    thisMonth: 9823,
    lastMonth: 10456,
    growth: -6.1,
    avgDaily: 327,
    peakDaily: 678,
    slaCompliance: 98.5,
    status: "Good",
    trend: "down",
    transactions: {
      successful: 96789,
      failed: 456,
      pending: 989,
    },
  },
  {
    partner: "Costco Wholesale",
    code: "CST001",
    totalVolume: 75234,
    thisMonth: 7523,
    lastMonth: 8901,
    growth: -15.5,
    avgDaily: 251,
    peakDaily: 534,
    slaCompliance: 95.8,
    status: "Warning",
    trend: "down",
    transactions: {
      successful: 71234,
      failed: 1234,
      pending: 2766,
    },
  },
  {
    partner: "The Home Depot",
    code: "HD001",
    totalVolume: 65123,
    thisMonth: 6512,
    lastMonth: 6234,
    growth: 4.5,
    avgDaily: 217,
    peakDaily: 445,
    slaCompliance: 96.3,
    status: "Good",
    trend: "up",
    transactions: {
      successful: 63456,
      failed: 567,
      pending: 1100,
    },
  },
]

const monthlyTrendData = [
  { month: "Jul", walmart: 11200, amazon: 13400, target: 10100, costco: 8500, homedepot: 6000 },
  { month: "Aug", walmart: 11500, amazon: 13600, target: 10300, costco: 8700, homedepot: 6100 },
  { month: "Sep", walmart: 11800, amazon: 13800, target: 10500, costco: 8900, homedepot: 6200 },
  { month: "Oct", walmart: 12000, amazon: 14000, target: 10400, costco: 8800, homedepot: 6150 },
  { month: "Nov", walmart: 12200, amazon: 14200, target: 10450, costco: 8900, homedepot: 6230 },
  { month: "Dec", walmart: 12584, amazon: 14562, target: 9823, costco: 7523, homedepot: 6512 },
]

const chartConfig = {
  walmart: {
    label: "Walmart",
    color: "#2368a0",
  },
  amazon: {
    label: "Amazon",
    color: "#00aae7",
  },
  target: {
    label: "Target",
    color: "#0d416b",
  },
  costco: {
    label: "Costco",
    color: "#8c8c8c",
  },
  homedepot: {
    label: "Home Depot",
    color: "#b7b2b3",
  },
}


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

const statusOptions = [
  "SUCCESS",
  "DROPPED",
  "ERROR"
];

const inboundData = [
  { name: "Inbound", value: 1250 },
  // { name: "Shipments", value: 980 },
  // { name: "Receipts", value: 750 },
];

const outboundData = [
  { name: "Outbound", value: 1250 },
  // { name: "Shipments", value: 980 },
  // { name: "Receipts", value: 750 },
];



const documentsApiData = { "data": [{ "id": 4242, "fileId": "2163332", "fileType": "VXML", "fileOrigin": null, "transactionType": "846", "direction": "OUTBOUND", "status": "ERROR", "ackStatus": "PENDING", "warehouse": "", "parentWarehouse": "VIZION", "senderId": "SCHWANSGLOBAL", "receiverId": null, "primaryKeyType": null, "primaryKeyValue": "SCHWANSGLOBAL", "secondaryKeyType": null, "secondaryKeyValue": null, "dateTimeReceived": "06/24/2025 07:15 ", "isaControlNumber": "-", "isaDate": null, "isaTime": null, "gsControlNumber": "-", "stControlNumber": "-", "fileName": "SCHWANSGLOBAL.846.20250527203120.dat", "postTransFileName": "-", "ackFilePath": null, "orgFilePath": null, "preTransFilePath": null, "postTransFilePath": null, "errorReportFilePath": null, "errorMessage": null, "reProcessStatus": "-", "senderName": null, "receiverName": null, "partnerName": "-", "shipmentId": "SCHWANSGLOBAL", "poNumber": null, "filePath": null, "toAddress": null, "body": null, "subject": null, "errFileId": "2163334", "resubmittedBy": "-" }, { "id": 4241, "fileId": "2160746", "fileType": "XML FILE", "fileOrigin": null, "transactionType": "945", "direction": "OUTBOUND", "status": "SUCCESS", "ackStatus": "PENDING", "warehouse": "", "parentWarehouse": "", "senderId": "", "receiverId": null, "primaryKeyType": null, "primaryKeyValue": "CTV-430982", "secondaryKeyType": null, "secondaryKeyValue": null, "dateTimeReceived": "06/23/2025 10:54 ", "isaControlNumber": "-", "isaDate": null, "isaTime": null, "gsControlNumber": "-", "stControlNumber": "-", "fileName": "945F_12127_AT_250527115816_CTV-430982_ErrorFile.xml", "postTransFileName": "-", "ackFilePath": null, "orgFilePath": null, "preTransFilePath": null, "postTransFilePath": null, "errorReportFilePath": null, "errorMessage": null, "reProcessStatus": "-", "senderName": null, "receiverName": null, "partnerName": "-", "shipmentId": "CTV-430982 Id:77274", "poNumber": null, "filePath": null, "toAddress": null, "body": null, "subject": null, "errFileId": "-", "resubmittedBy": "-" }, { "id": 4240, "fileId": "2160321", "fileType": "FLAT FILE", "fileOrigin": null, "transactionType": "945", "direction": "OUTBOUND", "status": "SUCCESS", "ackStatus": "PENDING", "warehouse": "Kentile", "parentWarehouse": "HJ_Halls", "senderId": "311135B2BT", "receiverId": null, "primaryKeyType": null, "primaryKeyValue": "9579036", "secondaryKeyType": null, "secondaryKeyValue": null, "dateTimeReceived": "06/23/2025 07:25 ", "isaControlNumber": "000000445", "isaDate": null, "isaTime": null, "gsControlNumber": "68", "stControlNumber": "5625", "fileName": "945_250206390006.txt", "postTransFileName": "945_W1_MICINC_20250623072529616.txt", "ackFilePath": null, "orgFilePath": null, "preTransFilePath": null, "postTransFilePath": null, "errorReportFilePath": null, "errorMessage": null, "reProcessStatus": "-", "senderName": null, "receiverName": null, "partnerName": "-", "shipmentId": "0086142686 Id:77267", "poNumber": null, "filePath": null, "toAddress": null, "body": null, "subject": null, "errFileId": "-", "resubmittedBy": "-" }, { "id": 4239, "fileId": "2160269", "fileType": "XML FILE", "fileOrigin": null, "transactionType": "947", "direction": "OUTBOUND", "status": "SUCCESS", "ackStatus": "PENDING", "warehouse": "ROCHELLE", "parentWarehouse": "JDA", "senderId": "311135B2BI", "receiverId": null, "primaryKeyType": null, "primaryKeyValue": "0581493782080", "secondaryKeyType": null, "secondaryKeyValue": null, "dateTimeReceived": "06/23/2025 07:07 ", "isaControlNumber": "000018309", "isaDate": null, "isaTime": null, "gsControlNumber": "27199", "stControlNumber": "2087", "fileName": "947_InvAdj_291942427_20250217132422.txt", "postTransFileName": "947_IL-RO-PUB_29248_20250623070729196.txt", "ackFilePath": null, "orgFilePath": null, "preTransFilePath": null, "postTransFilePath": null, "errorReportFilePath": null, "errorMessage": null, "reProcessStatus": "-", "senderName": null, "receiverName": null, "partnerName": "Lambweston", "shipmentId": "00000000000291942427 Id:77262", "poNumber": null, "filePath": null, "toAddress": null, "body": null, "subject": null, "errFileId": "-", "resubmittedBy": "-" }, { "id": 4238, "fileId": "2160249", "fileType": "FLAT FILE", "fileOrigin": null, "transactionType": "944", "direction": "OUTBOUND", "status": "SUCCESS", "ackStatus": "PENDING", "warehouse": "NewPort", "parentWarehouse": "HJ", "senderId": "311135B2BI", "receiverId": null, "primaryKeyType": null, "primaryKeyValue": "79504", "secondaryKeyType": null, "secondaryKeyValue": null, "dateTimeReceived": "06/23/2025 07:04 ", "isaControlNumber": "000018308", "isaDate": null, "isaTime": null, "gsControlNumber": "374", "stControlNumber": "0055", "fileName": "944_M7_LAMBWESTON_250218233.txt", "postTransFileName": "944_M7_LAMBWESTON_20250623070429301.txt", "ackFilePath": null, "orgFilePath": null, "preTransFilePath": null, "postTransFilePath": null, "errorReportFilePath": null, "errorMessage": null, "reProcessStatus": "-", "senderName": null, "receiverName": null, "partnerName": "Lambweston", "shipmentId": "4201322037 Id:77253", "poNumber": null, "filePath": null, "toAddress": null, "body": null, "subject": null, "errFileId": "-", "resubmittedBy": "-" }, { "id": 4237, "fileId": "2160219", "fileType": "FLAT FILE", "fileOrigin": null, "transactionType": "945", "direction": "OUTBOUND", "status": "SUCCESS", "ackStatus": "PENDING", "warehouse": "Kentile", "parentWarehouse": "HJ_Halls", "senderId": "311135B2BT", "receiverId": null, "primaryKeyType": null, "primaryKeyValue": "9579036", "secondaryKeyType": null, "secondaryKeyValue": null, "dateTimeReceived": "06/23/2025 06:59 ", "isaControlNumber": "000000444", "isaDate": null, "isaTime": null, "gsControlNumber": "67", "stControlNumber": "5624", "fileName": "945_250206390006.txt", "postTransFileName": "945_W1_MICINC_20250623065929493.txt", "ackFilePath": null, "orgFilePath": null, "preTransFilePath": null, "postTransFilePath": null, "errorReportFilePath": null, "errorMessage": null, "reProcessStatus": "-", "senderName": null, "receiverName": null, "partnerName": "-", "shipmentId": "0086142686 Id:77244", "poNumber": null, "filePath": null, "toAddress": null, "body": null, "subject": null, "errFileId": "-", "resubmittedBy": "-" }, { "id": 4236, "fileId": "2151889", "fileType": "JSON", "fileOrigin": null, "transactionType": "1117", "direction": "INBOUND", "status": "SUCCESS", "ackStatus": "PENDING", "warehouse": "-", "parentWarehouse": "JDA", "senderId": "02787", "receiverId": null, "primaryKeyType": null, "primaryKeyValue": "DCAU2401-8523471-001-20250415", "secondaryKeyType": null, "secondaryKeyValue": null, "dateTimeReceived": "06/20/2025 08:12 ", "isaControlNumber": "-", "isaDate": null, "isaTime": null, "gsControlNumber": "-", "stControlNumber": "-", "fileName": "-", "postTransFileName": "xmlappointment_ADUSA_2151899_202506200813077676.xml", "ackFilePath": null, "orgFilePath": null, "preTransFilePath": null, "postTransFilePath": null, "errorReportFilePath": null, "errorMessage": null, "reProcessStatus": "-", "senderName": null, "receiverName": null, "partnerName": "ADUSA", "shipmentId": "CS06653142", "poNumber": null, "filePath": null, "toAddress": null, "body": null, "subject": null, "errFileId": "-", "resubmittedBy": "-" }, { "id": 4235, "fileId": "2149297", "fileType": "EDI", "fileOrigin": null, "transactionType": "943", "direction": "INBOUND", "status": "SUCCESS", "ackStatus": "PENDING", "warehouse": "-", "parentWarehouse": "-", "senderId": "91965867437041", "receiverId": null, "primaryKeyType": null, "primaryKeyValue": "F 0082427968 20250618 N 4500559478", "secondaryKeyType": null, "secondaryKeyValue": null, "dateTimeReceived": "06/19/2025 10:50 ", "isaControlNumber": "000030352", "isaDate": null, "isaTime": null, "gsControlNumber": "38668", "stControlNumber": "0001", "fileName": "Butterball_943_P2_Russelville_EDI", "postTransFileName": "POP2149310.txt", "ackFilePath": null, "orgFilePath": null, "preTransFilePath": null, "postTransFilePath": null, "errorReportFilePath": null, "errorMessage": null, "reProcessStatus": "-", "senderName": null, "receiverName": null, "partnerName": "-", "shipmentId": "0082427968 Id:77225", "poNumber": null, "filePath": null, "toAddress": null, "body": null, "subject": null, "errFileId": "-", "resubmittedBy": "-" }, { "id": 4234, "fileId": "2149157", "fileType": "EDI", "fileOrigin": null, "transactionType": "943", "direction": "INBOUND", "status": "SUCCESS", "ackStatus": "PENDING", "warehouse": "-", "parentWarehouse": "-", "senderId": "91965867437041", "receiverId": null, "primaryKeyType": null, "primaryKeyValue": "F 0082427968 20250618 N 4500559478", "secondaryKeyType": null, "secondaryKeyValue": null, "dateTimeReceived": "06/19/2025 10:05 ", "isaControlNumber": "000030352", "isaDate": null, "isaTime": null, "gsControlNumber": "38668", "stControlNumber": "0001", "fileName": "Butterball_943_P2_Russelville_EDI", "postTransFileName": "-", "ackFilePath": null, "orgFilePath": null, "preTransFilePath": null, "postTransFilePath": null, "errorReportFilePath": null, "errorMessage": null, "reProcessStatus": "-", "senderName": null, "receiverName": null, "partnerName": "-", "shipmentId": "0082427968 Id:77216", "poNumber": null, "filePath": null, "toAddress": null, "body": null, "subject": null, "errFileId": "-", "resubmittedBy": "-" }, { "id": 4233, "fileId": "2148861", "fileType": "EDI", "fileOrigin": null, "transactionType": "943", "direction": "INBOUND", "status": "SUCCESS", "ackStatus": "PENDING", "warehouse": "AMC Fort Smith", "parentWarehouse": "ALPHA", "senderId": "91965867437040", "receiverId": null, "primaryKeyType": null, "primaryKeyValue": "F 0082426323 20250612 N 4500559056", "secondaryKeyType": null, "secondaryKeyValue": null, "dateTimeReceived": "06/19/2025 07:44 ", "isaControlNumber": "000037605", "isaDate": null, "isaTime": null, "gsControlNumber": "38529", "stControlNumber": "0001", "fileName": "Butterball_943_Alpha_Fort Smith_EDI_0614", "postTransFileName": "FTSM_943_2506190745148873.txt", "ackFilePath": null, "orgFilePath": null, "preTransFilePath": null, "postTransFilePath": null, "errorReportFilePath": null, "errorMessage": null, "reProcessStatus": "-", "senderName": null, "receiverName": null, "partnerName": "BUTTER-BALL", "shipmentId": "0082426323 Id:77208", "poNumber": null, "filePath": null, "toAddress": null, "body": null, "subject": null, "errFileId": "-", "resubmittedBy": "-" }], "totalRecordsCount": 51 }
const inboundCOLORS = ["#0d416b"];
const outboundCOLORS = ["#00aae7"];


export default function TPVolumes() {

  const [selectedPartners, setSelectedPartners] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedWMS, setSelectedWMS] = useState<string[]>([]);
  const [wmsSearchTerm, setWmsSearchTerm] = useState('');
  const [isWmsOpen, setIsWmsOpen] = useState(false);
  const [selectedDocType, setSelectedDocType] = useState("Select");
  const [statusSearchTerm, setStatusSearchTerm] = useState('');
  const [selectedDateRange, setSelectedDateRange] = useState("Select");
  const [selectedApiStatuses, setSelectedApiStatuses] = useState<string[]>([]);
  const [apiStatusSearchTerm, setApiStatusSearchTerm] = useState('');
  const [isApiStatusOpen, setIsApiStatusOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("Select");
  const [database, setDatabase] = useState("LIVE");
  const [showAllFilters, setShowAllFilters] = useState(false);
  const [documentList, setDocumentList] = useState(documentsApiData); const [open, setOpen] = useState(false);
  const [isAccordianOpen, setIsAccordianOpen] = useState(true); // Default to open
  const [showGraph, setShowGraph] = useState(false); // Default to open

  const [filters, setFilters] = useState([{
    correlation: "Select",
    value: ""
  }]);

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

  const addFilter = () => {
    if (filters.length < 3) {
      setFilters([...filters, {
        correlation: "Select",
        value: ""
      }]);
    }
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
                  Analytics
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block text-brand-light" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-brand-black">TP Volumes</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        {/* <div className="ml-auto px-4">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="btn-primary border-brand-primary">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div> */}
      </header>

      <div className="flex flex-1 flex-col gap-6 p-6 pt-3 bg-brand-subtle">
        {/* <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-brand-black">Trading Partner Volumes</h2>
            <p className="text-brand-muted">
              Comprehensive volume analysis and SLA compliance tracking for all trading partners
            </p>
          </div>
        </div> */}

        {/* <Card className="brand-card">
          <CardHeader className="brand-gradient-primary text-white rounded-t-lg">
            <CardTitle className="text-white">Volume Filters</CardTitle>
            <CardDescription className="text-brand-light">
              Filter and analyze trading partner volumes by various criteria
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid gap-4 md:grid-cols-5">
              <div className="space-y-2">
                <Label htmlFor="date-range" className="text-brand-black">
                  Date Range
                </Label>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center justify-between w-full px-3 py-2 text-sm border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary">
                    {getSelectedLabel(dateRangeOptions, dateRange)}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[200px]">
                    {dateRangeOptions.map((option) => (
                      <DropdownMenuItem
                        key={option.value}
                        className={`${dateRange === option.value ? 'bg-brand-accent text-white' : ''}`}
                        onClick={() => setDateRange(option.value)}
                      >
                        {option.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="space-y-2">
                <Label htmlFor="partner-filter" className="text-brand-black">
                  Partner
                </Label>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center justify-between w-full px-3 py-2 text-sm border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary">
                    {getSelectedLabel(partnerOptions, partnerFilter)}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[200px]">
                    {partnerOptions.map((option) => (
                      <DropdownMenuItem
                        key={option.value}
                        className={`${partnerFilter === option.value ? 'bg-brand-accent text-white' : ''}`}
                        onClick={() => setPartnerFilter(option.value)}
                      >
                        {option.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>


              <div className="space-y-2">
                <Label htmlFor="volume-threshold" className="text-brand-black">
                  Min Volume
                </Label>
                <Input
                  id="volume-threshold"
                  placeholder="1000"
                  type="number"
                  className="border-brand-light focus-brand"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sla-filter" className="text-brand-black">
                  SLA Status
                </Label>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center justify-between w-full px-3 py-2 text-sm border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary">
                    {getSelectedLabel(slaOptions, slaFilter)}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[200px]">
                    {slaOptions.map((option) => (
                      <DropdownMenuItem
                        key={option.value}
                        className={`${slaFilter === option.value ? 'bg-brand-accent text-white' : ''}`}
                        onClick={() => setSlaFilter(option.value)}
                      >
                        {option.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="space-y-2">
                <Label className="text-brand-black">&nbsp;</Label>
                <Button className="btn-primary w-full">
                  <Filter className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </CardContent>
        </Card> */}


        <Card className="brand-card">
          <CardHeader className="brand-gradient-primary text-white rounded-t-lg py-2 px-4">
            <div className="flex items-center justify-between"> {/* Changed to justify-between */}
              <div className="flex items-center gap-3">
                <CardTitle className="text-white text-sm font-medium">Database:</CardTitle>
                <RadioGroup
                  value={database}
                  onValueChange={setDatabase}
                  className="flex items-center gap-3"
                >
                  <div className="flex items-center space-x-1.5">
                    <RadioGroupItem value="LIVE" id="r1" />
                    <label
                      htmlFor="r1"
                      className={`text-xs cursor-pointer transition-colors ${database === "LIVE" ? "text-white font-medium" : "text-white/80"
                        }`}
                    >
                      LIVE
                    </label>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <RadioGroupItem value="ARCHIVE" id="r2" />
                    <label
                      htmlFor="r2"
                      className={`text-xs cursor-pointer transition-colors ${database === "ARCHIVE" ? "text-white font-medium" : "text-white/80"
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
                <ChevronDown className={`h-4 w-4 transition-transform ${isAccordianOpen ? "rotate-180" : ""}`} />
              </Button>
            </div>
          </CardHeader>
          {isAccordianOpen && (
            <CardContent className="pt-4">
              <div className="grid gap-3" >
                {/* First Row - Date Filters */}
                <div className="grid grid-cols-4 gap-3">
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

                </div>

                {/* Second Row - Document Filters */}
                <div className="grid grid-cols-4 gap-3">
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

                  <div className="flex items-end">
                    <Button className="btn-primary h-9 text-sm w-full"
                      onClick={() => { setShowGraph(true) }}
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      <span>Generate</span>
                    </Button>
                  </div>

                  <div className="flex items-end">
                    <Button variant="outline" className="h-9 text-sm text-brand-dark border-brand-light w-full"
                      onClick={() => { setShowGraph(false) }}
                    >
                      <RotateCcw className="h-4 w-4 mr-2" />
                      <span>Reset</span>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          )}
        </Card>


        {/* <div className="grid gap-6 md:grid-cols-4">
          <Card className="brand-card brand-card-primary">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-brand-black">Total Volume</CardTitle>
              <TrendingUp className="h-4 w-4 text-brand-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-brand-black">510,061</div>
              <p className="text-xs text-brand-muted">
                <span className="text-brand-primary flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +2.1% from last month
                </span>
              </p>
            </CardContent>
          </Card>

          <Card className="brand-card brand-card-primary">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-brand-black">Avg Daily Volume</CardTitle>
              <TrendingUp className="h-4 w-4 text-brand-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-brand-black">16,969</div>
              <p className="text-xs text-brand-muted">Across all partners</p>
            </CardContent>
          </Card>

          <Card className="brand-card brand-card-primary">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-brand-black">Peak Daily Volume</CardTitle>
              <TrendingUp className="h-4 w-4 text-brand-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-brand-black">3,573</div>
              <p className="text-xs text-brand-muted">Highest single partner</p>
            </CardContent>
          </Card>

          <Card className="brand-card brand-card-primary">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-brand-black">Avg SLA Compliance</CardTitle>
              <AlertTriangle className="h-4 w-4 text-brand-muted" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-brand-black">97.4%</div>
              <p className="text-xs text-brand-muted">Above target (95%)</p>
            </CardContent>
          </Card>
        </div> */}
        {showGraph &&
          <div className="space-y-3">
            {/* Export Buttons - Positioned above the cards */}
            <div className="flex justify-end gap-2">
              <Button variant="outline" className="border-brand-light h-9 text-sm text-brand-dark">
                <FileSpreadsheet className="h-4 w-4 mr-2" />
                Generate Excel
              </Button>
              <Button variant="outline" className="border-brand-light h-9 text-sm text-brand-dark">
                <FileText className="h-4 w-4 mr-2" />
                Generate PDF
              </Button>
            </div>

            {/* Chart Cards */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* <Card className="brand-card">
                <CardHeader className="brand-gradient-primary text-white rounded-t-lg py-2 px-4">
                  <CardTitle className="text-white text-sm font-medium">Inbound volumes (0)</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ChartContainer config={chartConfig} className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={[monthlyTrendData[monthlyTrendData.length - 1]]}>
                        <XAxis dataKey="month" stroke="#8c8c8c" />
                        <YAxis stroke="#8c8c8c" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="walmart" fill="#2368a0" />
                        <Bar dataKey="amazon" fill="#00aae7" />
                        <Bar dataKey="target" fill="#0d416b" />
                        <Bar dataKey="costco" fill="#8c8c8c" />
                        <Bar dataKey="homedepot" fill="#b7b2b3" />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card className="brand-card">
                <CardHeader className="brand-gradient-primary text-white rounded-t-lg py-2 px-4">
                  <CardTitle className="text-white text-sm font-medium">Outbound volumes (1)</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ChartContainer config={chartConfig} className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={[monthlyTrendData[monthlyTrendData.length - 1]]}>
                        <XAxis dataKey="month" stroke="#8c8c8c" />
                        <YAxis stroke="#8c8c8c" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="walmart" fill="#2368a0" />
                        <Bar dataKey="amazon" fill="#00aae7" />
                        <Bar dataKey="target" fill="#0d416b" />
                        <Bar dataKey="costco" fill="#8c8c8c" />
                        <Bar dataKey="homedepot" fill="#b7b2b3" />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card> */}

              <Card className="text-brand-subtle border-[#2368a0] flex-1">
                <CardHeader className="brand-gradient-primary text-white rounded-t-lg py-2 px-4">
                  <CardTitle className="text-white text-sm font-medium">Inbound volumes (0)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={inboundData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {inboundData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={inboundCOLORS[index % inboundCOLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value: any) => [`${value} transactions`, "Count"]} />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-brand-subtle border-[#2368a0] flex-1">
              <CardHeader className="brand-gradient-primary text-white rounded-t-lg py-2 px-4">
                  <CardTitle className="text-white text-sm font-medium">Outbound volumes (1)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={outboundData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {outboundData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={outboundCOLORS[index % outboundCOLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value: any) => [`${value} transactions`, "Count"]} />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>


            </div>
          </div>
        }


      </div>
    </SidebarInset>
  )
}
