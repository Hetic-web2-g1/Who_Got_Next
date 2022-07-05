import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'

export const Login = () => {
    return (
      <main>

        <div className='grid-container'>
          <div className='container flex'>

            <div className='connect-container'>
              <div className='img-container'>
                <img src="./../../../../public/assets/logo.svg" alt="logo" />
              </div>

              <div className='flex'>
                  <h1 className='connect-title'>Se connecter</h1>
              </div>

              <div className='flex title'>
                  <h4>Ask Who Got Next</h4>
              </div>

              <div className='hr-div flex'>
            
                <div className='line'></div>

                <span>Ou</span>
                <div className='line'></div>

              </div>

              <form className='form'>
                <div className='flex-field'>
                  <label htmlFor="mail">Mail</label>
                  <input placeholder='Entrez votre mail' type="text" />
                </div>

                <div className='flex-field margin'>
                  <label htmlFor="password">Mot de passe</label>
                  <div className='inputwrapper'>
                  <input className='input' placeholder='Entrez votre mot de passe' type="password" />
                  <img src="./../../../../public/assets/eye.svg" alt="see password" />
                  </div>
                </div>

              </form>

            </div>
          </div>

          <div className='r-image-container'>
            <img src="./../../../../public/assets/right-login.png" alt="" />
          </div>
        </div>

        {/* <div className='basket-img'>
          <img draggable='false' src="./../../../../public/assets/basket.svg" alt="" />
        </div> */}

      </main>
    );
  }

export default Login;