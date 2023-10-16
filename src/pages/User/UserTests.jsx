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
import { useNavigate, useParams } from "react-router-dom";
import { StyledButton } from "../../styles/Button";

const UserTests = () => {
  const navigate = useNavigate();
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
  const usersAnswers = JSON.parse(localStorage.getItem("usersAnswers") || []);
  let userAnswers = { userId };
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
                      <StyledCheckbox1
                        type="radio"
                        name={question.questionId}
                        value={answer}
                        id={answer}
                        onChange={() => {
                          if (!userAnswers[question.questionId]) {
                            userAnswers[question.questionId] = answer;
                          } else {
                            userAnswers[question.questionId] = answer;
                          }
                        }}
                      />
                      <StyledOptionBtn htmlFor={answer}>{answer}</StyledOptionBtn>
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
                      <StyledCheckbox1
                        type="checkbox"
                        name={question.questionId}
                        value={answer}
                        id={answer}
                        onClick={() => {
                          if (!userAnswers[question.questionId]) {
                            userAnswers[question.questionId] = [answer];
                          } else {
                            const index = userAnswers[question.questionId].indexOf(answer);
                            if (index === -1) {
                              userAnswers[question.questionId].push(answer);
                            } else {
                              userAnswers[question.questionId].splice(index, 1);
                            }
                          }
                          if (userAnswers[question.questionId].length === 0) {
                            delete userAnswers[question.questionId];
                          }
                        }}
                      />
                      <StyledOptionBtn htmlFor={answer}>{answer}</StyledOptionBtn>
                    </StyledDivLine>
                  );
                })}
                <StyledNumberOfCorrectAnswer>რამდენიმე სწორი პასუხი</StyledNumberOfCorrectAnswer>
              </StyledQuestionLineDiv>
            )
          );
        })}
      <StyledButton
        size="large"
        margin="large"
        onClick={() => {
          const updatedUserAnswers = [...usersAnswers, userAnswers];
          localStorage.setItem("usersAnswers", JSON.stringify(updatedUserAnswers));
          navigate("/");
        }}
      >
        დასრულება
      </StyledButton>
    </StyledBody>
  );
};

export default UserTests;
