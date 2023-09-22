import { StyledBackBtn } from "../styles/Button";

const CloseBtn = () => {
  const closeFunc = () => {
    window.close();
  };
  return <StyledBackBtn onClick={closeFunc}>დახურვა</StyledBackBtn>;
};

export default CloseBtn;
