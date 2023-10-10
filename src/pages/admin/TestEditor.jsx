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
import { shuffleArray } from "../../helpers/Helpers";

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

  const singleShuffledArr = shuffleArray(singleAnswerQuestions);
  const multipleShuffledArr = shuffleArray(multipleAnswerQuestions);

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
    </StyledBody>
  );
};

export default TestEditor;
