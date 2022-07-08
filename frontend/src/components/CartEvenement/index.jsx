import React from "react";
import "./styles/style.css";
import "../../fonts/Qualta/Qualta-Bold.ttf";
import "../../fonts/Monument/PPMonumentExtended-Black.otf";
import "../../fonts/Qualta/Qualta-Regular.ttf";
import PropTypes from 'prop-types';

export const CartEvenement = ({image, sport, title, place, date, capacity, level}) => {

    return (
        <div className="cart-container">
            <div className="heading">
                <img className="image" src={image} alt={sport} width='88' height='88'/>
                <div className="heading_details">
                    <span className="sport">{sport}</span>
                    <h4 className="title">{title}</h4>
                    <span className="place">{place}</span>
                </div>
            </div>
            <div className="details">
                <div>
                    {date.getDate()} {date.toLocaleString('default', { month: 'long' })} <br/> <span>Date</span>
                </div>
                <div>
                    {date.getHours()} {date.getMinutes()} <br/> <span>Heure</span>
                </div>
                <div>
                    {capacity} <br/> <span>Capacité</span>
                </div>
                <div>
                    {level} <br/> <span>Niveau</span>
                </div>
            </div>
            <img className="heart" src="../../../public/assets/heart.svg" alt="heart" width="19" height="19"/>
        </div>
    );
}

CartEvenement.propTypes = {
    image: PropTypes.string,
    sport: PropTypes.string,
    title: PropTypes.string,
    place: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    capacity: PropTypes.number,
    level: PropTypes.string
}

export default CartEvenement;