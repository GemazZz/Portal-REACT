import "../App.css";
import { StyledButton } from "../styles/Button";
import { StyledBody, StyledH1 } from "../styles/Helpers";

const Documentation = () => {
  return (
    <StyledBody>
      <StyledH1 size="large">დოკუმენტაცია</StyledH1>
      <StyledButton size="large">ტექნიკური უსაფრთხოების ინსტრუქციები</StyledButton>
      <StyledButton size="large">შრომის კანონტა კოდექსი</StyledButton>
      <StyledH1>საცნობარო ლიტერატურა</StyledH1>
      <StyledButton>ტექნიკური ლიტერატურა</StyledButton>
      <StyledButton>ლექსიკონები</StyledButton>
      <StyledH1>ნორმატიული დოკუმენტები</StyledH1>
      <StyledButton>ГОСТ</StyledButton>
      <StyledButton>ОСТ</StyledButton>
      <StyledButton>EN</StyledButton>
      <StyledButton>DIN</StyledButton>
    </StyledBody>
  );
};

export default Documentation;
