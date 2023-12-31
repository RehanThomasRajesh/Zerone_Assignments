import React, { useState } from "react";
import Employeenavbar from "./Employeenavbar";
import axios from "axios";
import authenticate from "./AuthenticationService";

const EmployeeAdd = () => {
  const [inputField, setInputField] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    organization: "",
    designation: "",
    salary: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [token, setToken] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjVmN2JlMDg3LWY1OGUtNDA0MS04MjZjLTgyZWIzMTliZTIyOSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJBZG1pbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImFkbWluYWtwQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiYzhkNzkyMDMtODFjYy00ODJhLThmMzctMTVmNjJjYjIzNzJiIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiSmFuIFNhdCAwNiAyMDI0IDA0OjU3OjQ4IEFNIiwibmJmIjoxNzA0NDMwNjY4LCJleHAiOjE3MDQ0OTcyNjgsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcxNzAiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjcxNzAifQ.ty83qy-fkjfxC9zr9xh2UoAWClnGASVCYQH6ZwmbXxk");

  const inputHandler = (event) => {
    setInputField({ ...inputField, [event.target.name]: event.target.value });
  };

  const readVal = async () => {
    try {
      setLoading(true);
      setError(null);
  
      const authData = { username: "admin", password: "Admin" };
      const tokenResponse = await authenticate(authData);
  
      const headers = {
        Authorization: `Bearer ${tokenResponse.token}`,
        "Content-Type": "application/json",
      };
  
      const response = await axios.post("http://ztraining.zeronetraining.local/api.publish/api/employee", inputField, { headers });
  
      alert(response.data.message);
    } catch (error) {
      console.error("Employee registration has failed:", error.message);
      setError("Employee registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div>
      <Employeenavbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  First Name
                </label>
                <input type="text"  className="form-control" name="first_name"  value={inputField.first_name}  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Last Name
                </label>
                <input type="text"  className="form-control" name="last_name" value={inputField.last_name} onChange={inputHandler}/>
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Phone
                </label>
                <input type="number"  className="form-control" name="phone" value={inputField.phone} onChange={inputHandler}/>
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" name="email" value={inputField.email} onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Organisation
                </label>
                <input type="text" className="form-control" name="organization" value={inputField.organization} onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Designation
                </label>
                <input type="text"  className="form-control" name="designation" value={inputField.designation} onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Salary
                </label>
                <input type="text" className="form-control" name="salary" value={inputField.salary} onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={readVal} type="button" className="btn btn-primary" disabled={loading}>
                  {loading ? "REGISTERING..." : "REGISTER"}
                </button>
              </div>
              {error && <div className="text-danger mt-3">{error}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeAdd;
