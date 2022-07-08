import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import '../style/main.css'
import Evenement from '../../evenement'

function Router() {
    return (
        <>
                <div className='navbar'>
                    <ul className='list'>
                        <li> <Link to="/"> Jouer </Link> </li>
                        <li> <Link to="/"> Rejoindre </Link> </li>
                        <li> <Link to="/Evenement"> Evenements </Link> </li>
                    </ul>
                </div>
        </>
    )
}

export default Router