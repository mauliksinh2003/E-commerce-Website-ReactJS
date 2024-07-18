import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {

const { logout } = useAuth0();
const navigate = useNavigate()

function LogOutUser(){

        logout({ logoutParams: { returnTo: window.location.origin } })
}

    useEffect(()=>{
        LogOutUser();
    })

}

export default Logout;

