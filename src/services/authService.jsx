// src/services/authService.jsx
export const performEmailLogin = async (email, password) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password
        })
      });
  
      if (!response.ok) {
        throw new Error('Login failed');
      }
  
      const data = await response.json();
      // Successful login - redirect or update UI
      window.location.href = 'dashboard.html';
      return data;
    } catch (error) {
      // Handle login errors
      throw error;
    }
  };
  
  export const performGoogleLogin = () => {
    // TODO: Implement Google OAuth login
    console.log('Google login initiated');
    alert('Google login functionality to be implemented');
  };
  
  export const performAppleLogin = () => {
    // TODO: Implement Apple Sign-In
    console.log('Apple login initiated');
    alert('Apple login functionality to be implemented');
  };
  
  export const handleForgotPassword = () => {
    // TODO: Implement forgot password logic
    alert('Forgot password functionality to be implemented');
  };