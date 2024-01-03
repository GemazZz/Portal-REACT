import { useEffect, useState } from "react";
import { StyledDltBtn2 } from "../../styles/Button";
import { StyledBody, StyledH1, StyledLabel1, StyledP, StyledStatsDiv } from "../../styles/Helpers";

const Stats = () => {
  const [statsData, setStatsData] = useState([]);
  const [userData, setUserData] = useState([]);
  console.log(statsData);
  useEffect(() => {
    fetch(`http://localhost:4000/v1/stats`, { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        setStatsData(json);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
    fetch(`http://localhost:4000/v1/workersEditor`, { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        setUserData(json);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, []);
  return (
    <StyledBody>
      <StyledH1>სტატისტიკა</StyledH1>
      {statsData.map((stat) => {
        const user = userData.find((user) => {
          return user.userId === parseInt(stat.userId);
        });
        if (user) {
          return (
            <StyledStatsDiv key={stat.statId}>
              <StyledLabel1>
                {user.name} {user.surname}
              </StyledLabel1>
              <StyledLabel1>{stat.special}</StyledLabel1>
              <StyledLabel1>{stat.result}</StyledLabel1>
              <StyledP>{stat.date}</StyledP>
              <StyledDltBtn2
                onClick={async () => {
                  await fetch(`http://localhost:4000/v1/stats/${stat.statsId}`, { method: "DELETE" })
                    .then((res) => res.json())
                    .then((json) => {
                      setStatsData(json);
                    })
                    .catch((err) => {
                      console.log("Error:", err);
                    });
                }}
              >
                წაშლა
              </StyledDltBtn2>
            </StyledStatsDiv>
          );
        }
      })}
    </StyledBody>
  );
};

export default Stats;
