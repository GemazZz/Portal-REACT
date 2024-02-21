import { useEffect, useState } from "react";
import { StyledButton, StyledDltBtn } from "../../styles/Button";
import { StyledBody, StyledForm, StyledH1, StyledInput, StyledLabel, StyledLineDiv } from "../../styles/Helpers";
import BackBtn from "../../components/BackBtn";

const SpecialEditor = () => {
  useEffect(() => {
    fetch(`http://192.168.101.44:4000/v1/specialsEditor`, { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        setCurrentSpecials(json);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, []);
  const accessToken = JSON.parse(sessionStorage.getItem("accessToken"));
  const [newSpecial, setNewSpecial] = useState("");
  const [currentSpecials, setCurrentSpecials] = useState([]);

  return (
    <StyledBody>
      {accessToken === "9007199254740991" && (
        <>
          <StyledForm>
            <StyledH1>ახალი სპეციალობა</StyledH1>
            <StyledInput
              value={newSpecial}
              onChange={(e) => {
                setNewSpecial(e.target.value);
              }}
            />
            <StyledButton
              clr="light"
              onClick={(e) => {
                e.preventDefault();
                if (!newSpecial) {
                  alert("ჩაწერეთ სპეციალობა!");
                  return;
                }
                if (
                  currentSpecials.some((special) => {
                    return special.special === newSpecial;
                  })
                ) {
                  alert("სპეციალობა უკვე არსებობს");
                  return;
                }
                fetch(`http://192.168.101.44:4000/v1/specialsEditor/${newSpecial}`, { method: "POST" })
                  .then(fetch(`http://192.168.101.44:4000/v1/workersEditor`, { method: "GET" }))
                  .then((res) => res.json())
                  .then((json) => {
                    setNewSpecial("");
                    setCurrentSpecials(json);
                  })
                  .catch((err) => {
                    console.log("Error:", err);
                  });
              }}
            >
              დამატება
            </StyledButton>
          </StyledForm>
          <StyledH1>სპეციალობის რედაქტირება</StyledH1>
          {currentSpecials.map((item) => {
            return (
              <StyledLineDiv key={item.special}>
                <StyledLabel>{item.special}</StyledLabel>
                <StyledDltBtn
                  onClick={() => {
                    fetch(`http://192.168.101.44:4000/v1/specialsEditor/${item.special}`, { method: "DELETE" })
                      .then(fetch(`http://192.168.101.44:4000/v1/specialsEditor`, { method: "GET" }))
                      .then((res) => res.json())
                      .then((json) => {
                        setCurrentSpecials(json);
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
