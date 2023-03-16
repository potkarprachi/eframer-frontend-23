import DashboardIcon from "@mui/icons-material/Dashboard";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ApprovalIcon from "@mui/icons-material/Approval";

export const AdminSideBarData = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/AdminDashboard",
  },
  {
    title: "Crop Approval",
    icon: <ApprovalIcon />,
    link: "/adminCropTable",
  },
  {
    title: "Transcations",
    icon: <CurrencyRupeeIcon />,
    link: "/admintransaction",
  },

  {
    title: "Contact Queries",
    icon: <CurrencyRupeeIcon />,
    link: "/adminContactUs",
  },
];
