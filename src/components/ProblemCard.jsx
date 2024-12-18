import React from "react";
import { StyledLabel, StyledLabel1, StyledPR, StyledProblemDiv } from "../styles/Helpers";

const ProblemCard = ({ name, problem, isSolved, solution, date, onClick }) => {
  console.log(date);
  return (
    <StyledProblemDiv onClick={onClick}>
      <StyledPR>
        <b>{date}</b>
      </StyledPR>
      <StyledLabel>{name}</StyledLabel>
      <StyledLabel>{problem}</StyledLabel>
      <StyledLabel1>{isSolved ? isSolved : "არაფერი"}</StyledLabel1>
    </StyledProblemDiv>
  );
};

export default ProblemCard;
