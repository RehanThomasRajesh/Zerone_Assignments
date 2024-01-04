import React, { useEffect, useState } from "react";
import Employeenavbar from "./Employeenavbar";
import axios from "axios";

const EmployeeView = () => {
  const [data, changeData] = useState([]);
  const [token] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6Ijg4MzVmODdjLWI5MGEtNDcyMi05MDU2LTUxMmJjZmY3ZGY0MyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJBZG1pbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImFkbWluYWtwQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiMTk5YTFhOWEtNjEzMi00NWQ4LWI5NmEtN2MwNTY5ODY1MWVhIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiSmFuIFdlZCAwMyAyMDI0IDExOjM1OjI0IEFNIiwibmJmIjoxNzA0MTk1MzI0LCJleHAiOjE3MDQyNjE5MjQsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcxNzAiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjcxNzAifQ.O009fnTWefxDwfRg7h8lM2dfJq4C4f7KeIm720lXv1E"
  ); // Replace with the actual authentication token

  const fetchEmployeesWithToken = async () => {
    try {
      const response = await axios.get(
        "http://ztraining.zeronetraining.local/api.publish/api/employee",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      changeData(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error.message);
    }
  };

  useEffect(() => {
    // Fetch employees using the token on component mount
    fetchEmployeesWithToken();
  }, [token]);

  return (
    <div>
      <Employeenavbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Organisation</th>
                      <th scope="col">Designation</th>
                      <th scope="col">Salary</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((value, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row">{value.id}</th>
                          <td>{value.first_name}</td>
                          <td>{value.last_name}</td>
                          <td>{value.email}</td>
                          <td>{value.phone}</td>
                          <td>{value.organization}</td>
                          <td>{value.designation}</td>
                          <td>{value.salary}</td>
                          <td>{value.created_at}</td>
                          <td>{value.status}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeView;
