import React from 'react';
import Logo from '../atomes/logo';
import Router from '../atomes/router';
import Account from '../atomes/account'
import PlayJoin from '../atomes/play_join'
import Sports from '../atomes/sport';

export const HeaderJoin = () => {
    return (
        <>
            <div className='header' >
                <div className='logoAccount' >
                    <Logo />
                    <Router />
                    <Account />
                </div>

                <div className='play'>
                    <PlayJoin />
                </div>

                <div className='sport'>
                    <Sports />
                </div>
            </div>
        </>
    )
}

export default HeaderJoin;