import React from "react";
import { FavSports } from "../sidebar/usersports";
import '../sidebar/Navbar.css';
import { Link } from "react-router-dom";

export const Favsport = () => {


  return (
    <div>
                <div className='ed'>
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
