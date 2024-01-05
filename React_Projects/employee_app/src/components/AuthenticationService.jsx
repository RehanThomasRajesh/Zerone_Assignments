const authenticate = async (credentials) => {
  try {
    const response = await fetch('http://ztraining.zeronetraining.local/api.publish/api/account', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      // Handle specific HTTP status codes, e.g., 401 for unauthorized
      if (response.status === 401) {
        throw new Error('Authentication failed: Invalid credentials');
      } else {
        throw new Error('Authentication failed');
      }
    }

    const data = await response.json();
    const { token } = data;

    if (!token) {
      throw new Error('Authentication failed: No token received');
    }

    // Store the token securely (e.g., localStorage)
    localStorage.setItem('authToken', token);

    return token;
  } catch (error) {
    console.error('Authentication error:', error.message);
    throw error;
  }
};

export default authenticate;
