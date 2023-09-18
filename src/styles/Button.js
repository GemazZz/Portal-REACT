import { styled } from "styled-components";

export const StyledButton = styled.button`
  width: ${(prop) => (prop.size === "large" ? "380px" : "255px")};
  height: ${(prop) => (prop.size === "large" ? "80px" : "50px")};
  transition: 0.12s;
  cursor: pointer;
  background-color: #f3cec6;
  border-radius: 15px;
  font-family: "Times New Roman", Times, serif;
  font-weight: ${(prop) => (prop.size === "large" ? "800" : "600")};
  font-size: ${(prop) => (prop.size === "large" ? "26px" : "20px")};
  margin-top: ${(prop) => (prop.size === "large" ? "15px" : "8px")};
  &:hover {
    scale: 1.07;
  }
  &:active {
    scale: 0.96;
  }
`;
