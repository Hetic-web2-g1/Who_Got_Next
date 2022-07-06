import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "mapbox-gl/dist/mapbox-gl.css";

import App from "./App";
import Evenement from "./pages/evenement";
import JoinGroup from "./pages/joingroup";
import MapPage from "./pages/map";
<<<<<<< HEAD
import Login from "./pages/auth/login";
=======
import LandingPage from "./pages/landingPage";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
>>>>>>> main

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="evenement" element={<Evenement />} />
      <Route path="joingroup" element={<JoinGroup />} />
      <Route path="map" element={<MapPage />} />
      <Route path="login" element={<Login />} />
    </Routes>
=======
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="evenement" element={<Evenement />} />
        <Route path="joingroup" element={<JoinGroup />} />
        <Route path="landingPage" element={<LandingPage />} />
        <Route path="map" element={<MapPage />} />
      </Routes>
>>>>>>> main
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
