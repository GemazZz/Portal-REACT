import { useNavigate } from "react-router-dom";
import { StyledH1, StyledStartBody } from "../../styles/Helpers";
import { StyledButton } from "../../styles/Button";

function Starter() {
  sessionStorage.removeItem("accessToken");
  const navigate = useNavigate();
  return (
    <StyledStartBody>
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
    </StyledStartBody>
  );
}

export default Starter;
