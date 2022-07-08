import React from 'react'
import searchWhite from '../img/search-white.svg'

function Hero() {
    
    return (
        <div className='heroImg'>
            <div className='searchHero'>

               <div>
                <input type="text" className='searchBar' placeholder='Choisissez un endroit où jouer' />
                </div>

                <div>
                <button type="submit" className='searchBtn'> Chercher <img src={searchWhite} /></button>
                </div>

            </div>
        </div>
    )
}

export default Hero