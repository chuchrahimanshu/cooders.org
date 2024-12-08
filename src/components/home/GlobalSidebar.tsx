import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "../ui/sidebar";
import SidebarHeaderItem from "../sidebar/SidebarHeaderItem";
import SidebarFooterItem from "../sidebar/SidebarFooterItem";
import SidebarBodyItem from "../sidebar/SidebarBodyItem";

const GlobalSidebar: React.FC = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarHeaderItem />
      </SidebarHeader>
      <SidebarContent>
        <SidebarBodyItem />
      </SidebarContent>
      <SidebarFooter>
        <SidebarFooterItem />
      </SidebarFooter>
    </Sidebar>
  );
};

export default GlobalSidebar;
