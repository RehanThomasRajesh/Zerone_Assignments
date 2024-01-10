
import React, { useState, useEffect } from "react";
import axios from "axios";
import Employeenavbar from "./Employeenavbar";
import CustomModal from "./CustomModal"; 

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false); 
    const [editedEmployee, setEditedEmployee] = useState(null);
    const [currentPage, setCurrentPage] = useState(1); 
    const [pageSize, setPageSize] = useState(5);
    const [sortOrder, setSortOrder] = useState("asc"); 

    useEffect(() => {
        fetchData();
    }, [currentPage]);

    const fetchData = async () => {
        try {
          const newToken = await getNewToken();
          const response = await axios.get(
            `http://ztraining.zeronetraining.local/api.publish/api/employee/paged/${pageSize}/${currentPage}/firstName/asc`,
            {
              headers: {
                Authorization: `Bearer ${newToken}`,
              },
            }
          );
    
          setEmployees(response.data);
    
         
          if (response.data.length < pageSize) {
          }
        } catch (error) {
          console.error("Error fetching employee data:", error);
        }
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
    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
      };

    const handleEditClick = (employee) => {
        setEditedEmployee({ ...employee });
        setShowEditModal(true);
    };

    const handleEditSave = async () => {
        try {
            const newToken = await getNewToken();
            await axios.put(
                `http://ztraining.zeronetraining.local/api.publish/api/employee/${editedEmployee.employeeID}`,
                editedEmployee,
                {
                    headers: {
                        Authorization: `Bearer ${newToken}`,
                    },
                }
            );

            setShowEditModal(false);
            fetchData();
        } catch (error) {
            console.error("Error editing employee:", error);
        }
    };

    const handleEditCancel = () => {
        setShowEditModal(false);
    };

    const handleDeleteClick = async (employeeId) => {
        try {
            const shouldDelete = window.confirm("Are you sure you want to delete this employee?");
            if (!shouldDelete) {
                return;
            }

            const newToken = await getNewToken();
            await axios.delete(
                `http://ztraining.zeronetraining.local/api.publish/api/employee/${employeeId}`,
                {
                    headers: {
                        Authorization: `Bearer ${newToken}`,
                    },
                }
            );

            fetchData();
        } catch (error) {
            console.error("Error deleting employee:", error);
        }
    };

    const handleInputChange = (field, value) => {
        setEditedEmployee({
            ...editedEmployee,
            [field]: value,
        });
    };

    return (

        <div>
        <Employeenavbar></Employeenavbar>
        <div className="container mt-5">
          <div className="pagination">
            <button
              onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>Page {currentPage}</span>
            <button onClick={handleNextPage}>
              Next
            </button>
          </div>

                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Employee ID</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.employeeID}>
                                <th scope="row">{employee.employeeID}</th>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.personalEmail}</td>
                                <td>
                                    <button
                                        className="btn btn-primary mr-2"
                                        onClick={() => handleEditClick(employee)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleDeleteClick(employee.employeeID)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <CustomModal
                isOpen={showEditModal}
                onClose={handleEditCancel}
            >
                <h3>Edit Employee</h3>
                <label>First Name:</label>
                <input
                    type="text"
                    value={editedEmployee?.firstName || ""}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                />
                <br />
                <label>Last Name:</label>
                <input
                    type="text"
                    value={editedEmployee?.lastName || ""}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                />
                <br />
                <label>Email:</label>
                <input
                    type="email"
                    value={editedEmployee?.personalEmail || ""}
                    onChange={(e) => handleInputChange("personalEmail", e.target.value)}
                />
                <br />
                <label>Country:</label>
                <input
                    type="text"
                    value={editedEmployee?.country || ""}
                    onChange={(e) => handleInputChange("country", e.target.value)}
                />
                <br />
                <button onClick={handleEditSave}>Save</button>
                <button onClick={handleEditCancel}>Cancel</button>
            </CustomModal>
        </div>
    );
};

export default EmployeeList;
