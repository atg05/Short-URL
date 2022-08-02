import styled from "@emotion/styled";
import React from "react";
import Button from "../../components/common/button/Button";

const Div = styled.div`
  position: absolute;
  bottom: 0;
  /* margin-bottom: -20px; */
  display: flex;
  gap: 20px;
  width: 90%;
  background-image: url("/assets/Meteor.png");
  padding: 35px 40px;
  background-position: center;
`;
const Input = styled.input`
  padding: 10px 20px;
  text-align: left;
  flex: 2;
  border: 0;
  border-radius: 5px;
  &::placeholder {
    font-weight: bold;
    color: ${(props) => props.theme.colors.secondary};
  }
`;

const URLBox = () => {
  return (
    <Div>
      <Input placeholder="Shorten a link here..." />
      <Button>Shorten It!</Button>
    </Div>
  );
};

export default URLBox;
