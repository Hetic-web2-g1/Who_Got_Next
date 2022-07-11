import React from 'react';
import './contact.css'
export const Contact = ({ onSubmit }) => {
    return (
        <div className='formContainer'>
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
                <input type="text" className="form-control Message" 
                />
            </div>

            <div>
                <input type="file" />
            </div>
            
            </form>
            <div className="formButtonSubmit">
                <button className="form-control btn btn-primary" type="submit">
                    Envoyer
                </button>
            </div>
        </div>
    );
};
export default Contact;