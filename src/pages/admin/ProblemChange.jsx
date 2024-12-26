import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { startURL } from "../../helpers/Helpers";
import { StyledH1, StyledProblemBody, StyledTextArea } from "../../styles/Helpers";
import { StyledButton, StyledDltBtn3 } from "../../styles/Button";
import ProblemCard from "../../components/ProblemCard";

const ProblemChange = () => {
  const navigate = useNavigate();
  const problemId = useParams().problemsId;
  const [problem, setProblem] = useState({});
  const [solution, setSolution] = useState("");
  const [isSolved, setIsSolved] = useState(false);
  console.log(isSolved);
  const solutionData = {
    solution,
    isSolved,
  };

  useEffect(() => {
    fetch(`${startURL}/v1/problems/${problemId}`)
      .then((res) => res.json())
      .then((json) => {
        setProblem(json);
        setIsSolved(json.isSolved);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }, []);

  const submit = () => {
    fetch(`${startURL}/v1/problems/${problemId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(solutionData),
    })
      .then(() => {
        navigate("/admin/problems");
      })
      .catch((err) => {
        alert(err);
        console.log("Error:", err);
      });
  };
  return (
    <StyledProblemBody>
      <StyledH1>ადმინისტრაციის კომენტარი</StyledH1>
      <ProblemCard
        key={problem.id}
        name={problem.name}
        problem={problem.problem}
        isSolved={problem.isSolved}
        solvedTime={problem.solvedTime}
        solution={problem.solution}
        date={problem.date}
      />
      <StyledDltBtn3
        onClick={async (e) => {
          await fetch(`${startURL}/v1/problems/${problemId}`, { method: "DELETE" })
            .then(() => {
              navigate("/admin/problems");
            })
            .catch((err) => {
              console.log("Error:", err);
            });
        }}
      >
        წაშლა
      </StyledDltBtn3>

      <StyledTextArea
        size="problem"
        placeholder="ადმინისტრაციის კომენტარი"
        value={solution}
        onChange={(e) => {
          setSolution(e.target.value);
        }}
      ></StyledTextArea>
      <label className="text-[25px] m-[10px]">მონიშნეთ თუ მოგვარდა პრობლემა</label>
      <input
        type="checkbox"
        className="w-[50px] h-[50px]"
        checked={isSolved}
        onChange={() => {
          setIsSolved(!isSolved);
        }}
      />
      <StyledButton size="large" onClick={submit}>
        დასრულება
      </StyledButton>
    </StyledProblemBody>
  );
};

export default ProblemChange;
