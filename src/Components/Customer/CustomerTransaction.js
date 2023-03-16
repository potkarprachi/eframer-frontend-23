import { useEffect, useState } from "react";
import { getTransDetails } from "../../Service/ListApiService";
import CustomerSideNav from "../Layout/CustomerSideNav";
import '../Customer/CustomerTransactions.css'
import { useNavigate } from "react-router-dom";
export function CustomerTransaction() {
  let [transactions, setTransactions] = useState([]);

  var id = sessionStorage.getItem("userId");
  var role=sessionStorage.getItem("role");
  var navigate= useNavigate();
  async function getTransList(id) {
    if(id==0 && role!="customer")
        navigate("/login");
    
    console.log(id);
    var response = await getTransDetails(id);
    console.log(response.data);
    setTransactions(response.data);
  }

  useEffect(() => {
    getTransList(id);
  }, []);
  return (
    <>
      <div className="row bgp1">
            <div className="col-lg-2 sidebar">
               <CustomerSideNav></CustomerSideNav>
            </div>
            <div className="col-lg-10 ">
        <div className="" >
          <div>
            <h1 className="my-3">Transactions History</h1>
          </div>
          <table className="table table-bordered table-responsive text-light ms-5 me-5" style={{width:"auto"}}>
            <thead>
              <tr>
                <th scope="col">Transaction ID</th>
                <th scope="col">Customer</th>
                <th scope="col">Crop</th>
                <th scope="col">Weight</th>
                <th scope="col">Amount</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
                {transactions.map((item)=>{
                    return(
                        <tr>
                            <td style={{width:"6%"}}>{item.transactionId}</td>
                            <td style={{width:"12%"}}>{item.farmerNo.fullname}</td>
                            <td style={{width:"6%"}}>{item.cropStatus.cropName}</td>
                            <td style={{width:"6%"}}>{item.weight}</td>
                            <td style={{width:"6%"}}>{item.weight*item.price}</td>
                            <td style={{width:"12%"}}>{item.date}</td>
                            <td style={{width:"12%"}}>{item.status}</td>
                        </tr>
                    );
                })}
            </tbody>
          </table>
        </div>
        </div>
        </div>
    </>
  );
}
