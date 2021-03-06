import React from "react";
import "./styles/style.css";
import "../../fonts/Qualta/Qualta-Bold.ttf";
import "../../fonts/Monument/PPMonumentExtended-Black.otf";
import "../../fonts/Qualta/Qualta-Regular.ttf";
import PropTypes from "prop-types";

export const CartEvenement = ({
  sport,
  title,
  place,
  date,
  capacity,
  level,
}) => {
  const formated_date = new Date(date);
  return (
    <div className="cart-container">
      <div className="heading">
        <img
          className="image"
          src={`../../../assets/${sport}.svg`}
          alt={sport}
          width="88"
          height="88"
        /> 
        <div className="heading_details">
          <span className="sport">{sport}</span>
          {title ? <h4 className="evenement_title">{title}</h4> : null}
          <span className="place">{place}</span>
        </div>
      </div>
      {date && capacity && level ? (
        <div className="details">
          <div>
            <span>Date:</span><br/> 
            {formated_date?.getDate()} {formated_date?.toLocaleString("default", { month: "long" })}{" "}
          </div>
          <div script={"font-variant-numeric: tabular-nums;"}>
            <span>Heure:</span><br/>
            {formated_date?.getHours()} : {formated_date?.getMinutes()}
          </div>
          <div>
            <span>Capacité:</span><br/>
            {capacity}
          </div>
          <div>
            <span>Niveau:</span><br/>
            {level}
          </div>
        </div>
      ) : null}
      <img
        className="heart"
        src="../../../assets/heart.svg"
        alt="heart"
        width="19"
        height="19"
      />
    </div>
  );
};

CartEvenement.propTypes = {
  sport: PropTypes.string,
  title: PropTypes.string,
  place: PropTypes.string,
  date: PropTypes.string,
  capacity: PropTypes.string,
  level: PropTypes.string,
};

export default CartEvenement;
