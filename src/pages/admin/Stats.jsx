import { useEffect, useState } from "react";
import { StyledDltBtn2 } from "../../styles/Button";
import { StyledBody, StyledH1, StyledLabel1, StyledPL, StyledPR, StyledStatsDiv } from "../../styles/Helpers";

const Stats = () => {
  const [statsData, setStatsData] = useState([]);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch(`http://192.168.101.44:4000/v1/stats`, { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        setStatsData(json);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
    fetch(`http://192.168.101.44:4000/v1/workersEditor`, { method: "GET" })
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
      <b style={{ margin: "15px", fontSize: "25px" }}>მოძებნა CRTL + F</b>
      {statsData.map((stat, index) => {
        const user = userData.find((user) => {
          return user.userId === parseInt(stat.userId);
        });
        if (user) {
          return (
            <StyledStatsDiv key={index}>
              <StyledLabel1>
                {user.name} {user.surname}
              </StyledLabel1>
              <StyledLabel1 style={{ textAlign: "center" }}>{stat.special}</StyledLabel1>
              <StyledLabel1 style={{ textAlign: "center" }}>{stat.result}</StyledLabel1>
              <StyledPL>{stat.date}</StyledPL>
              <StyledPR>
                <b>{stat.time}</b> წუთი
              </StyledPR>
              <StyledDltBtn2
                onClick={async () => {
                  await fetch(`http://192.168.101.44:4000/v1/stats/${stat.statsId}`, { method: "DELETE" })
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
