import { updateCurrentUser } from "firebase/auth";
import React, { useState } from "react";
import cat from "./cat.gif"
import { useAuth } from "../../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function PrivateHome() {
    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    if (!currentUser) {
        useNavigate("/")
    }

    async function handleLogout() {
        setError('')

        try {
            await logout()
            navigate("/")

        } catch {
            setError("Nous n'avons pas pu vous déconnecter");
        }
    }
    return (
        <div className="container">
            <h2>Profile</h2>
            {/* <img src={cat}/> */}
            <button onClick={handleLogout}>Log Out</button>

            <div style={{paddingTop: "30px"}}>
                {error}
                <strong>Email: </strong> {currentUser.email}
                <div style={{paddingTop: "30px"}}>
                    <Link to="/private/update-profile">Update profile</Link>
                </div>
            </div>
        </div>
    )
}