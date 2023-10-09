import { useState } from "react";
import { StyledButton, StyledDltBtn1 } from "../../styles/Button";
import {
  StyledBody,
  StyledCheckbox1,
  StyledDivLine,
  StyledH1,
  StyledInput,
  StyledLabel,
  StyledNumberOfCorrectAnswer,
  StyledOptionBtn,
  StyledQuestionLineDiv,
  StyledSelect,
} from "../../styles/Helpers";
import { shuffleArray } from "../../helpers/Helpers";

const User = () => {
  const [currentSpecial, setCurrentSpecial] = useState("");

  const parseQuestionData = JSON.parse(localStorage.getItem("questions"));
  const [questionData, setQuestionData] = useState(parseQuestionData);

  const singleAnswerQuestions = questionData.filter((item) => {
    return item.multipleAnswer === false;
  });
  const multipleAnswerQuestions = questionData.filter((item) => {
    return item.multipleAnswer === true;
  });

  const singleShuffledArr = shuffleArray(singleAnswerQuestions);
  const multipleShuffledArr = shuffleArray(multipleAnswerQuestions); 

  return (
    <StyledBody>
      <StyledH1>გისურვებთ წარმატებებს</StyledH1>
      {singleAnswerQuestions &&
        singleShuffledArr.map((question) => {
          let questionAnswers = [];
          if (question.correctAnswer !== undefined && question.correctAnswer !== "") {
            questionAnswers.push(question.correctAnswer);
          }
          if (question.secondAnswer !== undefined && question.secondAnswer !== "") {
            questionAnswers.push(question.secondAnswer);
          }
          if (question.thirdAnswer !== undefined && question.thirdAnswer !== "") {
            questionAnswers.push(question.thirdAnswer);
          }
          if (question.fourthAnswer !== undefined && question.fourthAnswer !== "") {
            questionAnswers.push(question.fourthAnswer);
          }
          const shuffledQuestionAnswers = shuffleArray(questionAnswers);
          return (
            currentSpecial === question.category && (
              <StyledQuestionLineDiv key={question.questionId}>
                <StyledLabel>{question.question}</StyledLabel>
                {shuffledQuestionAnswers.map((answer) => {
                  return (
                    <StyledDivLine>
                      <StyledCheckbox1 type="radio" name={question.questionId} value={answer} />
                      <StyledOptionBtn for={answer}>{answer}</StyledOptionBtn>
                    </StyledDivLine>
                  );
                })}
                <StyledNumberOfCorrectAnswer>1 სწორი პასუხი</StyledNumberOfCorrectAnswer>
              </StyledQuestionLineDiv>
            )
          );
        })}
      {multipleAnswerQuestions &&
        multipleShuffledArr.map((question) => {
          let questionAnswers = [];
          if (question.firstAnswer !== undefined && question.firstAnswer !== "") {
            questionAnswers.push(question.firstAnswer);
          }
          if (question.secondAnswer !== undefined && question.secondAnswer !== "") {
            questionAnswers.push(question.secondAnswer);
          }
          if (question.thirdAnswer !== undefined && question.thirdAnswer !== "") {
            questionAnswers.push(question.thirdAnswer);
          }
          if (question.fourthAnswer !== undefined && question.fourthAnswer !== "") {
            questionAnswers.push(question.fourthAnswer);
          }
          const shuffledQuestionAnswers = shuffleArray(questionAnswers);
          return (
            currentSpecial === question.category && (
              <StyledQuestionLineDiv key={question.questionId}>
                <StyledLabel>{question.question}</StyledLabel>
                {shuffledQuestionAnswers.map((answer) => {
                  return (
                    <StyledDivLine>
                      <StyledCheckbox1 type="checkbox" name={question.questionId} value={answer} />
                      <StyledOptionBtn for={answer}>{answer}</StyledOptionBtn>
                    </StyledDivLine>
                  );
                })}
                <StyledNumberOfCorrectAnswer>რამდენიმე სწორი პასუხი</StyledNumberOfCorrectAnswer>
              </StyledQuestionLineDiv>
            )
          );
        })}
    </StyledBody>
  );
};

export default User;
