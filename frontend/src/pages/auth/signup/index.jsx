import { React, useEffect, useState, useRef } from 'react'
import './index.css'
import jwt_decode from 'jwt-decode'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth'
import {auth} from '../../../firebase-config'
import LandingRedirectionButton
 from '../../../components/landingRedirectionButton'
import {Link} from 'react-router-dom'
import { async } from '@firebase/util'

export const Signup = () => {
  const [buttonTitle, setButtonTitle] = useState("S'inscrire");
  const [validation, setValidation] = useState("");
  const [currentUser, setCurrentUser] = useState();
  const [loadingData, setLoadingData] = useState(true);
  const inputs = useRef([])

  const signUp = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd);
  
  const [email, setEmail] = useState('');
  const [prenom, setPrenom] = useState('');
  const [sexe, setSexe] = useState('');
  const [age, setAge] = useState("")

  const details = {
    'prenom' : prenom,
    'email' : email,
    'sexe' : sexe,
    'age' : age,
  }
  console.log(details)

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

  const formRef = useRef();

  // Firebase auth for signup
  const handleForm = async (e) => {
    e.preventDefault();

    if ((inputs.current[1].value.length < 6)) {
      setValidation("6 characters min")
      return;
    }

    try {
      const cred = await signUp(
        inputs.current[0].value,
        inputs.current[1].value
      )
      formRef.current.reset();
      setValidation("");
      console.log(cred);

    } catch (err) {
      if (err.code === "auth/invalid-email") {
        setValidation("Email format invalid");
      }
      if (err.code === "auth/email-already-in-use") {
        setValidation("Email already used");
      }
      console.log(err);
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

              <form className='form' ref={formRef} onSubmit={handleForm}>

                <div className='hidden flex-field'>
                    <label htmlFor="prenom">Prenom</label>
                    <input onChange={e => setPrenom(e.target.value)} placeholder='Prenom' type="text" />
                </div>

                  <div className='flex-field margin'>
                    <label htmlFor="mail">Mail</label>
                    <input onChange={e => setEmail(e.target.value)} ref={addInputs} placeholder='Entrez votre mail' type="email" />
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
                      <input onChange={e => setAge(e.target.value)} className='age' placeholder='Mois' type="date"/>
                    </div>
                  </div>

                  <div className='hidden flex-field margin'>
                    <label htmlFor='sexe'>Sexe</label>
                    <div className='inputwrapperthree'>
                    <input onClick={e => setSexe(e.target.value)} value='Femme' type="button"/>
                    <input onClick={e => setSexe(e.target.value)} value='Homme' type="button"/>
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
