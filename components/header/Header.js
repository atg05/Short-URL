import Image from "next/image";
import Logo from "../../public/assets/logo.svg";
import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  height: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

const Item = styled.a`
  cursor: pointer;
  color: #bfbfbf;

  &:hover {
    color: #000;
  }
`;

const Header = () => {
  return (
    <header>
      <Nav>
        <Image src={Logo} alt="logo" />
        <Item>Features</Item>
        <Item>Pricing</Item>
        <Item>Resources</Item>
      </Nav>
    </header>
  );
};

export default Header;
