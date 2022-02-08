import React, { useState } from "react";

import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "../../styledComponents/NavBar";
// import LogoImg from "../assets/logo.png";
import {Container} from '../../GlobalStyles';
import { useNavigate } from "react-router-dom";
import firebase from "firebase";
function Navbar() {
  const navigate = useNavigate();
  const [extendNavbar, setExtendNavbar] = useState(false);

  const Salir = () => {
    firebase.auth().signOut();
    navigate('/login');
  }

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/productos"> Productos</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
        
        <NavbarLinkContainer>
            <NavbarLink to="" onClick={()=>Salir() }> Salir</NavbarLink>
          </NavbarLinkContainer>
        
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/"> Dashboard</NavbarLinkExtended>
          <NavbarLinkExtended to="/productos"> Productos</NavbarLinkExtended>
          <NavbarLinkExtended to="/salir"> Salir</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;