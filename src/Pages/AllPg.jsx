import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const AllPg = () => {
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    const fetchHomes = async () => {
      try {

        const response = await axios.post("http://localhost:8000/api/v1/users/allhomes");
         console.log(response);
        setHomes(response.data);
        
      } catch (error) {
        console.error("Error in fetching homes", error);
      }
    };

    fetchHomes();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 text-black dark:text-white">
      <div className="pt-16 px-4">
        <h1 className="text-2xl dark:bg-gray-700 pl-6 font-bold mb-4">All PG Homes Available</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 dark:bg-gray-800 pl-4">
          {homes.map(pg => (
            <div key={pg._id} className="border rounded-lg  shadow-md overflow-hidden border-gray-300 dark:border-gray-400">
              <div className="relative ">
                <img
                  src={pg.image[0]}
                  alt={pg.size}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 right-0 m-2">
                  <Link to={`/homes/${pg._id}`} className="text-white font-bold bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800">
                    View Details
                  </Link>
                </div>
              </div>
              <div className="p-2 dark:bg-gray-700">
                <h2 className="text-xl font-semibold">Size: {pg.size}</h2>
                <p className="text-red-400 font-semibold">Location: {pg.location}</p>
                <p className="text-gray-800 font-bold">Price: {pg.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AllPg;
