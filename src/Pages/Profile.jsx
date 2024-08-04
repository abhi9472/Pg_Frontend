import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Avatar from './Avatar.jsx'; // Adjust the import path as necessary

export const AdminProfile = () => {
  const [adminData, setAdminData] = useState(null);
  const [homes, setHomes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const userResponse = await axios.post(
        'http://localhost:8000/api/v1/users/userdetail',
        {},
        { withCredentials: true }
      );
      const userProfile = userResponse.data;

      const homesResponse = await axios.post(
        'http://localhost:8000/api/v1/users/getuserhome',
        {},
        { withCredentials: true }
      );
      const userHomes = homesResponse.data;

      setAdminData(userProfile);
      setHomes(userHomes || []);
    } catch (error) {
      setError('Error fetching data');
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section className="min-h-screen mx-auto p-4 md:p-8 lg:p-20 bg-gray-100 bg-gradient-to-r from-blue-300 via-red-400 to-green-300 pt-16 md:pt-32">
      <div className="max-w-8xl mx-auto bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 md:p-10">
        {/* Admin Avatar and Basic Info */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <Avatar
            avatarUrl={adminData?.message.avatar}
            onChange={fetchData} // Re-fetch data to update avatar
          />
          <div className=" pl-4 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
              {adminData?.message.name || 'No Name'}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Email: {adminData?.message.email || 'No Email'}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Phone: {adminData?.message.phoneNum || 'N/A'}
            </p>
          </div>
        </div>

        {/* Homes Uploaded by Admin */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Homes Uploaded
          </h2>
          {Array.isArray(homes) && homes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {homes.map((home, index) => (
                <div
                  key={home?._id || index}
                  className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    src={
                      home?.image &&
                      Array.isArray(home.image) &&
                      home.image.length > 0
                        ? home.image[0]
                        : '/default-home.png'
                    }
                    alt={home?.size || 'Home Image'}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100">
                      {home?.size || 'Unknown Size'} - ${home?.price || 'N/A'}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Location: {home?.location || 'Unknown Location'}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Floor: {home?.floor || 'N/A'}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Washroom: {home?.washroom || 'N/A'}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Lift: {home?.lift || 'N/A'}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Co-ed: {home?.Co_ed || 'N/A'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 dark:text-gray-400">
              No homes uploaded yet.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AdminProfile;
