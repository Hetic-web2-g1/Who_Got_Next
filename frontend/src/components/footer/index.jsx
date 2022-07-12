import React from "react";
import "./styles/style.css";
import "../../fonts/Qualta/Qualta-Bold.ttf";
import "../../fonts/Qualta/Qualta-Regular.ttf";
import {Link} from 'react-router-dom'
import PropTypes from "prop-types";
import CartEvenement from "../CartEvenement";

export const Footer = ({
    bgWhite
}) => {
    const content = [
        {
            'icon' : '../../../assets/footer/jouer.jpg',
            'title': 'Jouer',
            'desc' : 'Invitez d’autres camarades de sport, renseignez les details de votre partie et attendez vos coéquipiers.'
        },
        {
            'icon' : '../../../assets/footer/rejoindre.jpg',
            'title': 'Rejoindre',
            'desc' : 'Trouvez le sport, la partie et les conditions qui vous conviennent. Rencontrez de nouveaux partenaires !'
        },
        {
            'icon' : '../../../assets/footer/évènement.jpg',
            'title': 'Évènement',
            'desc' : 'Participez, reunissez des communautés autour de tournois, matchs, initiations...\n' +
                'Renforcez la cohesion, relevez le niveau'
        },
        {
            'icon' : '../../../assets/footer/handisport.jpg',
            'title': 'Handisport',
            'desc' : 'Parce que les bienfaits du sport profitent à tous,\n' +
                ' nous nous devons de proposer une activité sportive adaptée aux personnes en situation de handicape.'
        }
    ]
    return (
        <div style={bgWhite ? {background: '#F7F7FC'} : {background: 'white'}} className="footer">
            <img className="footer_logo" src="../../../assets/whogotnext_logo.svg" alt="WhoGotNext-logo" width="59.57" height="50"/>
            <div className="footer_container-content">
                {content.map((content) => (
                    <div className="footer_content">
                        <img className="footer_content-icon" src={content.icon} alt={content.title} width="35.18" height="35.01"/>
                        <span className="footer_content-title">{content.title}</span>
                        <p className="footer_content-desc">{content.desc}</p>
                    </div>
                ))}
            </div>
            <div className="footer_container-link">
                <div className="footer_link">
                    <div className="footer_link-title">L'équipe</div>
                    <Link className="footer_link-link" to="">Nous contacter</Link>
                </div>
                <div className="footer-link">
                    <div className="footer_link-title">Plus d'informations</div>
                    <Link className="footer_link-link" to="">Mentions legales</Link>
                </div>
                <div className="footer-link">
                    <div className="footer_link-title">Suivez-nous !</div>
                    <Link to=""><img src="../../../assets/instagram.svg" alt="instagram" width="14" height="14"/></Link>
                    <Link to=""><img src="../../../assets/twitter.svg" alt="twitter" width="17.23" height="14"/></Link>
                    <Link to=""><img src="../../../assets/youtube.svg" alt="youtube" width="19.93" height="14"/></Link>
                </div>
            </div>
        </div>
    );
};

CartEvenement.propTypes = {
    bgWhite: PropTypes.bool,
};

export default Footer