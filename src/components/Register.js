import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Contrast } from "../Theme/Colors";
import { Logo } from "../Theme/Logo";
import { connect } from 'react-redux';
import { toggleRegister } from "../actions";

const RegisterForm = styled.div`
  width: 66%;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 5;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
`;
export const RegisterButton = styled(Logo)`
  margin: 2%;
  color: white;
  height: 20px;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: ${Contrast};
`;
const RegisterFormShadow = styled.div`
    position: fixed;
    height: 1000vh;
    width: 1000vh;
    top: 0px;
    background-color: black;
    opacity: 0.7;
    z-index: 4;
`;

const Register = (props) => {
  const { push } = useHistory();
  // const { openRegister, setOpenRegister } = props;
  const initialValues = {
    username: "",
    phone: "",
    email: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted!!!!');
    // Post API call here
    // Maybe add a notification on successful user registration
    push("/login");
  };

  function close() {
    console.log('clicked to close');
    props.toggleRegister();
  }
  if (!props.openRegister) return null;

  return (
    <div>
      <RegisterFormShadow onClick={close} />
      <RegisterForm>
        <div className="register-form-container">
          <h2>Register a New Account</h2>
          <form className="register-form">
            <div>
              <label>Username</label>
              <input
                type="text"
                name="username"
                onChange={handleChange}
                value={formValues.username}
              />
            </div>
            <div>
              <label>Phone #</label>
              <input
                type="text"
                name="phone"
                onChange={handleChange}
                value={formValues.phone}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={formValues.email}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={formValues.password}
              />
            </div>
            <RegisterButton onClick={handleSubmit}>Sign Up</RegisterButton>
          </form>
        </div>
      </RegisterForm>
    </div>
  );
};

const mapStateToProps = state => {
  return ({
    openRegister: state.openRegister
  })
}

export default connect(mapStateToProps, {toggleRegister})(Register);
