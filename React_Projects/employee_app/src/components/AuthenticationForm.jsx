// AuthenticationForm.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom

const AuthenticationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authToken, setAuthToken] = useState(null);
  const history = useHistory(); // Get the history object from react-router-dom

  const authenticateUser = async () => {
    const authData = {
      username: username,
      password: password,
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

        // Redirect to another page upon successful authentication
        history.push('/dashboard'); // Replace '/dashboard' with the desired route
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
        <div>
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <button onClick={authenticateUser}>Authenticate</button>
        </div>
      )}
    </div>
  );
};

export default AuthenticationForm;
