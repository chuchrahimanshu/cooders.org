import { Bookmark } from "lucide-react";
import React from "react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { Collapsible } from "../ui/collapsible";
import { SidebarStructure } from "./SidebarStructure";

const SidebarBodyItem: React.FC = () => {
  return (
    <SidebarGroup>
      {SidebarStructure.body.map((group) => (
        <React.Fragment key={group.heading}>
          <SidebarGroupLabel key={group.heading} className="opacity-70">
            {group.heading}
          </SidebarGroupLabel>
          {group.items.map((item) => (
            <SidebarMenu>
              <Collapsible
                key={item.title}
                asChild
                defaultOpen={item.isActive}
                className="group/collapsible">
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip={item.title}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                    <Bookmark className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          ))}
        </React.Fragment>
      ))}
    </SidebarGroup>
  );
};

export default SidebarBodyItem;
