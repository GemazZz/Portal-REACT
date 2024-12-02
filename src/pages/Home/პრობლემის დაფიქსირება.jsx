import { useState } from "react";
import BackBtn from "../../components/BackBtn";
import { StyledButton } from "../../styles/Button";
import { StyledH1, StyledInput, StyledStartBody, StyledTextArea } from "../../styles/Helpers";
import { startURL } from "../../helpers/Helpers";
import { useNavigate } from "react-router-dom";

const ProblemUser = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [problem, setProblem] = useState("");
  const submit = async () => {
    await fetch(`${startURL}/v1/problems`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, problem }),
    })
      .then(() => {
        alert("თქვენი პრობლემა გაგზავნილია");
        navigate("/");
      })
      .catch((err) => {
        alert(err);
        console.log("Error:", err);
      });
  };
  return (
    <StyledStartBody>
      <BackBtn />
      <StyledH1>პრობლემის დაფიქსირება</StyledH1>
      <StyledInput
        type="text"
        placeholder="სახელი და გვარი"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <StyledTextArea
        size="problem"
        placeholder="მოგვიყევით პრობლემის შესახებ"
        value={problem}
        onChange={(e) => {
          setProblem(e.target.value);
        }}
      ></StyledTextArea>
      <StyledButton size="large" onClick={submit}>
        გაგზავნა
      </StyledButton>
    </StyledStartBody>
  );
};

export default ProblemUser;
