import { Button, Table } from "react-bootstrap";
import AdminSideNav from "../Layout/AdminSideNav";
import "./CropVerification.css"
export function CropStatusFamer() {
  return (
    <>
    <div className="row">
      
    <div className="col-lg-2">
    <AdminSideNav></AdminSideNav>
      </div>
      <div className="col-lg-10">
    {/* style={{width:'100vw',height:'100vh',backgroundSize:'cover',backgroundImage:`url(${require('../../public/Veri.jpg')})`}} */}
    <div className="bgp">
      <div className="container text-dark" >
        <Table
          striped
          bordered
          hover
          responsive
          className="mt-3 table table-striped table-hover table-bordered table-sm align-middle caption-top table-responsive table-light"
        >
          <caption className="text-center fs-1 bold text-white">
            Crop Verification Table
          </caption>
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Farmer Name</th>
              <th>District</th>
              <th>City</th>
              <th>Crop</th>
              <th>Quantity</th>
              <th>Price per KG</th>
              <th>Total Price</th>
              <th>Accept</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Akshay</td>
              <td>Satara</td>
              <td>Shirwal</td>
              <td>Wheat</td>
              <td>300</td>
              <td>30</td>
              <td>{300 * 30}</td>
              <td>
                {" "}
                <Button variant="success">Accept</Button>
              </td>
              <td>
                <Button variant="danger">Reject</Button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Elon</td>
              <td>Satara</td>
              <td>Shirwal</td>
              <td>Wheat</td>
              <td>300</td>
              <td>30</td>
              <td>`{300 * 30}`</td>
              <td>
                {" "}
                <Button variant="success">Accept</Button>
              </td>
              <td>
                <Button variant="danger">Reject</Button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Satara</td>
              <td>Shirwal</td>
              <td>Wheat</td>
              <td>300</td>
              <td>30</td>
              <td>`{300 * 30}`</td>
              <td>
                {" "}
                <Button variant="success">Accept</Button>
              </td>
              <td>
                <Button variant="danger">Reject</Button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Satara</td>
              <td>Shirwal</td>
              <td>Wheat</td>
              <td>300</td>
              <td>30</td>
              <td>`{300 * 30}`</td>
              <td>
                {" "}
                <Button variant="success">Accept</Button>
              </td>
              <td>
                <Button variant="danger">Reject</Button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Satara</td>
              <td>Shirwal</td>
              <td>Wheat</td>
              <td>300</td>
              <td>30</td>
              <td>`{300 * 30}`</td>
              <td>
                {" "}
                <Button variant="success">Accept</Button>
              </td>
              <td>
                <Button variant="danger">Reject</Button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Satara</td>
              <td>Shirwal</td>
              <td>Wheat</td>
              <td>300</td>
              <td>30</td>
              <td>`{300 * 30}`</td>
              <td>
                {" "}
                <Button variant="success">Accept</Button>
              </td>
              <td>
                <Button variant="danger">Reject</Button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Satara</td>
              <td>Shirwal</td>
              <td>Wheat</td>
              <td>300</td>
              <td>30</td>
              <td>`{300 * 30}`</td>
              <td>
                {" "}
                <Button variant="success">Accept</Button>
              </td>
              <td>
                <Button variant="danger">Reject</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      </div>
      </div>
      </div>
    </>
  );
}
