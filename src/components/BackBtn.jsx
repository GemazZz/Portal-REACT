import { useNavigate } from "react-router-dom";
import "../App.css";
import { StyledBackBtn } from "../styles/Button";

const BackBtn = () => {
  const navigate = useNavigate();
  const backFunc = () => {
    navigate("/");
  };
  return <StyledBackBtn onClick={backFunc}>უკან</StyledBackBtn>;
};

export default BackBtn;
