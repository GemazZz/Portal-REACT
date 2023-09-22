import BackBtn from "../../components/BackBtn";
import { StyledButton } from "../../styles/Button";
import { StyledBody, StyledH1 } from "../../styles/Helpers";
import { useNavigate } from "react-router-dom";

const Admin = (props) => {
  const navigate = useNavigate();
  const getDataAdmin = props.dataAdmin;
  const urlAdmin = getDataAdmin();
  return (
    <StyledBody>
      <StyledH1 size="large">ადმინისტრაცია</StyledH1>
      <StyledButton size="large" onClick={() => navigate("/" + urlAdmin + "/testcreation")}>
        ტესტების შედგენა
      </StyledButton>
      <StyledButton size="large" onClick={() => navigate("/" + urlAdmin + "/testeditor")}>
        ტესტების რედაქტირება
      </StyledButton>
      <StyledButton size="large" onClick={() => navigate("/" + urlAdmin + "/stats")}>
        სტატისტიკის ნახვა
      </StyledButton>
    </StyledBody>
  );
};

export default Admin;
