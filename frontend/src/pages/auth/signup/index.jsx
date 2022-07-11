import { React, useEffect, useState, useRef, createContext } from 'react'
import './index.css'
import jwt_decode from 'jwt-decode'
import { DateTime } from "luxon";
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import LandingRedirectionButton
 from '../../../components/landingRedirectionButton'


export const Signup = () => {
  const userContext = createContext();
  const [passwordShown, setPasswordShown] = useState(false);
  const [buttonTitle, setButtonTitle] = useState("S'inscrire");
  const [isLogin, setIsLogin] = useState(true);
  const [validation, setValidation] = useState("");
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const { signUpBack } = useAuth();
  const { login } = useAuth();
  const { loginBack } = useAuth();
  
  const [email, setEmail] = useState('');
  const [pseudo, setPseudo] = useState('');
  const [sexe, setSexe] = useState('');
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  
  const details = {
    'prenom' : pseudo,
    'email' : email,
    'sexe' : sexe,
    'age' : age,
  }

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  // Login view
  useEffect (() => {
    if (window.location.pathname.includes('login')) {
      setIsLogin(false);
      setButtonTitle('Se connecter');
      document.getElementById('title').innerHTML = 'Se connecter';
      let hiddenDiv = document.getElementsByClassName('hidden');
      for (let item of hiddenDiv) {
        item.style.display = 'none';
      };
    }
  })

  const formRef = useRef();

  const handleForm = async (e) => {
    e.preventDefault();
    
    // Validation signup
    if (window.location.pathname.includes('signup')) {

      // Password validation
      if ((password < 6)) {
        setValidation("Votre mot de passe doit contenir au moins 6 caractères")
        return;
      }

      // Pseudo validation
      if (details.prenom === '') {
        setValidation("Veuillez renseignez votre pseudonyme");
        return;
      }

      // Birth validator
      if (DateTime.fromFormat(details.age, "yyyy-MM-dd").isValid === false) {
        setValidation("Mauvais format pour votre date de naissance");
        return;
      }
      // SeX validator
      if (details.sexe === '') {
        setValidation("Veuillez renseignez votre sexe");
        return;
      }

      try {
        await signUp(
          email,
          password,
        )
        await signUpBack(
          email,
          pseudo,
          age,
          sexe
        )
        formRef.current.reset();
        setValidation("");
        navigate("/private/private-home")
      } catch (err) {
        if (err.code === "auth/email-already-in-use") {
          setValidation("Email already used");
        }
        if (err.code === "auth/invalid-email") {
          setValidation("Email format invalid");
        }
      }
    }

    if (window.location.pathname.includes('login')) {
      try {
        await login(
          email,
          password
        )
        await loginBack(
          email,
          loginBack
        )
        formRef.current.reset();
        setValidation("");
        navigate("/private/private-home")

      } catch {
        setValidation("Impossible de se connecter, veuillez vérifier vos informations.")
      }
    }
  }
  
  // Continue with google option
  const [ user, setUser ] = useState({});
  function handleCallbackResponse(response) {
    var usrObject = jwt_decode(response.credential);
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
        <div id="authentification-ui">
          <div className='left-container'>
            <div className='connect-container'>
              <div className='img-container'>
                <img src="./../../../../public/assets/whogotnext_logo.svg" alt="logo" />
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
                      <label htmlFor="prenom">Pseudo</label>
                      <input onChange={e => setPseudo(e.target.value)} placeholder='Pseudo' />
                  </div>

                  <div className='flex-field margin'>
                    <label htmlFor="mail">Mail</label>
                    <input onChange={e => setEmail(e.target.value)} placeholder='Entrez votre mail' type="email" />
                  </div>

                  <div className='flex-field password-field margin'>
                    <label htmlFor="password">Mot de passe</label>
                    <div className='inputwrapper'>
                    <input onChange={e => setPassword(e.target.value)} className='input' placeholder='Entrez votre mot de passe' type={passwordShown ? "text" : "password"} />
                    <img onClick={togglePassword} src="./../../../../public/assets/eye.svg" alt="see password" style={{cursor: "pointer"}} />
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
                  <div className='flex' style={{paddingTop: "30px"}}>
                    <button>Submit</button>
                  </div>
                  <p>
                    {validation}
                  </p>
                  <div className='flex' style={{paddingTop: "15px"}}>
                    <Link hidden={isLogin} to="/forgot-password">Vous avez oublié votre mot de passe ?</Link>
                    <Link hidden={!isLogin} to="/login">Déjà un compte ?</Link>
                  </div>
                  <div hidden={isLogin} className='flex' style={{paddingTop: "15px"}}>
                    <Link hidden={isLogin} to="/signup">Vous n'avez pas de compte ?</Link>
                  </div>
              </form>

            </div>
          
          </div>
          <div className='right-container'>
            <img src="./../../../../public/assets/right-login.png" alt="" />
          </div>
        </div>
    );
  }

export default Signup;