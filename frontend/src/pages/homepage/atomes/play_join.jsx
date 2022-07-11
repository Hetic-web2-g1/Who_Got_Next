import React, { useState } from 'react'
import Container from '../../../components/PopUp/Container';
import ToggleSwitch from '../../../components/ToogleSwitch/ToggleSwitch';

// import '/src/style/main.css'

function PlayJoin() {

    const [openOptions, setOpenOptions] = useState(false);
    const triggerText = "Let's Go";
    const onSubmit = (event) => {
        event.preventDefault(event);
        console.log(event.target.name.value);
        console.log(event.target.email.value);
    };

    return (
        <div className='playContainer'>
            <div className='lieu'>
                <label> Lieu </label>
                <input type="text" placeholder='Choisissez un endroit où vous rejoindre' className='searchInput' />
            </div>

            <div className='dateInput'>
                <label> Date </label>
                <input placeholder="Quand ?" type="text" onFocus={(e) => (e.target.type = "date")} id="date" className='datePicker' />
            </div>

            <div className='numberInput'>
                <label> Niveau </label>
                <span onClick={() => setOpenOptions(!openOptions)}>Êtes-vous débutant? </span>
                {openOptions && <div className='option'>
                    <p> Indiquez votre niveau de jeux </p>
                    <div className="form-group">
                        <label htmlFor="lvl">Niveau</label>
                        <select for="lvl" id='lvl'>
                            <option> Débutant </option>
                            <option> Intermédiaire </option>
                            <option> Expert </option>
                        </select>
                    </div>
                    <div className='selectNumber'>
                        <span> Accessible aux joueurs en situation de handicape  </span>
                        <ToggleSwitch />
                    </div>
                    <div className='selectNumber'>
                        <span> Acceptez-vous des coéquipiers de tout niveaux?  </span>
                        <ToggleSwitch />
                    </div>
                    <p> *Assurez-vous que le nombre de joueur n’éxcède pas la capactié maximale du terrain occupé </p>
                </div>}

            </div>

            <Container triggerText={triggerText} onSubmit={onSubmit} />
            {/* <button> Let's Go  </button> */}
        </div>
    )
}

export default PlayJoin