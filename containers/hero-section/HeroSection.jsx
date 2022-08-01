import Image from "next/image";
import React from "react";
import styled from "styled-components";
import PeopleWorking from "../../public/assets/peopleWorking.svg";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Heading = styled.h1`
  display: flex;
  font-weight: bolder;
  width: 700px;
  
`;
const HeroSection = () => {
  return (
    <Div>
      <Heading>MORE THAN JUST SHORTER LINKS</Heading>
      <Image src={PeopleWorking} />
    </Div>
  );
};

export default HeroSection;
