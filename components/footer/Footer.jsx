import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import { css } from "@emotion/react";

const SFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: ${(props) => props.theme.colors.neutral[3]};
`;

const Footer = () => {
  return (
    <SFooter>
      <div>
        <Image src={"/assets/logo_white.svg"} height={100} width={100} />
      </div>
      <div>
        <div> 1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </SFooter>
  );
};

export default Footer;
