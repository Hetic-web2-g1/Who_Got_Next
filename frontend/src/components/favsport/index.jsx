import React from "react";
import { FavSports } from "../sidebar/usersports";
import '../sidebar/Navbar.css';




export const Favsport = () => {

  


  return (
    <div>
                <div className='ed'>
                <div className='favsport'>Choisissez vos sports favoris</div>
                <div>Indiquez les sports que vous souhaitez pratiquer souvent</div>
                </div>
                <div className='grid'>
                {FavSports.map((item, index) => {
              return (
              <div className='box'>
                <img height={"50px"} src={item.url}></img>
                <span>{item.title}</span>
              </div>
              );
            })}
                </div>
                <div className='box2'>
                <span>Annuler</span>
                <div>Enregistrer</div>
                </div>
              </div>
  );
};

export default Favsport;
