import React, { useState } from "react";
import styled from "styled-components";
import { Contrast, LightGreen, SecondaryBlue } from "../Theme/Colors";

const MainImage = styled.div`
  height: 600px;
  background-image: url("Assets/Images/01.jpg");
  background-size: cover;
  /* background-position: center; */
  flex: 1;
  z-index: 1;
`;

const LoginDiv = styled.div`
  background-color: ${SecondaryBlue};

  /* flex: 0 auto; */
  width: 40%;
  padding: 5%;
  text-align: center;
  h2 {
    font-size: 3rem;
    line-height: 1.5;
    color: white;
    font-family: "Ubuntu", sans-serif;
    font-weight: 400;
    font-style: italic;
    margin-bottom: 10%;
  }
  form {
    display: flex;
    flex-direction: column;
    background-color: ${LightGreen};
    padding: 14%;
  }
  input {
    text-align: center;
    padding: 4%;
    margin-bottom: 6%;
  }
`;
const Button = styled.button`
  appearance: none;
  background-color: ${Contrast};
  color: white;
  padding: 3% 8%;
  font-size: 2rem;
  border: 1px solid white;
  border-radius: 10px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const initialFormValues = {
  phone: "",
  password: "",
};

const Login = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // API post once we have endpoint
  };

  return (
    <Wrapper>
      <LoginDiv>
        <h2>Login to your account</h2>
        <form>
          <input
            type="tel"
            name="phone"
            value={formValues.phone}
            onChange={handleChange}
            placeholder="phone number"
          />
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            placeholder="password"
          />
          <Button onClick={handleSubmit}>Log in</Button>
        </form>
      </LoginDiv>
      <MainImage />
    </Wrapper>
  );
};

export default Login;
