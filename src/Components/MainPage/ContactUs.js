import React, { useEffect, useState } from "react";
import "./ContactUs.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { contact } from "../../Service/ListApiService";
import { useNavigate } from "react-router-dom";


const ContactUs = () => {
  const [queryDetails, setQueryDetails] = useState({
    name: "",
    email: "",
    contact: "",
    query: "",
  });
  useEffect(() => {}, []);

  const handleChange = (e) => {
    // console.log(e.target.value);
    setQueryDetails({ ...queryDetails, [e.target.name]: e.target.value });
  };
  var navigate=useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (validate()) {
      console.log(queryDetails);
      var response= await contact(queryDetails);
      console.log(response.data);
      if (response.status === 200)
      { setQueryDetails({ name: "",email: "", contact: "", query: ""});
      navigate("/");
    }
    } else {
      return window.alert("Please Enter a valid query");
    }
    // sending data to backend or email code.
  };

  var validate = () => {
    if (queryDetails.query.trim() == "") return false;
    else return true;
  };
  return (
    <>
      <div className="contactUsBg">
        <div className="container ">
          <div className="row">
            <div className=" contactHead" alert>
              <h2>CONTACT US</h2>
              Feel Free To Reach Us For Any Query
            </div>
            <div className="col-7  row">
              <h2 className="contactInfo">You Can Reach Us Via</h2>
              <div className="col-6 contactUsCard">
                <Card style={{ width: "18rem" }}>
                  <img
                    className="contactIcons"
                    src="https://cdn-icons-png.flaticon.com/512/9915/9915099.png"
                  />
                  <Card.Body>
                    <Card.Title>Our Main Office</Card.Title>
                    <Card.Text>
                      Sector 7, CBD Belapur, Navi Mumbai, Maharashtra 400614
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </div>
              <div className="col-6 contactUsCard">
                <Card style={{ width: "18rem" }}>
                  <img
                    className="contactIcons"
                    src="https://cdn-icons-png.flaticon.com/512/4213/4213204.png"
                  />
                  <Card.Body>
                    <Card.Title>Phone</Card.Title>
                    <Card.Text>
                      Main Office: +91-7485961235 <br></br>Toll Free:
                      1800-000-123
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </div>
              <div className="col-6 contactUsCard">
                <Card style={{ width: "18rem" }}>
                  <img
                    className="contactIcons"
                    src="https://cdn-icons-png.flaticon.com/512/1384/1384079.png"
                  />
                  <Card.Body>
                    <Card.Title>Whatsapp</Card.Title>
                    <Card.Text>
                      1800-000-456 <br></br>+91-7485961235
                    </Card.Text>

                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </div>
              <div className="col-6 contactUsCard">
                <Card style={{ width: "18rem" }}>
                  <img
                    className="contactIcons"
                    src="https://cdn-icons-png.flaticon.com/512/552/552486.png"
                  />
                  <Card.Body>
                    <Card.Title>Email</Card.Title>
                    <Card.Text>
                      <a href="customersupport@Egreenfarm.com">
                        customersupport@Egreenfarm.com
                      </a>
                      <a href="farmerssupport@Egreenfarm.com">
                        farmerssupport@Egreenfarm.com
                      </a>
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col-5  queryForm">
              <form
                className="queryContact container col-10 text-center"
                onSubmit={handleSubmit}
              >
                <h4 className="conactustitle">Please Write To Us</h4>

                <div>
                  <label className="labelTextContactUs" for="name">
                    Full Name
                  </label>
                  <input
                    className="userInput"
                    type="text"
                    id="name"
                    name="name"
                    required
                    //   value={queryDetails.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                  />
                </div>

                <label className="labelTextContactUs" for="email">
                  Email
                </label>
                <div>
                  <input
                    className="userInput"
                    type="email"
                    name="email"
                    id="email"
                    required
                    //   value={queryDetails.email}
                    onChange={handleChange}
                    placeholder="xyz@abc.com"
                  />
                </div>
                <label className="labelTextContactUs" for="contact">
                  Phone Number
                </label>
                <div>
                  <input
                    className="userInput"
                    type="tel"
                    pattern="[0-9]{10}"
                    name="contact"
                    id="contact"
                    required
                    //   value={queryDetails.phonenum}
                    onChange={handleChange}
                    placeholder="Enter Contact Number"
                  />
                </div>
                <br />
                <textarea
                  name="query"
                  id="query"
                  cols="30"
                  rows="3"
                  required
                  // value={queryDetails.userIssue}
                  onChange={handleChange}
                  placeholder="Please enter your query!"
                ></textarea>
                <br />
                <input type="submit" value="Submit Query" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactUs;
