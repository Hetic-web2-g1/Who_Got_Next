import React from 'react'
import user from '../img/user.svg'

function Account() {

    return (
        
        <a href="login">
        <div className='account-logo'>
            <img src={user} alt="User" className='imgUser'/>
            <p> Mon Compte </p>
        </div>
        </a>
    )
}

export default Account