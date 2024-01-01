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
          <StyledButton size="large" onClick={() => navigate("/admin/testcreation")}>
            ტესტების შედგენა
          </StyledButton>
          <StyledButton size="large" onClick={() => navigate("/admin/testeditor")}>
            ტესტების რედაქტირება
          </StyledButton>
          <StyledButton size="large" onClick={() => navigate("/admin/specialeditor")}>
            სპეციალობების რედაქტირება
          </StyledButton>
          <StyledButton size="large" onClick={() => navigate("/admin/stats")}>
            სტატისტიკის ნახვა
          </StyledButton>
          <StyledButton size="large" onClick={() => navigate("/admin/workers")}>
            თანამშრომლების ნახვა
          </StyledButton>
        </>
      )}
      {accessToken !== "9007199254740991" && <StyledH1>ERROR 403: Access Denied</StyledH1>}
    </StyledBody>
  );
};
export default Admin;
