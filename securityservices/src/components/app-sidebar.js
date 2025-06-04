"use client"

import React from "react"
import { ArrowUpCircleIcon, BarChartIcon, CameraIcon, ClipboardListIcon, DatabaseIcon, FileCodeIcon, FileIcon, FileTextIcon, FolderIcon, HelpCircleIcon, LayoutDashboardIcon, ListIcon, MessageSquareQuote, SearchIcon, SettingsIcon, SpeechIcon, Text, UsersIcon } from 'lucide-react'

import { NavDocuments } from "./nav-documents"
import { NavMain } from "./nav-main"
import { NavSecondary } from "./nav-secondary"
import { NavUser } from "./nav-user"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
    user: {
        name: "Admin",
        email: "admin@demoportal.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title: "Dashboard",
            url: "/dashboard",
            icon: LayoutDashboardIcon,
        },
        {
            title: "Products",
            url: "/products",
            icon: UsersIcon,
        },
        {
            title: "Analytics",
            url: "/analytics",
            icon: BarChartIcon,
        },
        {
            title: "Revup",
            url: "https://revup.reverieinc.com",
            icon: SettingsIcon,
        },
    ],
    documents: [
        {
            name: "STT Streaming",
            url: "https://docs.reverieinc.com/api-reference/speech-to-text-streaming",
            icon: SpeechIcon,
        },
        {
            name: "STT Batch",
            url: "https://docs.reverieinc.com/api-reference/speech-to-text-batch",
            icon: SpeechIcon,
        },
        {
            name: "TTS",
            url: "https://docs.reverieinc.com/api-reference/text-to-speech",
            icon: MessageSquareQuote,
        },
        {
            name: "Localization",
            url: "https://docs.reverieinc.com/api-reference/localization",
            icon: FileIcon,
        },
        {
            name: "Transliteration",
            url: "https://docs.reverieinc.com/api-reference/transliteration",
            icon: FileIcon,
        },
    ],
}

export function AppSidebar(props) {
    return (
        <Sidebar collapsible="offcanvas" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
                            <a href="/">
                                <ArrowUpCircleIcon className="h-5 w-5" />
                                <span className="text-base font-semibold">Demo Portal</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
        </Sidebar>
    )
}
