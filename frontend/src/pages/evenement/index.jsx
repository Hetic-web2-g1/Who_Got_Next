import React, { useState, useEffect } from "react";
import "./styles/style.css";
import "../../fonts/Qualta/Qualta-Bold.ttf";
import "../../fonts/Monument/PPMonumentExtended-Black.otf";
import { Link } from "react-router-dom";
import CartEvenement from "../../components/CartEvenement";
import { useMemo } from "react";
import Footer from "../../components/footer";

export const Evenement = () => {

  const bgWhite = false;
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8000/events`);
      const newData = await response.json();
      setCardData(newData);
    };
    fetchData();
  }, []);

  return (
    <div className="evenement-container">
      <Link to="/homepage">Home</Link>
      <div className="carts-container">
        {cardData
          ? cardData.map((cart, index) => (
              <CartEvenement
                image={cart?.data?.data.image}
                sport={cart?.data?.data.sport}
                title={cart.name}
                place={cart?.data?.data.place}
                date={cart?.data?.data.date}
                capacity={cart?.data?.data.capacity}
                level={cart?.data?.data.level}
                key={index}
              />
            ))
          : null}
      </div>
      <div className="link">
        <Link to="/map">
          <img
            src="../../../public/assets/map.svg"
            alt="icon map"
            width="16"
            height="16"
          />
          Voir la carte
        </Link>
        <Link to="#">
          <img
            src="../../../public/assets/eye.svg"
            alt="icon eye"
            width="16"
            height="16"
          />
          Voir plus
        </Link>
      </div>
      <div className="create-evenement">
        <div>
          <h2>Créez un évènements à votre échelle</h2>
          <p>
            Runissez des communautés autour de tournois, matchs, initiations...
            Renforcez la cohesion, relevez le niveau
          </p>
          <img
            className="create-mobile-img"
            src="../../../public/images/evenement/create.png"
            alt="judokas"
            width="347"
            height="332"
          />
          <Link to="#">Créer</Link>
        </div>
        <img
          className="create-desktop-img"
          src="../../../public/images/evenement/create.png"
          alt="judokas"
          width="540"
          height="470"
        />
      </div>
      <Footer bgWhite={bgWhite}/>
    </div>
  );
};

export default Evenement;
