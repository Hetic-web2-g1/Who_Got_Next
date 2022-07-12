import React from 'react';
import './contact.css'
import { Link } from 'react-router-dom';
export const Contact = ({ setContentSidebar, onSubmit }) => {
    return (
        <div className='contactContainer'>
            <Link className="sidebar_back-link" to="#" onClick={() => setContentSidebar('menu')}>
                <img src="../../../../assets/left_arrow.svg" alt="left arrow" width="18" height="18"/>
                Précédent
            </Link>
             <form onSubmit={onSubmit}>

                <h4> Nous contacter </h4>

            <div className="form-group">
                <label htmlFor="email">Mail</label>
                <input type="email" className="form-control" id="email"
                    placeholder="Entrez votre mail"
                />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Message</label>
                <input  className="form-control Message" 
                />
            </div>
            
            </form>
            <Link to="/home">
                <a className="searchBtn-primary" >
                    Envoyer
                </a>
            </Link>

        </div>
    );
};
export default Contact;