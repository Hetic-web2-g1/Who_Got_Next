import React from 'react';
import Logo from '../atomes/logo';
import Router from '../atomes/router';
import Account from '../atomes/account'
import Play from '../atomes/play'
import Sports from '../atomes/sport';

export const Header = () => {
    return (
        <>
            <div className='header' >
                <div className='logoAccount' >
                    <Logo />
                    <Router />
                    <Account />
                </div>

                <div className='play'>
                    <Play />
                </div>

                <div className='sport'>
                    <Sports />
                </div>
            </div>
        </>
    )
}

export default Header;