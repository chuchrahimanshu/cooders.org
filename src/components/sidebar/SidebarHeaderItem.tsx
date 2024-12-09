import React from "react";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../ui/sidebar";
import { SidebarStructure } from "./SidebarStructure";

const SidebarHeaderItem: React.FC = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" asChild className="cursor-pointer">
          <div onClick={() => toggleSidebar()}>
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
              <SidebarStructure.header.icon className="size-[22px]" />
            </div>
            <div className="flex flex-col gap-0.5 leading-none">
              <span className="font-semibold text-[17px]">
                {SidebarStructure.header.title}
              </span>
              <span className="text-xs font-medium opacity-70">
                {SidebarStructure.header.version}
              </span>
            </div>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default SidebarHeaderItem;
