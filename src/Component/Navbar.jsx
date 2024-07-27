import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gray-900">MyPG</Link>
          </div>
        
          <div className="hidden md:flex items-center space-x-4">
          <Link to="/"className="hidden items-center text-black hover:text-gray-300 sm:flex">Home</Link>


          <Link to="/login">
        <button className="text-bold gray-500 hover:text-gray-900 ">login</button>
      </Link>
            <Link to="/signup">
        <button className="bg-blue-500 text-white px-3 py-2 rounded-md">Sign Up</button>
      </Link>
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
          {/* <Link to="/" className="block text-gray-500 hover:text-gray-900">Home</Link> */}
          {/* <Link to="/about" className="block text-gray-500 hover:text-gray-900">About</Link> */}
          {/* <Link to="/services" className="block text-gray-500 hover:text-gray-900">Services</Link> */}
          {/* <Link to="/contact" className="block text-gray-500 hover:text-gray-900">Contact</Link> */}
          <Link to="/login">
          <button className="block w-full text-left text-gray-500 hover:text-gray-900">Login</button>
          </Link>
          <Link to="/Signup">
          <button className="block w-full bg-blue-500 text-white px-3 py-2 rounded-md">Sign Up</button>
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
