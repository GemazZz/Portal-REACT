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
        <StyledH1 size="small">შეიყვანეთ ტაბელის ნომერი სწორად</StyledH1>
      )}
      <StyledInput
        type="number"
        placeholder="ტაბელის ნომერი"
        onChange={(e) => {
          setUserId(e.target.value);
        }}
      />
      <StyledSelect>
        <option value="#" selected>
          სპეციალობა
        </option>
        <option value="#">ტექნოლოგი</option>
        <option value="#">ინჟინერი</option>
        <option value="#">ეკონომისტი</option>
      </StyledSelect>
      <StyledButton>დაწყება</StyledButton>
    </StyledBody>
  );
};

export default User;
