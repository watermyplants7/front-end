import React from 'react';

const Register = () => {
    return (
        <div>
            <div className='register-form-container'>
                <h2>Register a New Account</h2>
                <form className='register-form'>
                    <div>
                        <label>Username</label>
                        <input type='text' name='username' />
                    </div>
                    <div>
                        <label>Phone #</label>
                        <input type='text' name='phone' />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type='email' name='email' />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type='password' name='password' />
                    </div>
                    <button>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Register;