"use client";

import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Toaster } from "sonner";

export default function Layout({ children }) {
    return (
        <SidebarProvider
            style={
                {
                    "--sidebar-width": "calc(var(--spacing) * 72)",
                    "--header-height": "calc(var(--spacing) * 12)"
                }
            }>
            <AppSidebar />
            <SidebarTrigger />
            <SidebarInset>
                <Toaster />
                {children}
            </SidebarInset>
        </SidebarProvider>
    );
}