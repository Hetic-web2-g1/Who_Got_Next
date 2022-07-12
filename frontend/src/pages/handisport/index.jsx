import React, { useState, useEffect } from "react";
import "./styles/style.css";
import "../../fonts/Qualta/Qualta-Bold.ttf";
import "../../fonts/Monument/PPMonumentExtended-Black.otf";
import { Link } from "react-router-dom";
import CartEvenement from "@components/CartEvenement";
import Footer from "@components/footer";
import TopNavigation from '@components/TopNavigation/TopNavigation';

export const Handisport = () => {

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
            <header >
                <TopNavigation />
            </header>
            <div className="handisport-container">
                <div className="found_handisport-container">
                    <h1 className="found_handisport-title">Handisport</h1>
                    <p className="found_handisport-desc">
                        Parce que les bienfaits du sport profitent à tous, nous nous devons de proposer une activité sportive adaptée aux personnes en situation de handicape.
                        Nous encourageons l’unicité et la solidarité, ce qui rend possible ces rencontres sportives, c’est pourquoi chaque partie et évènements comporte une mention Handisport. Vous pouvez ainsi, connaitre les terrains accessibles aux personnes en situation de handicape et/ou une partie d’handisport à lieu; ou bien renseigner ces infromations si vous êtes le créateur.
                        Augmenter ses capacités physiques c’est améliorer son indépendance
                    </p>
                    <Link className="found_handisport-link" to="#">Trouver une partie</Link>
                    <img className="hideem" src="../../../assets/handisport/handisport.png" alt="sportif handicapé" width="500" height="665"/>
                </div>
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
                <div className="link_handisport">
                    <Link to="/evenement">
                        <img
                            src="../../../assets/eye.svg"
                            alt="icon eye"
                            width="16"
                            height="16"
                        />
                        Voir plus
                    </Link>
                </div>
                <Footer bgWhite={bgWhite}/>
            </div>
        </>
    )
}

export default Handisport;