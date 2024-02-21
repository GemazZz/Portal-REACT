import { useEffect, useState } from "react";
import { StyledButton } from "../../styles/Button";
import { StyledBody, StyledH1, StyledInput, StyledSelect } from "../../styles/Helpers";
import { useNavigate } from "react-router-dom";
import BackBtn from "../../components/BackBtn";

const User = () => {
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch(`http://192.168.101.44:4000/v1/workersEditor`, { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        setUserData(json);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
    fetch(`http://192.168.101.44:4000/v1/specialsEditor`, { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        const parsedData = json.map((special) => special.special);
        setParseSpecialData(parsedData);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, []);
  const foundUser = userData.find((user) => user.userId === parseInt(userId));
  const [currentSpecial, setCurrentSpecial] = useState("");
  const [parseSpecialData, setParseSpecialData] = useState([]);
  const navigate = useNavigate();
  const accessToken = JSON.parse(sessionStorage.getItem("accessToken"));
  return (
    <StyledBody>
      <BackBtn />
      {accessToken === "753951672943816" && (
        <>
          <StyledH1 size="large">მომხმარებელი</StyledH1>
          {foundUser ? (
            <StyledH1 size="small">
              {foundUser.name}
              <span> </span>
              {foundUser.surname}
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
      {accessToken !== "753951672943816" && <StyledH1>ERROR 403: წვდომა შეზღუდულია!</StyledH1>}
    </StyledBody>
  );
};

export default User;
