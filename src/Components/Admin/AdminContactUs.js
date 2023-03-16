import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getContactQueries } from "../../Service/ListApiService";
import AdminSideNav from "../Layout/AdminSideNav";

function AdminContactUs() {
  
  const [queries, setQueries] = useState([]);
  var navigate=useNavigate();
  var id=sessionStorage.getItem("userId"); 
  var role=sessionStorage.getItem("role");   

  const getqueries = async () => {
    if(id==0 && role!="admin")
    {  
      navigate('/login');
    }
   
    const resp = await getContactQueries();
    setQueries(resp.data);
  };

  useEffect(() => {
    getqueries();
  }, []);

  console.log(queries);

  return (
    <>

      <div className="row bgp1">
        <div className="col-lg-2 col-md-2 col-sm-2 sidebar">
          <AdminSideNav>Contact Queries</AdminSideNav>
        </div>
        <div className="col-lg-9 col-md-9 col-sm-9">
          <div>
            <div className="container">
              <table className="table table-bordered mt-5 align-middle caption-top table-responsive">
                <caption className="text-center fs-1 bold text-white">
                  Admin Contact Queries Status
                </caption>
                <thead className="text-white">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email id</th>
                    <th scope="col">ContactNumber</th>
                    <th scope="col">Query</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  {queries?.map((item) => {
                    return (
                      <tr>
                        <th scope="row">{item.name}</th>
                        <td>{item.email}</td>
                        <td>{item.contact}</td>
                        <td>{item.query}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminContactUs;
