import { useEffect, useState } from "react";
import { StyledButton, StyledDltBtn } from "../../styles/Button";
import { StyledBody, StyledForm, StyledH1, StyledInput, StyledLabel, StyledLineDiv } from "../../styles/Helpers";
import BackBtn from "../../components/BackBtn";

const SpecialEditor = () => {
  const accessToken = JSON.parse(sessionStorage.getItem("accessToken"));
  const [newName, setNewName] = useState("");
  const [newSurname, setNewSurname] = useState("");
  const [newUserId, setNewUserId] = useState("");
  const [workersData, setWorkersData] = useState([]);

  useEffect(() => {
    fetch(`http://192.168.101.44:4000/v1/workersEditor`, { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        setWorkersData(json);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, []);

  return (
    <StyledBody>
      <StyledH1>თანამშრომლების დამატება</StyledH1>
      {accessToken === "9007199254740991" && (
        <>
          <StyledForm>
            <StyledInput
              placeholder="სახელი"
              value={newName}
              onChange={(e) => {
                setNewName(e.target.value);
              }}
            />
            <StyledInput
              placeholder="გვარი"
              value={newSurname}
              onChange={(e) => {
                setNewSurname(e.target.value);
              }}
            />
            <StyledInput
              type="number"
              placeholder="საიდენტიფიკაციო კოდი"
              value={newUserId}
              onChange={(e) => {
                setNewUserId(e.target.value);
              }}
            />
            <StyledButton
              clr="light"
              onClick={(e) => {
                e.preventDefault();
                if (!newName || !newSurname || !newUserId) {
                  alert("შეავსეთ ფორმა სრულად!");
                  return;
                }
                fetch(`http://192.168.101.44:4000/v1/workersEditor/${newUserId}/${newName}/${newSurname}`, { method: "POST" })
                  .then(fetch(`http://192.168.101.44:4000/v1/workersEditor`, { method: "GET" }))
                  .then((res) => res.json())
                  .then((json) => {
                    setWorkersData(json);
                    setNewName("");
                    setNewSurname("");
                    setNewUserId("");
                  })
                  .catch((err) => {
                    console.log("Error:", err);
                  });
              }}
              size="large"
              margin="small"
            >
              დამატება
            </StyledButton>
            <b style={{ margin: "15px", fontSize: "25px" }}>მოძებნა CRTL + F</b>
          </StyledForm>
          {workersData.map((item) => {
            return (
              <StyledLineDiv key={item.userId}>
                <StyledLabel>
                  <span>
                    {item.surname} {item.name} || {item.userId}
                  </span>
                </StyledLabel>
                <StyledDltBtn
                  onClick={() => {
                    fetch(`http://192.168.101.44:4000/v1/workersEditor/${item.userId}`, { method: "DELETE" })
                      .then((res) => res.json())
                      .then((json) => {
                        setWorkersData(json);
                      })
                      .catch((err) => {
                        console.log("Error:", err);
                      });
                  }}
                >
                  წაშლა
                </StyledDltBtn>
              </StyledLineDiv>
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

export default SpecialEditor;
