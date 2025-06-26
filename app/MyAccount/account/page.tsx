"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { UserPlus, Save, X, ChevronDown, BarChart3, Zap, Building2, Calendar, User, Lock, Check, UploadCloud, Eye, EyeOff } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AreaChart, ResponsiveContainer } from "recharts"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
const timezones = [
    "Eastern Standard Time",
    "Australian Eastern Standard Time",
    "Central Standard Time (Mexico)",
    "Eastern Africa Standard Time",
];

export default function Account() {

    const [isAccordianOpen, setIsAccordianOpen] = useState(true);
    const [selectedTimezone, setSelectedTimezone] = useState("Eastern Standard Time");
    const [searchTerm, setSearchTerm] = useState("");
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const filteredTimezones = timezones.filter(timezone =>
        timezone.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const togglePasswordVisibility = (field: string) => {
        switch (field) {
            case 'oldPassword':
                setShowOldPassword(!showOldPassword);
                break;
            case 'newPassword':
                setShowNewPassword(!showNewPassword);
                break;
            case 'confirmPassword':
                setShowConfirmPassword(!showConfirmPassword);
                break;
            default:
                break;
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
                                <BreadcrumbLink href="/MyAccount/account" className="text-brand-muted hover:text-brand-primary">
                                    My Account
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="hidden md:block text-brand-light" />
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-brand-black">Account Details</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </header>

            <div className="flex flex-1 flex-col gap-6 p-6 pt-2 bg-brand-subtle">

                {/* <Card className="brand-card">
                    <CardHeader className="brand-gradient-primary text-white rounded-t-lg py-2 px-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <CardTitle className="text-white text-sm font-medium">Partners</CardTitle>
                            </div>

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
                    <CardContent className="space-y-4 pt-6">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                            <div className="grid grid-cols-[100px_1fr] items-center gap-1">
                                <Label htmlFor="firstName" className="text-brand-black text-sm">
                                    First Name
                                </Label>
                                <Input id="firstName" placeholder="John" className="border-brand-light focus-brand text-sm" />
                            </div>

                            <div className="grid grid-cols-[100px_1fr] items-center gap-1">
                                <Label htmlFor="lastName" className="text-brand-black text-sm">
                                    Last Name
                                </Label>
                                <Input id="lastName" placeholder="Doe" className="border-brand-light focus-brand text-sm" />
                            </div>

                            <div className="grid grid-cols-[100px_1fr] items-center gap-1">
                                <Label htmlFor="email" className="text-brand-black text-sm">
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="john.doe@company.com"
                                    className="border-brand-light focus-brand text-sm"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                            <div className="grid grid-cols-[100px_1fr] items-center gap-1">
                                <Label htmlFor="phone" className="text-brand-black text-sm">
                                    Phone
                                </Label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    placeholder="+1 (555) 123-4567"
                                    className="border-brand-light focus-brand text-sm"
                                />
                            </div>

                            <div className="grid grid-cols-[100px_1fr] items-center gap-1">
                                <Label htmlFor="department" className="text-brand-black text-sm">
                                    Department
                                </Label>
                                <Select>
                                    <SelectTrigger className="border-brand-light focus-brand text-sm h-9">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white border-brand-light">
                                        <SelectItem value="it" className="text-sm">IT</SelectItem>
                                        <SelectItem value="operations" className="text-sm">Operations</SelectItem>
                                        <SelectItem value="finance" className="text-sm">Finance</SelectItem>
                                        <SelectItem value="logistics" className="text-sm">Logistics</SelectItem>
                                        <SelectItem value="procurement" className="text-sm">Procurement</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="grid grid-cols-[100px_1fr] items-center gap-1">
                                <Label htmlFor="jobTitle" className="text-brand-black text-sm">
                                    Job Title
                                </Label>
                                <Input id="jobTitle" placeholder="EDI Analyst" className="border-brand-light focus-brand text-sm" />
                            </div>
                        </div>
                    </CardContent>
                </Card> */}

                <Tabs defaultValue="overview" className="space-y-6" >
                    {/* <TabsList className="modern-card p-1 bg-[#2368a0] backdrop-blur-sm border border-brand-light/30">
                        <TabsTrigger
                            value="overview"
                            className="data-[state=active]:bg-[#2368a0] data-[state=active]:from-brand-primary data-[state=active]:to-brand-accent data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
                        >
                            <User className="h-4 w-4 mr-2" />
                            About Me
                        </TabsTrigger>
                        <TabsTrigger
                            value="performance"
                            className="data-[state=active]:bg-[#2368a0] data-[state=active]:from-brand-primary data-[state=active]:to-brand-accent data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
                        >
                            <Lock className="h-4 w-4 mr-2" />
                            Change Password
                        </TabsTrigger>
                    </TabsList> */}

                    <TabsContent value="overview" className="space-y-6"  >
                        <Card className="modern-card">

                            <CardHeader className="brand-gradient-primary text-white rounded-t-lg py-2 px-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <CardTitle className="text-white text-sm font-medium">Profile</CardTitle>
                                    </div>

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

                            <TabsList className="modern-card p-1 bg-[#2368a0] backdrop-blur-sm border border-brand-light/30">
                                <TabsTrigger
                                    value="overview"
                                    className="data-[state=active]:bg-[#2368a0] data-[state=active]:from-brand-primary data-[state=active]:to-brand-accent data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
                                >
                                    <User className="h-4 w-4 mr-2" />
                                    About Me
                                </TabsTrigger>
                                <TabsTrigger
                                    value="performance"
                                    className="data-[state=active]:bg-[#2368a0] data-[state=active]:from-brand-primary data-[state=active]:to-brand-accent data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
                                >
                                    <Lock className="h-4 w-4 mr-2" />
                                    Change Password
                                </TabsTrigger>
                            </TabsList>

                            <CardContent className="space-y-4 pt-6">
                                {/* First Row - First Name, Last Name, Email */}
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                                    <div className="grid grid-cols-[100px_1fr] items-center gap-1">
                                        <Label htmlFor="firstName" className="text-brand-black text-sm">
                                            Name
                                        </Label>
                                        <Input id="firstName" placeholder="John" className="border-brand-light focus-brand text-sm" />
                                    </div>

                                    <div className="grid grid-cols-[100px_1fr] items-center gap-1">
                                        <Label htmlFor="email" className="text-brand-black text-sm">
                                            Email
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="john.doe@company.com"
                                            className="border-brand-light focus-brand text-sm"
                                        />
                                    </div>

                                    <div className="grid grid-cols-[100px_1fr] items-center gap-1">
                                        <Label htmlFor="lastName" className="text-brand-black text-sm">
                                            Designation
                                        </Label>
                                        <Input id="lastName" placeholder="Doe" className="border-brand-light focus-brand text-sm" />
                                    </div>


                                </div>

                                {/* Second Row - Phone, Department, Job Title */}
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

                                    <div className="grid grid-cols-[100px_1fr] items-center gap-1">
                                        <Label htmlFor="jobTitle" className="text-brand-black text-sm">
                                            Location
                                        </Label>
                                        <Input id="jobTitle" placeholder="EDI Analyst" className="border-brand-light focus-brand text-sm" />
                                    </div>
                                    <div className="grid grid-cols-[100px_1fr] items-center gap-1">
                                        <Label htmlFor="jobTitle" className="text-brand-black text-sm">
                                            Organization
                                        </Label>
                                        <Input id="jobTitle" placeholder="EDI Analyst" className="border-brand-light focus-brand text-sm" />
                                    </div>
                                    <div className="grid grid-cols-[100px_1fr] items-center gap-1">
                                        <Label htmlFor="phone" className="text-brand-black text-sm">
                                            Phone
                                        </Label>
                                        <Input
                                            id="phone"
                                            type="tel"
                                            placeholder="+1 (555) 123-4567"
                                            className="border-brand-light focus-brand text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                                    <div className="grid grid-cols-[100px_1fr] items-center gap-1">
                                        <Label htmlFor="timezone" className="text-brand-black text-sm">
                                            Time zone
                                        </Label>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger className="flex items-center justify-between w-full px-3 py-1.5 text-sm border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary h-9 text-left">
                                                <span className="truncate">{selectedTimezone}</span>
                                                <ChevronDown className="w-4 h-4 ml-2 shrink-0" />
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent className="w-[200px] border-brand-light p-0">
                                                {/* Search Input */}
                                                <div className="sticky top-0 z-10 bg-white p-2 border-b border-brand-light">
                                                    <Input
                                                        placeholder="Search timezones..."
                                                        value={searchTerm}
                                                        onChange={(e) => setSearchTerm(e.target.value)}
                                                        className="h-8 text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
                                                    />
                                                </div>

                                                {/* Filtered Timezone List */}
                                                <div className="max-h-[200px] overflow-y-auto">
                                                    {filteredTimezones.length > 0 ? (
                                                        <>
                                                            <DropdownMenuItem
                                                                className={`${selectedTimezone === "Select" ? 'bg-brand-accent text-white' : 'hover:bg-brand-subtle'}`}
                                                                onClick={() => setSelectedTimezone("Select")}
                                                            >
                                                                <span className="flex items-center">
                                                                    {selectedTimezone === "Select" && (
                                                                        <Check className="h-4 w-4 mr-2" />
                                                                    )}
                                                                    Select
                                                                </span>
                                                            </DropdownMenuItem>
                                                            {filteredTimezones.map((timezone) => (
                                                                <DropdownMenuItem
                                                                    key={timezone}
                                                                    className={`${selectedTimezone === timezone ? 'bg-brand-accent text-white' : 'hover:bg-brand-subtle'}`}
                                                                    onClick={() => setSelectedTimezone(timezone)}
                                                                >
                                                                    <span className="flex items-center">
                                                                        {selectedTimezone === timezone && (
                                                                            <Check className="h-4 w-4 mr-2" />
                                                                        )}
                                                                        {timezone}
                                                                    </span>
                                                                </DropdownMenuItem>
                                                            ))}
                                                        </>
                                                    ) : (
                                                        <div className="px-2 py-3 text-center text-sm text-brand-error">
                                                            No timezones found
                                                        </div>
                                                    )}
                                                </div>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>

                                    <div className="flex  items-center mt-2 gap-2">
                                        <Button className="btn-primary h-9 text-sm"
                                        // onClick={() => { setOpen(true) }}
                                        >
                                            <UploadCloud className="h-4 w-4 mr-2" />
                                            Update
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                    </TabsContent>

                    <TabsContent value="performance" className="space-y-6 ">
                        <Card className="modern-card">
                            <CardHeader className="brand-gradient-primary text-white rounded-t-lg py-2 px-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <CardTitle className="text-white text-sm font-medium">Profile</CardTitle>
                                    </div>

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

                            <TabsList className="modern-card p-1 bg-[#2368a0] backdrop-blur-sm border border-brand-light/30">
                                <TabsTrigger
                                    value="overview"
                                    className="data-[state=active]:bg-[#2368a0] data-[state=active]:from-brand-primary data-[state=active]:to-brand-accent data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
                                >
                                    <User className="h-4 w-4 mr-2" />
                                    About Me
                                </TabsTrigger>
                                <TabsTrigger
                                    value="performance"
                                    className="data-[state=active]:bg-[#2368a0] data-[state=active]:from-brand-primary data-[state=active]:to-brand-accent data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
                                >
                                    <Lock className="h-4 w-4 mr-2" />
                                    Change Password
                                </TabsTrigger>
                            </TabsList>

                            <CardContent className="space-y-4 pt-6">
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                                    {/* Old Password */}
                                    <div className="grid grid-cols-[120px_1fr] items-center gap-1">
                                        <Label htmlFor="oldPassword" className="text-brand-black text-sm">
                                            Old Password
                                        </Label>
                                        <div className="relative">
                                            <Input
                                                id="oldPassword"
                                                type={showOldPassword ? "text" : "password"}
                                                placeholder="Enter old password"
                                                className="border-brand-light focus-brand text-sm pr-10"
                                            />
                                            <button
                                                type="button"
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                                onClick={() => togglePasswordVisibility('oldPassword')}
                                            >
                                                {showOldPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                            </button>
                                        </div>
                                    </div>

                                    {/* New Password */}
                                    <div className="grid grid-cols-[120px_1fr] items-center gap-1">
                                        <Label htmlFor="newPassword" className="text-brand-black text-sm">
                                            New Password
                                        </Label>
                                        <div className="relative">
                                            <Input
                                                id="newPassword"
                                                type={showNewPassword ? "text" : "password"}
                                                placeholder="Enter new password"
                                                className="border-brand-light focus-brand text-sm pr-10"
                                            />
                                            <button
                                                type="button"
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                                onClick={() => togglePasswordVisibility('newPassword')}
                                            >
                                                {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Confirm Password */}
                                    <div className="grid grid-cols-[120px_1fr] items-center gap-1">
                                        <Label htmlFor="confirmPassword" className="text-brand-black text-sm">
                                            Confirm Password
                                        </Label>
                                        <div className="relative">
                                            <Input
                                                id="confirmPassword"
                                                type={showConfirmPassword ? "text" : "password"}
                                                placeholder="Confirm new password"
                                                className="border-brand-light focus-brand text-sm pr-10"
                                            />
                                            <button
                                                type="button"
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                                onClick={() => togglePasswordVisibility('confirmPassword')}
                                            >
                                                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                            </button>
                                        </div>

                                    </div>
                                </div>
                                <div className="flex justify-end items-center mt-2 gap-2">
                                    <Button className="btn-primary h-9 text-sm">
                                        <UploadCloud className="h-4 w-4 mr-2" />
                                        Update
                                    </Button>
                                </div>

                            </CardContent>
                        </Card>
                    </TabsContent>

                </Tabs>

            </div>
        </SidebarInset>
    )
}
