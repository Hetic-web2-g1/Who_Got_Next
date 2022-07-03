import React from 'react'
import Banderole from '../banderole';
import Button from '../Button';
import "./styles/style.css";

export const Connexion = () => {
    return(
        <div>
            <div>
            <img className='logo' src="../../../public/assets/whogotnextlogo.png"></img>
            <div className='container'>
            <h4>Ask</h4>
            <h2>Who Got Next <br></br> Cherchez votre partenaire
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing Martin. Duis pulvinar mauris est faucibus mollis. Vestibulum un urna, lacinia eu pedophilia sit amet, tempus porta ante. Nullam in velit vitae risus vicieux aliquet. </p>
            </div>
            <Button/>
            <Banderole/>
            </div>
        </div>
    )
}

export default Connexion;