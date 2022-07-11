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
        <div className={sidebar ? 'nav-flou' : ''} >
    </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>

          <ul className='nav-menu-items'>
            <li className='navbar-toggle' onClick={showSidebar}>
              <div className='q'>Bonjour,<br></br><div className='username'>Sammy</div></div>
              <div className='account'>
              <img className='user' src='assets\user.png'></img>
              <div className='trait-vert'></div>
              <div>Mon Compte</div>
              <div className='trait-vert'></div>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
              </div>              
            </li>
            <div className='sidebarTitle'>Compte
            <div className='sidebarContainer'>

            {SidebarData1.map((item, index) => {
              return (
                <li key={index} className={item.cName}>

                  <Link to={item.path}>
                    {item.icon}
                    <span className='spam' >{item.title}</span>
                  </Link>
                </li>
              );
            })}</div></div>
<div className='trait' ></div>
            <div className='sidebarTitle'> Rencontre et événements 
            <div className='sidebarContainer'>
            {SidebarData2.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                    
                  <Link to={item.path}>
                    {item.icon}
                    <span className='spam' >{item.title}</span>
                  </Link>
                </li>
              );
            })}</div></div>
<div className='trait' ></div>
            <div className='sidebarTitle'> Aides
            <div className='sidebarContainer'>
            {SidebarData3.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                    
                  <Link to={item.path}>
                    {item.icon}
                    <span className='spam' >{item.title}</span>
                  </Link>
                </li>
              );
            })}</div></div>
        <div className='trait' ></div>
        <div className='sidebarTitle deco'>
        <a className='deco' href="">Se deconnecter</a>
        </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;