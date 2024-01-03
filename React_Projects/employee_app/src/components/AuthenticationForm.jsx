// Authentication.js
import React, { useState } from 'react';

const AuthenticationForm = () => {
  const [authToken, setAuthToken] = useState(null);

  const authenticateUser = async () => {
    const authData = {
      username: 'admin',
      password: 'Admin',
    };

    try {
      const response = await fetch('http://ztraining.zeronetraining.local/api.publish/api/account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(authData),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;

        // Store the authentication token securely (using sessionStorage as an example)
        sessionStorage.setItem('authToken', token);

        // Update the authToken state
        setAuthToken(token);
      } else {
        // Handle authentication failure
        console.error('Authentication failed:', response.status);
      }
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  const logout = () => {
    // Clear the authentication token from sessionStorage
    sessionStorage.removeItem('authToken');

    // Update the authToken state to null
    setAuthToken(null);
  };

  return (
    <div>
      {authToken ? (
        <div>
          <p>User is authenticated</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={authenticateUser}>Authenticate</button>
      )}
    </div>
  );
};

export default AuthenticationForm;
