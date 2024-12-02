import BackBtn from "../../components/BackBtn";
import { StyledButton } from "../../styles/Button";
import { StyledH1, StyledStartBody } from "../../styles/Helpers";

const Quality = () => {
  return (
    <StyledStartBody>
      <BackBtn />
      <StyledH1 size="large">ხარისხის მართვის სისტემა</StyledH1>
      <StyledButton size="large">ხარისხის სახელმძღვანელო</StyledButton>
      <StyledButton size="large">ხარისხის მართვის სისტემის პოლიტიკა</StyledButton>
      <StyledButton size="large">საწარმოო სტანდარტები</StyledButton>
      <StyledButton size="large">ხმს-ს ანალიზი</StyledButton>
      <StyledButton size="large">აუდიტის შედეგები</StyledButton>
    </StyledStartBody>
  );
};

export default Quality;
