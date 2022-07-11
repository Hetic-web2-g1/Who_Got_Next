import React from 'react'
import searchWhite from '../img/search-white.svg'
import MapRender from '../../map'

function Hero() {
    return (
        <>
        <div className='heroImg'>
            <div className='searchHero'>
               <div>
                    <input type="text" className='searchBar searchBarPerso' placeholder='Choisissez un endroit où jouer' />
                </div>
                <div>
                    <button type="submit" className='searchBtn'> Chercher <img src={searchWhite} /></button>
                </div>
            </div>
        </div>
        <MapRender></MapRender>
        </>
    )
}

export default Hero