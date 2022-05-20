import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 50px;
  padding: 10px;
  min-width: 330px;
  //   height: 400px;
`;
const Image = styled.img``;
const TestimonyTitle = styled.h1`
  color: #474747;
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  line-height: 29px;
  letter-spacing: 0.02em;
  text-align: left;
  margin-top: 32px;
`;
const Info = styled.div`
  margin-top: 14px;
  margin-bottom: 24px;
`;
const TestimonyPerson = styled.span`
  background: #0d019a;

  padding: 10px;
  background: #eef8ff;
  font-family: Inter;
  font-size: 13px;
  border-radius: 5px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.02em;
  text-align: left;
`;
const TestimonyText = styled.p`
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #474747;
`;

const Testimony = ({ id, img, name, place, person, text, Bcolor, color }) => {
  return (
    <Container>
      <Image src={img} />
      <TestimonyTitle>{name}</TestimonyTitle>
      <Info>
        <TestimonyPerson style={{ backgroundColor: Bcolor, color: color }}>
          {person}
        </TestimonyPerson>
      </Info>
      <TestimonyText>{text}</TestimonyText>
    </Container>
  );
};

export default Testimony;
