import BackBtn from "../../components/BackBtn";
import { StyledButton } from "../../styles/Button";
import { StyledBody, StyledH1 } from "../../styles/Helpers";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const accessToken = JSON.parse(sessionStorage.getItem("accessToken"));
  return (
    <StyledBody>
      <BackBtn />
      {accessToken === "9007199254740991" && (
        <>
          <StyledH1 size="large">ადმინისტრაცია</StyledH1>
          <StyledButton size="large" clr="light" onClick={() => navigate("/admin/testcreation")}>
            ტესტების შედგენა
          </StyledButton>
          <StyledButton size="large" clr="light" onClick={() => navigate("/admin/testeditor")}>
            ტესტების რედაქტირება
          </StyledButton>
          <StyledButton size="large" clr="light" onClick={() => navigate("/admin/stats")}>
            სტატისტიკა
          </StyledButton>
          <StyledButton size="large" clr="light" onClick={() => navigate("/admin/specialeditor")}>
            სპეციალობები
          </StyledButton>
          <StyledButton size="large" clr="light" onClick={() => navigate("/admin/workers")}>
            თანამშრომლები
          </StyledButton>
        </>
      )}
      {accessToken !== "9007199254740991" && <StyledH1>ERROR 403: წვდომა შეზღუდულია!</StyledH1>}
    </StyledBody>
  );
};
export default Admin;
