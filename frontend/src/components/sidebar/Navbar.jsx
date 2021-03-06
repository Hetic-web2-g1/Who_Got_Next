import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";

import { SidebarData1, SidebarData2, SidebarData3 } from "./SidebarData1";
import "./Navbar.css";
import { IconContext } from "react-icons";
import Rejoints from "./rejoints/rejoints";
import Info from "../../pages/info/info";
import Form from "../../pages/profile/Form";
import Contact from "../../pages/help/contact";
import Sports from "../mysports/index";
import { useAuth } from "./../../contexts/AuthContext";
import { func } from "prop-types";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [contentSidebar, setContentSidebar] = useState("menu");

  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const showSidebar = () => {setSidebar(!sidebar);}

  async function handleLogout() {
    setError('')

    try {
        await logout()
        navigate("/")

    } catch {
        setError("Nous n'avons pas pu vous déconnecter");
    }
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#171C4F" }}>
        <div className="">
          <div className="account" onClick={showSidebar}>
            <img
              className="user"
              src="../../../assets/user.png"
              alt="user picture"
            />
            <div className="trait-vert" />
            <div style={{cursor: "pointer"}}>Mon Compte</div>
            <div className="trait-vert" />
            <Link to="#" className="menu-bars" >
              <FaIcons.FaBars/>
            </Link>
          </div>
        </div>
        <div className={sidebar ? "nav-flou" : "none"} />
        <nav id={sidebar ? 'nav-menu-show':'nav-menu-hide' }  className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <div className="q">
                Bonjour,
                <br />
                <div className="username">
                  {currentUser && currentUser.pseudo}
                </div>
              </div>
              <div className="account">
                <img
                  className="user"
                  src="../../../assets/user.png"
                  alt="user picture"
                />
                <div className="trait-vert" />
                <div>Mon Compte</div>
                <div className="trait-vert" />
                <Link to="#" className="menu-bars" onClick={showSidebar}>
                  <AiIcons.AiOutlineClose />
                </Link>
              </div>
            </li>
            {contentSidebar === "menu" && (
              <>
                <div className="sidebarTitle">
                  Compte
                  <div className="sidebarContainer">
                    {SidebarData1.map((item, index) => {
                      return (
                        <li key={index} className={item.cName}>
                          <Link
                            to="#"
                            onClick={() => setContentSidebar(item.title)}
                          >
                            {item.icon}
                            <span className="sidebar_link-title">
                              {item.title}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </div>
                </div>
                <div className="trait" />
                <div className="sidebarTitle">
                  Rencontre et événements
                  <div className="sidebarContainer">
                    {SidebarData2.map((item, index) => {
                      return (
                        <li key={index} className={item.cName}>
                          <Link
                            to="#"
                            onClick={() => setContentSidebar(item.title)}
                          >
                            {item.icon}
                            <span>{item.title}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </div>
                </div>
                <div className="trait" />
                <div className="sidebarTitle">
                  Aides
                  <div className="sidebarContainer">
                    {SidebarData3.map((item, index) => {
                      return (
                        <li key={index} className={item.cName}>
                          <Link
                            to="#"
                            onClick={() => setContentSidebar(item.title)}
                          >
                            {item.icon}
                            <span>{item.title}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </div>
                </div>
              </>
            )}
            {contentSidebar === "Rejoints" && (
              <Rejoints setContentSidebar={setContentSidebar} />
            )}
            {contentSidebar === "Crées" && (
              <Rejoints setContentSidebar={setContentSidebar} />
            )}
            {contentSidebar === "Sports" && (
              <Sports setContentSidebar={setContentSidebar} />
            )}
            {contentSidebar === "Mentions légales" && (
              <Info setContentSidebar={setContentSidebar} />
            )}
            {contentSidebar === "Informations du compte" && (
              <Form setContentSidebar={setContentSidebar} />
            )}
            {contentSidebar === "Nous contacter" && (
              <Contact setContentSidebar={setContentSidebar} />
            )}
            <div className="trait" />
            <div className="sidebarTitle deco">
              <a className="deco" style={{cursor: "pointer"}} onClick={handleLogout}>
                Se deconnecter
              </a>
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
