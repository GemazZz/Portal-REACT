import { useEffect, useState } from "react";
import { StyledBody, StyledH1, StyledLabel, StyledOptionBtn, StyledQuestionLineDiv } from "../../styles/Helpers";
import { arrayToObject, compareObjects, startURL } from "../../helpers/Helpers";
import { useParams } from "react-router-dom";

const StatReview = () => {
  const statsId = useParams().statsId;
  const [statData, setStatsData] = useState({});
  const [correctQuestionData, setCorrectQuestionData] = useState({});
  const [questionData, setQuestionData] = useState([]);
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetch(`${startURL}/v1/stats`, { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        const stat = json.filter((stat) => stat.statsId === parseInt(statsId));
        setStatsData(stat[0]);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, []);

  useEffect(() => {
    if (Object.keys(statData).length > 0) {
      const special = statData.special;
      fetch(`${startURL}/v1/questionEditor/${special}`, { method: "GET" })
        .then((res) => res.json())
        .then((json) => {
          setQuestionData(json);
          const correctAnswerData = json.map((stat) => {
            return { [stat.questionId]: stat.correctAnswer };
          });
          const questionObj = arrayToObject(correctAnswerData);
          setCorrectQuestionData(questionObj);
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  }, [statData]);

  useEffect(() => {
    const final = compareObjects(correctQuestionData, statData);
    setResult(final);
  }, [correctQuestionData, statData]);

  return (
    <StyledBody>
      {result.length > 0 && (
        <>
          <StyledH1>შეცდომები</StyledH1>
          {result.map((incorrect, index) => {
            const question = questionData.find((question) => {
              return question.questionId === parseInt(incorrect.key);
            });
            return (
              <StyledQuestionLineDiv key={index}>
                <StyledLabel>{question.question}</StyledLabel>
                <div style={{ display: "flex", gap: 20, alignItems: "center", justifyContent: "start" }}>
                  <p style={{ fontSize: 30 }}>დაფიქსირებული:</p>
                  <StyledOptionBtn>{incorrect.obj2Value || <span style={{ color: "red" }}>პასუხი არ იყო გაცემული</span>}</StyledOptionBtn>
                </div>
                <div style={{ display: "flex", gap: 20, alignItems: "center", justifyContent: "start" }}>
                  <p style={{ fontSize: 30 }}>სწორი:</p>
                  <StyledOptionBtn>{incorrect.obj1Value}</StyledOptionBtn>
                </div>
              </StyledQuestionLineDiv>
            );
          })}
        </>
      )}
      {result.length === 0 && <StyledH1 size="large">ყველა პასუხი სწორია!</StyledH1>}
    </StyledBody>
  );
};

export default StatReview;
