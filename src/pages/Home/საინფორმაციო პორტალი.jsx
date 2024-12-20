import { useNavigate } from "react-router-dom";
import { StyledCred, StyledH1, StyledStartBody } from "../../styles/Helpers";
import { StyledButton } from "../../styles/Button";

const Starter = () => {
  sessionStorage.removeItem("accessToken");
  const navigate = useNavigate();
  return (
    <StyledStartBody>
      <StyledH1 size="large">საინფორმაციო პორტალი</StyledH1>
      <div>
        <StyledButton
          size="large"
          style={{ margin: "8px" }}
          onClick={() => {
            navigate("/documentation");
          }}
        >
          დოკუმენტაცია
        </StyledButton>
        <StyledButton
          size="large"
          style={{ margin: "8px" }}
          onClick={() => {
            navigate("/quality");
          }}
        >
          ხარისხის მართვის სისტემა
        </StyledButton>
      </div>
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
          navigate("/problem");
        }}
      >
        პრობლემის დაფიქსირება
      </StyledButton>
      <StyledCred>GemazZz - 2023წ.</StyledCred>
    </StyledStartBody>
  );
};

export default Starter;
