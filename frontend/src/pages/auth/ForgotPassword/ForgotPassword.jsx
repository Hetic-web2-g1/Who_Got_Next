import { React, useEffect, useState, useRef, createContext } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import LandingRedirectionButton
 from '../../../components/landingRedirectionButton'


export const ForgotPassword = () => {
  
  const [email, setEmail] = useState('');
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const { resetPassword } = useAuth();
  const addInputs = el => {
    if(el && !inputs.current.includes(el)){
      inputs.current.push(el)
    }
  }

  const formRef = useRef();

  async function handleForm(e) {
    e.preventDefault();

    try {
        setMessage('')
        await resetPassword(email)
        setMessage('Vérifie ta boite mail pour réinitialiser ton mot de passe :)')
    } catch {
        setError('Impossible de réinitialiser votre mot de passe')
    }
  }

    return (
      <main>
        <div id="authentification-ui">
          <div className='left-container'>

            <div className='connect-container'>
              <div className='img-container'>
                <img src="./../../../../public/assets/logo.svg" alt="logo" />
              </div>

              <div className='flex'>
                  <h1 id='title' className='title'>Réinitialiser votre mot de passe</h1>
              </div>

              <form className='form' ref={formRef} onSubmit={handleForm}>

                  <div className='flex-field margin'>
                    <label htmlFor="mail">Mail</label>
                    <input onChange={e => setEmail(e.target.value)} placeholder='Entrez votre mail' type="email" />
                  </div>

                  {/* <LandingRedirectionButton goto={"login"} innerButton={buttonTitle}/> */}
                  <div className='flex' style={{paddingTop: "15px"}}>
                    <button>Submit</button>
                  </div>
                  {error}
                  {message}
                  <div className='flex' style={{paddingTop: "15px", fontSize: "12px"}}>
                    <Link to="/login">Se connecter ?</Link>
                  </div>
              </form>

            </div>
          
          </div>

          <div className='right-container'>
            <img src="./../../../../public/assets/right-login.png" alt="" />
          </div>
        </div>
      </main>
    );
  }

export default ForgotPassword;
