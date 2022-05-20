import React from "react";
import { data2 } from "../data";
import styled from "styled-components";
import Testimony2 from "./Testimony2";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Testimonies = () => {
  return (
    <Container>
      {data2.map((data) => {
        return <Testimony2 key={data.id} {...data} />;
      })}
    </Container>
  );
};

export default Testimonies;
