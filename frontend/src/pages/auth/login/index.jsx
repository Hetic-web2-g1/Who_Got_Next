import { React, useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'
import Signup from '../signup'

export const Login = () => {

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
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large"}
    );

    google.accounts.id.prompt();
  }, []);

    return (
      <Signup />
    );
  }

export default Login;