import React from 'react';
import PlayJoin from './play_join'
import Sports from '../../homepage/atomes/sport';

export const HeaderJoin = () => {
    return (
        <>
            <div className='header' >

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