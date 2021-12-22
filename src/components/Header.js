import React from "react";
import styled from "styled-components";
import { MainGreen } from "../Theme/Colors";
import { Logo } from "../Theme/Logo";

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
        <l1>about</l1>
        <l1>login</l1>
      </nav>
    </NavbarStyled>
  );
}
