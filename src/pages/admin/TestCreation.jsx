import { useNavigate } from "react-router-dom";
import { StyledButton } from "../../styles/Button";
import { StyledBody, StyledH1, StyledInput, StyledLabel, StyledSelect, StyledTextArea, StyledCheckbox, StyledFile } from "../../styles/Helpers";
import { useState } from "react";

const TestCreation = (props) => {
  const navigate = useNavigate();
  const getDataAdmin = props.dataAdmin;
  const urlAdmin = getDataAdmin();
  const [multipleAnswer, setMultipleAnswer] = useState(false);
  const [firstAnswer, setFirstAnswer] = useState();
  console.log(firstAnswer);
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
          <option value="#">ტექნოლოგი</option>
          <option value="#">ინჟინერი</option>
          <option value="#">ეკონომისტი</option>
        </StyledSelect>
        <StyledCheckbox type="checkbox" style={{ left: "1260px" }} onChange={() => setMultipleAnswer(!multipleAnswer)} />
        <StyledLabel style={{ position: "absolute", left: "1300px", top: "147px" }}>რამდენიმე სწორი პასუხი</StyledLabel>
      </div>
      <div>
        <StyledLabel>აირჩიეთ ფოტო: </StyledLabel>
        <StyledFile type="file" />
      </div>
      <StyledTextArea size="large" placeholder="შეკითხვის ადგილი" />
      <div>
        {!multipleAnswer && (
          <>
            <StyledFile type="file" />
            <StyledLabel>პასუხი 1:</StyledLabel>
            <StyledInput placeholder="სწორი პასუხი" />
          </>
        )}
        {multipleAnswer && (
          <>
            <StyledFile type="file" />
            <StyledLabel>პასუხი 1:</StyledLabel>
            <StyledInput />
          </>
        )}
        {multipleAnswer && <StyledCheckbox type="checkbox" />}
      </div>
      <div>
        <StyledFile type="file" />
        <StyledLabel>პასუხი 2:</StyledLabel>
        <StyledInput />
        {multipleAnswer && <StyledCheckbox type="checkbox" />}
      </div>
      <div>
        <StyledFile type="file" />
        <StyledLabel>პასუხი 3:</StyledLabel>
        <StyledInput />
        {multipleAnswer && <StyledCheckbox type="checkbox" />}
      </div>
      <div>
        <StyledFile type="file" />
        <StyledLabel>პასუხი 4:</StyledLabel>
        <StyledInput />
        {multipleAnswer && <StyledCheckbox type="checkbox" />}
      </div>
      <StyledButton size="large" onClick={() => navigate("/" + urlAdmin)}>
        დამატება
      </StyledButton>
    </StyledBody>
  );
};

export default TestCreation;
