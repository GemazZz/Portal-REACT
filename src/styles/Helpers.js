import { styled } from "styled-components";
import backgroundImg from "../assets/SU25Mastered.jpg";

const backgroundClr1 = "#f0f8ff";

export const StyledH1 = styled.h1`
  font-size: ${(prop) => (prop.size === "large" ? "65px" : "35px")};
  margin-top: ${(prop) => (prop.size === "large" ? "60px" : "30px")};
  margin-bottom: ${(prop) => (prop.size === "large" ? "20px" : "5px")};
  padding: 20px;
  border-radius: 35px;
  cursor: default;
`;

export const StyledLabel = styled.label`
  width: 600px;
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
export const StyledStartBody = styled.div`
  background-image: url(${backgroundImg});
  background-size: cover;
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StyledProblemBody = styled.div`
  background-size: cover;
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledDivLine = styled.div`
  position: relative;
  display: flex;
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
  width: ${(prop) => (prop.size === "large" ? "670px" : prop.size === "problem" ? "800px" : "400px")};
  height: ${(prop) => (prop.size === "large" ? "100px" : prop.size === "problem" ? "200px" : "65px")};
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
export const StyledCheckbox1 = styled.input`
  margin-top: 11px;
  margin-right: 15px;
  width: 35px;
  height: 35px;
`;

export const StyledLineDiv = styled.div`
  width: 650px;
  margin: 5px;
  padding: 10px;
  display: flex;
  background-color: ${backgroundClr1};
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
`;
export const StyledQuestionLineDiv = styled.div`
  position: relative;
  background-color: ${backgroundClr1};
  width: 1100px;
  margin: 12px;
  padding: 20px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
`;

export const StyledNumberOfCorrectAnswer = styled.p`
  font-size: 20px;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;
export const StyledPR = styled.p`
  font-size: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const StyledPL = styled.p`
  font-size: 20px;
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const StyledOptionBtn = styled.label`
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 10px;
  width: min(500px);
  transition: 0.12s;
  cursor: pointer;
  font-weight: 600;
  font-size: 25px;
  margin-top: 12px;
  background-color: #7ec2a8;
  border-radius: 15px;
  border: 1px solid black;
  font-family: "Times New Roman", Times, serif;
  &:hover {
    background-color: #5897ee;
    scale: 1.02;
  }
`;

export const StyledStatsDiv = styled.div`
  position: relative;
  display: flex;
  background-color: ${backgroundClr1};
  width: 1200px;
  min-height: 230px;
  margin: 12px;
  padding-top: 40px;
  padding-bottom: 40px;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
`;

export const StyledProblemDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${backgroundClr1};
  width: 1200px;
  min-height: 200px;
  margin: 12px;
  padding: 20px;
  padding-bottom: 40px;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
`;

export const StyledLabel1 = styled.label`
  background-color: #f3cec6;
  width: 400px;
  position: relative;
  font-size: 30px;
  margin: 10px;
  padding: 10px;
  border-radius: 35px;
  border: 1px solid black;
  cursor: default;
`;

export const StyledName = styled.label`
  width: 400px;
  position: relative;
  font-size: 30px;
  margin: 10px;
  padding: 10px;
  border-radius: 35px;
  border: 1px solid black;
  cursor: default;
`;

export const StyledCred = styled.p`
  position: absolute;
  bottom: 10px;
  font-weight: bold;
  cursor: default;
`;
export const StyledNumberOfTest = styled.b`
  font-size: 35px;
`;
