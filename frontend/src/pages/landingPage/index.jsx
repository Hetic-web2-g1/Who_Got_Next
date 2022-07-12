import React from 'react'
import Banderole from '../../components/banderole';
import LandingRedirectionButton from '../../components/landingRedirectionButton';
import "../../fonts/Monument/PPMonumentExtended-Black.otf";
import "../../fonts/Monument/PPMonumentExtended-Regular.otf";
import "./styles/style.css";

export const LandingPage = () => {
    return(
        <div>
            <div className='landingWrapper'>
                <img className='logo' src="../../../assets/whogotnext_logo.svg"></img>
                <div>
                    <div className='container'>
                        <h4 className='asktext'>Ask</h4>
                        <h2 className='titletext'>Who Got Next<br/>Cherchez votre partenaire</h2>
                        <p className='lorem'>Nouveau en ville et tu ne sais pas où jouer ? Ne te demande plus. Demande Who Got Next ? <br></br>
Notre carte interactive est remplie avec des spots vérifiés par nos utilisateurs et notre communauté pour trouver où et avec qui pratiquer votre sport favori.<br></br>
Basketball, Course, Football, Handball, Volleyball, Handisport...<br></br> Rejoignez notre communauté, trouvez votre équipe et partagez vos terrains préférés ! </p>
                    </div>
                    <LandingRedirectionButton goto={"login"} innerButton={"Se connecter"}/>
                </div>
                <Banderole/>
            </div>
        </div>
    )
}

export default LandingPage;