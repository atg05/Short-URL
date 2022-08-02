import React from "react";
import styled from "@emotion/styled";

const Buttons = styled.button`
  width: 120px;
  color: #ffffff;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 0;
  border-radius: ${(props) => (props.variant === "round" ? "50px;" : "5px;")};
  height: 40px;
  cursor: pointer;
`;

const Button = ({ children, variant }) => {
  return <Buttons variant={variant}>{children}</Buttons>;
};

export default Button;
