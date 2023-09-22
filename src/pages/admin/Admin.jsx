import { StyledButton } from "../../styles/Button";
import { StyledBody, StyledH1 } from "../../styles/Helpers";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  return (
    <StyledBody>
      <StyledH1 size="large">ადმინისტრაცია</StyledH1>
      <StyledButton size="large" onClick={() => navigate("/")}>
        ტესტების შედგენა
      </StyledButton>
      <StyledButton size="large" onClick={() => navigate("/")}>
        ტესტების რედაქტირება
      </StyledButton>
      <StyledButton size="large" onClick={() => navigate("/")}>
        სტატისტიკის ნახვა
      </StyledButton>
    </StyledBody>
  );
};

export default Admin;
