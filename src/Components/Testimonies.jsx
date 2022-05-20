import React from "react";
import { data1 } from "../data";
import styled from "styled-components";
import Testimony from "./Testimony";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Testimonies = () => {
  return (
    <Container>
      {data1.map((data) => {
        return <Testimony key={data.id} {...data}></Testimony>;
      })}
    </Container>
  );
};

export default Testimonies;
