import React from 'react'
import { Link } from 'react-router-dom'
import SlideshowHandi from '../atomes/slideshowHandi'

function Handisport() {
    return (
        <div className='backcomp1'>
            <div className='infoHandi'>
                <div className='titleHandi'>
                    <h1> Handisport </h1>
                </div>
                <div className='textHandi'>
                    <p>Parce que les bienfaits du sport profitent à tous, nous nous devons de proposer une activité sportive adaptée aux personnes en situation de handicape. 
<br></br><br></br>
Cette application a comme objectif de réunir nos utilisateurs autour de sports communs quel que soit leurs handicaps ou niveau. 
<br></br><br></br>
Nous nous devons de promouvoir l'accessibilité pour tous. La pratique sportive est un point d’unification et d'adaptabilité; l'intégration de chacun est un combat commun. 
<br></br><br></br>
Quelque soit votre situation, niveau ou sport, notre application vous permettra de rejoindre n’importe quel événement défini comme étant accessible ou d’en créer un vous même. </p>
                </div>
                <div className='btnHandi'>
                    <Link to="/handisport">
                        <button className="handiButton" type="button">
                            En savoir plus
                        </button>
                    </Link>
                </div>
            </div>
            <div className='handiImg'>
                <SlideshowHandi />
            </div>


        </div>
    )
}

export default Handisport