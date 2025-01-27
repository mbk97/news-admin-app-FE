import { ISidebarTypes } from "../types";
import { MdDashboardCustomize } from "react-icons/md";
import { GrAnalytics, GrArticle } from "react-icons/gr";
import { FaUserCog } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { PiArticleNyTimesBold } from "react-icons/pi";
import { FaRegEye } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

export const sidebarData: ISidebarTypes[] = [
  {
    id: 1,
    title: "Dashboard",
    Icon: MdDashboardCustomize,
    link: "/dashboard",
  },
  {
    id: 2,
    title: "Manage Articles",
    Icon: GrArticle,
    link: "/manage-articles",
  },
  {
    id: 3,
    title: "Analytics & Reports",
    Icon: GrAnalytics,
    link: "/analytics-reports",
  },
  {
    id: 4,
    title: "User Management",
    Icon: FaUserCog,
    link: "/user-management",
  },
  {
    id: 5,
    title: "Settings",
    Icon: IoSettingsSharp,
    link: "/settings",
  },
];

export const cardData = [
  {
    id: 1,
    cardTitle: "Total Views",
    cardDetails: "300k",
    CardIcon: FaRegEye,
    cardSubtitle: "Compared to (200k last month) ",
    cardType: "primary",
  },

  {
    id: 2,
    cardTitle: "Total Articles",
    cardDetails: "1200",
    CardIcon: PiArticleNyTimesBold,
    cardSubtitle: "",
    cardType: "",
  },

  {
    id: 3,
    cardTitle: "Active Authors",
    cardDetails: "50",
    CardIcon: FaUsers,
    cardSubtitle: "",
    cardType: "",
  },
];
