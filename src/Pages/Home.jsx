// import React from "react";
import { Link } from "react-router-dom";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

export const Home = () => {
  const [suggestion, setSuggestion] = useState("");
  const [query, setQuery] = useState("");
  const [feedbackSent, setFeedbackSent] = useState("");

  const handleSuggestionChange = (e) => {
    setSuggestion(e.target.value);
  };
  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSuggestionSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/suggestion",
        {
          suggestion,
        }
      );
      console.log(response);
      setFeedbackSent("suggestion");
      setSuggestion(""); // Clear the form after submission
      setTimeout(() => setFeedbackSent(null), 2000);
      // if(response.data.statusCode===200)
      //   {
      //     alert("Suggestion Sent");

      //   }
    } catch (error) {
      console.error("Error submitting suggestion:", error);
    }
  };

  const handleQuerySubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/v1/queries", { query });
      setFeedbackSent(true);
      setQuery("");
      setTimeout(() => setFeedbackSent(false), 5000);
      // Clear the form after submission
    } catch (error) {
      console.error("Error submitting query:", error);
    }
  };

  return (
    <div className="relative">
      {/* Background Image Section */}
      <section
        id=""
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url(/homebg.jpg)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-8">Welcome to PG Finder</h1>
            <Link
              to="/allpg"
              className="bg-blue-500 px-8 py-4 rounded-lg font-bold hover:bg-blue-600"
            >
              View All PGs
            </Link>
          </div>
        </div>
      </section>

      {/* New Section */}
      <section id="features" className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-12">
            Features and How It Works
          </h2>

          <div className="flex flex-wrap justify-center gap-12">
            {/* Features Card */}
            <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-8 max-w-sm w-full transition-transform transform hover:scale-105">
              <div className="flex items-center justify-center mb-6">
                <svg
                  className="h-12 w-12 text-blue-500 dark:text-blue-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 2a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V3a1 1 0 011-1h6zm3 9h4a1 1 0 011 1v8a1 1 0 01-1 1h-4a1 1 0 01-1-1v-8a1 1 0 011-1zm-2 0H9a1 1 0 00-1 1v8a1 1 0 001 1h3a1 1 0 001-1v-8a1 1 0 00-1-1z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Features
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 text-left space-y-4">
                <li className="flex items-center space-x-3">
                  <svg
                    className="h-6 w-6 text-blue-500 dark:text-blue-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>
                    Easy comfort in finding PG according to your choice.
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="h-6 w-6 text-blue-500 dark:text-blue-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>No need to go here and there.</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="h-6 w-6 text-blue-500 dark:text-blue-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Negotiate and contact the owner from your home.</span>
                </li>
              </ul>
            </div>

            {/* Working Card */}
            <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-8 max-w-sm w-full transition-transform transform hover:scale-105">
              <div className="flex items-center justify-center mb-6">
                <svg
                  className="h-12 w-12 text-green-500 dark:text-green-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v8m4-4H8"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                How It Works
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 text-left space-y-4">
                <li className="flex items-center space-x-3">
                  <svg
                    className="h-6 w-6 text-green-500 dark:text-green-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v8m4-4H8"
                    ></path>
                  </svg>
                  <span>Choose a PG/flat that suits your needs.</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="h-6 w-6 text-green-500 dark:text-green-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v8m4-4H8"
                    ></path>
                  </svg>
                  <span>Contact the owner On provided Details.</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="h-6 w-6 text-green-500 dark:text-green-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v8m4-4H8"
                    ></path>
                  </svg>
                  <span>Get book Your Pg/Flat by Making Payments.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Another Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-12">
            About Us
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-16">
            We are a dedicated team of developers committed to making student
            life easier by simplifying the process of finding homes. Our
            platform allows students to search for and book accommodations
            online, tailored to their needs, eliminating the hassle of moving
            from place to place.
          </p>

          <div className="flex flex-wrap justify-center gap-12">
            {/* Who We Are */}
            <div className="bg-gradient-to-r from-blue-500 to-teal-400 p-8 rounded-lg shadow-lg max-w-md w-full text-white">
              <div className="flex items-center justify-center mb-6">
                <svg
                  className="h-12 w-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zM12 4v4m0 8v4M21 12H3"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Who We Are</h3>
              <ul className="list-disc list-inside text-left space-y-4">
                <li className="flex items-center space-x-2">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>
                    Passionate team of developers dedicated to enhancing student
                    life.
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>
                    Streamlined platform for finding and booking homes online.
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Eliminates the need for extensive house-hunting.</span>
                </li>
              </ul>
            </div>

            {/* Our Mission */}
            <div className="bg-gradient-to-r from-green-400 to-teal-500 p-8 rounded-lg shadow-lg max-w-md w-full text-white">
              <div className="flex items-center justify-center mb-6">
                <svg
                  className="h-12 w-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <ul className="list-disc list-inside text-left space-y-4">
                <li className="flex items-center space-x-2">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>
                    Bridge the gap between students and available
                    accommodations.
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>
                    Offer a user-friendly platform for a hassle-free search and
                    booking process.
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>
                    Make finding and booking homes as easy and stress-free as
                    possible.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Suggestions Section */}
      <section id="suggestions" className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-12">
            We Value Your Feedback
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-16">
            Your suggestions and queries help us improve. Let us know how we can make your experience better.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-12">
            {/* Suggestions Form */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                Share Your Suggestions
              </h3>
              <form onSubmit={handleSuggestionSubmit} className="space-y-4">
                <div>
                  <label htmlFor="suggestion" className="block text-gray-700 dark:text-gray-300 mb-2">
                    Your Suggestion
                  </label>
                  <textarea
                    id="suggestion"
                    name="suggestion"
                    rows="4"
                    value={suggestion}
                    onChange={handleSuggestionChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    placeholder="Enter your suggestion here..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Submit Suggestion
                </button>
              </form>
            </div>
      


            {/* Queries Form */}
          </div>
        </div>
           
      </section>
      {feedbackSent && (
        <div
        className={`fixed inset-0 flex items-center justify-center p-4 ${
          feedbackSent === "suggestion"
              ? "bg-blue-500"
              : "bg-green-500"
          }rounded-lg shadow-lg text-orange`}
        >
          {feedbackSent === "suggestion"
            ? "Thank you for your suggestion!"
            : "Thank you for your query!"}
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="fixed bottom-4 right-4 z-50">
        {/* <a href="#features" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Top</a> */}
        <a
          href="#features"
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 mt-2 block"
        >
          Features
        </a>
        <a
          href="#about"
          className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 mt-2 block"
        >
          About Us
        </a>
      </div>
    </div>
    
  );
};

export default Home;
