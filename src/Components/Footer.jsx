import React from "react";
import styled from "styled-components";
import img1 from "../Images/img20.png";
import img2 from "../Images/img21.png";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

const Container = styled.div`
  min-height: 774px;
  background: #25201d;
`;
const TopContainer = styled.div`
  width: 90%;
  margin: 0px auto;
`;

const Top = styled.div`
  height: 370px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Left = styled.div``;
const Right = styled.div``;
const Image = styled.img`
  position: relative;
  bottom: 16px;
`;

const Imagee = styled.img`
  margin-bottom: 16px;
`;
const RightText = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #ffffff;
  margin-bottom: 32px;
`;

const InputContainer = styled.div`
  width: 100%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  background: transparent;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  height: 100%;
  color: #ffffff;
  outline: none;
`;
const Button = styled.button`
  flex: 3;
  border: none;
  background-color: #ffffff;
  color: #242120;
  height: 80%;
  width: 80%;
  border-radius: 5px;
  margin-right: 3px;
  font-family: Roboto;
  font-size: 13px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0.02em;
  text-align: center;
`;

const Bottom = styled.div`
  color: #ffffff;
`;

const FooterContainer = styled.div`
  width: 95%;
  min-height: 404px;
  margin: 0px auto;
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const ColumnOne = styled.div`
  flex: 1;
  margin: 50px;
  padding: 10px;
  min-width: 100px;
`;
const ColumnTwo = styled.div`
  flex: 1;
  margin: 50px;
  padding: 10px;
  min-width: 100px;
`;
const ColumnThree = styled.div`
  flex: 1.9;
  margin: 50px;
  padding: 10px;
  min-width: 100px;
`;
const ColumnFour = styled.div`
  flex: 1.2;
  margin: 50px;
  padding: 10px;
  min-width: 100px;
`;
const ColumnFive = styled.div`
  flex: 1.7;
  margin: 50px;
  padding: 10px;
  min-width: 100px;
`;
const ColumnHeader = styled.div`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  margin-bottom: 20px;
`;
const ColumnText = styled.div`
  cursor: pointer;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  margin-bottom: 15px;
`;

const Icon = styled.div`
  display: flex;
  margin-bottom: 34px;
`;
const IconContainer = styled.div`
  height: 25px;
  width: 25px;
  background: #ffffff;
  color: #25201d;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <Container>
      <TopContainer>
        <Top>
          <Left>
            <Image src={img1} />
          </Left>
          <Right>
            <Imagee src={img2} />
            <RightText>
              We’d make sure you’re always first to know what’s <br /> happening
              on Vasiti—thus, the world.
            </RightText>
            <InputContainer>
              <Input placeholder="enter your email address" />
              <Button>SUSCRIBE</Button>
            </InputContainer>
          </Right>
        </Top>
      </TopContainer>
      <Bottom>
        <FooterContainer>
          <ColumnOne>
            <ColumnHeader>Company</ColumnHeader>
            <ColumnText>About us</ColumnText>
            <ColumnText>Term of Use</ColumnText>
            <ColumnText>Privacy Policy</ColumnText>
            <ColumnText>Press & Media</ColumnText>
          </ColumnOne>
          <ColumnTwo>
            <ColumnHeader>Products</ColumnHeader>
            <ColumnText>Marketplace</ColumnText>
            <ColumnText>Magazine</ColumnText>
            <ColumnText>Seller</ColumnText>
            <ColumnText>Wholesale</ColumnText>
            <ColumnText>Services</ColumnText>
          </ColumnTwo>
          <ColumnThree>
            <ColumnHeader>Careers</ColumnHeader>
            <ColumnText>Become a Campus Rep</ColumnText>
            <ColumnText>Become a Vasiti Influencer</ColumnText>
            <ColumnText>Become a Campus writer</ColumnText>
            <ColumnText>Become an Affiliate</ColumnText>
          </ColumnThree>
          <ColumnFour>
            <ColumnHeader>Get in touch</ColumnHeader>
            <ColumnText>Contact us</ColumnText>
            <ColumnText>Partner with us</ColumnText>
            <ColumnText>Advertise with us</ColumnText>
            <ColumnText>Help/FAQs</ColumnText>
          </ColumnFour>
          <ColumnFive>
            <ColumnHeader>Join our community</ColumnHeader>
            <Icon>
              <IconContainer>
                <FaFacebookF />
              </IconContainer>
              <IconContainer>
                <AiOutlineInstagram />
              </IconContainer>
              <IconContainer>
                <AiOutlineTwitter />
              </IconContainer>
              <IconContainer>
                <FaLinkedinIn />
              </IconContainer>
            </Icon>
            <ColumnText>Email Newsletter</ColumnText>
          </ColumnFive>
        </FooterContainer>
      </Bottom>
    </Container>
  );
};

export default Footer;
