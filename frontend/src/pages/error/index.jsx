import React from "react";
import TopNavigation from '@components/TopNavigation/TopNavigation';
import { Link } from "react-router-dom";
import Footer from '../../components/footer'
import './styles/style.css'


export const Error404 = () => {
    return(
        <>
        <main className="bgg">
        <header>
            <TopNavigation />
        </header>
        <section className="fourfour">
            <h1>404</h1>
            <h2>Oups, re-ask Who Got Next</h2>
            <button class='acc'>Retourner a l'accueil</button>
        </section>
        <section></section>

        {/* <Footer /> */}
        </main>
        </>
    );
};

export default Error404;