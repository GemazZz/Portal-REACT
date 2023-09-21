import { useNavigate } from "react-router-dom";
import "../App.css";
import { StyledBody, StyledH1 } from "../styles/Helpers";
import { StyledButton } from "../styles/Button";
import BackBtn from "../components/BackBtn";

function Starter() {
  const navigate = useNavigate();
  return (
    <StyledBody>
      <StyledH1 size="large">საინფორმაციო პორტალი</StyledH1>
      <StyledButton
        size="large"
        onClick={() => {
          navigate("/documentation");
        }}
      >
        დოკუმენტაცია
      </StyledButton>
      <StyledButton
        size="large"
        onClick={() => {
          navigate("/quality");
        }}
      >
        ხარისხის მართვის სისტემა
      </StyledButton>
      <StyledButton
        size="large"
        onClick={() => {
          navigate("/testcenter");
        }}
      >
        სასწავლო ცენტრი
      </StyledButton>
      <StyledButton
        size="large"
        onClick={() => {
          navigate("/others");
        }}
      >
        სხვადასხვა
      </StyledButton>
    </StyledBody>
  );
}

export default Starter;
