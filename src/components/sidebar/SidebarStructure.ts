import { Computer, Telescope } from "lucide-react";

export const SidebarStructure = {
  header: {
    title: "cooders.org",
    icon: Computer,
    version: "v0.1.0",
  },
  body: [
    {
      heading: "Laboratory",
      items: [
        {
          title: "ER Diagram",
          url: "#",
          icon: Telescope,
          isActive: false,
        },
      ],
    },
  ],
};
