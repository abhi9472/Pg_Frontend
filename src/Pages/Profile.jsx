import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Avatar from './Avatar.jsx'; // Adjust the import path as necessary

const AdminProfile = () => {
  const [adminData, setAdminData] = useState(null);
  const [homes, setHomes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedHome, setSelectedHome] = useState(null);
  const [modalType, setModalType] = useState(null); // 'updatePrice', 'updateLocation', or 'delete'
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');


  const fetchData = async () => {
    try {
      const userResponse = await axios.post(
        'https://pg-backend-n3ls.onrender.com/api/v1/users/userdetail',
        {},
        { withCredentials: true }
      );
      const userProfile = userResponse.data;

      const homesResponse = await axios.post(
        'https://pg-backend-n3ls.onrender.com/api/v1/users/getuserhome',
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

  const handleUpdatePrice = async () => {
    try {
      if (!selectedHome?._id || !price) return; // Ensure there's a selected home and price

      await axios.patch(`https://pg-backend-n3ls.onrender.com/api/v1/users/updateprice`, { newPrice: price }, {
        params: { id: selectedHome._id },
        withCredentials: true
      });

      fetchData();
      setModalType(null);
    } catch (error) {
      console.error('Error updating price:', error);
    }
  };

  const handleUpdateLocation = async () => {
    try {
      if (!selectedHome?._id || !location) return; // Ensure there's a selected home and location
    //   console.log(selectedHome._id);

      const response =await axios.patch(`https://pg-backend-n3ls.onrender.com/api/v1/users/updatelocation`, { newlocation: location }, {
        params: { id: selectedHome._id },
        withCredentials: true
      });
    //   console.log(response);

      fetchData();
      setModalType(null);
    } catch (error) {
      console.error('Error updating location:', error);
    }
  };

  const handleDeleteHome = async () => {
    try {
      if (!selectedHome?._id) return; // Ensure there's a selected home
      console.log(selectedHome);

     const response= await axios.patch(`https://pg-backend-n3ls.onrender.com/api/v1/users/deletehome?id=${selectedHome._id}`,null,
        {withCredentials:true}
        
      );
      console.log(response);


      fetchData();
      setModalType(null);
    } catch (error) {
      console.error('Error deleting home:', error);
    }
  };

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
          <div className="pl-4 text-center md:text-left">
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
                  className="relative bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
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
                      {home?.size || 'Unknown Size'} - {home?.price || 'N/A'}
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
                    <button
                      onClick={() => {
                        setSelectedHome(home);
                        setModalType('delete');
                      }}
                      className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
                    >
                      Options
                    </button>
                    {/* <button
                      onClick={() => {
                        setSelectedHome(home);
                        setModalType('update');
                      }}
                      className="absolute bottom-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600"
                    >
                      Update
                    </button> */}
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

        {/* Modal for Update/Delete Options */}
        {modalType && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-80">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                {modalType === 'delete' ? 'Choose an Option' : 'Update Home'}
              </h3>
              {modalType === 'delete' && (
                <>
                  <button
                    onClick={() => setModalType('updatePrice')}
                    className="block w-full bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 mb-2"
                  >
                    Update Price
                  </button>
                  <button
                    onClick={() => setModalType('updateLocation')}
                    className="block w-full bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
                  >
                    Update Location
                  </button>
                  <button
                    onClick={handleDeleteHome}
                    className="block w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 mt-2"
                  >
                    Delete Home
                  </button>
                </>
              )}
              {modalType === 'updatePrice' && (
                <>
                  <input
                    type="text"
                    placeholder="New Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full px-3 py-2 mb-4 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                  />
                  <button
                    onClick={handleUpdatePrice}
                    className="block w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  >
                    Update Price
                  </button>
                </>
              )}
              {modalType === 'updateLocation' && (
                <>
                  <input
                    type="text"
                    placeholder="New Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3 py-2 mb-4 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                  />
                  <button
                    onClick={handleUpdateLocation}
                    className="block w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  >
                    Update Location
                  </button>
                </>
              )}
              <button
                onClick={() => setModalType(null)}
                className="block w-full bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 mt-2"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminProfile;
