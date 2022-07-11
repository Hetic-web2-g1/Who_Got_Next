import React from 'react'
import user from '../img/user.svg'

function Account() {

    return (

        <div className='account'>
            <img src={user} alt="User" className='imgUser'/>
            <p> Mon Compte </p>
        </div>
    )
}

export default Account