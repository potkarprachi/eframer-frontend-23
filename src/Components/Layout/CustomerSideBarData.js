import ViewListIcon from '@mui/icons-material/ViewList';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

export const CustomerSideBarData=[
    {
        title: "Dashboard",
        icon: <DashboardIcon/>,
        link: "/customerdashboard"
    },
    {
        title: "Menu",
        icon: <ViewListIcon/>,

        link: "/menupage"

    },
    {
        title: "Transcations",
        icon: <CurrencyRupeeIcon/>,
        link: "/customerTrans"
    }
]