import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "mapbox-gl/dist/mapbox-gl.css";
import { auth } from "./firebase-config";

import Private from "./pages/Private/private";
import PrivateHome from "./pages/Private/PrivateHome/PrivateHome";
import { AuthProvider } from "./contexts/AuthContext";
import ForgotPassword from "./pages/auth/ForgotPassword/ForgotPassword";
import UpdateProfile from "./pages/auth/UpdateProfile/UpdateProfile.jsx";

import App from "./App";
import Evenement from "./pages/evenement";

import MapPage from "./pages/map";
import LandingPage from "./pages/landingPage";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import Homepage from "./pages/homepage";
import Handisport from './pages/handisport'
import JoinPage from './pages/joinpage'

const container = document.getElementById("root");

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="/private" element={<Private />}>
            <Route path="/private/private-home" element={<PrivateHome />} />
            <Route path="/private/update-profile" element={<UpdateProfile />} />
          </Route>
          <Route path="home" element={<Homepage />} />
          <Route path="evenement" element={<Evenement />} />
          <Route path="join" element={<JoinPage />} />
          <Route path="landingPage" element={<LandingPage />} />
          <Route path="handisport" element={<Handisport />} />
          <Route path="map" element={<MapPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
