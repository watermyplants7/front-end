import React from "react";
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory } from "react-router-dom";

const Logout = (props) => {
    const { push } = useHistory();

    const handleLogout = () => {
        // axiosWithAuth().post('/logout').then(res => {
        //     localStorage.removeItem('token');
        //     push('/');
        // }).catch(err => {
        //     console.error(err);
        // })
        push('/');
    };

    return <div>
        <h2>We're sorry to see you go!</h2>
        <h3>Are you sure you want to log out?</h3>
        <button onClick={handleLogout}>Yes, log me out</button>
    </div>
}

export default Logout;