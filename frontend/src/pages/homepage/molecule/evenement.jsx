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
                    <p> Réunissez des communautés autour de tournois, matchs, initiations... <br></br>
Renforcez la cohésion, relevez le niveau et rentrez dans la compétition !
<br></br><br></br>
Créez votre événement et définissez vos critères, votre terrain et les participants
recherchés ! 
<br></br><br></br>
Que vous soyez en situation de handicap, que vous ayez un niveau débutant,
que vous n’ayez pas de coéquipier ou simplement ne savez pas où pratiquer, 
Who Got Next est là pour vous.</p>
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