import React from "react";
import { FavSports } from "../sidebar/usersports";
import '../sidebar/Navbar.css';
import { UserData } from "../sidebar/usersports";
import { Link } from 'react-router-dom';


export const Mysport = () => {

  // function sportlevel(level){
  //   var lvl = document.getElementById('leveldisplay')
  //   console.log(lvl)
  //   document.getElementById('leveldisplay').innerText = level
  // }
  // function gg(g){
  //   var l = document.getElementsByClassName('g');
  //   console.log(l);
  //   if (g == 'expert'){
  //     document.getElementById('leveldisplay').innerHTML = 'Expert';
  //   }
  // }
  
  return (
    <div className='yeahboy' >
      <div className='dhead'>
      <Link to='/landingpage' className="prec">
      <img src="../../../public/assets/chevron-left.svg"></img>
      <div>Precedent</div>
      </Link>
      <Link to='/landingpage'>
      <img src="../../../public/assets/whogotnext_logo.svg"></img></Link>
      </div>
      <div className='sidebarTitle'>Mes sports</div>
      <span className="spam">Sports favoris et niveaux</span>

      <div className='sidebarContainer margfix'>
        {UserData.map((item, index) => {
      return (

        <li key={index} className={item.cName}>
                            <Link to={item.path} className="sportadd">
            <img src={item.url}></img>
            <span className="spam">{item.title}</span>
          </Link>
          <div id="drop" className={item.ccname}>
            {/* <div id='leveldisplay' className="spam"></div> */}
            {/* <form className="dropdowncontent"> */}
            <select id={item.idname}>
              <option className="op" value='Expert' >Expert</option>
              <option className="op" value='Intermediaire'>Intermediaire</option>
              <option className="op" value='Debutant'>Debutant</option>
            </select>
            {/* </form> */}
            {/* <img src={item.chev}></img> */}
          </div>
        </li>
      );
    })}
      </div>
    </div>
  );

};

export default Mysport;
