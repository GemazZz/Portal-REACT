import { useNavigate } from "react-router-dom";
import "../App.css";
import { StyledBody, StyledForm, StyledH1, StyledInput } from "../styles/Helpers";
import { useState } from "react";
import { StyledButton } from "../styles/Button";
import BackBtn from "../components/BackBtn";

const TestCenter = (props) => {
  const [password, setPassword] = useState("");
  const getDataAdmin = props.dataAdmin;
  const urlAdmin = getDataAdmin();
  const getDataUser = props.dataUser;
  const urlUser = getDataUser();
  const navigate = useNavigate();
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };
  const submit = () => {
    if (password === "123") {
      navigate("/" + urlUser);
    } else if (password === "234") {
      navigate("/" + urlAdmin);
    } else {
      alert("პაროლი არასწორია!");
      return;
    }
  };
  return (
    <StyledBody>
      <BackBtn />
      <StyledH1 size="large">ტესტების ცენტრი</StyledH1>
      <StyledForm>
        <StyledInput type="password" placeholder="ჩაწერეთ პაროლი" onChange={passwordChange} />
        <StyledButton onClick={submit}>შესვლა</StyledButton>
      </StyledForm>
    </StyledBody>
  );
};

export default TestCenter;
