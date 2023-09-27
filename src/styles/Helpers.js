import { styled } from "styled-components";

export const StyledH1 = styled.h1`
  font-size: ${(prop) => (prop.size === "large" ? "65px" : "35px")};
  margin-top: ${(prop) => (prop.size === "large" ? "60px" : "30px")};
  margin-bottom: ${(prop) => (prop.size === "large" ? "20px" : "5px")};
  padding: 20px;
  border-radius: 35px;
  cursor: default;
`;
export const StyledLabel = styled.label`
  font-size: 30px;
  margin-top: ${(prop) => (prop.size === "large" ? "30px" : "0px")};
  margin-bottom: 5px;
  padding: 8px;
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
export const StyledForm = styled.form`
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
  /* align-items: start; */
`;

export const StyledInput = styled.input`
  width: ${(prop) => (prop.size === "large" ? "700px" : "400px")};
  height: ${(prop) => (prop.size === "large" ? "150px" : "65px")};
  padding-left: 15px;
  padding-right: 15px;
  font-size: 25px;
  border-radius: 20px;
  margin-bottom: 15px;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export const StyledTextArea = styled.textarea`
  width: ${(prop) => (prop.size === "large" ? "650px" : "400px")};
  height: ${(prop) => (prop.size === "large" ? "130px" : "65px")};
  margin-bottom: 15px;
  padding: 10px;
  font-size: 25px;
  border-radius: 20px;
`;

export const StyledSelect = styled.select`
  width: 400px;
  height: 65px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 25px;
  border-radius: 20px;
  margin-bottom: 20px;
`;

export const StyledCheckbox = styled.input`
  position: absolute;
  margin-top: 16px;
  margin-left: 12px;
  width: 30px;
  height: 30px;
`;
export const StyledFile = styled.input`
  height: 45px;
  width: 290px;
  font-size: 20px;
`;

export const StyledLineDiv = styled.div`
  height: 70px;
  width: 500px;
  margin: 5px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
`;
