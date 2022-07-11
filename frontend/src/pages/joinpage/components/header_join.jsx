import React from 'react';
import Logo from '../../homepage/atomes/logo';
import RouterJoin from './router_join';
import Account from '../../homepage/atomes/account'
import PlayJoin from './play_join'
import Sports from '../../homepage/atomes/sport';

export const HeaderJoin = () => {
    return (
        <>
            <div className='header' >
                <div className='logoAccount' >
                    <Logo />
                    <RouterJoin />
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