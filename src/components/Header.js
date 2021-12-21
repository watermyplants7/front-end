import React from "react";
import styled from "styled-components";
import { MainGreen } from "../Theme/Colors";
import { Logo } from "../Theme/Logo";

const NavbarStyled = styled.div`
  background-color: ${MainGreen};
  padding: 15px;
  margin-top: 0px;
  position: fixed;
  width: 100%;
  z-index: 10;
`;
const HeaderLogo = styled(Logo)`
  font-size: 2rem;
  text-align: left;
  font-weight: bolder;
  color: white;
`;

export function Header() {
  return (
    <NavbarStyled>
      <HeaderLogo>Water My Plants</HeaderLogo>
      <nav>
        <l1>about</l1>
        <l1>login</l1>
      </nav>
    </NavbarStyled>
  );
}
