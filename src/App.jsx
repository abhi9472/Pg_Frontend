import React from 'react';
import { Outlet } from "react-router-dom";
import {Navbar} from "./Component/Navbar"
import "./App.css";

import "./index.css";
import "./tailwind.css";

function App() {
  

  return (
    <>
    <Navbar/>
    <Outlet />
    </>
  )
}

export default App
