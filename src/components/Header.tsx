import React from "react";

import { StyledHeader, Nav, Logo } from "./styles/Header.style";
import { Container } from "./styles/Container.style";
import logo from "../assets/BrainCodeLogo.png";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src={logo} alt="logo" />
        </Nav>
      </Container>
    </StyledHeader>
  );
}
