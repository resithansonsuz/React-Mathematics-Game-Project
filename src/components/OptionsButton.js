import "../App.css";
import React from "react";
import AnswerButtonIcon from "../constants/icons/answerButtonIcon";

//This component displays the answer options and button lines creates.
const AnswerButton = ({answer,num,color,click}) => (
  <div className={"AnswerButtons answer"+ num}>
    <AnswerButtonIcon color= {color} />
    <span onClick={click}>{answer}</span>
  </div>
);
export default AnswerButton;