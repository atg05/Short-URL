import styled from "@emotion/styled";
import React from "react";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const Span = styled.span`
  margin: 0;
  text-align: center;
  width: 430px;
  color: ${(props) => props.theme.colors.neutral};
`;

const Stats = () => {
  return (
    <Div>
      <h1>Advanced Statistics</h1>
      <Span>
        Track how your links are performing across the web with our advanced
        statisctics dashboard
      </Span>
    </Div>
  );
};

export default Stats;
