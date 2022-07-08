import React from 'react'
import coeur from '../img/coeur.svg'
import rugby from '../img/rugby.svg'
import cyclism from '../img/cyclism.svg'
import gym from '../img/gym.svg'
import basket from '../img/Basket-ball.svg'
import child from '../img/child.svg'
import football from '../img/football.svg'
import handball from '../img/handball.svg'
import running from '../img/Running.svg'
import volleyball from '../img/volleyball.svg'
import tennis from '../img/tennis.svg'


function Sports() {
    return (
        <div className='sportsContainer'>
            <div className='insideSportsContainer'>
                <img src={rugby} alt="Logo" />
                <p> Rugby </p>
            </div>
            <div className='insideSportsContainer'>
                <img src={cyclism} alt="Logo" />
                <p> Cyclisme </p>
            </div>
            <div className='insideSportsContainer'>
                <img src={gym} alt="Logo" />
                <p> Gym </p>
            </div >
            <div className='insideSportsContainer'>
                <img src={basket} alt="Logo" />
                <p> Basket </p>
            </div>
            <div className='insideSportsContainer'>
                <img src={child} alt="Logo" />
                <p> Enfants </p>
            </div>
            <div className='insideSportsContainer'>
                <img src={football} alt="Logo" />
                <p> Football </p>
            </div>
            <div className='insideSportsContainer'>
                <img src={handball} alt="Logo" />
                <p> Handball </p>
            </div>
            <div className='insideSportsContainer'>
                <img src={volleyball} alt="Logo" />
                <p> Volleyball </p>
            </div>
            <div className='insideSportsContainer'>
                <img src={tennis} alt="Logo" />
                <p> Tennis </p>
            </div>
            <div className='insideSportsContainer'>
                <img src={running} alt="Logo" />
                <p> Running </p>
            </div>






        </div>
    )
}

export default Sports

