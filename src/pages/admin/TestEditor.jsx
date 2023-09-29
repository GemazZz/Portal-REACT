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
import { StyledDltBtn, StyledDltBtn1 } from "../../styles/Button";

const TestEditor = () => {
  const [currentSpecial, setCurrentSpecial] = useState("");

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
          return (
            currentSpecial === question.category && (
              <StyledQuestionLineDiv key={question.questionId}>
                <StyledLabel>{question.question}</StyledLabel>
                <StyledDivLine>
                  <StyledCheckbox1 type="radio" name={question.questionId} />
                  <StyledOptionBtn>Lorem, ipsum.</StyledOptionBtn>
                </StyledDivLine>
                <StyledDivLine>
                  <StyledCheckbox1 type="radio" name={question.questionId} />
                  <StyledOptionBtn>Lorem, ipsum dolor.</StyledOptionBtn>
                </StyledDivLine>
                <StyledDivLine>
                  <StyledCheckbox1 type="radio" name={question.questionId} />
                  <StyledOptionBtn>Lorem ipsum dolor sit.</StyledOptionBtn>
                </StyledDivLine>
                <StyledDivLine>
                  <StyledCheckbox1 type="radio" name={question.questionId} />
                  <StyledOptionBtn>Lorem ipsum dolor sit amet.</StyledOptionBtn>
                </StyledDivLine>
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
          return (
            currentSpecial === question.category && (
              <StyledQuestionLineDiv key={question.questionId}>
                <StyledLabel>{question.question}</StyledLabel>
                <StyledDivLine>
                  <StyledCheckbox1 type="checkbox" />
                  <StyledOptionBtn>Lorem, ipsum.</StyledOptionBtn>
                </StyledDivLine>
                <StyledDivLine>
                  <StyledCheckbox1 type="checkbox" />
                  <StyledOptionBtn>Lorem, ipsum dolor.</StyledOptionBtn>
                </StyledDivLine>
                <StyledDivLine>
                  <StyledCheckbox1 type="checkbox" />
                  <StyledOptionBtn>Lorem ipsum dolor sit.</StyledOptionBtn>
                </StyledDivLine>
                <StyledDivLine>
                  <StyledCheckbox1 type="checkbox" />
                  <StyledOptionBtn>Lorem ipsum dolor sit amet.</StyledOptionBtn>
                </StyledDivLine>
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
    </StyledBody>
  );
};

export default TestEditor;
