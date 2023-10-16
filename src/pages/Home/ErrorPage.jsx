import BackBtn from "../../components/BackBtn";
import { StyledBody, StyledH1 } from "../../styles/Helpers";

const ErrorPage = () => {
  return (
    <StyledBody>
      <StyledH1 size="large">თქვენ ხართ არასწორ გვერდზე!</StyledH1>
      <BackBtn />
    </StyledBody>
  );
};

export default ErrorPage;
