import React from 'react';
import axios from 'axios';
import Nav from './Nav';

const EmployeeCard = ({ employee, token, onDelete }) => {
  const handleDeleteEmployee = async () => {
    try {
      await axios.delete(`http://ztraining.zeronetraining.local/api.publish/api/employee/${employee.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      onDelete(employee.id);
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };
<Nav></Nav>
  return (
    <div>
      <button onClick={handleDeleteEmployee}>Delete Employee</button>
    </div>
  );
};

export default EmployeeCard;
