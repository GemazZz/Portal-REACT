import { useEffect, useState } from "react";
import { StyledButton, StyledDltBtn } from "../../styles/Button";
import { StyledBody, StyledForm, StyledH1, StyledInput, StyledLabel, StyledLineDiv } from "../../styles/Helpers";
import BackBtn from "../../components/BackBtn";

const SpecialEditor = () => {
  const accessToken = JSON.parse(sessionStorage.getItem("accessToken"));
  const [newName, setNewName] = useState("");
  const [newSurname, setNewSurname] = useState("");
  const [newUserId, setNewUserId] = useState();
  const [workersData, setWorkersData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/v1/workersEditor`, { method: "GET" })
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
      <StyledH1>სპეციალობის რედაქტირება</StyledH1>
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
              placeholder="საიდენტიფიკაციო კოდი"
              value={newUserId}
              onChange={(e) => {
                setNewUserId(e.target.value);
              }}
            />
            <StyledButton
              onClick={(e) => {
                e.preventDefault();
                if (!newName || !newSurname || !newUserId) {
                  alert("შეავსეთ ფორმა სრულად!");
                  return;
                }
                fetch(`http://localhost:3000/v1/workersEditor/${newUserId}/${newName}/${newSurname}`, { method: "POST" })
                  .then(fetch(`http://localhost:3000/v1/workersEditor`, { method: "GET" }))
                  .then((res) => res.json())
                  .then((json) => {
                    setWorkersData(json);
                    setNewName();
                    setNewSurname();
                    setNewUserId();
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
          </StyledForm>
          {workersData.map((item) => {
            return (
              <StyledLineDiv>
                <StyledLabel>
                  <span>
                    {item.name} {item.surname} || {item.userId}
                  </span>
                </StyledLabel>
                <StyledDltBtn
                  onClick={() => {
                    fetch(`http://localhost:3000/v1/workersEditor/${item.userId}`, { method: "DELETE" })
                      .then(fetch(`http://localhost:3000/v1/workersEditor`, { method: "GET" }))
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
          <StyledH1>ERROR 403: Access Denied</StyledH1>
        </>
      )}
    </StyledBody>
  );
};

export default SpecialEditor;
