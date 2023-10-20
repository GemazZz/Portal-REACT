import { useState } from "react";
import { StyledButton, StyledDltBtn } from "../../styles/Button";
import { StyledBody, StyledForm, StyledH1, StyledInput, StyledLabel, StyledLineDiv } from "../../styles/Helpers";
import { addLocalStorage } from "../../helpers/Helpers";
import BackBtn from "../../components/BackBtn";

const SpecialEditor = () => {
  if (!localStorage.getItem("special")) {
    localStorage.setItem("special", JSON.stringify([]));
  }
  const accessToken = JSON.parse(sessionStorage.getItem("accessToken"));
  const parseData = JSON.parse(localStorage.getItem("special"));
  const [newSpecial, setNewSpecial] = useState("");
  const [currentSpecials, setCurrentSpecials] = useState(parseData);
  const dltSpecial = (items) => {
    const updatedData = currentSpecials.filter((item) => {
      return item !== items;
    });
    setCurrentSpecials(updatedData);
    localStorage.setItem("special", JSON.stringify(updatedData));
  };

  return (
    <StyledBody>
      {accessToken === "admin" && (
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
              onClick={(e) => {
                e.preventDefault();
                if (!newSpecial) {
                  alert("ჩაწერეთ სპეციალობა!");
                  return;
                }
                addLocalStorage("special", newSpecial);
                setCurrentSpecials([...parseData, newSpecial]);
                setNewSpecial("");
              }}
            >
              დამატება
            </StyledButton>
          </StyledForm>
          <StyledH1>სპეციალობის რედაქტირება</StyledH1>
          {currentSpecials.map((item) => {
            return (
              <StyledLineDiv>
                <StyledLabel>{item}</StyledLabel>
                <StyledDltBtn
                  onClick={() => {
                    dltSpecial(item);
                  }}
                >
                  წაშლა
                </StyledDltBtn>
              </StyledLineDiv>
            );
          })}
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

export default SpecialEditor;
