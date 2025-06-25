"use client"

import type * as React from "react"
import {
  BarChart3,
  FileText,
  Settings,
  Users,
  Building2,
  Archive,
  UserPlus,
  Search,
  Calendar,
  TrendingUp,
  Shield,
  Bell,
  LogOut,
  User,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import Link from "next/link"
import { usePathname } from "next/navigation"

const data = {
  user: {
    name: "Sai Karthik Nistala",
    email: "sniatala@miraclesoft.com",
    avatar: "/ProfileImg.png?height=32&width=32",
    role: "System Administrator",
  },
  navMain: [
    {
      title: "Analytics",
      icon: BarChart3,
      isActive: true,
      items: [
        {
          title: "Dashboard",
          url: "/",
          icon: BarChart3,
          isActive: true,
        },
        {
          title: "Daily Stats",
          url: "/analytics/daily-stats",
          icon: Calendar,
        },
        {
          title: "TP Volumes",
          url: "/analytics/tp-volumes",
          icon: TrendingUp,
        },
      ],
    },
    {
      title: "Documentary",
      icon: FileText,
      items: [
        {
          title: "Document Repository",
          url: "/documentary/repository",
          icon: FileText,
        },
      ],
    },
    {
      title: "Operations",
      icon: Settings,
      items: [
        {
          title: "Partners",
          url: "/operations/partners",
          icon: Building2,
        },
        {
          title: "Archive & Purge",
          url: "/operations/archive",
          icon: Archive,
        },
      ],
    },
    {
      title: "User Management",
      icon: Users,
      items: [
        {
          title: "User Creation",
          url: "/users/create",
          icon: UserPlus,
        },
        {
          title: "User Search",
          url: "/users/search",
          icon: Search,
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const pathname = usePathname()


  return (
    <Sidebar variant="inset" className="modern-sidebar" {...props}>

      <SidebarHeader  >
        <SidebarMenu >
          <SidebarMenuItem className="bg-[#0d416b] text-white hover:opacity-90 transition-all duration-300 rounded-xl shadow-lg">
            <SidebarMenuButton
              size="lg"
              asChild
              className="text-white hover:opacity-90 transition-all duration-300 rounded-xl shadow-lg"
            >
              <Link href="/" className="flex items-center justify-center w-full h-full">
                <img
                  src="/Miracle-White-Logo.png"
                  alt="EDI Portal"
                  className="h-10 w-auto object-contain"
                />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-brand-muted">Platform</SidebarGroupLabel>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <Collapsible
                key={item.title}
                asChild
                defaultOpen={item.items.some(subItem => pathname === subItem.url)}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                      tooltip={item.title}
                      className={`
                        hover:bg-brand-subtle/50 
                        ${item.items.some(subItem => pathname === subItem.url)
                          ? 'text-brand-primary'
                          : 'text-brand-muted'}
                      `}
                    >
                      {item.icon && <item.icon className="currentColor" />}
                      <span className={`font-medium ${item.items.some(subItem => pathname === subItem.url)
                        ? 'text-brand-primary'
                        : 'text-brand-black'
                        }`}>
                        {item.title}
                      </span>
                      {item.items?.length && (
                        <div className="ml-auto transition-transform duration-300 group-data-[state=open]/collapsible:rotate-90">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            className={`
                              ${item.items.some(subItem => pathname === subItem.url)
                                ? 'text-brand-primary'
                                : 'text-brand-muted'}
                            `}
                          >
                            <path
                              d="M4.5 3L7.5 6L4.5 9"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      )}
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton
                            asChild
                            className={`
                              ml-2 rounded-lg transition-all duration-200
                              ${pathname === subItem.url
                                ? "bg-gradient-to-r from-brand-accent/20 to-brand-primary/10 text-brand-primary font-semibold shadow-md border-l-3 border-brand-accent"
                                : "hover:bg-brand-subtle/50 hover:text-brand-primary text-brand-black"
                              }
                            `}
                          >
                            <Link href={subItem.url}>
                              {subItem.icon && (
                                <subItem.icon className="h-4 w-4 mr-2 currentColor" />
                              )}
                              <span>{subItem.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>


      <SidebarFooter>
        <SidebarMenu >
          <SidebarMenuItem style={{ background: "#f1f3f7" }}>
            <DropdownMenu >
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-brand-accent data-[state=open]:text-white hover:bg-brand-subtle"
                >
                  {/* <Avatar className="h-8 w-8 rounded-lg border-2 border-brand-light"> */}
                    {/* <AvatarImage src={data.user.avatar || "/placeholder.svg"} alt={data.user.name} /> */}
                    <img
                      src="/ProfileImg.png"
                      alt="EDI Portal"
                      className="h-8 w-auto object-contain"
                    />
                    {/* <AvatarFallback className="bg-brand-primary text-white">JA</AvatarFallback> */}
                  {/* </Avatar> */}
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold text-brand-black">{data.user.name}</span>
                    <span className="truncate text-xs text-brand-muted">{data.user.role}</span>
                  </div>
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg border-brand-light bg-white"
                side="bottom"
                align="end"
                sideOffset={4}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg border-2 border-brand-light">
                      <AvatarImage src={data.user.avatar || "/placeholder.svg"} alt={data.user.name} />
                      <AvatarFallback className="bg-brand-primary text-white">JA</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold text-brand-black">{data.user.name}</span>
                      <span className="truncate text-xs text-brand-muted">{data.user.email}</span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-brand-light" />
                <DropdownMenuItem className="hover:bg-brand-subtle hover:text-brand-primary">
                  <User className="mr-2 h-4 w-4" />
                  Account
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-brand-subtle hover:text-brand-primary">
                  <Bell className="mr-2 h-4 w-4" />
                  Notifications
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-brand-light" />
                <DropdownMenuItem className="hover:bg-brand-error hover:text-white">
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
