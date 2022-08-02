import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import Brand from "/public/assets/icon-brand-recognition.svg";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 360px;
  background-color: #fff;
  padding: 20px;
  position: relative;
  border-radius: 5px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 45px;
  border-radius: 100%;
  padding: 5px;
  position: absolute;
  top: 0;
  margin-top: -30px;
  background-color: ${(props) => props.theme.colors.primary[1]};
`;

const BrandCard = () => {
  return (
    <Div>
      <ImageContainer>
        <Image src={Brand} style={{ height: "30px", width: "30px" }} />
      </ImageContainer>
      <h4 style={{ margin: 0, marginTop: "30px", padding: 0 }}>
        Brand Recognition
      </h4>
      <p>
        Boost your brand with each click. Generic links don't mean a thing.
        Branded links helps instil confidence in your content.
      </p>
    </Div>
  );
};

export default BrandCard;
