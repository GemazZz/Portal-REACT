import { useState } from "react";
import { StyledButton, StyledDltBtn1 } from "../../styles/Button";
import { StyledBody, StyledH1, StyledInput, StyledSelect } from "../../styles/Helpers";
import { useNavigate } from "react-router-dom";

const testData = [
  { firstName: "გოგა", lastName: "გემაზაშვილი", userId: 1234 },
  { firstName: "ნიკა", lastName: "აბესაძე", userId: 2345 },
];

const User = () => {
  const [userId, setUserId] = useState("");
  const foundUser = testData.find((user) => user.userId === parseInt(userId));
  const [currentSpecial, setCurrentSpecial] = useState("");
  const parseSpecialData = JSON.parse(localStorage.getItem("special"));
  const navigate = useNavigate();
  return (
    <StyledBody>
      <StyledH1 size="large">მომხმარებელი</StyledH1>
      {foundUser ? (
        <StyledH1 size="small">
          {foundUser.firstName}
          <span> </span>
          {foundUser.lastName}
        </StyledH1>
      ) : (
        <StyledH1 size="small">შეიყვანეთ საიდენტიფიკაციო კოდი სწორად</StyledH1>
      )}
      <StyledInput
        type="number"
        onChange={(e) => {
          setUserId(e.target.value);
        }}
      />
      <StyledSelect
        onChange={(e) => {
          setCurrentSpecial(e.target.value);
        }}
      >
        <option value="#" selected>
          სპეციალობა
        </option>
        {parseSpecialData.map((item) => {
          return <option value={item}>{item}</option>;
        })}
      </StyledSelect>
      <StyledButton
        onClick={() => {
          if (!foundUser) {
            alert("შეიყვანეთ საიდენტიფიკაციო კოდი სწორად");
            return;
          }
          if (!currentSpecial || currentSpecial === "#") {
            alert("აირჩიეთ სპეციალობა");
            return;
          }
          navigate();
        }}
      >
        დაწყება
      </StyledButton>
    </StyledBody>
  );
};

export default User;
