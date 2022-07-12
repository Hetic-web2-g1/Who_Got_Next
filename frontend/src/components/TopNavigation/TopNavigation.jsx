import React from 'react';
import Logo from '../../pages/homepage/atomes/logo';
import Router from '../../pages/homepage/atomes/router';
import Account from '../../pages/homepage/atomes/account'
import Navbar from '../sidebar/Navbar';

export const TopNavigation = () => {
    return (
        <>
            <div className='header' >
                <div className='logoAccount' >
                    <Logo />
                    <Router />
                    <Account />
                    <Navbar/>
                </div>
            </div>
        </>
    )
}

export default TopNavigation;