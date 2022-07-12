import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartEvenement from "../../../components/CartEvenement";

export const Rejoints = ({setContentSidebar}) => {

    const [sideCardData, setSideCardData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:8000/events`);
            const newData = await response.json();
            setSideCardData(newData);
        };
        fetchData();
    }, []);

    return (
        <>
            <Link className="sidebar_back-link" to="#" onClick={() => setContentSidebar('menu')}>
                <img src="../../../../assets/left_arrow.svg" alt="left arrow" width="18" height="18"/>
                Précédent
            </Link>
            <div className='trait' />
            <div className='sidebarTitle'>
                Événements
                <div className='sidebarContainer'>
                    {sideCardData
                        ? sideCardData.map((cart, index) => (
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
                        )) : null
                    }
                </div>
            </div>
            <div className='trait' />
            <div className='sidebarTitle'>
                Terrains crées
                <div className='sidebarContainer'>
                    {sideCardData
                        ? sideCardData.map((cart, index) => (
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
                        )) : null
                    }
                </div>
            </div>
        </>
    )
};

export default Rejoints;