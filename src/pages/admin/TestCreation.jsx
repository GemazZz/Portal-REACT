import { useNavigate } from "react-router-dom";
import { StyledButton } from "../../styles/Button";
import { StyledBody, StyledH1, StyledInput, StyledLabel, StyledSelect, StyledTextArea, StyledCheckbox, StyledFile } from "../../styles/Helpers";
import { useState } from "react";

const TestCreation = (props) => {
  const navigate = useNavigate();
  const getDataAdmin = props.dataAdmin;
  const urlAdmin = getDataAdmin();

  const [question, setQuestion] = useState("");
  const [multipleAnswer, setMultipleAnswer] = useState(false);

  const [correctAnswer, setCorrectAnswer] = useState("");
  const [firstAnswer, setFirstAnswer] = useState("");
  const [checkFirstAnswer, setCheckFirstAnswer] = useState(false);

  const [secondAnswer, setSecondAnswer] = useState("");
  const [checkSecondAnswer, setCheckSecondAnswer] = useState(false);

  const [thirdAnswer, setThirdAnswer] = useState("");
  const [checkThirdAnswer, setCheckThirdAnswer] = useState(false);

  const [fourthAnswer, setFourthAnswer] = useState("");
  const [checkFourthAnswer, setCheckFourthAnswer] = useState(false);

  // console.log(
  //   question,
  //   correctAnswer,
  //   firstAnswer,
  //   checkFirstAnswer,
  //   secondAnswer,
  //   checkSecondAnswer,
  //   thirdAnswer,
  //   checkThirdAnswer,
  //   fourthAnswer,
  //   checkFourthAnswer
  // );

  const parseData = JSON.parse(localStorage.getItem("special"));
  return (
    <StyledBody>
      <StyledH1 size="large" style={{ marginTop: "30px" }}>
        ტესტის შექმნა
      </StyledH1>
      <div>
        <StyledSelect>
          <option value="#" selected>
            სპეციალობა
          </option>
          {parseData.map((item) => {
            return <option value="#">{item}</option>;
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
            <StyledFile type="file" />
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
            <StyledFile type="file" />
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
        <StyledFile type="file" />
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
        <StyledFile type="file" />
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
        <StyledFile type="file" />
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
      <StyledButton size="large" onClick={() => navigate("/" + urlAdmin)}>
        დამატება
      </StyledButton>
    </StyledBody>
  );
};

export default TestCreation;
