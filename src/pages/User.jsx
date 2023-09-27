import { useState } from "react";
import { StyledButton } from "../styles/Button";
import { StyledBody, StyledH1, StyledInput, StyledSelect } from "../styles/Helpers";

const testData = [
  { firstName: "გოგა", lastName: "გემაზაშვილი", userId: 1234 },
  { firstName: "ნიკა", lastName: "აბესაძე", userId: 2345 },
];

const User = () => {
  const [userId, setUserId] = useState("");
  const foundUser = testData.find((user) => user.userId === parseInt(userId));

  const parseData = JSON.parse(localStorage.getItem("special"));
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
      <StyledSelect>
        <option value="#" selected>
          სპეციალობა
        </option>
        {parseData.map((item) => {
          return <option value="#">{item}</option>;
        })}
      </StyledSelect>
      <StyledButton>დაწყება</StyledButton>
    </StyledBody>
  );
};

export default User;
