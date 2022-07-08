import React, {useContext} from "react";
import { Outlet, useLocation, Navigate, useNavigate } from "react-router-dom";
import {auth} from './../../firebase-config'

export default function Private() {

    console.log('AUTH', auth);


    if (!auth.currentUser) {
        return <Navigate to="/" />
    }

    return (
        <div>
            <Outlet />
        </div>
    )
}