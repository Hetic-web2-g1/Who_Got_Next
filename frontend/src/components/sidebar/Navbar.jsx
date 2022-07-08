import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData1,SidebarData2,SidebarData3 } from './SidebarData1';

import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#171C4F' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <div className='sidebarTitle'>Compte
            <div className='sidebarContainer'>
            {SidebarData1.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                    
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}</div></div>

            <div className='sidebarTitle'> Rencontre et événements 
            <div className='sidebarContainer'>
            {SidebarData2.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                    
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}</div></div>

            <div className='sidebarTitle'> Aides
            <div className='sidebarContainer'>
            {SidebarData3.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                    
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}</div></div>

          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;