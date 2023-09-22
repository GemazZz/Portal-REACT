import { useNavigate } from "react-router-dom";
import { StyledButton } from "../../styles/Button";
import { StyledBody, StyledH1, StyledInput, StyledLabel, StyledSelect, StyledTextArea } from "../../styles/Helpers";

const TestCreation = (props) => {
  const navigate = useNavigate();
  const getDataAdmin = props.dataAdmin;
  const urlAdmin = getDataAdmin();
  return (
    <StyledBody>
      <StyledH1 size="large">ტესტის შექმნა</StyledH1>
      <StyledSelect>
        <option value="#" selected>
          სპეციალობა
        </option>
        <option value="#">ტექნოლოგი</option>
        <option value="#">ინჟინერი</option>
        <option value="#">ეკონომისტი</option>
      </StyledSelect>
      <StyledTextArea size="large" placeholder="შეკითხვის ადგილი" />
      <div>
        <StyledLabel>პასუხი 1:</StyledLabel>
        <StyledInput />
      </div>
      <div>
        <StyledLabel>პასუხი 2:</StyledLabel>
        <StyledInput />
      </div>
      <div>
        <StyledLabel>პასუხი 3:</StyledLabel>
        <StyledInput />
      </div>
      <div>
        <StyledLabel>პასუხი 4:</StyledLabel>
        <StyledInput />
      </div>
      <StyledButton size="large" onClick={() => navigate("/" + urlAdmin)}>
        დამატება
      </StyledButton>
    </StyledBody>
  );
};

export default TestCreation;
