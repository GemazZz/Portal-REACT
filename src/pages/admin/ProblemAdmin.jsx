import { useState, useEffect } from "react";
import ProblemCard from "../../components/ProblemCard";
import { startURL } from "../../helpers/Helpers";
import { useNavigate } from "react-router-dom";
import BackBtn from "../../components/BackBtn";

const ProblemAdmin = () => {
  const navigate = useNavigate();
  const [problems, setProblems] = useState([]);
  useEffect(() => {
    fetch(`${startURL}/v1/problems`)
      .then((res) => res.json())
      .then((json) => {
        setProblems(json);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }, []);

  return (
    <div className="relative flex flex-col justify-center items-center">
      <BackBtn />
      <h1 className="text-[40px] font-bold m-[40px]">პრობლემები</h1>
      {problems.map((problem) => {
        console.log(problem);
        return (
          <ProblemCard
            key={problem.id}
            name={problem.name}
            problem={problem.problem}
            isSolved={problem.isSolved}
            solvedTime={problem.solvedTime}
            solution={problem.solution}
            date={problem.date}
            onClick={() => {
              navigate(`/admin/problems/${problem.id}`);
            }}
          />
        );
      })}
    </div>
  );
};

export default ProblemAdmin;
