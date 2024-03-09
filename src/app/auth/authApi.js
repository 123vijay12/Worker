import axios from 'axios';

const loginAPI = async (email, password) => {
    const url = 'http://localhost:8080/auth/login';
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to login');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Invalid email or password');
    }
  };
  
  
  export default loginAPI;