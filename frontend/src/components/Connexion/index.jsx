import React from 'react'
import Banderole from '../banderole';
import Button from '../Button';
import "./styles/style.css";

export const Connexion = () => {
    return(
        <div>
            <div className='truc'>
                <img className='logo' src="../../../public/assets/whogotnextlogo.png"></img>
                <div className='wrap'>
                    <div className='container'>
                    <h4 className='asktext'>Ask</h4>
                    <h2 className='titletext'>Who Got Next <br></br> Cherchez votre partenaire
                    </h2>
                    <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing Morbin' Martin Time : Rise of Gru 4 Endgame. Duis pulvinar mauris est faucibus mollis. Vestibulum un urna, lacinia eu pedophilia sit amet, tempus porta ante. Nullam in velit vitae risus vicieux aliquet. </p>
                    <Button/>
                </div>
            </div>
                <Banderole/>
            </div>
        </div>
    )
}

export default Connexion;