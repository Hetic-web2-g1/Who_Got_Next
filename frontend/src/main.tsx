import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "mapbox-gl/dist/mapbox-gl.css";
import Private from "./pages/Private/private"
import PrivateHome from "./pages/Private/PrivateHome/PrivateHome"
import { AuthProvider } from "./contexts/AuthContext"

import App from "./App";
import Evenement from "./pages/evenement";
import JoinGroup from "./pages/joingroup";
import MapPage from "./pages/map";
import LandingPage from "./pages/landingPage";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";

const container = document.getElementById("root")

ReactDOM.createRoot(container).render(
<AuthProvider>
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/private" element={<Private />}>
          <Route path="/private/private-home" element={<PrivateHome />} />
        </Route>
        <Route path="evenement" element={<Evenement />} />
        <Route path="joingroup" element={<JoinGroup />} />
        <Route path="landingPage" element={<LandingPage />} />
        <Route path="map" element={<MapPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
</AuthProvider>
);
