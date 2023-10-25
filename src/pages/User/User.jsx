import { useState } from "react";
import { StyledButton } from "../../styles/Button";
import { StyledBody, StyledH1, StyledInput, StyledSelect } from "../../styles/Helpers";
import { useNavigate } from "react-router-dom";
import BackBtn from "../../components/BackBtn";
import userData from "../../data/userData.json";

const User = () => {
  const [userId, setUserId] = useState("");
  const foundUser = userData.find((user) => user.userId === parseInt(userId));
  const [currentSpecial, setCurrentSpecial] = useState("");
  const parseSpecialData = JSON.parse(localStorage.getItem("special"));
  const navigate = useNavigate();
  const accessToken = JSON.parse(sessionStorage.getItem("accessToken"));
  return (
    <StyledBody>
      <BackBtn />
      {accessToken === "user" && (
        <>
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
              navigate("/user/" + userId + "/" + currentSpecial);
            }}
          >
            დაწყება
          </StyledButton>
        </>
      )}
      {accessToken !== "user" && <StyledH1>ERROR 403: Access Denied</StyledH1>}
    </StyledBody>
  );
};

export default User;
