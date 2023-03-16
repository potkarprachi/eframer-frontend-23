import DashboardIcon from '@mui/icons-material/Dashboard';
import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SellIcon from '@mui/icons-material/Sell';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

export const FarmerSideBarData=[
    {
        title: "Dashboard",
        icon: <DashboardIcon/>,
        link: "/FarmerDashboard"
    },
    {
        title: "Add Crop",
        icon:  <AddBoxIcon/>,
        link: "/addCrop"
    },
    {
        title: "Your Crops",
        icon: <PlaylistAddCheckCircleIcon/>,
        link: "/cropStatusFarmer"
    },
    {
        title: "Orders",
        icon: <SellIcon/>,
        link: "/farmer-order"
    },
    {
        title: "Transcations",
        icon: <CurrencyRupeeIcon/>,
        link: "/farmerTrans"
    }
]



