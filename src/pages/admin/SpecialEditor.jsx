import { useState } from "react";
import { StyledButton, StyledDltBtn } from "../../styles/Button";
import { StyledBody, StyledH1, StyledInput, StyledLabel, StyledLineDiv } from "../../styles/Helpers";
import { addLocalStorage } from "../../helpers/Helpers";

const SpecialEditor = () => {
  if (!localStorage.getItem("special")) {
    localStorage.setItem("special", JSON.stringify([]));
  }
  const parseData = JSON.parse(localStorage.getItem("special"));
  const [newSpecial, setNewSpecial] = useState();
  const [currentSpecials, setCurrentSpecials] = useState(parseData);
  return (
    <StyledBody>
      <StyledH1>ახალი სპეციალობა</StyledH1>
      <StyledInput
        value={newSpecial}
        onChange={(e) => {
          setNewSpecial(e.target.value);
        }}
      />
      <StyledButton
        onClick={() => {
          addLocalStorage("special", newSpecial);
          setCurrentSpecials([...parseData, newSpecial]);
          setNewSpecial("");
        }}
      >
        დამატება
      </StyledButton>
      <StyledH1>სპეციალობის რედაქტირება</StyledH1>
      {currentSpecials.map((item) => {
        return (
          <StyledLineDiv>
            <StyledLabel>{item}</StyledLabel>
            <StyledDltBtn>წაშლა</StyledDltBtn>
          </StyledLineDiv>
        );
      })}
    </StyledBody>
  );
};

export default SpecialEditor;
