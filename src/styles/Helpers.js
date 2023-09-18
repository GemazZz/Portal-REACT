import { styled } from "styled-components";

export const StyledH1 = styled.h1`
  font-size: ${(prop) => (prop.size === "large" ? "65px" : "35px")};
  margin-top: 80px;
  margin-bottom: 50px;
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
