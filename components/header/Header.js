import Image from "next/image";
import Logo from "../../public/assets/logo.svg";
import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  margin-top: 20px;
  height: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;

const Item = styled.a`
  cursor: pointer;
  color: ${(props) => props.theme.colors.neutral};
  &:hover {
    color: #000;
  }
`;

const Header = () => {
  return (
    <Container>
      <Image src={Logo} alt="logo" height={20} width={80} />
      <Item>Features</Item>
      <Item>Pricing</Item>
      <Item>Resources</Item>
    </Container>
  );
};

export default Header;
