import React from "react";
import '../sidebar/Navbar.css';
import { UserData } from "../sidebar/usersports";
import { Link } from 'react-router-dom';
import Favsport from "../favsport/index";
import { useState } from "react";


export const Sports = ({setContentSidebar}) => {


  const [contentSidebar2, setContentSidebar2] = useState('sous-menu');

  return (
    <div className='yeahboy' >
          { contentSidebar2 === 'sous-menu' &&
    <>
      <div className='dhead'>
                  <Link className="sidebar_back-link" to="#" onClick={() => setContentSidebar('menu')}>
                <img src="../../../assets/chevron-left.svg" alt="left arrow" width="18" height="18"/>
                Précédent
            </Link>
      </div>
      <div className='sidebarTitle'>Mes sports</div>
      <span className="spam">Sports favoris et niveaux</span>

      <div className='sidebarContainer margfix'>
        {UserData.map((item, index) => {
      return (

        <li key={index} className={item.cName}>
          {/* <div onClick={() => setContentSidebar2(item.tit)} className="sportadd"> */}

          <div className="sportadd">
            <img src={item.url}></img>
            <span className="spam">{item.title}</span>
          </div>
          <div id="drop" className={item.ccname}>

            <select id={item.idname}>
              <option className="op" value='Expert' >Expert</option>
              <option className="op" value='Intermediaire'>Intermediaire</option>
              <option className="op" value='Debutant'>Debutant</option>
            </select>

          </div>
        </li>
      );
    })}

      </div>
      </>
  } 

  { contentSidebar2 === 'Favsport' &&
    <Favsport setContentSidebar2={setContentSidebar2}/>
}
    </div>
  );

};

export default Sports;
