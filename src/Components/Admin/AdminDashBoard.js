import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getAccDetails } from '../../Service/ListApiService';
import AdminSideNav from '../Layout/AdminSideNav';

function AdminDashBoard() {
    const id=sessionStorage.getItem("userId");
    const[accDetails,setAccDetails]=useState([]);
    var navigate= useNavigate();
    
    async function getAccountDetails(id)
    {
    var response=await getAccDetails(id);
    setAccDetails(response.data);
    console.log(response.data);
    console.log(accDetails.fullname);
    
    }
    useEffect(() => {
        getAccountDetails(id);
      },[]) //hi
    return(
    <div className="row  bgp1 ">
            <div className="col-lg-2 sidebar">
               <AdminSideNav></AdminSideNav>
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
                    <th className="table-text-heading">Email</th>
                    <td className="table-text">{accDetails.email}</td>
                    </tr>
                </tbody>
                </table>
                </div>
            </div>
            </div>
            
    </div>
    )
}

export default AdminDashBoard