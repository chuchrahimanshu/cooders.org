import React from "react";
import { GlobalSidebar } from "@/components";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

const HomeLayout: React.FC = () => {
  return (
    <SidebarProvider>
      <GlobalSidebar />
      <main>
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  );
};

export default HomeLayout;
