import React from "react";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { sendEmail } from "../../Service/Email";
import { getAllDistrict, insert, userLogin } from "../../Service/ListApiService";
import image123 from "../MainPage/signup.jpg"
import "./signup.css";

function Signup() {
  const initialValues = {
    fullname: "",
    email: "",
    password: "",
    confirmpassword: "",
    phone: "",
    adhar: "",
    pincode: "",
    districts: {
      districtId: "",
      district: "",
    },
    city: "",
    role: " ",
  }; //changed
  const [formValues, setFormValues] = useState(initialValues);

  const [fullNameError, setFullNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [adharError, setAdharError] = useState("");
  const [pinCodeError, setPinCodeError] = useState("");
  const [districtError, setDistrictError] = useState("");
  const [cityError, setCityError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [roleError, setRoleError] = useState("");
  let [districtList, setDistrictList] = useState([]);
  const navigate = useNavigate();
  async function fetchDistrict() {
    var response = await getAllDistrict();
    console.log(response.data);
    setDistrictList(response.data);
  }

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleChangeDistrict = (e) => {
    let obj;
    for (var index in districtList) {
      console.log(index);
      console.log("inside for");
      console.log("item id : " + index.districtId);
      console.log("onlye e : " + e);
      console.log("e.tarhet : " + e.target.value);
      if (districtList[index].districtId == e.target.value) {
        obj = {
          districtId: e.target.value,
          district: districtList[index].district,
        };
        console.log("inside if");
        console.log(obj);
      }
    }
    // console.log(obj);
    setFormValues({ ...formValues, districts: obj });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form inputs
    console.log(formValues);
    if (!validate()) {
      ////changed
      console.log("no validate");
      return;
    } else {
      const formData = {
        fullname: formValues.fullname,
        email: formValues.email,
        password: formValues.password,
        confirmpassword: formValues.confirmpassword,
        phone: formValues.phone,
        adhar: formValues.adhar,
        pincode: formValues.pincode,
        districts: {
          districtId: formValues.districts.districtId,
          district: formValues.districts.district,
        },
        city: formValues.city,
        role: formValues.role,
      };

      console.log(formData);
      console.log("before");
      const response = await insert(formData);
      console.log(response.data);
      if (response.status === 200) {
        setFormValues({
          fullname: "",
          email: "",
          password: "",
          phone: "",
          password: "",
          confirmpassword: "",
          adhar: "",
          pincode: "",
          districts: {
            districtId: "",
            district: "",
          },
          city: "",
          role: "",
        });
        sendEmail(formData.fullname, formData.email);
        navigate("/Login");
      }
    }
  };

  const validate = () => {
    let isValid = true;
    const regex = /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/;
    //fullname validation
    if (formValues.fullname.trim() === "") {
      setFullNameError("Full Name is required");
      isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(formValues.fullname)) {
      setFullNameError("Name can only contain letters");
      isValid = false;
    } else {
      setFullNameError("");
    }

    //Phone number validation
    if (formValues.phone.trim() === "") {
      setPhoneError("Phone number is required");
      isValid = false;
    } else if (!/^[0-9]+$/.test(formValues.phone)) {
      setPhoneError("Phone number can only contain numbers");
      isValid = false;
    } else if (formValues.phone.length != 10) {
      setPhoneError("Phone number must be 10 digit");
      isValid = false;
    } else {
      setPhoneError("");
    }

    // Email validation
    if (formValues.email.trim() === "") {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      setEmailError("Email is not valid");
      isValid = false;
    } else {
      setEmailError("");
    }
    // password validation
    if (formValues.password.trim() === "") {
      setPasswordError("Password is required");
      isValid = false;
    } else if (formValues.password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      isValid = false;
    } else {
      setPasswordError("");
    }
    // Confirm password validation
    if (formValues.confirmpassword.trim() === "") {
      setConfirmPasswordError("confirmPassword is required");
      isValid = false;
    } else if (formValues.password !== formValues.confirmpassword) {
      setConfirmPasswordError("Password Not Matched");
      isValid = false;
    } else {
      setConfirmPasswordError("");
    }
    //adhar validation
    if (formValues.adhar.trim() === "") {
      setAdharError("Adhar Card Number is required");
      isValid = false;
    } else if (!regex.test(formValues.adhar)) {
      ////changed
      setAdharError("Invalid Adhar number");
      isValid = false;
    } else {
      setAdharError("");
    }

    //pin validation
    if (formValues.pincode.trim() === "") {
      console.log("inside pincode");
      setPinCodeError("Pincode is required");
      isValid = false;
    } else if (!/^[0-9]{6}$/.test(formValues.pincode)) {
      setPinCodeError("Invalid Pin Code");
      isValid = false;
    } else {
      setPinCodeError("");
    }
    //district
    if (formValues.districts.districtId==1 || formValues.districts.districtId=="") {
      console.log("inside pincode");
      setDistrictError("District is required");
      isValid = false;
    } else {
      setDistrictError("");
    }
    //City validation
    if (formValues.city.trim() === "") {
      setCityError("City is required");
      isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(formValues.city)) {
      setCityError("City can only contain letters");
      isValid = false;
    } else {
      setCityError("");
    }
    //role validation
    if (formValues.role.trim() === "") {
      console.log("inside role valid");
      setRoleError("Role is required");
      isValid = false;
    } else {
      setRoleError("");
    }
    console.log(isValid);
    return isValid;
  };

  useEffect(() => {
    fetchDistrict();
  }, []);
  return (
    <>
    <div className="row">
      <div className="col-lg-7">

        <img src={image123} alt="farmerselling"  className="img-fluid" />
        </div>
        <div className="col-lg-5">
      <div>
        <h1 className="mt-2 text-dark">Registration</h1>
        <form onSubmit={handleSubmit} className="form-d">
          <div>
            <label for="name text-start" className="text-dark">Full Name:</label>
            <input
              type="text"
              id="name"
              name="fullname"
              placeholder="Full Name"
              value={formValues.fullname}
              onChange={handleChange}
            />
            <br></br>
            {fullNameError && (
              <span style={{ color: "red" }}>{fullNameError} </span>
            )}
          </div>
          <div>
            <label for="email" className="text-dark">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
            {emailError && <span style={{ color: "red" }}>{emailError} </span>}
          </div>
          <div>
            <label for="phone" className="text-dark">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formValues.phone}
              onChange={handleChange}
            />
            {phoneError && <span style={{ color: "red" }}>{phoneError} </span>}
          </div>
          <div>
            <label for="adhar" className="text-dark">Aadhar Card Number:</label>
            <input
              type="text"
              id="adhar"
              name="adhar"
              value={formValues.adhar}
              onChange={handleChange}
            />
            {adharError && <span style={{ color: "red" }}>{adharError} </span>}
          </div>
          <div>
            <label for="pincode" className="text-dark">Pin Code:</label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              value={formValues.pincode}
              onChange={handleChange}
            />
            {pinCodeError && (
              <span style={{ color: "red" }}>{pinCodeError} </span>
            )}
          </div>
          <div>
            <label for="district" className="text-dark">District:</label>
            {/* <input type="text" 
          id="district" 
          name="district" 
          value={formValues.district}
          onChange={handleChange}/>{districtError && <span style={{ color: "red" }}>{districtError} </span>} */}
            <select
              id="district"
              name="district"
              // value={formValues.district}
              onChange={handleChangeDistrict}
              required
            >
              {districtList.map((item) => {
                return <option value={item.districtId}>{item.district}</option>;
              })}
              {/* <option value=" ">Select</option>
              <option value="farmer">Farmer</option>
              <option value="customer">Customer </option> */}
            </select>
            {districtError && <span style={{ color: "red" }}>{districtError} </span>}
            <br></br>
          </div>
          <div>
            <label for="city" className="text-dark">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formValues.city}
              onChange={handleChange}
            />
            <br></br>
            {cityError && <span style={{ color: "red" }}>{cityError} </span>}
          </div>
          <div>
            <label for="password" className="text-dark">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
            {passwordError && (
              <span style={{ color: "red" }}>{passwordError} </span>
            )}
          </div>
          <div>
            <label for="confirmpassword" className="text-dark">Confirm Password:</label>
            <input
              type="password"
              id="confirmpassword"
              name="confirmpassword"
              value={formValues.confirmpassword}
              onChange={handleChange}
            />
            {confirmPasswordError && (
              <span style={{ color: "red" }}>{confirmPasswordError} </span>
            )}
          </div>
          <div>
            <label for="role" className="text-dark">Select Role:</label>
            <select
              id="role"
              name="role"
              value={formValues.role}
              onChange={handleChange}
              required
            >
              <option value=" ">Select</option>
              <option value="farmer">Farmer</option>
              <option value="customer">Customer </option>
            </select>
            <br></br>
            {roleError && <span style={{ color: "red" }}>{roleError}</span>}
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
      </div>
      </div>
    </>
  );
}

export default Signup;
