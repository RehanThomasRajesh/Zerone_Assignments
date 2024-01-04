import React, { useEffect, useState } from "react";
import Employeenavbar from "./Employeenavbar";
import axios from "axios";

const EmployeeView = () => {
  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios
      .get("http://54.146.162.63:4000/api/v1/employees/")
      .then((response) => {
        changeData(response.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Employeenavbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
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
                      <th scope="col">Created At</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((value, index) => {
                      return (
                        <tr>
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
