import React from "react";
import styled from "styled-components";
import img1 from "../Images/img1.png";

const Container = styled.div`
  height: 596px;
  font-family: "inter";
`;

const HeroContainer = styled.div`
  width: 80%;
  margin: 0px auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  over-flow: hidden;
`;

const Left = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: 1.02px;
`;
const HeroText = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 31px;
  letter-spacing: 1.02px;
  margin-top: 24px;
`;

const Right = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  position: relative;
`;

const ImageContainer = styled.div`
  height: 85%;
  width: 100%;
  background-color: #fff8f5;
  border-radius: 50%;
`;
const Image = styled.img`
  position: absolute;
  width: 100%;
  width: 100%;
`;

const Hero1 = () => {
  return (
    <Container>
      <HeroContainer>
        <Left>
          <HeroTitle>
            Amazing <br /> Experiences from our <br />
            Wonderful customers
          </HeroTitle>
          <HeroText>
            Here is what customers and vendor are saying about <br />
            us,you can share your stories with us too
          </HeroText>
        </Left>
        <Right>
          <ImageContainer />
          <Image src={img1} />
        </Right>
      </HeroContainer>
    </Container>
  );
};

export default Hero1;
