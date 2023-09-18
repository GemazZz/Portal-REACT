import { styled } from "styled-components";

export const StyledH1 = styled.h1`
  font-size: ${(prop) => (prop.size === "large" ? "65px" : "35px")};
  margin-top: ${(prop) => (prop.size === "large" ? "60px" : "30px")};
  margin-bottom: ${(prop) => (prop.size === "large" ? "20px" : "5px")};
  padding: 20px;
  border-radius: 35px;
  cursor: default;
`;

export const StyledBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const StyledDiv = styled.div`
  width: 1300px;
  position: relative;
  display: flex;
  justify-content: space-between;
`;
