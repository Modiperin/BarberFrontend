import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";

export const TokenCheckerAndLogout = () => {
    const [token, setToken] = useState(true)
    const navigate = useNavigate();
    const logout = () => {
        console.log('hhhh')
        localStorage.removeItem('qwerty')
        localStorage.removeItem('shopify')
        localStorage.removeItem('uuid')
        window.location.reload();
        navigate('/')
    }
    var tokenn = localStorage.getItem('qwerty');
    console.log(tokenn)
    if (tokenn != null) {
        try {
            var decoded = jwt_decode(token);
            console.log(decoded)
            const currentTime = Date.now() / 1000;
            console.log(currentTime)
            console.log(decoded.exp)
            if (currentTime > decoded.exp) {
                setToken(false)
                logout()
            }
            return decoded
        }
        catch (error) {
            console.log(error)
            setToken(false)
            logout()
            return null
        }

    }
    else {
        setToken(false)
        return null
    }
}
