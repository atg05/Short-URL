import React from "react";
import Header from "../components/header/Header";
import HeroSection from "../containers/hero-section/HeroSection";
import Head from "next/head";
import { ThemeProvider, Global } from "@emotion/react";
import { theme } from "../theme.config";
import styled from "@emotion/styled";
import Stats from "../components/stats/Stats";
import Brand from "../containers/brand/Brand";
import CallToAction from "../components/call-to-action/CallToAction";
import Footer from "../components/footer/Footer";

const SDiv = styled.div`
  background-color: #ebebeb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 80px;
  padding: 30px 0px;
`;
const index = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={{
          body: {
            margin: 0,
            padding: 0,
          },
        }}
      />
      <Header />
      <HeroSection />
      <SDiv>
        <Stats />
        <Brand />
        <CallToAction />
      </SDiv>
      <Footer />
    </ThemeProvider>
  );
};

export default index;
