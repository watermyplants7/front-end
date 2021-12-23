import React from "react";
import styled from "styled-components";
import { MainGreen } from "../Theme/Colors";
import { Logo } from "../Theme/Logo";
import { Link } from 'react-router-dom';

const NavbarStyled = styled.header`
  background-color: ${MainGreen};
  padding: 15px;
`;
const HeaderLogo = styled(Logo)`
  text-align: left;
  color: white;
`;

export function Header() {
  return (
    <NavbarStyled>
      <HeaderLogo>Water My Plants</HeaderLogo>
      <nav>
        <Link to={'#'}>about</Link>
        <Link to={'#'}>login</Link>
      </nav>
    </NavbarStyled>
  );
}
