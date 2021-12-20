import React, {useState} from "react";

const initialFormValues = {
    phone: '',
    password:''
}

const Login = (props) => {
    const [formValues, setFormValues] = useState(initialFormValues);

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // API post once we have endpoint
    };

    return (
        <div>
            <h2>Login</h2>
            <form>
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
                    Password:
                    <input
                        type='password'
                        name='password'
                        value={formValues.password}
                        onChange={handleChange}
                    />
                </label>
                <button onClick={handleSubmit}>Log in</button>
            </form>
        </div>
    );
};

export default Login;