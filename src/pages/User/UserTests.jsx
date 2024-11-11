import {
  StyledBody,
  StyledCheckbox1,
  StyledDivLine,
  StyledH1,
  StyledLabel,
  StyledNumberOfCorrectAnswer,
  StyledNumberOfTest,
  StyledOptionBtn,
  StyledQuestionLineDiv,
} from "../../styles/Helpers";
import { questionSingleStructure, questionMultiStructure, shuffleArray, timeDif, startURL } from "../../helpers/Helpers";
import { useNavigate, useParams } from "react-router-dom";
import { StyledButton } from "../../styles/Button";
import { useEffect, useState } from "react";

const UserTests = () => {
  const navigate = useNavigate();
  const currentSpecial = useParams().category;
  const userId = useParams().userId;
  const [questionData, setQuestionData] = useState([]);
  const dateHour = new Date().getHours();
  const dateMinute = new Date().getMinutes();

  useEffect(() => {
    fetch(`${startURL}/v1/questionEditor/${currentSpecial}`, { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        setQuestionData(json);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const accessToken = sessionStorage.getItem("accessToken");
  const singleAnswerQuestions = questionData.filter((item) => item.multipleAnswer === false);
  const multipleAnswerQuestions = questionData.filter((item) => item.multipleAnswer === true);

  const singleShuffledArr = shuffleArray(singleAnswerQuestions);
  const multipleShuffledArr = shuffleArray(multipleAnswerQuestions);
  let userAnswers = { userId, special: currentSpecial };
  return (
    <StyledBody>
      {(accessToken === "753951692943816" && (
        <>
          <StyledH1 size="large">გისურვებთ წარმატებებს!</StyledH1>
          {singleAnswerQuestions &&
            singleShuffledArr.map((question, index) => {
              const questionAnswers = questionSingleStructure(question);
              const shuffledQuestionAnswers = shuffleArray(questionAnswers);
              return (
                <StyledQuestionLineDiv key={question.questionId}>
                  <StyledNumberOfTest>{index + 1}</StyledNumberOfTest>
                  <StyledLabel>{question.question}</StyledLabel>
                  {shuffledQuestionAnswers.map((answer, index) => {
                    return (
                      <StyledDivLine key={question.questionId + index}>
                        <StyledCheckbox1
                          type="radio"
                          name={question.questionId}
                          value={answer}
                          id={answer + question.questionId + index + "single"}
                          onChange={() => {
                            if (!userAnswers[question.questionId]) {
                              userAnswers[question.questionId] = answer;
                            } else {
                              userAnswers[question.questionId] = answer;
                            }
                          }}
                        />
                        <StyledOptionBtn htmlFor={answer + question.questionId + index + "single"}>{answer}</StyledOptionBtn>
                      </StyledDivLine>
                    );
                  })}
                  <StyledNumberOfCorrectAnswer>1 სწორი პასუხი</StyledNumberOfCorrectAnswer>
                </StyledQuestionLineDiv>
              );
            })}
          {multipleAnswerQuestions &&
            multipleShuffledArr.map((question, index) => {
              const questionAnswers = questionMultiStructure(question);
              const shuffledQuestionAnswers = shuffleArray(questionAnswers);
              return (
                <StyledQuestionLineDiv key={question.questionId}>
                  <StyledLabel>{question.question}</StyledLabel>
                  {shuffledQuestionAnswers.map((answer) => {
                    return (
                      <StyledDivLine key={index}>
                        <StyledCheckbox1
                          type="checkbox"
                          name={question.questionId}
                          value={answer}
                          id={answer + question.questionId + index + "multi"}
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
                        <StyledOptionBtn htmlFor={answer + question.questionId + index + "multi"}>{answer}</StyledOptionBtn>
                      </StyledDivLine>
                    );
                  })}
                  <StyledNumberOfCorrectAnswer>რამდენიმე სწორი პასუხი</StyledNumberOfCorrectAnswer>
                </StyledQuestionLineDiv>
              );
            })}
          <StyledButton
            size="large"
            margin="large"
            onClick={async () => {
              if (Object.keys(userAnswers).length < 3) {
                alert("შეავსეთ ტესტი!");
                return;
              }
              const time = timeDif(dateHour, dateMinute, new Date().getHours(), new Date().getMinutes());

              await fetch(`${startURL}/v1/stats/${time}`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(userAnswers),
              })
                .then((res) => res.json())
                .then(() => {
                  navigate("/");
                })
                .catch((err) => {
                  console.log("Error:", err);
                });
            }}
          >
            დასრულება
          </StyledButton>
        </>
      )) || <StyledH1>ERROR 403: წვდომა შეზღუდულია!</StyledH1>}
    </StyledBody>
  );
};

export default UserTests;
