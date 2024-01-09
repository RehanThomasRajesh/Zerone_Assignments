import React, { useState, useEffect } from "react";
import axios from "axios";
import Employeenavbar from "./Employeenavbar";

const EmployeeSearch = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [employeeData, setEmployeeData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newToken = await getNewToken();
        const response = await axios.get(
          `http://ztraining.zeronetraining.local/api.publish/api/employee/${employeeId}`,
          {
            headers: {
              Authorization: `Bearer ${newToken}`,
            },
          }
        );

        setEmployeeData(response.data);
        setError(null);
      } catch (error) {
        console.error("Error fetching employee data:", error);
        setEmployeeData(null);
        setError("Error fetching employee data. Please try again.");
      }
    };

    if (employeeId) {
      fetchData();
    }
  }, [employeeId]);

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

  const handleSearch = async () => {
    try {
      const newToken = await getNewToken();
      const response = await axios.get(`http://ztraining.zeronetraining.local/api.publish/api/employee/${employeeId}`,
        {
          headers: {
            Authorization: `Bearer ${newToken}`,
          },
        }
      );

      setEmployeeData(response.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching employee data:", error);
      setEmployeeData(null);
      setError("Error fetching employee data. Please try again.");
    }
  };

  return (
    <div>
      <Employeenavbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              <div className="col">
                <label htmlFor="" className="form-label">
                  Search Employee by ID
                </label>
                <input type="text" className="form-control" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} />
              </div>
              <div className="col col-12">
                <button className="btn btn-success" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {console.log("Rendering employeeData:", employeeData)}
        {employeeData && (
          <div className="row mt-3">
            <div className="col">
              <h4>Employee Details</h4>
              <p>ID: {employeeData.employeeID}</p>
              <p>Name: {employeeData.firstName}</p>
            </div>
          </div>
        )}


        {error && (
          <div className="row mt-3">
            <div className="col">
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeSearch;
