import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Retrieve saved theme from localStorage or default to light mode
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : false;
  });
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true); // User exists, so set as logged in
    } else {
      setIsLoggedIn(false); // No user data, so set as logged out
    }

    // Apply the saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  const logout = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/v1/users/logout', {
        method: 'POST',
        credentials: 'include',
      });

      if (response.ok) {
        localStorage.removeItem('user');
        setIsLoggedIn(false); // Update isLoggedIn state immediately
        navigate("/allpg");
      } else {
        console.error('Logout failed:', await response.text());
      }
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', newMode);
      return newMode;
    });
  };
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/allpg" className="text-2xl font-bold text-gray-900 dark:text-gray-100">MyPG</Link>
          </div>
  
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-black dark:text-gray-200 hover:text-gray-300 dark:hover:text-gray-400">Home</Link>
            {user ? (
              <>
                <Link to="/profile">
                  <button className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">Profile</button>
                </Link>
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
                  <button className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">Login</button>
                </Link>
                <Link to="/signup">
                  <button className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600">
                    Sign Up
                  </button>
                </Link>
              </>
            )}
            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-500 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
            </button>
          </div>
  
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:bg-gray-800">
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
          <Link to="/" className="block text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">Home</Link>
          {user ? (
            <>
              <Link to="/profile">
                <button className="block w-full text-left text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">Profile</button>
              </Link>
              <button
                onClick={logout}
                className="block w-full bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="block w-full text-left text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">Login</button>
              </Link>
              <Link to="/signup">
                <button className="block w-full bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600">
                  Sign Up
                </button>
              </Link>
            </>
          )}
          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            className="block w-full p-2 rounded-md text-gray-500 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
};  

export default Navbar;