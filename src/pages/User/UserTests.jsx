import {
  StyledBody,
  StyledCheckbox1,
  StyledDivLine,
  StyledH1,
  StyledLabel,
  StyledNumberOfCorrectAnswer,
  StyledOptionBtn,
  StyledQuestionLineDiv,
} from "../../styles/Helpers";
import { questionSingleStructure, questionMultiStructure, shuffleArray } from "../../helpers/Helpers";
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
          const questionAnswers = questionSingleStructure(question);
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
          const questionAnswers = questionMultiStructure(question);
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
