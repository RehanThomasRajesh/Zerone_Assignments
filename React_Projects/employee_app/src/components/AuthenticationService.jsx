// AuthenticationService.js
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
        throw new Error('Authentication failed');
      }
  
      const data = await response.json();
      const { token } = data;
  
      // Store the token securely (e.g., localStorage)
      localStorage.setItem('authToken', token);
  
      return token;
    } catch (error) {
      console.error('Authentication error:', error.message);
      throw error;
    }
  };
  
  export default authenticate;
  