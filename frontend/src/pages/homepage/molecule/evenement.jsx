import React from 'react'
import { Link } from 'react-router-dom'
import Slideshow from '../atomes/slideshow'

function Evenement() {

    return (
        <div className='explorer'>
            <div className='imgJudo'>
                <Slideshow />
            </div>
            <div className='evnCreation'>
                <div className='titleEvn'>
                    <h3> Participez ou creez des évènements sportif </h3>
                </div>
                <div className='textEvn'>
                    <p> Participez, reunissez des communautés autour de tournois, matchs, initiations...
                        Renforcez la cohesion, relevez le niveau </p>
                </div>
                <div className='buttonEvn'>
                    <Link to="/evenement">
                        <button className="evnButton" type="button">
                            Explorez
                        </button>
                    </Link>
                </div>
            

            </div>
        </div>
    )
}

export default Evenement