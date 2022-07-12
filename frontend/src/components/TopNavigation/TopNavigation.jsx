import React from 'react';
import Logo from '../../pages/homepage/atomes/logo';
import Router from '../../pages/homepage/atomes/router';
import Navbar from '../sidebar/Navbar';

export const TopNavigation = () => {
    return (
        <>
            <div className='header' >
                <div className='logoAccount' >
                    <Logo />
                    <Router />
                    <Navbar/>
                </div>
            </div>
        </>
    )
}

export default TopNavigation;