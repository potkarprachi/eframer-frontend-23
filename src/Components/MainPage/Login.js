import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAccDetails, getAccDetailsbyEmail, userLogin } from "../../Service/ListApiService";
import "../../Service/Email.js"
import "./Login.css";
import image123 from "../MainPage/farsell.avif"
function Login() {
  let [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  var handleChange = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };
  var navigate = useNavigate();
  var handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) {
      console.log("no validate");
      return;
    } else {
      var response1 = await userLogin(loginData);
      console.log(response1);
      if (response1.data) {
        var response1=sessionStorage.setItem("jwt","Bearer "+response1.data);
        console.log(loginData.email);
        var response= await getAccDetailsbyEmail(loginData.email)
        console.log(response.data);
        sessionStorage.setItem("user", JSON.stringify(response.data.email));
        sessionStorage.setItem("userId", JSON.stringify(response.data.id));
        sessionStorage.setItem("role", JSON.stringify(response.data.role));
        sessionStorage.setItem("name", response.data.fullname);
        console.log(response.data.role);
        if (response.data.role === "farmer") {
          navigate("/farmerdashboard");
        } else if (response.data.role == "admin") {
          navigate("/admindashboard");
        } else {
          navigate("/customerdashboard");
        }
      } else {
        alert("Invalid Credentials");
        navigate("/login");
      }
    }
  };

  const validate = () => {
    let isValid = true;
    if (loginData.email.trim() === "") {
      console.log("inside email validation");
      setEmailError("Email is required");
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginData.email)) {
      setEmailError("Email is not valid");
      isValid = false;
    } else {
      setEmailError("");
    }

    // password validation
    if (loginData.password.trim() === "") {
      setPasswordError("Password is required");
      isValid = false;
    } else if (loginData.password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      isValid = false;
    } else {
      setPasswordError("");
    }
    return isValid;
  };
  useEffect(() => {}, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-7 login-div">

          <img src={image123} alt="farmerselling"  className="img-for-login" width={900} height={500}/>
        </div>
        <div className="col-lg-5 login-div">
          <div>
            <h1 className="text-dark">Login</h1>
          </div>
          <div>
            <form action="" method="post" onSubmit={handleSubmit}>
              <div>
                <label for="username" className="text-dark">Email Id:</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email Id"
                  value={loginData.email}
                  onChange={handleChange}
                />
                {emailError && (
                  <span style={{ color: "red" }}>{emailError} </span>
                )}
              </div>
              <div>
                <label for="password" className="text-dark">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleChange}
                  placeholder="Password"
                />
                {passwordError && (
                  <span style={{ color: "red" }}>{passwordError} </span>
                )}
              </div>
              <br />
              <button type="submit">Login</button>
              <p>
                Forgot Password <a href="./forgotPassword"> Forgot Password </a>{" "}
                <br></br>
                Don't have an account? <a href="./Signup"> Signup </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

/*
<div className="lg">
      <form action="" method="post" onSubmit={handleSubmit}>
        <div>
          <label for="username">Email Id:</label>
          <input type="text"
            id="email"
            name="email"
            placeholder="Email Id"
            value={loginData.email}
            onChange={handleChange}
          />{emailError && <span style={{ color: "red" }}>{emailError} </span>}
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password"
            id="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            placeholder="Password"
          />{passwordError && <span style={{ color: "red" }}>{passwordError} </span>}
        </div>
        <br />
        <button type="submit">Login</button>
        <p>
          Don't have an account? <a href="./Signup"> Signup </a>
        </p>
      </form>
    </div>

*/
