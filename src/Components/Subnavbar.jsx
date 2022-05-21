import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";


const Container = styled.div`
  height: 50px;
  font-family: "Roboto";
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  box-shadow: -2px 4px 9px 0px rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: -2px 4px 9px 0px rgba(0, 0, 0, 0.12);
  -moz-box-shadow: -2px 4px 9px 0px rgba(0, 0, 0, 0.12);

  ${mobile({
    display: "none",
  })}
`;

const SubNavContainer = styled.div`
  width: 72%;
  margin: 0px auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavText = styled.div`
  font-size: 13px;
  font-weight: 400;
  cursor: pointer;
`;

const Subnavbar = () => {
  return (
    <Container>
      <SubNavContainer>
        <NavText>MARKET PLACE</NavText>
        <NavText>WHOLESALE CENTER</NavText>
        <NavText>SELLER CENTER</NavText>
        <NavText>SERVICES</NavText>
        <NavText>INTERNSHIPS</NavText>
        <NavText>EVENTS</NavText>
      </SubNavContainer>
    </Container>
  );
};

export default Subnavbar;
