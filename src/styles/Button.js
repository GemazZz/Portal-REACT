import { styled } from "styled-components";

export const StyledButton = styled.button`
  width: ${(prop) => (prop.size === "large" ? "390px" : "255px")};
  height: ${(prop) => (prop.size === "large" ? "80px" : "50px")};
  transition: 0.12s;
  cursor: pointer;
  background-color: #f3cec6;
  border-radius: 15px;
  font-family: "Times New Roman", Times, serif;
  font-weight: ${(prop) => (prop.size === "large" ? "800" : "600")};
  font-size: ${(prop) => (prop.size === "large" ? "26px" : "20px")};
  margin-top: ${(prop) => (prop.size === "large" ? "15px" : "8px")};
  margin-bottom: ${(prop) => (prop.marg === "large" ? "150px" : "0px")};
  &:hover {
    scale: 1.07;
  }
  &:active {
    scale: 0.96;
  }
`;

export const StyledBackBtn = styled.button`
  position: absolute;
  width: 120px;
  height: 50px;
  border-radius: 20px;
  left: 20px;
  top: 20px;
  transition: 0.12s;
  font-size: 20px;
  background-color: rgb(245, 125, 125);
  &:hover {
    scale: 1.07;
  }
  &:active {
    scale: 0.96;
  }
`;
export const StyledDltBtn = styled.button`
  width: 120px;
  height: 50px;
  border-radius: 20px;
  left: 20px;
  top: 20px;
  transition: 0.12s;
  font-size: 20px;
  background-color: rgb(245, 125, 125);
  &:hover {
    scale: 1.07;
  }
  &:active {
    scale: 0.96;
  }
`;
export const StyledDltBtn1 = styled.button`
  position: absolute;
  width: 120px;
  height: 50px;
  border-radius: 20px;
  right: 15px;
  bottom: 45px;
  transition: 0.12s;
  font-size: 20px;
  background-color: rgb(245, 125, 125);
  &:hover {
    scale: 1.07;
  }
  &:active {
    scale: 0.96;
  }
`;
