import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cancelCropSelling, getAllCropList } from "../../Service/ListApiService";
import { FarmerSideNav } from "../Layout/FarmerSideNav";
import FarmerSideNavBar from "../Layout/FarmerSideNavBar";

import "./FarmerCropStatus.css";
export function FarmerCropStatus() {
  let [cropList, setCropList] = useState([]);
  var navigate= useNavigate();
  let id = sessionStorage.getItem("userId");
  let role=sessionStorage.getItem("role");
  var navigate=useNavigate();
  async function getCropList(id) {
   if(id==0 && role!="farmer")
    navigate("/");
    else{
    var response = await getAllCropList(id);
    setCropList(response.data);
    console.log(response.data);
  } 
  }

  async function removeCropFromList(cropId1)
  {
    console.log(cropId1);
    var resonse=await cancelCropSelling(cropId1);
    getCropList(id);
  }

  useEffect(() => {
    getCropList(id);
  }, []);
  return (
    <>
      <div className="row bgp1">
        <div className="col-lg-2 col-md-2 col-sm-2 sidebar">
          <FarmerSideNavBar></FarmerSideNavBar>
        </div>
        <div className="col-lg-10 col-md-10 col-sm-10 mb-5">
          <div className="text-light">
            <h1>Crop Status</h1>
          </div>
        <table className="table table-bordered table-responsive text-light ms-5 me-5 mt-5" >
            <thead>
              <tr>
              <th scope="col">Order No.</th>
                    <th scope="col">Crop</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price per Kg</th>
                    <th scope="col">Total Price</th>
                    <th scope="col">Status</th>
                    <th scope="col">Sell Status</th>
                    <th scope="col">Cancel Order</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
                {cropList.map((item)=>{
                    return(
                        <tr>
                            <th scope="row">{item.cropID}</th>
                        <td >{item.cropName}</td>
                        <td >{item.weight}</td>
                        <td >{item.price}</td>
                        <td>{item.weight * item.price}</td>
                        <td>{item.status}</td>
                        {
                        item.customerNo === null ? (
                          <td>Unsold</td>
                        ) : (
                          <td>Sold</td>
                        )}
                        {item.customerNo === null ? (
                          <td>
                            <button
                              type="button"
                              class="btn btn-danger"
                              onClick={() => {
                                  removeCropFromList(item.cropID);
                              }
                            }
                            >
                              Cancel
                            </button>
                          </td>
                        ) : (
                          <td>
                            <button
                              type="button"
                              class="btn btn-warning"
                              disabled
                            >
                              Cancel
                            </button>
                          </td>
                        )
                        }
                        </tr>
                    );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}


/*
<table className="table table-bordered mt-5 mx-5 margin-right align-middle caption-top table-responsive">
                <caption className="text-center fs-1 bold text-white">
                  Crops Status
                </caption>
                <thead className="text-white">
                  <tr>
                    <th scope="col">Order No.</th>
                    <th scope="col">Crop</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price per Kg</th>
                    <th scope="col">Total Price</th>
                    <th scope="col">Status</th>
                    <th scope="col">Sell Status</th>
                    <th scope="col">Cancel Order</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  {cropList.map((item) => {
                    return (
                      <tr>
                        <th scope="row">{item.cropID}</th>
                        <td >{item.cropName}</td>
                        <td >{item.weight}</td>
                        <td >{item.price}</td>
                        <td>{item.weight * item.price}</td>
                        <td>{item.status}</td>
                        {
                        item.customerNo === null ? (
                          <td>Unsold</td>
                        ) : (
                          <td>Sold</td>
                        )}
                        {item.customerNo === null ? (
                          <td>
                            <button
                              type="button"
                              class="btn btn-danger"
                              onClick={() => {
                                  removeCropFromList(item.cropID);
                              }
                            }
                            >
                              Cancel
                            </button>
                          </td>
                        ) : (
                          <td>
                            <button
                              type="button"
                              class="btn btn-warning"
                              disabled
                            >
                              Cancel
                            </button>
                          </td>
                        )
                        }
                      </tr>
                    );
                  })}
                </tbody>
              </table>

*/