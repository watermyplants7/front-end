import React from "react";
import styled from "styled-components";
import { SecondaryBlue } from "../Theme/Colors";
import { connect } from 'react-redux';
import { toggleRegister } from "../actions";

const MainContent = styled.div`
  height: 600px;
  background-image: url("Assets/Images/pic01.jpg");
  background-size: cover;
  background-position: center;
  flex: 1;
  z-index: 1;
`;

const Sidebar = styled.div`
  background-color: ${SecondaryBlue};
  flex: 0 auto;
  width: 40%;
  padding: 5%;
  text-align: left;
  h2 {
    font-size: 4rem;
    line-height: 1.5;
    color: white;
    font-family: "Ubuntu", sans-serif;
    font-weight: 400;
    font-style: italic;
    margin-bottom: 10%;
  }
`;
const Button = styled.button`
  appearance: none;
  background-color: ${SecondaryBlue};
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

const HomePage = (props) => {
  // const { setOpenRegister } = props;
  return (
    <Wrapper>
      {/* MainContent = background image */}
      <MainContent></MainContent>
      <Sidebar>
        <h2>
          This is a very eloquent paragraph about why this app saves plant
          lives.{" "}
        </h2>
        <Button
          onClick={() => {
            props.toggleRegister();
          }}
        >
          Register
        </Button>
      </Sidebar>
    </Wrapper>
  );
};

const mapStateToProps = state => {
  return ({
    openRegister: state.openRegister
  })
}

export default connect(mapStateToProps, {toggleRegister})(HomePage);
