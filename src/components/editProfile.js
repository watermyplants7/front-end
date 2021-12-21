import React, {useState, useEffect} from "react";
import axiosWithAuth from "../utils/axiosWithAuth";


const EditProfile = (props) => {
    const [formValues, setFormValues] = useState('');

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        const username = localStorage.getItem('username');
        const phone = localStorage.getItem('phone');
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');
        setFormValues({
            username: username,
            phone: phone, 
            email: email,
            password:password
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        //  WILL IMPLEMENT ACCURATE API PUT WHEN ENDPOINT IS READY - JOHN
        // axiosWithAuth().put('/editProfile', formValues).then(res => {
        //     console.log(res);
        //     localStorage.setItem('username', formValues.username);
        //     localStorage.setItem('phone', formValues.phone);
        //     localStorage.setItem('email', formValues.email);
        //     localStorage.setItem('password', formValues.password);
        // }).catch(err => console.error(err));
    }
    return (
        <div>
            <form>
                <h2>Edit your Profile Information</h2>
                <label>
                    Username:
                    <input
                        type='text'
                        name='username'
                        value={formValues.username}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Phone Number:
                    <input
                        type='tel'
                        name='phone'
                        value={formValues.phone}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type='email'
                        name='email'
                        value={formValues.email}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type='password'
                        name='username'
                        value={formValues.password}
                        onChange={handleChange}
                    />
                </label>
                <button onClick={handleSubmit}>Update info!</button>
            </form>
        </div>
    );
};

export default EditProfile;