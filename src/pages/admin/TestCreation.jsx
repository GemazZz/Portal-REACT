import { useNavigate } from "react-router-dom";
import { StyledButton } from "../../styles/Button";
import { StyledBody, StyledH1, StyledInput, StyledLabel, StyledSelect, StyledTextArea, StyledCheckbox } from "../../styles/Helpers";
import { useEffect, useState } from "react";
import BackBtn from "../../components/BackBtn";
import { startURL } from "../../helpers/Helpers";

const TestCreation = () => {
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

  useEffect(() => {
    fetch(`${startURL}/v1/specialsEditor`, { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        const parsedData = json.map((special) => special.special);
        setParseData(parsedData);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, []);

  const [parseData, setParseData] = useState([]);

  let questionData;
  if (!multipleAnswer) {
    questionData = {
      category,
      question,
      correctAnswer,
      secondAnswer,
      thirdAnswer,
      fourthAnswer,
      multipleAnswer,
      questionId: new Date().getTime(),
    };
  } else {
    questionData = {
      category,
      question,
      firstAnswer,
      checkFirstAnswer,
      secondAnswer,
      checkSecondAnswer,
      thirdAnswer,
      checkThirdAnswer,
      fourthAnswer,
      checkFourthAnswer,
      multipleAnswer,
      questionId: new Date().getTime(),
    };
  }

  const addQuestionFunc = async () => {
    if (category === "") {
      alert("აირჩიეთ სპეციალობა");
      return;
    }
    if (question === "") {
      alert("ჩაწერეთ კითხვა");
      return;
    }
    await fetch(`${startURL}/v1/questionEditor`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(questionData),
    })
      .then(() => {
        questionData = {};
        navigate("/admin");
      })
      .catch((err) => {
        alert(err);
        console.log("Error:", err);
      });
  };

  return (
    <StyledBody>
      {accessToken === "9007199254740991" && (
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
              <option value="#">სპეციალობა</option>
              {parseData.map((item) => {
                return (
                  <option value={item} key={item}>
                    {item}
                  </option>
                );
              })}
            </StyledSelect>
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
            <div style={{ margin: "20px" }}>
              <StyledCheckbox
                type="checkbox"
                style={{ left: "760px", top: "400px", margin: "0px" }}
                onChange={() => setMultipleAnswer(!multipleAnswer)}
              />
              <StyledLabel style={{ position: "relative", left: "80px", margin: "40px", padding: "0px" }}>რამდენიმე სწორი პასუხი</StyledLabel>
            </div>
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
          <StyledButton
            clr="light"
            size="large"
            onClick={async () => {
              if (multipleAnswer && !checkFirstAnswer && !checkSecondAnswer && !checkThirdAnswer && !checkFourthAnswer) {
                alert("მონიშნეთ სწორი პასუხი!");
                return;
              }
              await addQuestionFunc();
            }}
          >
            დამატება
          </StyledButton>
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

export default TestCreation;
