import React, { useState } from "react";
import axios from "axios";

export function AddHome() {
//   const [home, setHome] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [floor, setFloor] = useState("");
  const [location, setLocation] = useState("");
  const [Co_ed, setCo_ed] = useState("");
  const [washroom, setWashroom] = useState("");
  const [lift, setLift] = useState("");
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false); // New state for loading


  const handleImageChange = (e) => {
    setImage([...e.target.files]);
  };

  const submit = async () => {
    if(loading) return;
    try {
        setLoading(true);
      const formdata = new FormData();
    //   formdata.append("home", home);
      formdata.append("size", size);
      formdata.append("price", price);
      formdata.append("floor", floor);
      formdata.append("location", location);
      formdata.append("Co_ed", Co_ed);
      formdata.append("washroom", washroom);
      formdata.append("lift", lift);

      image.forEach((element) => {
        formdata.append("image", element);
      });

      const response = await axios.post(
        `http://localhost:8000/api/v1/users/addhome`,
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      console.log(response);

      if (response.status === 200) {
        alert("Your home has been added successfully!");
        window.location.href = "/allpg";
      }
    } catch (error) {
      console.error("Error in uploading home:", error);
    }
    finally {
        setLoading(false); // Set loading to false
      }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100 bg-gradient-to-r from-blue-300 via-red-400 to-green-300 pt-16 md:pt-32">

    <div className="max-w-xl mx-auto px-4 py-6 pt-18 bg-white shadow-md rounded-lg dark:bg-gray-600">
      <h1 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Add Home</h1>
      <form className="space-y-6 ">
        <div className="space-y-2">
          <label className="block text-gray-700 dark:text-gray-200">Size (e.g., 2bhk, 2 bed sharing)</label>
          <input
            type="text"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-gray-700 dark:text-gray-200">Price</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-gray-700 dark:text-gray-200">Floor (e.g., 1, 2, 3)</label>


            <select
            value={floor}
            onChange={(e) => setFloor(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
            required
            >
            <option value="">Select Floor</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-gray-700 dark:text-gray-200">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-gray-700 dark:text-gray-200">Co-ed (Yes/No)</label>
          <select
            value={Co_ed}
            onChange={(e) => setCo_ed(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
            required
            >
            <option value="">Select Co_ed Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>

        </select>
        </div>

        <div className="space-y-2">
          <label className="block text-gray-700 dark:text-gray-200">Washrooms</label>
            <select
            value={washroom}
            onChange={(e) => setWashroom(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
            required
            >
             <option value="">Select Wahroom Type</option>
            <option value="attached">attached</option>
            <option value="not-attached">not-attached</option>
            </select>
        </div>

        <div className="space-y-2">
          <label className="block text-gray-700 dark:text-gray-200">Lift</label>
          <select
            value={lift}
            onChange={(e) => setLift(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
            required
            >
                <option value="Select Lift Option"> Choose Lift Type</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>




            </select>

        </div>

        <div className="space-y-2">
          <label className="block text-gray-700 dark:text-gray-200">Upload Images</label>
          <input
            type="file"
            multiple
            onChange={handleImageChange}
            className="p-2 border border-gray-300 rounded-md w-full dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
            required
          />
        </div>

        <button
            type="button"
            onClick={submit}
            className={`w-full py-2 px-4 rounded-md text-white transition-colors duration-300 ${
              loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
            }`}
            disabled={loading} // Disable button when loading
          >
            {loading ? "Adding Home..." : "Add Home"}
          </button>
      </form>
    </div>
    </div>
  );
}


export default AddHome;
