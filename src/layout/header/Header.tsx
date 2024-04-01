import React from "react";
import styled from "styled-components"
import { Logo } from "../../components/logo/Logo"
import { Container } from "../../components/slider/Container"
import { FlexWrapper } from "../../components/Flexwrapper";
import { HeaderMenu } from "../../layout/header/headerMenu/HeaderMenu";
import { MobileMenu } from "./mobileMenu/MobileMenu";


const items = ["Home", "Skills", "Works", "Testimony", "Contact"]

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justifyContent={"space-between"} alignItems={"center"}>
          <Logo />
          <HeaderMenu menuItems={items} />
          {/* <MobileMenu menuItems={items} /> */}
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
}


const StyledHeader = styled.header`
  background: rgba(31, 31, 32, 0.9);
  align-items: center;
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`
