import React from 'react';
import ToggleSwitch from '../ToogleSwitch/ToggleSwitch';
export const Form = ({ onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>

            <div className="form-group">
                <h4> WHO GOT NEXT </h4>
                <span>Renseignez les details de la partie</span>
            </div>

            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input className="form-control" id="description" />
            </div>

            <div className="form-group">
                <label htmlFor="location">Lieu</label>
                <input className="form-control" id="location" />
            </div>

            <div className="form-toggle">
                <span> Accessibilité handicapes </span>
                <ToggleSwitch />
            </div>

            <div className="form-group">
                <label htmlFor="location">Photo du terrain (facultatif) </label>
                <input className="form-control" id="location" />
            </div>

            <div className="form-date">
                <div className='date'>
                    <label htmlFor="location">Photo du terrain (facultatif) </label>
                    <input className="form-control" id="location" />
                </div>
                <div className='date'>
                    <label htmlFor="location">Photo du terrain (facultatif) </label>
                    <input className="form-control" id="location" />
                </div>
                <div className='date'>
                    <label htmlFor="location">Photo du terrain (facultatif) </label>
                    <input className="form-control" id="location" />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email"
                    placeholder="name@example.com"
                />
            </div>
            <div className="form-group">
                <button className="form-control btn btn-primary" type="submit">
                    Submit
                </button>
            </div>
        </form>
    );
};
export default Form;