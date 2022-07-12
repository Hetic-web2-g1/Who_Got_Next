import React from 'react'
import logo from '../img/logo.svg'
import { Link } from "react-router-dom";


function Logo() {
  return (
    <Link to='/home' className="spam">
      <div className='logoHome'>
        <img src={logo} alt="Logo" />
      </div>
    </Link>
  )
}

export default Logo