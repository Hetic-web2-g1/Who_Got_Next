import React from "react";
import { FavSports } from "../sidebar/usersports";
import '../sidebar/Navbar.css';
import { Link } from "react-router-dom";
import { useState } from "react";

export const Favsport = ({setContentSidebar2}) => {

  // const [contentSidebar3, setContentSidebar3] = useState('sous-sous-menu');

  return (
    <div>
                <div className='ed'>
                <Link className="sidebar_back-link" to="#" onClick={() => setContentSidebar2('sous-menu')}>
                <img src="../../../public/assets/chevron-left.svg" alt="left arrow" width="18" height="18"/>
                Précédent
            </Link>
                <div className='favsport'>Choisissez vos sports favoris</div>
                <div>Indiquez les sports que vous souhaitez pratiquer souvent</div>
                </div>
                <div className='griddy'>
                {FavSports.map((item, index) => {
              return (
              <div className='box'>
                <img height={"50px"} src={item.url}></img>
                <span className="spam">{item.title}</span>
              </div>
              );
            })}
                </div>
                <div className='box2'>
                <Link to='/landingpage' className="spam">Annuler</Link>
                <div className="enregistre">
                <Link to='/landingpage' >Enregistrer</Link>
                </div>
                </div>
              </div>
  );
};

export default Favsport;
