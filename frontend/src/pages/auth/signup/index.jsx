import { React, useEffect, useState, useRef } from 'react'
import './index.css'
import jwt_decode from 'jwt-decode'
import LandingRedirectionButton
 from '../../../components/landingRedirectionButton'
import {Link} from 'react-router-dom'

export const Signup = () => {
  const [buttonTitle, setButtonTitle] = useState("S'inscrire");
  const [validation, setValidation] = useState("");
  const inputs = useRef([])
  
  // Login view
  useEffect (() => {
    if (window.location.pathname.includes('Login')) {
      setButtonTitle('Se connecter');
      document.getElementById('title').innerHTML = 'Se connecter';
      let hiddenDiv = document.getElementsByClassName('hidden');
      for (let item of hiddenDiv) {
        item.style.display = 'none';
      };
    }
  })

  const addInputs = el => {
    if(el && !inputs.current.includes(el)){
      inputs.current.push(el)
    }
  }

  const handleForm = e => {
    e.preventDefault();
    console.log(inputs);
    if ((inputs.current[1].value.length < 6)) {
      setValidation("6 characters min")
    }
  }
  
  // Continue with google option
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
      document.getElementById('signInDiv'),
      { theme: 'outline', size: 'large'}
    );

    google.accounts.id.prompt();
  }, []);

    return (
      <main>
        <div className='grid-container'>
          <div className='containerz flex'>

            <div className='connect-container'>
              <div className='img-container'>
                <img src="./../../../../public/assets/logo.svg" alt="logo" />
              </div>

              <div className='flex'>
                  <h1 id='title' className='title'>S'inscrire</h1>
              </div>

              <div className='flex title'>
                  <h4>Ask Who Got Next</h4>
              </div>

              <div className='flex' id='signInDiv'></div>
              { user &&
                <div>
                  <img src={user.picture}></img>
                  <h3>{user.name}</h3>
                </div>
              }

              <div className='hr-div flex'> 
                <div className='line'></div>
                <span>Ou</span>
                <div className='line'></div>

              </div>

              <form className='form' onSubmit={handleForm}>

                <div className='hidden flex-field'>
                    <label htmlFor="prenom">Prenom</label>
                    <input placeholder='Prenom' type="text" />
                </div>

                  <div className='flex-field margin'>
                    <label htmlFor="mail">Mail</label>
                    <input ref={addInputs} placeholder='Entrez votre mail' type="email" />
                  </div>

                  <div className='flex-field margin'>
                    <label htmlFor="password">Mot de passe</label>
                    <div className='inputwrapper'>
                    <input ref={addInputs} className='input' placeholder='Entrez votre mot de passe' type="password" />
                    <img src="./../../../../public/assets/eye.svg" alt="see password" />
                    </div>
                  </div>

                  <div className='hidden flex-field margin'>
                    <label htmlFor="age">Age</label>
                    <div className='inputwrappertwo'>
                      <input className='age' placeholder='Mois' type="date"/>
                    </div>
                  </div>

                  <div className='hidden flex-field margin'>
                    <label htmlFor='sexe'>Sexe</label>
                    <div className='inputwrapperthree'>
                    <input value='Femme' type="button"/>
                    <input value='Homme' type="button"/>
                    </div>
                  
                  </div>
                  {/* <LandingRedirectionButton goto={"login"} innerButton={buttonTitle}/> */}
                  <button>Submit</button>
                  <p>
                    {validation}
                  </p>
              </form>

            </div>
          
          </div>

          <div className='r-image-container'>
            <img src="./../../../../public/assets/right-login.png" alt="" />
          </div>
        </div>


      </main>
    );
  }

export default Signup;
