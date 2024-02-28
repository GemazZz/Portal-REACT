import { useEffect, useState } from "react";
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

  const [parseSpecialData, setParseSpecialData] = useState([]);
  const [questionData, setQuestionData] = useState([]);

  const singleAnswerQuestions = questionData.filter((item) => {
    return item.multipleAnswer === false;
  });
  const multipleAnswerQuestions = questionData.filter((item) => {
    return item.multipleAnswer === true;
  });

  useEffect(() => {
    fetch(`http://192.168.101.44:4000/v1/specialsEditor`, { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        const parsedData = json.map((special) => special.special);
        setParseSpecialData(parsedData);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, []);

  useEffect(() => {
    fetch(`http://192.168.101.44:4000/v1/questionEditor/${currentSpecial}`, { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        setQuestionData(json);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, [currentSpecial]);

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
            <option value="#">სპეციალობა</option>
            {parseSpecialData.map((item) => {
              return <option value={item}>{item}</option>;
            })}
          </StyledSelect>
          <b style={{ margin: "15px", fontSize: "25px" }}>მოძებნა CRTL + F</b>
          {singleAnswerQuestions &&
            singleAnswerQuestions.map((question) => {
              const questionAnswers = questionSingleStructure(question);
              return (
                currentSpecial === question.category && (
                  <StyledQuestionLineDiv key={question.questionId}>
                    <StyledLabel>{question.question}</StyledLabel>
                    {questionAnswers.map((answer, index) => {
                      return (
                        <StyledDivLine key={question.questionId + index}>
                          <StyledCheckbox1
                            type="radio"
                            name={question.questionId}
                            id={answer + "single"}
                            checked={question.correctAnswer === answer}
                            readOnly
                          />
                          <StyledOptionBtn>{answer}</StyledOptionBtn>
                        </StyledDivLine>
                      );
                    })}
                    <StyledNumberOfCorrectAnswer>1 სწორი პასუხი</StyledNumberOfCorrectAnswer>
                    <StyledDltBtn1
                      onClick={async () => {
                        const filteredData = questionData.filter((item) => {
                          return item.questionId !== question.questionId;
                        });
                        await fetch(`http://192.168.101.44:4000/v1/questionEditor/${question.questionId}`, { method: "DELETE" })
                          .then(() => {
                            setQuestionData(filteredData);
                          })
                          .catch((err) => {
                            console.log("Error:", err);
                          });
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
                    {questionAnswers.map((answer, index) => {
                      return (
                        <StyledDivLine key={question.questionId + index}>
                          <StyledCheckbox1
                            type="checkbox"
                            name={question.questionId}
                            id={answer + "multi"}
                            checked={
                              (question.firstAnswer === answer && question.checkFirstAnswer === true) ||
                              (question.secondAnswer === answer && question.checkSecondAnswer === true) ||
                              (question.thirdAnswer === answer && question.checkThirdAnswer === true) ||
                              (question.fourthAnswer === answer && question.checkFourthAnswer === true)
                            }
                            readOnly
                          />
                          <StyledOptionBtn>{answer}</StyledOptionBtn>
                        </StyledDivLine>
                      );
                    })}
                    <StyledNumberOfCorrectAnswer>რამდენიმე სწორი პასუხი</StyledNumberOfCorrectAnswer>
                    <StyledDltBtn1
                      onClick={async () => {
                        const filteredData = questionData.filter((item) => {
                          return item.questionId !== question.questionId;
                        });
                        await fetch(`http://192.168.101.44:4000/v1/questionEditor/${question.questionId}`, { method: "DELETE" })
                          .then(() => {
                            setQuestionData(filteredData);
                          })
                          .catch((err) => {
                            console.log("Error:", err);
                          });
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
          <StyledH1>ERROR 403: წვდომა შეზღუდულია!</StyledH1>
        </>
      )}
    </StyledBody>
  );
};

export default TestEditor;
