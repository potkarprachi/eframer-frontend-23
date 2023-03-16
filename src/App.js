import "./App.css";
import { TransactionPage } from "./Components/Farmer/TransactionPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./Components/MainPage/LandingPage";
import Signup from "./Components/MainPage/Signup";
import { FarmerCropStatus } from "./Components/Farmer/FarmerCropStatus";
import { FarDashboard } from "./Components/Farmer/FarDashboard";
import { FarmerSideNav } from "./Components/Layout/FarmerSideNav";
import TopNav from "./Components/Layout/TopNav";
import { AddCrop } from "./Components/Farmer/Addcrop";
import { CropStatusFamer } from "./Components/Admin/CropStatusFarmer";
import AdminDashBoard from "./Components/Admin/AdminDashBoard";
import AdminSideNav from "./Components/Layout/AdminSideNav";
import AdminTransaction from "./Components/Admin/AdminTransaction";
import { AdminCropStatus } from "./Components/Admin/AdminCropStatus";
import AccountUpdateForm from "./Components/Layout/AccountUpdateForm";
import CustomerDashBoard from "./Components/Customer/CustomerDashBoard";
import { MenuPage } from "./Components/Customer/MenuPage";
import ContactUs from "./Components/MainPage/ContactUs";
import AboutUs from "./Components/MainPage/AboutUs";
import { CustomerTransaction } from "./Components/Customer/CustomerTransaction";
import { FarmerTransaction } from "./Components/Farmer/FarmerTransaction";
import Login from "./Components/MainPage/Login";
import AdminContactUs from "./Components/Admin/AdminContactUs";
import { Footer } from "./Components/Layout/Footer";
import ForgotPassword from "./Components/Layout/ForgotPassword";
import { EditPassword } from "./Components/Layout/EditPassword";
import { ConfirmOrder } from "./Components/Customer/ConfirmOrder";



//hi 
//hii by 
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <TopNav></TopNav>
          <Routes>
            <Route path="/" element={<LandingPage></LandingPage>}></Route>
            <Route path="/transaction" element={<TransactionPage></TransactionPage>}></Route>
            <Route path="/signup" element={<Signup></Signup>}></Route>
            <Route path="/cropStatusFarmer" element={<FarmerCropStatus></FarmerCropStatus>}></Route>
            <Route path="/farmerdashboard" element={<FarDashboard></FarDashboard>}></Route>
            <Route path="/farmersidenavbar" element={<FarmerSideNav></FarmerSideNav>}></Route>
            <Route path="/addCrop" element={<AddCrop></AddCrop>}></Route>
            <Route path="/admindashboard" element={<AdminDashBoard></AdminDashBoard>}></Route>
            <Route path="/adminsidebar" element={<AdminSideNav></AdminSideNav>}></Route> 
            <Route path="/admintransaction" element={<AdminTransaction></AdminTransaction>}></Route> 
            <Route path="/adminCropTable" element={<AdminCropStatus></AdminCropStatus>}></Route>
            <Route path="/accountupdate" element={<AccountUpdateForm></AccountUpdateForm>}></Route>
            <Route path="/customerdashboard" element={<CustomerDashBoard></CustomerDashBoard>}></Route>
            <Route path="/menupage" element={<MenuPage></MenuPage>}></Route>
            <Route path="/contactus" element={<ContactUs></ContactUs>}></Route>
            <Route path="/aboutUs" element={<AboutUs></AboutUs>}></Route>
            <Route path="/customerTrans" element={<CustomerTransaction></CustomerTransaction>}></Route>
            <Route path="/farmerTrans" element={<FarmerTransaction></FarmerTransaction>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/adminContactUs" element={<AdminContactUs/>}></Route>
            <Route path="/forgotpassword" element={<ForgotPassword></ForgotPassword>}></Route>
            <Route path="/editpassword" element={<EditPassword></EditPassword>}></Route>
            <Route path="/confirmOrder" element={<ConfirmOrder></ConfirmOrder>}></Route>
            </Routes>
            <Footer></Footer>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
