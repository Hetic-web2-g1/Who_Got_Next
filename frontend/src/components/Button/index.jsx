import React from 'react';
import "./styles/style.css";


export const Button = () => {
    return(
        <div className='connectcontainer'>
            <div className='connect'>
                <a className='connectext' href=''>Se connecter</a>
            </div>
            <div className='inscrip'>
                    <span>Vous n'avez pas encore de compte ? <a href=''> Inscrivez-vous</a></span>
            </div>
        </div>
        )
}

export default Button;