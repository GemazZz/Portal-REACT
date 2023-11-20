import BackBtn from "../../components/BackBtn";
import { StyledButton } from "../../styles/Button";
import { StyledBody, StyledH1 } from "../../styles/Helpers";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  if (!localStorage.getItem("questions")) {
    localStorage.setItem("questions", JSON.stringify([]));
  }
  if (!localStorage.getItem("special")) {
    localStorage.setItem("special", JSON.stringify([]));
  }
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
          https://github.com/
          <StyledButton size="large" onClick={() => navigate("/admin/tehttp://192.168.101.215/steditor")}>
            ტესტების რედაქტირება
          </StyledButton>
          <StyledButton size="large" onClick={() => navigate("/admin/specialeditor")}>
            სპეციალობების რედაქტირება
          </StyledButton>
          <StyledButton size="large" onClick={() => navigate("/admin/stats")}>
            სტატისტიკის ნახვა Search Google or type a URL
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
