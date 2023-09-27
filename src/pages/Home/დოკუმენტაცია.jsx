import { Link } from "react-router-dom";
import { StyledButton } from "../../styles/Button";
import { StyledBody, StyledDiv, StyledH1 } from "../../styles/Helpers";
import BackBtn from "../../components/BackBtn";

const Documentation = () => {
  return (
    <StyledBody>
      <BackBtn />
      <StyledH1 size="large">დოკუმენტაცია</StyledH1>
      <Link to="http://192.168.101.215/%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D0%BA%D0%B0%20%D0%B1%D0%B5%D0%B7%D0%BE%D0%BF%D0%B0%D1%81%D0%BD%D0%BE%D1%81%D1%82%D0%B8/texnika_bezopasnosti.htm">
        <StyledButton size="large">ტექნიკური უსაფრთხოების ინსტრუქციები</StyledButton>
      </Link>
      <StyledButton size="large">შრომის კანონთა კოდექსი</StyledButton>
      <StyledDiv>
        <StyledBody>
          <StyledH1>საცნობარო ლიტერატურა</StyledH1>
          <StyledButton>ტექნიკური ლიტერატურა</StyledButton>
          <StyledButton>ლექსიკონები</StyledButton>
        </StyledBody>
        <StyledBody>
          <StyledH1>ნორმატიული დოკუმენტები</StyledH1>
          <StyledButton>ГОСТ</StyledButton>
          <StyledButton>ОСТ</StyledButton>
          <StyledButton>EN</StyledButton>
          <StyledButton>DIN</StyledButton>
        </StyledBody>
      </StyledDiv>
    </StyledBody>
  );
};

export default Documentation;
