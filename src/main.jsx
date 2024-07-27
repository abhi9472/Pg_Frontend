import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";
import Home from "./Pages/Home.jsx";
import HomeDetail from './Pages/HomeDetail.jsx';
import App from "./App.jsx";
import AllPg from './Pages/AllPg.jsx';
import "./App.css";


import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Signup from './Pages/Signup.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="/homes/:id" element={<HomeDetail />} />
      <Route path="/allpg" element={<AllPg/>} />
      <Route path="/Signup" element={<Signup/>} />

      


      {/* <Route path="/about" element ={<About/>}/> */}
      
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);