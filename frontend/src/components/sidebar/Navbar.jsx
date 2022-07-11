import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData1,SidebarData2,SidebarData3 } from './SidebarData1';
import { UserData, FavSports } from './usersports';

import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [sportbar, setSportbar] = useState('');
  const[usersports, setUsersports]= useState("");

  const showUsersports = () => setUsersports(!usersports);
  const showSidebar = () => setSidebar(!sidebar);
  const showSportbar = () => setSportbar(!sportbar);
  
  // function showSidebaroptions(){
  //   if (fetch('http://localhost:3000/sports')){
  //     console.log('ok')
  //   }
  // }


fetch('http://127.0.0.1:8000/users/get/6dc34f15-38a3-435c-9bd8-f161204e8b2c', {
  method: "get",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
})
.then(response => response.json())
.then(data => console.log(data));

  // .then(response => response.json())
  // .then(data => console.log(data));


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
            {/* <div className={sportbar ? 'yeahboy' : 'no'} onClick={showSportbar}>
            <img src="../../../public/assets/chevron-left.svg"></img>
              <div>Precedent</div>
              <div className='sidebarTitle'>Mes sports</div>
              <span>Sports favories et niveaux</span>

              <div className='sidebarContainer'>
                {UserData.map((item, index) => {
              return (

                <li key={index} className={item.cName}>
                                    <Link to={item.path} className="sportadd">
                    <img src={item.url}></img>
                    <span>{item.title}</span>
                  </Link>
                  <div className={item.ccname}>
                    <span>{item.level}</span>
                    <img src={item.chev}></img>
                  </div>
                </li>
              );
            })}
              </div>
            </div> */}
                  {/* <div className='extrabar' onClick={showSportbar}></div> */}
            {SidebarData1.map((item, index) => {
              return (

                <li key={index} className={item.cName}>

                      
                      {/* 
                        <nav className={sportbar ? 'nav-menu active' : 'nav-menu'}>
                        <ul className='nav-menu-items'>
                          <li className={sportbar ? 'navbar-toggle margfix' : 'navbar-toggle'} onClick={showSidebar}>
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
            <div className='sidebarTitle'>Compte<></></div>
            <div className='sidebarContainer'></div>
            </ul>
                        </nav>
                      </div> */}
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
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
                    <span>{item.title}</span>
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
                    <span>{item.title}</span>
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