import React from "react";
import "./styles/style.css";
import "../../fonts/Qualta/Qualta-Bold.ttf";
import "../../fonts/Monument/PPMonumentExtended-Black.otf";
import { Link } from "react-router-dom";
import CartEvenement from "../../components/CartEvenement";

export const Evenement = () => {

    const cartsData = [
        {
            'image' : '../../../public/images/evenement/volleyball_evenement.jpg',
            'sport' : 'Volleyball',
            'title' : 'Tournois Volleyball pour Femmes',
            'place' : '20 rue Euler, 75008 Paris',
            'date' : new Date ('June 15, 14:30'),
            'capacity' : 60,
            'level': 'Expert'
        },
        {
            'image' : '../../../public/images/evenement/gym_evenement.jpg',
            'sport' : 'Gym',
            'title' : 'Initiation crossfit',
            'place' : '20 rue Euler, 75008 Paris',
            'date' : new Date ('June 12, 14:30'),
            'capacity' : 60,
            'level': 'Tous'
        },
        {
            'image' : '../../../public/images/evenement/football_evenement.jpg',
            'sport' : 'Football',
            'title' : 'Tournois 16-18 ans féminines',
            'place' : '20 rue Euler, 75008 Paris',
            'date' : new Date ('June 10, 14:30'),
            'capacity' : 60,
            'level': 'Débutant'
        },
        {
            'image' : '../../../public/images/evenement/volleyball_evenement.jpg',
            'sport' : 'Volleyball',
            'title' : 'Tournois Volleyball pour Femmes',
            'place' : '20 rue Euler, 75008 Paris',
            'date' : new Date ('June 15, 14:30'),
            'capacity' : 60,
            'level': 'Expert'
        },
        {
            'image' : '../../../public/images/evenement/gym_evenement.jpg',
            'sport' : 'Gym',
            'title' : 'Initiation crossfit',
            'place' : '20 rue Euler, 75008 Paris',
            'date' : new Date ('June 12, 14:30'),
            'capacity' : 60,
            'level': 'Tous'
        },
        {
            'image' : '../../../public/images/evenement/football_evenement.jpg',
            'sport' : 'Football',
            'title' : 'Tournois 16-18 ans féminines',
            'place' : '20 rue Euler, 75008 Paris',
            'date' : new Date ('June 10, 14:30'),
            'capacity' : 60,
            'level': 'Débutant'
        }
    ]
  return (
    <div className="evenement-container">
        <Link to="/">Home</Link>
        <div className='carts-container'>
            {cartsData.map((cart, index) => (
                <CartEvenement image={cart.image} sport={cart.sport} title={cart.title} place={cart.place} date={cart.date} capacity={cart.capacity} level={cart.level} key={index}/>
            ))}
        </div>
        <div className="link">
            <Link to="/map">
                <img src="../../../public/assets/map.svg" alt="icon map" width="16" height="16"/>
                Voir la carte
            </Link>
            <Link to="#">
                <img src="../../../public/assets/eye.svg" alt="icon eye" width="16" height="16"/>
                Voir plus
            </Link>
        </div>
        <div className="create-evenement">
            <div>
                <h2>Créez un évènements à votre échelle</h2>
                <p>Runissez des communautés autour de tournois, matchs, initiations...
                    Renforcez la cohesion, relevez le niveau</p>
                <img className="create-mobile-img" src="../../../public/images/evenement/create.png" alt="judokas" width="347" height="332"/>
                <Link to="#">Créer</Link>
            </div>
            <img className="create-desktop-img" src="../../../public/images/evenement/create.png" alt="judokas" width="540" height="470"/>
        </div>
        <br/>
    </div>
  );
};

export default Evenement;
