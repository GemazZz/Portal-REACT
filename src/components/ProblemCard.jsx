import React from "react";
import { StyledName } from "../styles/Helpers";

const ProblemCard = ({ name, problem, isSolved, solution, solvedTime, date, onClick }) => {
  return (
    <div
      className={`relative flex flex-col justify-between items-start ${
        isSolved ? "bg-green-100" : "bg-red-100"
      } w-[1100px] min-h-[200px] m-[20px] p-[20px] pb-[40px] rounded-[10px] border-[1px] border-black`}
      onClick={onClick}
    >
      <div className="absolute top-[10px] right-[10px] text-[20px]">
        <b className="absolute text-[20px] right-2 top-2 min-w-[400px] text-right">{date}</b>
      </div>
      <StyledName className="text-[30px] self-center text-center bg-orange-200">{name}</StyledName>
      <div className="text-[25px]">
        <span className="font-bold text-[25px]">პრობლემა: </span>
        {problem}
      </div>
      <div className="text-[25px]">
        {solution ? (
          <span className="font-bold text-[25px]">ადმ. კომენტარი: </span>
        ) : (
          <span className="font-bold text-[25px]">ადმ. კომენტარი ჯერ არ არის </span>
        )}
        {solution}
      </div>
      <div className="absolute bottom-[60px] right-[10px] text-[20px]">
        <b className="absolute text-[20px] right-2 top-2 min-w-[400px] text-right">{solvedTime}</b>
      </div>
    </div>
  );
};

export default ProblemCard;
