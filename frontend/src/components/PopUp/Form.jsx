import React from 'react';
import ToggleSwitch from '../ToogleSwitch/ToggleSwitch';
export const Form = ({ onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>

            <div className="form-group">
                <h4> WHO GOT NEXT </h4>
                <span>Renseignez les details de la partie</span>
            </div>

            <div className="form-sport">
                <div className='sport-svg'>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.9734 3.67252C20.8164 2.50634 19.4396 1.58127 17.9226 0.950878C16.4056 0.320486 14.7787 -0.00270599 13.1359 1.7065e-05C11.4928 -0.00255367 9.86555 0.320698 8.34819 0.951072C6.83083 1.58145 5.45352 2.50643 4.29594 3.67252C-0.577813 8.54502 -0.577813 16.4763 4.29594 21.35C5.45354 22.5164 6.83103 23.4416 8.34865 24.072C9.86626 24.7024 11.4939 25.0255 13.1372 25.0225C14.7798 25.0254 16.4068 24.7024 17.9237 24.0722C19.4407 23.4421 20.8176 22.5172 21.9747 21.3513C26.8484 16.4788 26.8484 8.54752 21.9734 3.67252V3.67252ZM13.3609 2.51127H12.9122C12.9884 2.51002 13.0609 2.50002 13.1372 2.50002C13.2134 2.50002 13.2847 2.51002 13.3609 2.51127ZM20.9384 18.7613H18.1347L16.5622 21.9063C15.4652 22.3115 14.3054 22.5201 13.1359 22.5225C11.9643 22.5204 10.8023 22.3113 9.70344 21.905L8.13469 18.7738H5.34094C4.31023 17.4924 3.6132 15.9755 3.31219 14.3588L5.63469 11.2613L4.11469 8.22002C4.5997 7.18825 5.25893 6.24782 6.06344 5.44002C7.18942 4.31009 8.56955 3.46615 10.0884 2.97877L13.1347 5.01127L16.1822 2.98002C17.7006 3.46775 19.0806 4.31116 20.2072 5.44002C21.0108 6.24685 21.6696 7.18598 22.1547 8.21627L20.6347 11.2613L22.9572 14.3588C22.6576 15.9703 21.9641 17.4827 20.9384 18.7613Z" fill="#878AAB" />
                        <path d="M8.75781 11.2617L10.6328 16.2617H15.6328L17.5078 11.2617L13.1328 8.13672L8.75781 11.2617Z" fill="#878AAB" />
                    </svg>
                    <p> Football </p>
                </div>
            </div>


            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input className="form-control" id="description" />
            </div>

            <div className="form-group">
                <label htmlFor="location">Lieu</label>
                <input className="form-control" id="location" />
                <div className="form-toggle">
                    <span> Accessibilité handicapes </span>
                    <ToggleSwitch />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="location">Photo du terrain (facultatif) </label>
                <input type="file" className="form-control" id="location" />
            </div>

            <div className="form-date">
                <div className='date'>
                    <label htmlFor="location"> Date </label>
                    <input type="date" className="form-control-date" id="location" />
                </div>
                <div className='date'>
                    <label htmlFor="location"> À partir de </label>
                    <input type="time" className="form-control-hour" id="location" />
                </div>
                <div className='date'>
                    <label htmlFor="location"> Jusqu'à </label>
                    <input type="time" className="form-control-hour" id="location" />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="capacity">Capacité</label>
                <input type="number" className="form-control" id="capacity" />
            </div>

            <div className="form-group">
                <label htmlFor="lvl">Niveau</label>
                <select for="lvl" id='lvl'>
                    <option> Débutant </option>
                    <option> Intermédiaire </option>
                    <option> Expert </option>
                </select>
                <div className="form-toggle">
                    <span> Handisport </span>
                    <ToggleSwitch />
                </div>
            </div>


            <div className="form-read">
                <label htmlFor="read">J'ai lu et j'accepte... </label>
                <input type="checkbox" className="form-control" id="read" />
            </div>


            <div className="form-submit">
                <button className="form-cancel" type="submit">
                    Annuler
                </button>
                <button className="form-next" type="submit">
                    Confirmer
                </button>
            </div>
        </form>
    );
};
export default Form;