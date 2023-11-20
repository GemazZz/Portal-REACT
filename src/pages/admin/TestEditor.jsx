import { useState } from "react";
import {
  StyledBody,
  StyledCheckbox1,
  StyledDivLine,
  StyledH1,
  StyledLabel,
  StyledNumberOfCorrectAnswer,
  StyledOptionBtn,
  StyledQuestionLineDiv,
  StyledSelect,
} from "../../styles/Helpers";
import { StyledDltBtn1 } from "../../styles/Button";
import { questionMultiStructure, questionSingleStructure } from "../../helpers/Helpers";
import BackBtn from "../../components/BackBtn";

const TestEditor = () => {
  const [currentSpecial, setCurrentSpecial] = useState("");
  const accessToken = JSON.parse(sessionStorage.getItem("accessToken"));

  const parseSpecialData = JSON.parse(localStorage.getItem("special"));
  const parseQuestionData = JSON.parse(localStorage.getItem("questions"));
  const [questionData, setQuestionData] = useState(parseQuestionData);

  const singleAnswerQuestions = questionData.filter((item) => {
    return item.multipleAnswer === false;
  });
  const multipleAnswerQuestions = questionData.filter((item) => {
    return item.multipleAnswer === true;
  });

  return (
    <StyledBody>
      {accessToken === "9007199254740991" && (
        <>
          <StyledH1>ტესტის რედაქტირება</StyledH1>
          <StyledSelect
            onChange={(e) => {
              setCurrentSpecial(e.target.value);
            }}
          >
            <option value="#" selected>
              სპეციალობა
            </option>
            {parseSpecialData.map((item) => {
              return <option value={item}>{item}</option>;
            })}
          </StyledSelect>
          {singleAnswerQuestions &&
            singleAnswerQuestions.map((question) => {
              const questionAnswers = questionSingleStructure(question);
              return (
                currentSpecial === question.category && (
                  <StyledQuestionLineDiv key={question.questionId}>
                    <StyledLabel>{question.question}</StyledLabel>
                    {questionAnswers.map((answer) => {
                      return (
                        <StyledDivLine>
                          <StyledCheckbox1 type="radio" name={question.questionId} id={answer} checked={question.correctAnswer === answer} />
                          <StyledOptionBtn for={answer}>{answer}</StyledOptionBtn>
                        </StyledDivLine>
                      );
                    })}
                    <StyledNumberOfCorrectAnswer>1 სწორი პასუხი</StyledNumberOfCorrectAnswer>
                    <StyledDltBtn1
                      onClick={() => {
                        const filteredData = parseQuestionData.filter((item) => {
                          return item.questionId !== question.questionId;
                        });
                        localStorage.setItem("questions", JSON.stringify(filteredData));
                        setQuestionData(filteredData);
                      }}
                    >
                      წაშლა
                    </StyledDltBtn1>
                  </StyledQuestionLineDiv>
                )
              );
            })}
          {multipleAnswerQuestions &&
            multipleAnswerQuestions.map((question) => {
              const questionAnswers = questionMultiStructure(question);
              return (
                currentSpecial === question.category && (
                  <StyledQuestionLineDiv key={question.questionId}>
                    <StyledLabel>{question.question}</StyledLabel>
                    {questionAnswers.map((answer) => {
                      return (
                        <StyledDivLine>
                          <StyledCheckbox1
                            type="checkbox"
                            name={question.questionId}
                            id={answer}
                            checked={
                              (question.firstAnswer === answer && question.checkFirstAnswer === true) ||
                              (question.secondAnswer === answer && question.checkSecondAnswer === true) ||
                              (question.thirdAnswer === answer && question.checkThirdAnswer === true) ||
                              (question.fourthAnswer === answer && question.checkFourthAnswer === true)
                            }
                          />
                          <StyledOptionBtn for={answer}>{answer}</StyledOptionBtn>
                        </StyledDivLine>
                      );
                    })}
                    <StyledNumberOfCorrectAnswer>რამდენიმე სწორი პასუხი</StyledNumberOfCorrectAnswer>
                    <StyledDltBtn1
                      onClick={() => {
                        const filteredData = parseQuestionData.filter((item) => {
                          return item.questionId !== question.questionId;
                        });
                        localStorage.setItem("questions", JSON.stringify(filteredData));
                        setQuestionData(filteredData);
                      }}
                    >
                      წაშლა
                    </StyledDltBtn1>
                  </StyledQuestionLineDiv>
                )
              );
            })}
        </>
      )}
      {accessToken !== "9007199254740991" && (
        <>
          <BackBtn />
          <StyledH1>ERROR 403: Access Denied</StyledH1>
        </>
      )}
    </StyledBody>
  );
};

export default TestEditor;
