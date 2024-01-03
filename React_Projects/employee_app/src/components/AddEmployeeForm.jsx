import React, { useState } from 'react';
import axios from 'axios';
import Nav from './Nav';

const AddEmployeeForm = ({ token }) => {
  const [newEmployee, setNewEmployee] = useState({ });

  const handleAddEmployee = async () => {
    try {
      await axios.post('http://ztraining.zeronetraining.local/api.publish/api/employee', newEmployee, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  return (
    <div>
      <button onClick={handleAddEmployee}>Add Employee</button>
    </div>
  );
};
<Nav></Nav>
export default AddEmployeeForm;
