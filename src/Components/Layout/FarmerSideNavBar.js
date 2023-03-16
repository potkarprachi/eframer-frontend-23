import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink, useNavigate } from 'react-router-dom';
import AddBoxIcon from '@mui/icons-material/AddBox';
import LogoutIcon from '@mui/icons-material/Logout';

const FarmerSideNavBar = () => {
  var name=sessionStorage.getItem("name");
  var navigate = useNavigate();
  const Logout=()=>
  {
    sessionStorage.setItem("userId",0);
    sessionStorage.setItem("role",0);
    sessionStorage.setItem("name",0);
    sessionStorage.setItem("jwt",0);
    navigate("/");
  }
  return (
    <div style={{ display: 'flex', height: '100vh', width:'100%' ,overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader icon="user" prefix={<i className="fa fa-bars fa-large" ></i>}>
          <a className="text-decoration-none" style={{ color: 'inherit' }} >{name}</a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/FarmerDashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns" className="link-side-bar">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/addCrop" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="plus" className="link-side-bar">Add Crop</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/cropStatusFarmer" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="list" className="link-side-bar">Your Crop</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/farmerTrans" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="credit-card" className="link-side-bar">Transcations</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div className="link-side-bar"
            style={{
              padding: '20px 5px',
            }} onClick={Logout}
          ><LogoutIcon></LogoutIcon>
            Logout
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default FarmerSideNavBar;