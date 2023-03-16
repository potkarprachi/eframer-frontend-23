import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getAccDetails } from '../../Service/ListApiService';
import CustomerSideNav from '../Layout/CustomerSideNav';

function CustomerDashBoard() {
    
    const id=sessionStorage.getItem("userId");
    const role=sessionStorage.getItem("role");
    const[accDetails,setAccDetails]=useState([]);
    var navigate= useNavigate();
    
    async function getAccountDetails(id)
    {
    if(id==0 & role!="customer")
        navigate("/login");
    else
    {
    var response=await getAccDetails(id);
    setAccDetails(response.data);
    console.log(response.data);
    console.log(accDetails.fullname);
    }
    }

    async function updateDetails()
    {
        navigate(`/accountupdate/`);
    
    }
    useEffect(() => {
        getAccountDetails(id);
      },[])
  return (
    
    <div className="row  bgp1">
            <div className="col-lg-2 sidebar">
               <CustomerSideNav></CustomerSideNav>
            </div>
            <div className="col-lg-10">
            <div className="page">
            <div className="container">
                <br></br>
            <h3>Welcome,{accDetails.fullname}</h3>
            
            <table class="table tablerr col-md-9">
                <tbody>
                    <tr>
                    <th className="table-text-heading col-md-6">Name</th>
                    <td className="table-text col-md-3">{accDetails.fullname}</td>
                    </tr>
                    <tr>
                    <th  className="table-text-heading">Phone</th>
                    <td className="table-text">{accDetails.phone}</td>
                    </tr>
                    <tr>
                    <th className="table-text-heading">Email</th>
                    <td className="table-text">{accDetails.email}</td>
                    </tr>
                    <tr>
                    <th className="table-text-heading">Aadhar Card </th>
                    <td className="table-text">{accDetails.adhar}</td>
                    </tr>
                    <tr>
                    <th className="table-text-heading">District</th>
                    <td className="table-text">{accDetails.districts && accDetails.districts.district}</td>
                    </tr>
                    <tr>
                    <th className="table-text-heading">City</th>
                    <td className="table-text">{accDetails.city}</td>
                    </tr>
                    <tr>
                    <th className="table-text-heading">Pin code</th>
                    <td className="table-text">{accDetails.pincode}</td>
                    </tr>
                </tbody>
                </table>
                <button type="button" onClick={(e)=>{
                        // e.persist();
                        updateDetails();
                        }} class="btn btn-primary">Update</button>
                </div>
            </div>
            </div>
            
    </div>
  )
}

export default CustomerDashBoard