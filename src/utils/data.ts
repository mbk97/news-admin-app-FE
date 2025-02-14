import { ISidebarTypes } from "../types";
import { MdDashboardCustomize } from "react-icons/md";
import { GrAnalytics, GrArticle } from "react-icons/gr";
import { FaUserCog } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { PiArticleNyTimesBold } from "react-icons/pi";
import { FaRegEye } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaHourglassEnd } from "react-icons/fa6";
import trend1 from "../assets/images/trend_img1.jpg";
import trend2 from "../assets/images/trend_img2.jpg";
import trend3 from "../assets/images/trend_img3.jpg";
import trend4 from "../assets/images/trend_img4.jpg";
import trend5 from "../assets/images/trend_img5.jpg";

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
  {
    id: 4,
    cardTitle: "Pending Approvals",
    cardDetails: "25",
    CardIcon: FaHourglassEnd,
    cardSubtitle: "",
    cardType: "",
  },
];

export const newsData = [
  {
    newsTitle: "Tech Industry Boom",
    category: "Technology",
    createdBy: "John Doe",
    createdAt: "2024-02-01",
    newsBody:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
  },
  {
    newsTitle: "Global Warming Impact",
    category: "Environment",
    createdBy: "Jane Smith",
    createdAt: "2024-01-25",
    newsBody:
      "Suspendisse potenti. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.",
  },
  {
    newsTitle: "New AI Breakthrough",
    category: "Technology",
    createdBy: "Alice Johnson",
    createdAt: "2024-02-02",
    newsBody:
      "Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.",
  },
  {
    newsTitle: "Stock Market Update",
    category: "Finance",
    createdBy: "Robert Brown",
    createdAt: "2024-02-03",
    newsBody:
      "Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora.",
  },
  {
    newsTitle: "Sports Championship",
    category: "Sports",
    createdBy: "Michael Green",
    createdAt: "2024-01-30",
    newsBody:
      "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida.",
  },
  {
    newsTitle: "Health Benefits of Yoga",
    category: "Health",
    createdBy: "Emily White",
    createdAt: "2024-01-28",
    newsBody:
      "Curabitur blandit tempus porttitor. Nulla vitae elit libero, a pharetra augue.",
  },
  {
    newsTitle: "New Smartphone Launch",
    category: "Technology",
    createdBy: "Daniel Lee",
    createdAt: "2024-01-29",
    newsBody:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
  },
  {
    newsTitle: "Political Debate Highlights",
    category: "Politics",
    createdBy: "Sophia Miller",
    createdAt: "2024-02-04",
    newsBody:
      "Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur.",
  },
  {
    newsTitle: "Upcoming Movie Releases",
    category: "Entertainment",
    createdBy: "Oliver Wilson",
    createdAt: "2024-01-27",
    newsBody:
      "Etiam porta sem malesuada magna mollis euismod. Aenean lacinia bibendum nulla.",
  },
  {
    newsTitle: "Travel Tips for 2024",
    category: "Travel",
    createdBy: "Emma Clark",
    createdAt: "2024-02-01",
    newsBody:
      "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod.",
  },
];

export const trendingNews = [
  {
    title: "Election Results Spark Nationwide Debate",
    category: "Politics",
    reads: 125000,
    image: trend3,
  },
  {
    title: "Championship Final Ends in Dramatic Fashion",
    category: "Sports",
    reads: 98000,
    image: trend2,
  },
  {
    title: "10 Life Hacks to Improve Your Daily Routine",
    category: "Lifestyle",
    reads: 75000,
    image: trend4,
  },
  {
    title: "Government Announces New Policies for Economy",
    category: "Politics",
    reads: 112000,
    image: trend1,
  },
  {
    title: "Star Athlete Breaks Record in Historic Performance",
    category: "Sports",
    reads: 105000,
    image: trend4,
  },
];

export const activityLogData = [
  {
    fullName: "John Doe",
    email: "john.doe@example.com",
    activity: "Logged in",
    date: "2024-02-07",
  },
  {
    fullName: "Jane Smith",
    email: "jane.smith@example.com",
    activity: "Updated profile",
    date: "2024-02-06",
  },
  {
    fullName: "Michael Brown",
    email: "michael.brown@example.com",
    activity: "Changed password",
    date: "2024-02-05",
  },
  {
    fullName: "Emily Johnson",
    email: "emily.johnson@example.com",
    activity: "Logged out",
    date: "2024-02-04",
  },
  {
    fullName: "Chris Wilson",
    email: "chris.wilson@example.com",
    activity: "Uploaded document",
    date: "2024-02-03",
  },
  {
    fullName: "Sarah Miller",
    email: "sarah.miller@example.com",
    activity: "Deleted account",
    date: "2024-02-02",
  },
  {
    fullName: "David Lee",
    email: "david.lee@example.com",
    activity: "Logged in",
    date: "2024-02-01",
  },
  {
    fullName: "Anna White",
    email: "anna.white@example.com",
    activity: "Updated settings",
    date: "2024-01-31",
  },
  {
    fullName: "James Harris",
    email: "james.harris@example.com",
    activity: "Made a purchase",
    date: "2024-01-30",
  },
  {
    fullName: "Olivia Martinez",
    email: "olivia.martinez@example.com",
    activity: "Subscribed to newsletter",
    date: "2024-01-29",
  },
];

export const userTableData = [
  {
    fullName: "John Doe",
    email: "john.doe@example.com",
    lastSeen: "2024-02-10 14:35",
    role: "Admin",
  },
  {
    fullName: "Jane Smith",
    email: "jane.smith@example.com",
    lastSeen: "2024-02-09 10:20",
    role: "Author",
  },
  {
    fullName: "Michael Johnson",
    email: "michael.johnson@example.com",
    lastSeen: "2024-02-08 16:45",
    role: "Editor",
  },
  {
    fullName: "Emily Brown",
    email: "emily.brown@example.com",
    lastSeen: "2024-02-07 08:10",
    role: "Editor",
  },
  {
    fullName: "Daniel Wilson",
    email: "daniel.wilson@example.com",
    lastSeen: "2024-02-06 19:30",
    role: "Admin",
  },
  {
    fullName: "Sophia Martinez",
    email: "sophia.martinez@example.com",
    lastSeen: "2024-02-05 12:50",
    role: "Author",
  },
  {
    fullName: "James Anderson",
    email: "james.anderson@example.com",
    lastSeen: "2024-02-04 09:15",
    role: "Author",
  },
  {
    fullName: "Olivia Taylor",
    email: "olivia.taylor@example.com",
    lastSeen: "2024-02-03 17:05",
    role: "Author",
  },
  {
    fullName: "William Thomas",
    email: "william.thomas@example.com",
    lastSeen: "2024-02-02 21:40",
    role: "Editor",
  },
  {
    fullName: "Ava Hernandez",
    email: "ava.hernandez@example.com",
    lastSeen: "2024-02-01 06:25",
    role: "Editor",
  },
];

export const analyticsData = [
  {
    newsTitle: "Breaking News: Tech Innovation",
    category: "Technology",
    views: 1200,
    dateCreated: "2024-02-14",
  },
  {
    newsTitle: "Global Markets Surge",
    category: "Finance",
    views: 950,
    dateCreated: "2024-02-13",
  },
  {
    newsTitle: "Sports Championship Highlights",
    category: "Sports",
    views: 1800,
    dateCreated: "2024-02-12",
  },
  {
    newsTitle: "New Movie Release",
    category: "Entertainment",
    views: 700,
    dateCreated: "2024-02-11",
  },
  {
    newsTitle: "Health Benefits of Yoga",
    category: "Health",
    views: 500,
    dateCreated: "2024-02-10",
  },
  {
    newsTitle: "Political Debate: Election 2024",
    category: "Politics",
    views: 1600,
    dateCreated: "2024-02-09",
  },
  {
    newsTitle: "AI Breakthrough in Medicine",
    category: "Technology",
    views: 2100,
    dateCreated: "2024-02-08",
  },
  {
    newsTitle: "Cryptocurrency Market Crash",
    category: "Finance",
    views: 3400,
    dateCreated: "2024-02-07",
  },
  {
    newsTitle: "Celebrity Scandal Shocks Fans",
    category: "Entertainment",
    views: 2750,
    dateCreated: "2024-02-06",
  },
  {
    newsTitle: "Extreme Weather Alert Issued",
    category: "Weather",
    views: 1900,
    dateCreated: "2024-02-05",
  },
];
