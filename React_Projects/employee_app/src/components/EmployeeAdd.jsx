import React, { useState } from "react";
import Employeenavbar from "./Employeenavbar";
import axios from "axios";

const EmployeeAdd = () => {
  const [inputField, setInputField] = useState({
    employeeID: 0,
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    personalEmail: "",
    mobileNumber: "",
    postalAddress: "",
    gender: "",
    country: "",
    city: "",
    designation: "",
    basicPay: "",
    needTransportation: "",
    notes: "",
    username: "",
    password: "",
  });

  const inputHandler = (event) => {
    const value =
      event.target.type === 'checkbox' ? event.target.checked : event.target.value;
  
    setInputField({
      ...inputField,
      [event.target.name]:
        event.target.type === 'checkbox' ? event.target.checked : value,
    });
  };

  const getNewToken = async () => {
    try {
      const response = await axios.post(
        "http://ztraining.zeronetraining.local/api.publish/api/account",
        {
          username: "admin",
          password: "Admin",
        }
      );

      const newToken = response.data.token;

      return newToken;
    } catch (error) {
      console.error("Error while getting a new token:", error);
      throw error;
    }
  };

  const readVal = async () => {
    try {
      const newToken = await getNewToken();
  
      console.log("Sending data to server:", inputField);
  
      const response = await axios.post(
        "http://ztraining.zeronetraining.local/api.publish/api/employee",
        inputField,
        {
          headers: {
            Authorization: `Bearer ${newToken}`,
          },
        }
      );
  
      console.log("Server response:", response);
  
      if (response.data && response.data.success) {
        alert("Successfully registered");
      } else {
        console.error("Unexpected server response:", response);
        alert("Successfully registered, but issues presists pls check console");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };
  


  return (
    <div>
      <Employeenavbar />
      <div className="container">
        <form action="">
          <div className="row g-3">
            <div className="col">
              <div className="row g-3">
               
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">First Name</label>
                  <input type="text" className="form-control" name="firstName" value={inputField.firstName} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">Last Name</label>
                  <input type="text" className="form-control" name="lastName" value={inputField.lastName} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">Date of Birth</label>
                  <input type="date" className="form-control" name="dateOfBirth" value={inputField.dateOfBirth} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">Personal Email</label>
                  <input type="email" className="form-control" name="personalEmail" value={inputField.personalEmail} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">Mobile Number</label>
                  <input type="text" className="form-control" name="mobileNumber" value={inputField.mobileNumber} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">Postal Address</label>
                  <input type="text" className="form-control" name="postalAddress" value={inputField.postalAddress} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">Gender</label>
                  <select className="form-select" name="gender" value={inputField.gender} onChange={inputHandler}>
                    <option value="">Select Gender</option>
                    <option value="0">Male</option>
                    <option value="1">Female</option>
                  </select>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">Country</label>
                  <input type="text" className="form-control" name="country" value={inputField.country} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">City</label>
                  <input type="text" className="form-control" name="city" value={inputField.city} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">Designation</label>
                  <input type="number" className="form-control" name="designation" value={inputField.designation} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">Basic Pay</label>
                  <input type="number" className="form-control" name="basicPay" value={inputField.basicPay} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">Need Transportation</label>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" name="needTransportation" checked={inputField.needTransportation} onChange={() => setInputField({ ...inputField, needTransportation: !inputField.needTransportation })} />
                    <label className="form-check-label" htmlFor="needTransportation">Yes</label>
                  </div>
                </div>

                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">Notes</label>
                  <textarea className="form-control" name="notes" value={inputField.notes} onChange={inputHandler}></textarea>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">Username</label>
                  <input type="text" className="form-control" name="username" value={inputField.username} onChange={inputHandler} autoComplete="current-username" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">Password</label>
                  <input type="password" className="form-control" name="password" value={inputField.password} onChange={inputHandler} autoComplete="current-password" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <button onClick={readVal} type="button" className="btn btn-primary">REGISTER</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeAdd;
