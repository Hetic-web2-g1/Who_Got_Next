import React from "react";
import { FavSports } from "../sidebar/usersports";
import '../sidebar/Navbar.css';
import { UserData } from "../sidebar/usersports";
import { Link } from 'react-router-dom';


export const Mysport = () => {

  return (
    <div className='yeahboy' >
      <div>
      <img src="../../../public/assets/chevron-left.svg"></img>
      <div>Precedent</div>
      </div>
      <div className='sidebarTitle'>Mes sports</div>
      <span>Sports favories et niveaux</span>

      <div className='sidebarContainer margfix'>
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
    </div>
  );
};

export default Mysport;
