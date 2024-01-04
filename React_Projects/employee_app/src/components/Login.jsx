// LoginComponent.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authenticate from './AuthenticationService';

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError(null);

      const token = await authenticate(credentials);
      console.log('Authentication successful. Token:', token);

      // Redirect to the EmployeeAdd page on successful login
      navigate('add');

    } catch (error) {
      console.error('Authentication failed:', error.message);
      setError('Invalid username or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">Login</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              />
            </div>

            <button
              type="button"
              className="btn btn-primary"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>

            {error && <div className="text-danger mt-3">{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
