import "../App.css";
import React,{useEffect,useState} from "react";
import Detail from "../components/Detail";
import Heading from "../components/Heading";
import TransitionButton from "../components/PageTransitionButton";
import FinalLineIcon from "../constants/icons/finalLineIcon";
import AllQuestionsLineIcon from "../constants/icons/allQuestionLineIcon";
import TrueIcon from "../constants/icons/trueIcon";
import FalseIcon from "../constants/icons/falseIcon";
import { useStatistics } from "../contexts/statistics";


//Function that resets and updates the lap score data on the context,and he gets the questions, answers and score of that round.
function ConclusionPage() {
  const { instantQuestions, instantAnswers, instantScore,updateOverallRating,resetInstantScore } = useStatistics();
  const [instantScores,setInstantScores]=useState({});
  const [instantQuestion,setInstantQuestion]=useState([]);
  const [instantAnswer,setInstantAnswer]=useState([]);

  //It updates the lap data, saves the score, questions and answers in that lap to local storage. Then it resets the lap data.
  useEffect(() => {
    updateOverallRating(instantScore);
    setInstantScores(instantScore);
    setInstantQuestion(instantQuestions);
    setInstantAnswer(instantAnswers);
    resetInstantScore();
    },[]);

//Prints the components of conclusuionPage to the screen.
  return (
    <div className="conclusionPage">
      <div className="conclusion-left">
        <Heading headline="Final" />
        <div className="Line">
          <FinalLineIcon />
        </div>
        <div className="instantScore">
          <Detail contents={"Points: " + instantScores.Point} />
          <Detail contents={"Questions: " + instantScores.Ask} />
          <Detail contents={"Correct Answers: " + instantScores.TrueAnswer} />
          <TransitionButton name="Restart" />
        </div>
      </div>

      <div className="conclusion-right">
        <Heading headline="All Questions" />
        <div className="Line">
          <AllQuestionsLineIcon />
        </div>

        <div className="AllLine">
          {
          instantQuestion.map((item, index) => (
            <div className="questionCheck" key={index}>
              <span >{item}</span>
              {
              instantAnswer[index] ? <TrueIcon /> : <FalseIcon />
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ConclusionPage;
