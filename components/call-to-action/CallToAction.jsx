import styled from "@emotion/styled";
import React from "react";
import Button from "../common/button/Button";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0px;
  background-image: url("/assets/Meteor.png");
  width: 100%;
`;

const Heading = styled.h3`
  color: #fff;
  margin: 10px 0px;
`;

const CallToAction = () => {
  return (
    <Div>
      <Heading>Boost your links today</Heading>
      <Button variant={"round"}>Get Started</Button>
    </Div>
  );
};

export default CallToAction;
