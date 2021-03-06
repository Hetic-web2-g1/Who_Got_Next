import React, { useState, useEffect } from "react";
import "./styles/style.css";
import "../../fonts/Qualta/Qualta-Bold.ttf";
import "../../fonts/Monument/PPMonumentExtended-Black.otf";
import { Link } from "react-router-dom";
import CartEvenement from "../../components/CartEvenement";
import Footer from "../../components/footer";
import TopNavigation from '@components/TopNavigation/TopNavigation';

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
    <>
      <header>
        <TopNavigation />
      </header>
      <div className="evenement-container">
        <div className="carts-container">
          {cardData
            ? cardData.map((cart, index) => (
                <CartEvenement
                  sport={cart?.sport}
                  title={cart?.description}
                  place={cart?.place}
                  date={cart?.date_start}
                  capacity={cart?.capacite}
                  level={cart?.niveau}
                  key={index}
                />
              ))
            : null}
        </div>
        <div className="link">
          <Link to="/home">
            <img
              src="../../../assets/map.svg"
              alt="icon map"
              width="16"
              height="16"
            />
            Voir la carte
          </Link>
          {/* <Link to="#">
            <img
              src="../../../assets/eye.svg"
              alt="icon eye"
              width="16"
              height="16"
            />
            Voir plus
          </Link> */}
        </div>
        <div className="create-evenement">
          <div>
            <h2>Créez un évènements à votre échelle</h2>
            <p>
            Réunissez des communautés autour de tournois, matchs, initiations...
Renforcez la cohésion, relevez le niveau et rentrez dans la compétition !

Créez votre événement et définissez vos critères, votre terrain et les participants
recherchés ! 

Que vous soyez en situation de handicap, que vous ayez un niveau débutant,
que vous n’ayez pas de coéquipier ou simplement ne savez pas où pratiquer, 
Who Got Next est là pour vous.
            </p>
            <img
              className="create-mobile-img"
              src="../../../assets/evenement/create.png"
              alt="judokas"
              width="347"
              height="332"
            />
            <Link to="#">Créer</Link>
          </div>
          <img
            className="create-desktop-img"
            src="../../../assets/evenement/create.png"
            alt="judokas"
            width="540"
            height="470"
          />
        </div>
        <Footer bgWhite={bgWhite} />
      </div>
    </>
  );
};

export default Evenement;
