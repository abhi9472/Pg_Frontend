import React, { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "./Component/Navbar";
import "./index.css";
import "./tailwind.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode on/off
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div
      className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}
      style={{
        backgroundColor: 'var(--background-color)',
        color: 'var(--text-color)',
        backgroundImage: 'url(/path-to-your-background-image.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Navbar onToggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div className="w-full h-full">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
