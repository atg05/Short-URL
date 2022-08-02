import Image from "next/image";
import React from "react";
import PeopleWorking from "../../public/assets/peopleWorking.svg";
import URLBox from "../urlBox/URLBox";
import styled from "@emotion/styled";

const Heading = styled.h1`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  font-size: 60px;
  font-weight: 700;
  text-align: center;
  margin: 0;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 700px;
`;

const HeroSection = () => {
  return (
    <Div>
      <Heading>MORE THAN JUST SHORTER LINKS</Heading>
      <Image src={PeopleWorking} style={{ margin: 0, padding: 0 }} />
      <URLBox />
    </Div>
  );
};

export default HeroSection;
