import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
    const navigate =useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await axios.post('http://localhost:8000/api/v1/users/forgotpassword', {
        email,
        newpassword,
      });
      console.log(newpassword);
      console.log(response);

      if (response.data.statusCode=== 200) {
        setSuccessMessage('Password updated successfully. You can now log in with your new password.');
        setEmail('');
        setNewPassword('');
        setErrorMessage('');
        navigate("/login");
        
      } else {
        setErrorMessage('Failed to update password. Please try again.');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
      console.error('Password update failed:', error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-4 md:mx-0 dark:bg-gray-600">
      <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 dark:text-gray-300">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="newpassword" className="block text-gray-700 dark:text-gray-300 ">New Password:</label>
          <input
            type="password"
            id="newpassword"
            value={newpassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
            required
          />
        </div>

        {successMessage && (
          <div className="mb-4 text-green-600">
            {successMessage}
          </div>
        )}

        {errorMessage && (
          <div className="mb-4 text-red-600">
            {errorMessage}
          </div>
        )}

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default ForgotPassword;
