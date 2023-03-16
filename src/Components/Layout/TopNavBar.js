import React from 'react'
import { Link } from 'react-router-dom'
import './TopNavBar.css';
import Logo from '../Images/Logo.jpg';

function TopNavBar() {
  return (
    
<div class="header">
    <img className='nav-img logo' src={Logo}/>
  <div class="header-right">
   <Link to={"/"} className="nav-name">Home</Link>
   <Link to={"/aboutus"} className="nav-name">About Us</Link>
   <Link to={"/contactus"} className="nav-name">Contact Us</Link>
   <Link to={"/login"} className="nav-name">Login</Link>
  </div>
</div>

  )
}

export default TopNavBar