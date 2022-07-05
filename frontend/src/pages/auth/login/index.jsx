import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'

export const Login = () => {
    return (
      <main>
        <div className='container flex'>

          <div className='connect-container'>

            <div className='flex'>
                <h1>Se connecter</h1>
            </div>

            <div className='flex'>
                <h4>Ask Who Got Next</h4>
            </div>

            <div className='hr-div flex'>
          
              <div className='line'></div>

              <span>Ou</span>
              <div className='line'></div>

            </div>

            <div className='form'>
              <div className='flex-field'>
                <label htmlFor="mail">Mail</label>
                <input placeholder='Entrez votre mail' type="text" />
              </div>

              <div className='flex-field margin'>
                <label htmlFor="password">Mot de passe</label>
                <input className='input' placeholder='Entre votre mot de passe' type="password" />
                <img src="./../../../../public/assets/eye.svg" alt="tamere" />
              </div>
            </div>

          </div>

        </div>
      </main>
    );
  }

export default Login;