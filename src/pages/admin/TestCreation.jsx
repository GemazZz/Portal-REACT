import { useNavigate } from "react-router-dom";
import { StyledButton } from "../../styles/Button";
import { StyledBody, StyledH1, StyledInput, StyledLabel, StyledSelect, StyledTextArea, StyledCheckbox, StyledFile } from "../../styles/Helpers";
import { useState } from "react";
import { addLocalStorage } from "../../helpers/Helpers";
import BackBtn from "../../components/BackBtn";

const TestCreation = () => {
  if (!localStorage.getItem("questions")) {
    localStorage.setItem("questions", JSON.stringify([]));
  }
  const navigate = useNavigate();
  const accessToken = JSON.parse(sessionStorage.getItem("accessToken"));

  const [question, setQuestion] = useState("");
  const [multipleAnswer, setMultipleAnswer] = useState(false);
  const [category, setCategory] = useState("");

  const [correctAnswer, setCorrectAnswer] = useState("");
  const [firstAnswer, setFirstAnswer] = useState("");
  const [checkFirstAnswer, setCheckFirstAnswer] = useState(false);

  const [secondAnswer, setSecondAnswer] = useState("");
  const [checkSecondAnswer, setCheckSecondAnswer] = useState(false);

  const [thirdAnswer, setThirdAnswer] = useState("");
  const [checkThirdAnswer, setCheckThirdAnswer] = useState(false);

  const [fourthAnswer, setFourthAnswer] = useState("");
  const [checkFourthAnswer, setCheckFourthAnswer] = useState(false);

  const parseData = JSON.parse(localStorage.getItem("special"));
  let questionData;
  if (!multipleAnswer) {
    questionData = {
      question,
      multipleAnswer,
      questionId: new Date().getTime(),
      category,
      correctAnswer,
      secondAnswer,
      thirdAnswer,
      fourthAnswer,
    };
  } else {
    questionData = {
      question,
      multipleAnswer,
      questionId: new Date().getTime(),
      category,
      firstAnswer,
      checkFirstAnswer,
      secondAnswer,
      checkSecondAnswer,
      thirdAnswer,
      checkThirdAnswer,
      fourthAnswer,
      checkFourthAnswer,
    };
  }

  const addQuestionFunc = () => {
    if (category === "") {
      alert("აირჩიეთ სპეციალობა");
      return;
    }
    if (question === "") {
      alert("ჩაწერეთ კითხვა");
      return;
    }
    addLocalStorage("questions", questionData);
    navigate("/admin");
    questionData = {};
  };

  return (
    <StyledBody>
      {accessToken === "admin" && (
        <>
          <StyledH1 size="large" style={{ marginTop: "30px" }}>
            ტესტის შექმნა
          </StyledH1>
          <div>
            <StyledSelect
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option value="#" selected>
                სპეციალობა
              </option>
              {parseData.map((item) => {
                return (
                  <option value={item} key={item}>
                    {item}
                  </option>
                );
              })}
            </StyledSelect>
            <StyledCheckbox type="checkbox" style={{ right: "450px" }} onChange={() => setMultipleAnswer(!multipleAnswer)} />
            <StyledLabel style={{ position: "absolute", right: "80px", top: "177px" }}>რამდენიმე სწორი პასუხი</StyledLabel>
          </div>
          <div>
            <StyledLabel>აირჩიეთ ფოტო: </StyledLabel>
            <StyledFile type="file" />
          </div>
          <StyledTextArea
            size="large"
            placeholder="შეკითხვის ადგილი"
            value={question}
            onChange={(e) => {
              setQuestion(e.target.value);
            }}
          />
          <div>
            {!multipleAnswer && (
              <>
                <StyledLabel>პასუხი 1:</StyledLabel>
                <StyledInput
                  placeholder="სწორი პასუხი"
                  value={correctAnswer}
                  onChange={(e) => {
                    setCorrectAnswer(e.target.value);
                  }}
                />
              </>
            )}
            {multipleAnswer && (
              <>
                <StyledLabel>პასუხი 1:</StyledLabel>
                <StyledInput
                  value={firstAnswer}
                  onChange={(e) => {
                    setFirstAnswer(e.target.value);
                  }}
                />
                <StyledCheckbox
                  type="checkbox"
                  onChange={() => {
                    setCheckFirstAnswer(!checkFirstAnswer);
                  }}
                />
              </>
            )}
          </div>
          <div>
            <StyledLabel>პასუხი 2:</StyledLabel>
            <StyledInput
              value={secondAnswer}
              onChange={(e) => {
                setSecondAnswer(e.target.value);
              }}
            />
            {multipleAnswer && (
              <StyledCheckbox
                type="checkbox"
                onChange={() => {
                  setCheckSecondAnswer(!checkSecondAnswer);
                }}
              />
            )}
          </div>
          <div>
            <StyledLabel>პასუხი 3:</StyledLabel>
            <StyledInput
              value={thirdAnswer}
              onChange={(e) => {
                setThirdAnswer(e.target.value);
              }}
            />
            {multipleAnswer && (
              <StyledCheckbox
                type="checkbox"
                onChange={() => {
                  setCheckThirdAnswer(!checkThirdAnswer);
                }}
              />
            )}
          </div>
          <div>
            <StyledLabel>პასუხი 4:</StyledLabel>
            <StyledInput
              value={fourthAnswer}
              onChange={(e) => {
                setFourthAnswer(e.target.value);
              }}
            />
            {multipleAnswer && (
              <StyledCheckbox
                type="checkbox"
                onChange={() => {
                  setCheckFourthAnswer(!checkFourthAnswer);
                }}
              />
            )}
          </div>
          <StyledButton size="large" onClick={() => addQuestionFunc()}>
            დამატება
          </StyledButton>
        </>
      )}
      {accessToken !== "admin" && (
        <>
          <BackBtn />
          <StyledH1>ERROR 403: Access Denied</StyledH1>
        </>
      )}
    </StyledBody>
  );
};

export default TestCreation;
