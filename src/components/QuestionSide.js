import "../App.css";
import React from "react";
import QuestionsSideIcon from "../constants/icons/questionsSideIcon";

//The component that shows the symbol of the operation and the future values ​​has been created.
const QuestionsSide = ({ask}) => (
  <div className="QuestionSide">
    <QuestionsSideIcon />
    <span>{ask}</span>
  </div>
  
);
export default QuestionsSide;
