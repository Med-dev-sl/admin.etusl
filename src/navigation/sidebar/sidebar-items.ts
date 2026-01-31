import { ChartBar, GraduationCap, LayoutDashboard, type LucideIcon } from "lucide-react";

export interface NavSubItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavMainItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  subItems?: NavSubItem[];
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavGroup {
  id: number;
  label?: string;
  items: NavMainItem[];
}

export const sidebarItems: NavGroup[] = [
  {
    id: 1,
    label: "Main",
    items: [
      {
        title: "Home",
        url: "/",
        icon: LayoutDashboard,
      },
      {
        title: "About",
        url: "/about",
        icon: ChartBar,
        subItems: [
          { title: "Overview", url: "/about/overview" },
          { title: "History", url: "/about/history" },
          { title: "Vision & Mission", url: "/about/vision-mission" },
          { title: "Leadership & Directorates", url: "/about/leadership" },
          { title: "Affiliates and Partners", url: "/about/affiliates" },
          { title: "Strategic Plan", url: "/about/strategic-plan" },
          { title: "ETUSL Policies", url: "/about/policies" },
        ],
      },
      {
        title: "Academics",
        url: "/academics",
        icon: GraduationCap,
        subItems: [
          { title: "Overview", url: "/academics/overview" },
          { title: "Faculties", url: "/academics/faculties" },
          { title: "Programmes", url: "/academics/programmes" },
          { title: "Academic Calendar", url: "/academics/calendar" },
          { title: "Library", url: "/academics/library" },
        ],
      },
    ],
  },
];
