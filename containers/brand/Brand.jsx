import styled from "@emotion/styled";
import React from "react";
import BrandCard from "../../components/brand-card/BrandCard";

const Sdiv = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

const StraightLine = styled.div`
  position: absolute;
  top: 50%;
  bottom: 50;
  width: 90%;
  height: 10px;
  background-color: ${(props) => props.theme.colors.primary};
`;

const Brand = () => {
  return (
    <Sdiv>
      <StraightLine />
      <BrandCard />
      <BrandCard />
      <BrandCard />
    </Sdiv>
  );
};

export default Brand;
