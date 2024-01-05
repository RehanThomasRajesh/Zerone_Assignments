import React, { useState } from "react";
import Employeenavbar from "./Employeenavbar";
import "../index.css"; // Import your CSS file with the provided styles

const EmployeeView = () => {
  const [data] = useState([
    {
      id: 1,
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      organization: "ABC Corp",
      designation: "Software Engineer",
      salary: "$80,000",
      created_at: "2022-01-01",
      status: "Active",
    },
    {
      id: 2,
      first_name: "Jane",
      last_name: "Smith",
      email: "jane.smith@example.com",
      phone: "987-654-3210",
      organization: "XYZ Ltd",
      designation: "UX Designer",
      salary: "$75,000",
      created_at: "2022-01-05",
      status: "Active",
    },
    {
      id: 3,
      first_name: "Bob",
      last_name: "Johnson",
      email: "bob.johnson@example.com",
      phone: "555-123-4567",
      organization: "Tech Innovators",
      designation: "Project Manager",
      salary: "$90,000",
      created_at: "2022-02-10",
      status: "Inactive",
    },
    {
      id: 4,
      first_name: "Alice",
      last_name: "Johnson",
      email: "alice.johnson@example.com",
      phone: "555-987-6543",
      organization: "Tech Solutions",
      designation: "Frontend Developer",
      salary: "$85,000",
      created_at: "2022-03-15",
      status: "Active",
    },
    {
      id: 5,
      first_name: "Eva",
      last_name: "Brown",
      email: "eva.brown@example.com",
      phone: "777-123-4567",
      organization: "Innovate Corp",
      designation: "Data Scientist",
      salary: "$95,000",
      created_at: "2022-04-20",
      status: "Active",
    },
    {
      id: 6,
      first_name: "Michael",
      last_name: "Miller",
      email: "michael.miller@example.com",
      phone: "888-555-1234",
      organization: "Digital Creations",
      designation: "UI/UX Designer",
      salary: "$80,000",
      created_at: "2022-05-25",
      status: "Inactive",
    },
    {
      id: 7,
      first_name: "Sophia",
      last_name: "Clark",
      email: "sophia.clark@example.com",
      phone: "999-444-5678",
      organization: "Future Innovations",
      designation: "Software Developer",
      salary: "$88,000",
      created_at: "2022-06-30",
      status: "Active",
    },
    {
      id: 8,
      first_name: "Daniel",
      last_name: "White",
      email: "daniel.white@example.com",
      phone: "111-222-3333",
      organization: "Tech Ventures",
      designation: "DevOps Engineer",
      salary: "$92,000",
      created_at: "2022-07-05",
      status: "Inactive",
    },
    {
      id: 9,
      first_name: "Olivia",
      last_name: "Martin",
      email: "olivia.martin@example.com",
      phone: "222-333-4444",
      organization: "Innovate Tech",
      designation: "Product Manager",
      salary: "$100,000",
      created_at: "2022-08-10",
      status: "Active",
    },
    {
      id: 10,
      first_name: "Liam",
      last_name: "Williams",
      email: "liam.williams@example.com",
      phone: "333-444-5555",
      organization: "Future Tech Solutions",
      designation: "Full Stack Developer",
      salary: "$96,000",
      created_at: "2022-09-15",
      status: "Inactive",
    },
  ]);

  const [flipIndex, setFlipIndex] = useState(null);

  const handleCardClick = (index) => {
    setFlipIndex(index);
  };

  const handleCardLeave = () => {
    setFlipIndex(null);
  };

  return (
    <div>
      <Employeenavbar />
      <div className="container mt-4">
        <div className="row">
          {data.map((value, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div
                className={`card ${flipIndex === index ? "flipped" : ""}`}
                onClick={() => handleCardClick(index)}
                onMouseLeave={handleCardLeave}
              >
                <div className="card-inner">
                  <div className="card-front card-body">
                    <h5 className="card-title">{value.first_name} {value.last_name}</h5>
                    <p className="card-text">Email: {value.email}</p>
                    <p className="card-text">Phone: {value.phone}</p>
                    <p className="card-text">Organization: {value.organization}</p>
                    <p className="card-text">Designation: {value.designation}</p>
                  </div>
                  <div className="card-back card-body">
                    <p className="card-text">Salary: {value.salary}</p>
                    <p className="card-text">Created At: {value.created_at}</p>
                    <p className="card-text">Status: {value.status}</p>
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