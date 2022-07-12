import React, { useState } from 'react'
import Container from '../../../components/PopUp/Container';
import ToggleSwitch from '../../../components/ToogleSwitch/ToggleSwitch';

function Play() {

    const [openOptions, setOpenOptions] = useState(false);
    const triggerText = "Let's Go";

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
                <label> Capacité </label>
                <span onClick={() => setOpenOptions(!openOptions)}>Combien de Joueurs </span>
                {openOptions && <div className='option'>
                    <p> Indiquez le nombre de personnes qui peuvent vous rejoindre </p>
                    <div className='selectNumber'>
                        <span> Nombre de joueurs </span>
                        <input type='number' className='numberPerson' min="1" max="20" />
                    </div>
                    <div className='selectNumber'>
                        <span> Accessible aux joueurs en situation de handicape  </span>
                        <ToggleSwitch />
                    </div>
                    <p> *Assurez-vous que le nombre de joueur n’éxcède pas la capactié maximale du terrain occupé </p>
                </div>}

            </div>

            <Container triggerText={triggerText}  />
        </div>
    )
}

export default Play