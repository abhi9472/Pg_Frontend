import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check login status on component mount
  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user); // Update state based on presence of user data
  }, []);

  const logout = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/v1/users/logout', {
        method: 'POST',
        credentials: 'include', // Include credentials (cookies) in the request
      });

      if (response.ok) {
        // Clear user data from localStorage
        localStorage.removeItem('user');
        setIsLoggedIn(false); // Update login state
        // alert('Logout successful');
        navigate(''); // Redirect to another page
        
      } else {
        console.error('Logout failed:', await response.text());
      }
    } catch (error) {
      console.error('Logout failed:', error.message);
      // Handle any errors or display a message to the user
    }
  };


  // Ensure that the login state is reflected correctly after page load or state change
  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, [isLoggedIn]);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gray-900">MyPG</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-black hover:text-gray-300">Home</Link>
            {isLoggedIn ? (
              <>
                <button
                  onClick={logout}
                  className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="text-gray-500 hover:text-gray-900">Login</button>
                </Link>
                <Link to="/signup">
                  <button className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600">
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>

          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="block text-gray-500 hover:text-gray-900">Home</Link>
          {isLoggedIn ? (
            <button
              onClick={logout}
              className="block w-full bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login">
                <button className="block w-full text-left text-gray-500 hover:text-gray-900">Login</button>
              </Link>
              <Link to="/signup">
                <button className="block w-full bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
