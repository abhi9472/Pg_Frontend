import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="relative h-screen">
      <img
        src="homebg.jpg"
        alt="Welcome"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex pb-60 items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white pb-60 mb-8">Welcome to PG Finder</h1>
          <Link to="/allpg" className=" text-white font-bold bg-blue-500 px-8  py-4 rounded">
            View All PGs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
