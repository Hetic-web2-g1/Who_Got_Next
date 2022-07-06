import { React, useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'
import './index.css'
import LandingRedirectionButton
 from '../../../components/landingRedirectionButton'
import {Link} from 'react-router-dom'
import Signup from '../signup'

export const Login = () => {

  const [ user, setUser ] = useState({});
  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var usrObject = jwt_decode(response.credential);
    console.log(usrObject);
    setUser(usrObject);
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "709733567706-5vqp12ru9cjqevbeetpvudn8qoube6hb.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large"}
    );

    google.accounts.id.prompt();
  }, []);

    return (
      <Signup />
      // <main>

      //   <div className='grid-container'>
      //     <div className='containerz flex'>

      //       <div className='connect-container'>
      //         <div className='img-container'>
      //           <img src="./../../../../public/assets/logo.svg" alt="logo" />
      //         </div>

      //         <div className='flex'>
      //             <h1 className='connect-title'>Se connecter</h1>
      //         </div>

      //         <div className='flex title'>
      //             <h4>Ask Who Got Next</h4>
      //         </div>

      //         <div className='flex' id='signInDiv'></div>
      //         { user &&
      //           <div>
      //             <img src={user.picture}></img>
      //             <h3>{user.name}</h3>
      //           </div>
      //         }

      //         <div className='hr-div flex'>
            
      //           <div className='line'></div>

      //           <span>Ou</span>
      //           <div className='line'></div>

      //         </div>

      //         <form className='form'>
      //           <div className='flex-field'>
      //             <label htmlFor="mail">Mail</label>
      //             <input placeholder='Entrez votre mail' type="text" />
      //           </div>

      //           <div className='flex-field margin'>
      //             <label htmlFor="password">Mot de passe</label>
      //             <div className='inputwrapper'>
      //             <input className='input' placeholder='Entrez votre mot de passe' type="password" />
      //             <img src="./../../../../public/assets/eye.svg" alt="see password" />
      //             </div>
      //           </div>
      //           <LandingRedirectionButton goto={"login"}/>
      //         </form>

      //       </div>
            
      //     </div>

      //     <div className='r-image-container'>
      //       <img src="./../../../../public/assets/right-login.png" alt="" />
      //     </div>
      //   </div>

      //   {/* <div className='basket-img'>
      //     <img draggable='false' src="./../../../../public/assets/basket.svg" alt="" />
      //   </div> */}

      // </main>
    );
  }

export default Login;
