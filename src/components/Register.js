import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';



const Register = () => {
    const { push } = useHistory();
    const initialValues = {
        username: '',
        phone: '',
        email: '',
        password: ''
    }

    const [formValues, setFormValues] = useState(initialValues);

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Post API call here
        // Maybe add a notification on successful user registration
        push('/login');
    }

    return (
        <div>
            <div className='register-form-container'>
                <h2>Register a New Account</h2>
                <form className='register-form'>
                    <div>
                        <label>Username</label>
                        <input type='text' name='username' onChange={handleChange} value={formValues.username} />
                    </div>
                    <div>
                        <label>Phone #</label>
                        <input type='text' name='phone' onChange={handleChange} value={formValues.phone} />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type='email' name='email' onChange={handleChange} value={formValues.email} />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type='password' name='password' onChange={handleChange} value={formValues.password} />
                    </div>
                    <button onClick={handleSubmit}>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Register;