import { useNavigate } from "react-router-dom";
import { StyledForm, StyledH1, StyledInput, StyledStartBody } from "../../styles/Helpers";
import { useState } from "react";
import { StyledButton } from "../../styles/Button";
import BackBtn from "../../components/BackBtn";

const TestCenter = () => {
  sessionStorage.removeItem("accessToken");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };
  const submit = () => {
    if (password === "123") {
      sessionStorage.setItem("accessToken", JSON.stringify("753951672943816"));
      navigate("/user");
    } else if (password === "234") {
      sessionStorage.setItem("accessToken", JSON.stringify("9007199254740991"));
      navigate("/admin");
    } else {
      alert("პაროლი არასწორია!");
      return;
    }
  };
  return (
    <StyledStartBody>
      <BackBtn />
      <StyledH1 size="large">ტესტების ცენტრი</StyledH1>
      <StyledForm>
        <StyledInput type="password" placeholder="ჩაწერეთ პაროლი" onChange={passwordChange} />
        <StyledButton onClick={submit}>შესვლა</StyledButton>
      </StyledForm>
    </StyledStartBody>
  );
};

export default TestCenter;
