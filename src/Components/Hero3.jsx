import React from "react";
import styled from "styled-components";
import img1 from "../Images/img11.png";
import img2 from "../Images/img10.png";

const Container = styled.div`
  height: 636px;
  font-family: "inter";
  overflow-y: hidden;
  background: #fff8f5;
`;

const HeroContainer = styled.div`
  width: 80%;
  margin: 0px auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  color: #ffffff;
`;

const TesTitle = styled.h1`
  font-size: 32px;
  color: #242120;
`;
const TesPerson = styled.button`
  font-family: Inter;
  font-size: 13px;
  font-weight: 500;
  line-height: 16px;
  padding: 5px;
  border: 0.5px solid #ff5c0066;
  background: #fff8f5;
  color: #ff5c00;
  border-radius: 5px;
  margin-top: 15px;
  margin-bottom: 35px;
`;
const Testimony = styled.p`
  font-family: Inter;
  font-size: 15px;
  font-weight: 400;
  line-height: 27px;
  text-align: left;
  margin-bottom: 48px;
  color: #242120;
`;
const Share = styled.div``;
const ShareText = styled.p`
  font-family: Inter;
  font-size: 17px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0.25em;
  text-align: left;
  color: #ff5c00;
`;
const Image1 = styled.img``;

const Right = styled.div`
  flex: 1.2;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  position: relative;
  padding: 40px;
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #ff5c0008;
  border-radius: 50%;
  position: absolute;
  top: 100px;
  left: -10px;
`;
const Image = styled.img`
  position: absolute;
  top: 120px;
  left: 0;
  object-fit: cover;
`;

const Hero3 = () => {
  return (
    <Container>
      <HeroContainer>
        <Left>
          <div>
            <TesTitle>Josiah’s Experience</TesTitle>
            <TesPerson>Customer</TesPerson>
            <Testimony>
              I had the best experience shopping with vasiti. <br /> Usability
              of the website was great, very good <br /> customer service, an
              all round <br />
              great experience. I would definately be coming back! <br /> I had
              the best experience shopping with vasiti. <br /> Usability of the
              website was great, very good <br /> customer service, an all round
              great <br /> experience. I would definately be coming back!
            </Testimony>
            <Share>
              <ShareText>Share your own story!</ShareText>
              <Image1 src={img2} />
            </Share>
          </div>
        </Left>
        <Right>
          <ImageContainer />
          <Image src={img1} />
        </Right>
      </HeroContainer>
    </Container>
  );
};

export default Hero3;
