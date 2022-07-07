import React from "react";
import "./styles/style.css";
import "../../fonts/Qualta/Fontspring-DEMO-pgf-qualta-bold.otf";
import "../../fonts/Qualta/Fontspring-DEMO-pgf-qualta-regular.otf";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export const LandingRedirectionButton = ({goto}) => {
  return (
    <div className="connectcontainer">
      <div className="connect">
          <Link to={goto} className="connectext">Se connecter</Link>
      </div>
      <div className="inscrip">
        <span>
          Vous n'avez pas encore de compte ? 
          <Link to={"signup"} href=""> Inscrivez-vous</Link>
        </span>
      </div>
    </div>
  );
}

LandingRedirectionButton.propTypes = {
    goto: PropTypes.string,
}

export default LandingRedirectionButton;
