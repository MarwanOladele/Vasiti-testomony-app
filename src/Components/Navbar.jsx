import React from "react";
import styled from "styled-components";
import logo1 from "../Images/Logo.png";

const Container = styled.div`
  height: 80px;
  font-family: "Roboto";
`;

const NavContainer = styled.div`
  width: 80%;
  margin: 0px auto;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Left = styled.div`
  flex: 10;
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.div``;
const Image = styled.img``;
const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
`;
const NavLinks = styled.span`
  margin-left: 40px;
  font-weight: 400;
  cursor: pointer;

  font-size: 13px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  height: 32px;
  width: 85px;
  border-radius: 5px;
  background-color: #ff5c00;
  border: none;
  color: white;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <NavContainer>
        <Left>
          <Logo>
            <Image src={logo1} />
          </Logo>
          <NavLinksContainer>
            <NavLinks>ABOUT US</NavLinks>
            <NavLinks>STORIES</NavLinks>
            <NavLinks>CONTACT</NavLinks>
            <NavLinks>LOGIN</NavLinks>
          </NavLinksContainer>
        </Left>
        <Right>
          <Button>SIGN UP</Button>
        </Right>
      </NavContainer>
    </Container>
  );
};

export default Navbar;
