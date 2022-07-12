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
                    <p> Parce que les bienfaits du sport profitent à tous, nous nous devons de proposer une activité sportive adaptée aux personnes en situation de handicape. </p>
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