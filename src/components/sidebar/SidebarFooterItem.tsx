import React from "react";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { BadgeCheck } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const SidebarFooterItem: React.FC = () => {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
          <Avatar className="h-8 w-8 rounded-lg">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback className="rounded-lg">CN</AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">Himanshu Chuchra</span>
            <span className="truncate text-xs font-medium opacity-70">
              @himanshuchuchra
            </span>
          </div>
          <BadgeCheck
            style={{ height: "20px", width: "20px" }}
            className="text-green-400"
          />
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default SidebarFooterItem;
