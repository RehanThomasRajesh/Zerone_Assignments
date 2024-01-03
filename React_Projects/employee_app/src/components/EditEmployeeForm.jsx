import React, { useState } from 'react';
import axios from 'axios';
import Nav from './Nav';

const EditEmployeeForm = ({ token, employeeId }) => {
  const [editedEmployee, setEditedEmployee] = useState({ });

  const handleEditEmployee = async () => {
    try {
      await axios.put(`http://ztraining.zeronetraining.local/api.publish/api/employee/${employeeId}`, editedEmployee, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error('Error editing employee:', error);
    }
  };

  return (
    <div>
      <button onClick={handleEditEmployee}>Save Changes</button>
    </div>
  );
};
<Nav></Nav>
export default EditEmployeeForm;
