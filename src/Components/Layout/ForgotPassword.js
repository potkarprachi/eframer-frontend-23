import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
import { EditPassword } from "./EditPassword";
import { checkEmail } from "../../Service/ListApiService";
import './ForgotPassword.css';

function ForgotPassword() {
  
  const [userData, setUserData] = useState({
    userEmail: "",
    otpValue: "",
  });
  const [otp, setOtp] = useState("");
  // const[isOtpSet,setIsOtpSet]=useState(false);
  const [otpError, setOtpError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [userEmailError, setUserEmailError] = useState("");
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);
  const [userEmail, setUserEmail] = useState({
    email: "",
  });
  //render verify otp
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const sendEmail = (sendOtpDetails) => {
    emailjs
      .send(
        "service_i1yokil",
        "template_namyf66",
        {
          from_name: "E-Green Farm",
          email: sendOtpDetails.userEmail,
          otp: sendOtpDetails.otpValue,
        },

        "jxuAuq3psGJl62n3y"
      )

      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors("");
    if (!validateEmail()) {
      return;
    } else if (!otp) {
      setLoading(true);
      try {
        console.log("62");
        console.log(userData.userEmail);
        let obj = userData;
        setUserEmail(userData.email);
        // let obj = {
        //   donorEmail: userData.userEmail,
        // };
        console.log("63");
        console.log(obj);
        userEmail.email = userData.userEmail;
        const response = await checkEmail(userEmail);
        console.log("64");
        console.log(response);
        if (response.data) {
          console.log("66");
          const randomOtp = Math.floor(100000 + Math.random() * 900000);
          console.log(randomOtp); // prints a random 6-digit number
          setOtp(randomOtp);

          const sendOtpDetails = {
            userEmail: userData.userEmail,
            otpValue: randomOtp,
          };
          sendEmail(sendOtpDetails);
          console.log("done");
        } else {
          setUserEmailError("Email not found");
        }
      } catch (error) {
        setErrors("An error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    }
    //
    if (!validateOtp()) {
      return;
    } else {
      setShowPassword(true);
    }
  };

  const validateEmail = () => {
    let isValid = true;

    if (userData.userEmail.trim() === "") {
      setUserEmailError("Email is required");
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.userEmail)) {
      setUserEmailError("Email is not valid");
      isValid = false;
    } else {
      setUserEmailError("");
    }

    return isValid;
  };

  const validateOtp = () => {
    let isValid = true;
   
    if (userData.otpValue == "") {
      isValid = false;
    } else if (userData.otpValue != otp) {
      setOtpError("Wrong OTP");
      isValid = false;
    } else {
      setOtpError("");
    }

    return isValid;
  };

  return (
    <>
      <Container>
        {!showPassword && (
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col lg={12}>
                <Form.Group className="mb-3 m-5">
                  <Form.Label className="label">Enter Registered Email</Form.Label>
                  <Form.Control
                    className="mt-4"
                    type="text"
                    placeholder="Enter email"
                    name="userEmail"
                    onChange={handleChange}
                    disabled={otp}
                  />
                  {userEmailError && (
                    <span style={{ color: "red" }}>{userEmailError}</span>
                  )}
                </Form.Group>
              </Col>

              {otp && (
                <Col lg={12}>
                  <Form.Group className="mb-3 m-5">
                    <Form.Label className="label">
                      Enter OTP (OTP send on Above Mail Pls Check)
                    </Form.Label>
                    <Form.Control
                      className="mt-4"
                      type="text"
                      placeholder="Enter OTP"
                      name="otpValue"
                      value={userData.otpValue}
                      onChange={handleChange}
                    />
                    {otpError && (
                      <span style={{ color: "red" }}>{otpError}</span>
                    )}
                  </Form.Group>
                </Col>
              )}
            </Row>
            <Button type="submit" variant="success" className="m-2">
              {otp ? "Confirm OTP" : "Send OTP"}
            </Button>
          </Form>
        )}
        {showPassword && (
          <EditPassword email={userData.userEmail}></EditPassword>
        )}
      </Container>
    </>
  );
}

export default ForgotPassword;
