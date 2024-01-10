// EmployeeView.jsx

import React, { useState, useEffect } from "react";
import Employeenavbar from "./Employeenavbar";
import axios from "axios";
import "../employee-view.css";

const EmployeeView = () => {
  const [data, setData] = useState([]);
  const [flipIndex, setFlipIndex] = useState(null);
  const [employeeCount, setEmployeeCount] = useState(null);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newToken = await getNewToken();

        // Fetch employee count
        const countResponse = await axios.get(
          "http://ztraining.zeronetraining.local/api.publish/api/employee/count",
          {
            headers: {
              Authorization: `Bearer ${newToken}`,
            },
          }
        );
        setEmployeeCount(countResponse.data);

        // Fetch employee data
        const employeeResponse = await axios.get(
          "http://ztraining.zeronetraining.local/api.publish/api/employee",
          {
            headers: {
              Authorization: `Bearer ${newToken}`,
            },
          }
        );
        setData(employeeResponse.data);
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };

    fetchData();
  }, []);

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

  const handleCardClick = (index) => {
    clearTimeout(flipTimeout);
  };

  const handleCardLeave = () => {
    clearTimeout(flipTimeout);
    setFlipIndex(null);
  };

  let flipTimeout;

  const resetTransitionDelay = () => {
    document.querySelectorAll('.card').forEach((card) => {
      card.style.transitionDelay = '0s';
    });
  };

  return (
    <div>
      <Employeenavbar />
      <div className="container flex">
        <div className="row">
          <div className="col-md-12 mb-4 my-4">
            <h2>Total Employees: {employeeCount}</h2>
          </div>
        </div>
        <div className="row">
          {data.map((value, index) => (
            <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mb-4" key={index}>
              <div className={`card ${flipIndex === index ? 'flip' : ''}`} onMouseEnter={() => handleCardClick(index)} onMouseLeave={handleCardLeave}>
                <div className="card-inner">
                  <div className="card-front card-body">
                    <img src="https://th.bing.com/th/id/OIP.PMhANanxddOBObcYxcYOcwHaGy?rs=1&pid=ImgDetMain" alt="Profile" className="profile-pic" />
                    <h5 className="card-title">{value.firstName} {value.lastName}</h5>
                    <p className="card-text">Email: {value.personalEmail}</p>
                    <p className="card-text">Country: {value.country}</p>
                    <p className="card-text">Designation: {value.designation}</p>
                    <p className="card-text">Date of Birth: {value.dateOfBirth}</p>
                    <p className="card-text">Personal Email: {value.personalEmail}</p>
               
                  </div>
                  <div className="card-back card-body">
                    <p className="card-text">Mobile Number: {value.mobileNumber}</p>
                    <p className="card-text">Address: {value.postalAddress}</p>
                    <p className="card-text">Gender: {value.gender}</p>
                    <p className="card-text">Basic Pay: {value.basicPay}</p>
                    <p className="card-text">Username: {value.username}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeeView;
