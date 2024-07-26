import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const HomeDetails = () => {
  const { id } = useParams();
  const [home, setHome] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchHomeDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/users/gethomedetail?_id=${id}`);
        setHome(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching home details");
        setLoading(false);
      }
    };

    fetchHomeDetails();
  }, [id]);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % home.image.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + home.image.length) % home.image.length);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!home) return <p>No home details found</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Home Details</h1>

      {/* Grid layout for images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {home.image.map((img, index) => (
          <div key={index} className="relative group">
            <img
              src={img}
              alt={`Home Image ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              onClick={() => openModal(index)}
            />
          </div>
        ))}
      </div>

      {/* Details and uploader's avatar */}
      <div className="flex flex-col sm:flex-row items-start space-y-6 sm:space-y-0 sm:space-x-6">
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-2">Size: {home.size}</h2>
          <p className="text-lg mb-2">Location: {home.location}</p>
          <p className="text-lg font-bold mb-2">Price: ${home.price}</p>
          <p className="text-md mb-1">Co-ed: {home.Co_ed}</p>
          <p className="text-md mb-1">Floor: {home.floor}</p>
          <p className="text-md mb-1">Lift: {home.lift}</p>
          <p className="text-md mb-1">Washroom: {home.washroom}</p>
          <p className="text-md mb-1">Contact: {home.uploader.phoneNum}</p>
          <p className="text-md mb-1">Owner Name: {home.uploader.name}</p>


        </div>

        {/* Uploader's avatar */}
        <div className="flex-shrink-0 w-32 h-32 flex items-center justify-center">
          <img
            src={home.uploader.avatar || 'default-avatar.png'} // Use default avatar if none is provided
            alt="Uploader Avatar"
            className="w-32 h-32 object-cover rounded-full border-4 border-gray-300 shadow-lg"
          />
        </div>
      </div>

      {/* Modal for image preview */}
      {modalOpen && home.image.length > 0 && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl mx-auto">
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-2xl font-bold"
              onClick={prevImage}
            >
              &lt;
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-2xl font-bold"
              onClick={nextImage}
            >
              &gt;
            </button>
            <img
              src={home.image[currentImageIndex]}
              alt={`Home Image ${currentImageIndex + 1}`}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeDetails;
