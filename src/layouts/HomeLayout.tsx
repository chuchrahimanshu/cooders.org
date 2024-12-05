import React from "react";
import { GlobalSidebar } from "@/components";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import ThemeToggle from "@/components/home/ThemeToggle";

const HomeLayout: React.FC = () => {
  return (
    <SidebarProvider>
      <GlobalSidebar />
      <main>
        <SidebarTrigger />
        <ThemeToggle />
        <Outlet />
      </main>
    </SidebarProvider>
  );
};

export default HomeLayout;
