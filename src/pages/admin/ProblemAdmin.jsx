import { useState, useEffect } from "react";
import ProblemCard from "../../components/ProblemCard";
import { startURL } from "../../helpers/Helpers";
import { StyledBody, StyledH1 } from "../../styles/Helpers";

const ProblemAdmin = () => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    fetch(`${startURL}/v1/problems`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProblems(json);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }, []);

  return (
    <StyledBody>
      <StyledH1>პრობლემები</StyledH1>
      {problems.map((problem) => {
        console.log(problem);
        return (
          <ProblemCard
            key={problem.id}
            name={problem.name}
            problem={problem.problem}
            isSolved={problem.isSolved}
            solution={problem.solution}
            date={problem.date}
          />
        );
      })}
    </StyledBody>
  );
};

export default ProblemAdmin;
