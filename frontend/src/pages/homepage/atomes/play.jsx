import React, { useState } from 'react'
import Container from '../../../components/PopUp/Container';
import ToggleSwitch from '../../../components/ToogleSwitch/ToggleSwitch';

function Play() {

    const [openOptions, setOpenOptions] = useState(false);
    const triggerText = "Let's Go";

    // const chill = document.getElementById('playContainer').children;
    let i = 0;

    function c(){
        const lieu = document.getElementById('lieu');
        const dateinput = document.getElementById('dateInput');
        const numberinput = document.getElementById('numberInput');
        const trigger = document.getElementById('trigger');
        const opt =[lieu, dateinput, numberinput]
        const optlen = opt.length;

        if (i == 2){
            i = -1;
        }

        if (i < optlen){
            i++;
            console.log(i)
            opt[i].style.display = 'flex';

            if (i ==0){
                opt[0].style.display ='flex';
                opt[2].style.display = 'none'
    
            }
            else{

                opt[i - 1].style.display = 'none';

            }
            

        
        }
        }
    
    return (
        <div id="playContainer" className='playContainer'>
            <div id='lieu' className='lieu'>
                <label> Lieu </label>
                <input type="text" placeholder='Choisissez un endroit où vous rejoindre' className='searchInput' />
            </div>

            <div id='dateInput' className='dateInput'>
                <label> Date </label>
                <input placeholder="Quand ?" type="text" onFocus={(e) => (e.target.type = "date")} id="date" className='datePicker' />
            </div>

            <div id='numberInput' className='numberInput'>
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
            <div className='changeoption' onClick={c} ></div>
            <Container triggerText={triggerText} id='trigger'  />
        </div>
    )
}

export default Play