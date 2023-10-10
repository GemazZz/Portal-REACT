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
} from "../../styles/Helpers";
import { shuffleArray } from "../../helpers/Helpers";
import { useParams } from "react-router-dom";
import { StyledButton } from "../../styles/Button";

const UserTests = () => {
  const currentSpecialParams = useParams().category;
  const userId = useParams().userId;
  const questionData = JSON.parse(localStorage.getItem("questions"));

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
      <StyledH1 size="large">გისურვებთ წარმატებებს!</StyledH1>
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
            currentSpecialParams === question.category && (
              <StyledQuestionLineDiv key={question.questionId}>
                <StyledLabel>{question.question}</StyledLabel>
                {shuffledQuestionAnswers.map((answer) => {
                  return (
                    <StyledDivLine>
                      <StyledCheckbox1 type="radio" name={question.questionId} value={answer} id={answer} />
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
            currentSpecialParams === question.category && (
              <StyledQuestionLineDiv key={question.questionId}>
                <StyledLabel>{question.question}</StyledLabel>
                {shuffledQuestionAnswers.map((answer) => {
                  return (
                    <StyledDivLine>
                      <StyledCheckbox1 type="checkbox" name={question.questionId} value={answer} id={answer} />
                      <StyledOptionBtn for={answer}>{answer}</StyledOptionBtn>
                    </StyledDivLine>
                  );
                })}
                <StyledNumberOfCorrectAnswer>რამდენიმე სწორი პასუხი</StyledNumberOfCorrectAnswer>
              </StyledQuestionLineDiv>
            )
          );
        })}
      <StyledButton size="large" marg="large">
        დასრულება
      </StyledButton>
    </StyledBody>
  );
};

export default UserTests;
