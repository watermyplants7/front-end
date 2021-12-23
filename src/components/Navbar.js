import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  OpenLinksButton,
  NavbarLinkExtended,
} from "./Navbar.styles"

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);
  
  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/HomePage"> Home</NavbarLink>
            <NavbarLink to="/login"> Login</NavbarLink>
            <NavbarLink to="/Register">Sign Up</NavbarLink>
            <NavbarLink to="src\components\landingPage\plantList.js">Water My Plants</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }
            }
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/HomePage"> Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/login"> Login </NavbarLinkExtended>
          <NavbarLinkExtended to="/Register"> Sign Up</NavbarLinkExtended>
          <NavbarLinkExtended to="src\components\landingPage\plantList.js">Water My Plants</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;
