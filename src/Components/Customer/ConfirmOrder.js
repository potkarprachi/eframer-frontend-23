import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { buyCrop1, getCropInfo } from "../../Service/ListApiService";
import CustomerSideNav from "../Layout/CustomerSideNav";

export function ConfirmOrder() {
  const cropIDfromSession = sessionStorage.getItem("cropid");
  const customerId=sessionStorage.getItem("userId");

  let navigate=useNavigate();

  let [billDetails, setBillDetails] = useState([]);
  let [trans,setTrans]=useState({
    cropID : '',
    customerNo: {
          id: 1
      },
      farmerNo: {
        id: ''
    },
    cropStatus:{
      cropID : ''
    },
    price:'',
    weight:'',
    status:'Paid'
  }
  );
  async function getDetailsOfBuyingCrop() {
    var response = await getCropInfo(cropIDfromSession);
    console.log(response.data);
    setBillDetails(response.data);
    console.log("BIll Details");
    console.log(billDetails);
  }

  async function buyCrop(customerId,billDetails)
  {
    trans.cropID=billDetails.cropID;
    trans.customerNo.id=parseInt(customerId,10);
    trans.farmerNo.id=billDetails.farmerNo.id;
    trans.price=billDetails.price;
    trans.weight=billDetails.weight;
    trans.cropStatus.cropID=billDetails.cropID
    console.log(trans);
    var response1=await buyCrop1(trans);
    navigate("/menupage")
  }


  useEffect(() => {
    getDetailsOfBuyingCrop();
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-2 mb-5">
            <CustomerSideNav></CustomerSideNav>
          </div>
          <div className="col-lg-8  col-md-8 col-sm-8 offset-md-1 offset-lg-1 offset-sm-1">
            <h1 className="text-dark my-5">Bill Details</h1>
            <div className="row">
              <div className="col-3 text-start">
                <h6>Farmer Name</h6>
              </div>
              <div className="col-6"></div>
              <div className="col-2 text-start">
                {billDetails.farmerNo && billDetails.farmerNo.fullname}
              </div>
            </div>
            <hr></hr>
            <div className="row">
              <div className="col-3 text-start">
                <h6>Farmer Phone</h6>
              </div>
              <div className="col-6"></div>
              <div className="col-2 text-start">
                {billDetails.farmerNo && billDetails.farmerNo.phone}
              </div>
            </div>
            <hr></hr>
            <div className="row">
              <div className="col-3 text-start">
                <h6>Farmer email</h6>
              </div>
              <div className="col-6"></div>
              <div className="col-2 text-start">
                {billDetails.farmerNo && billDetails.farmerNo.email}
              </div>
            </div>
            <hr></hr>
            <div className="row">
              <div className="col-3 text-start">
                <h6>Crop</h6>
              </div>
              <div className="col-6"></div>
              <div className="col-2 text-start">
                {billDetails.cropName}
              </div>
            </div>
            <hr></hr>
            <div className="row">
              <div className="col-3 text-start">
                <h6>Crop Weight</h6>
              </div>
              <div className="col-6"></div>
              <div className="col-2 text-start">
                {billDetails.weight}
              </div>
            </div>
            <hr></hr>
            <div className="row">
              <div className="col-3 text-start">
                <h6>Crop Price</h6>
              </div>
              <div className="col-6"></div>
              <div className="col-2 text-start">
                {billDetails.price}
              </div>
            </div>
            <hr></hr>
            <div className="row">
              <div className="col-3 text-start">
                <h6>Total Price</h6>
              </div>
              <div className="col-6"></div>
              <div className="col-2 text-start">
                <h6>{billDetails.price*billDetails.weight} INR</h6>
              </div>
            </div>
            <hr></hr>
            <button
                        type="button"
                        class="btn btn-success"
                        onClick={() => {
                            buyCrop(customerId,billDetails);
                        }}
                      >
                        Buy
                      </button>
          </div>
          
        </div>
        
      </div>
    </>
  );
}