
import React from 'react'

import { StyledHeader, Nav, Logo } from './styles/Header.styled'
import { Container } from './styles/Container.styled'
import logo from '../assets/BrainCodeLogo.png'

export default function Header() {

    return (
      <StyledHeader>
        <Container>
          <Nav>
            <Logo src={logo} alt='logo' />
        
          </Nav>
  
        </Container>
      </StyledHeader>
    )
  }