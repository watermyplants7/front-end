import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Contrast, LightGreen } from "../Theme/Colors";
import { Logo } from "../Theme/Logo";
import { connect } from "react-redux";
import { toggleRegister } from "../actions";

const RegisterForm = styled.div`
  width: 66%;
  background-color: ${LightGreen};
  position: fixed;
  top: 75px;
  z-index: 5;
  margin-left: 17%;
  display: flex;
  flex-direction: column;
  padding: 3%;

  h2 {
    font-family: "Ubuntu", sans-serif;
    font-weight: 400;
    font-style: italic;
    font-size: 3rem;
    margin-bottom: 2%;
    color: ${Contrast};
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    width: 60%;
    margin-bottom: 2%;
    padding: 1.5% 1.5% 1.5% 2%;
  }
`;
const RegisterButton = styled(Logo)`
  margin: 2%;
  color: white;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  font-size: 2rem;
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
    console.log("submitted!!!!");
    // Post API call here
    // Maybe add a notification on successful user registration
    push("/login");
  };

  function close() {
    console.log("clicked to close");
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
            {/* <label>Username</label> */}
            <input
              type="text"
              name="username"
              onChange={handleChange}
              value={formValues.username}
              placeholder="username"
            />
            {/* <label>Phone #</label> */}
            <input
              type="text"
              name="phone"
              onChange={handleChange}
              value={formValues.phone}
              placeholder="phone number"
            />
            {/* <label>Email</label> */}
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formValues.email}
              placeholder="email"
            />
            {/* <label>Password</label> */}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={formValues.password}
              placeholder="password"
            />
            <RegisterButton onClick={handleSubmit}>Sign Up</RegisterButton>
          </form>
        </div>
      </RegisterForm>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    openRegister: state.openRegister,
  };
};

export default connect(mapStateToProps, { toggleRegister })(Register);
