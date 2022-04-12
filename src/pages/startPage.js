import "../App.css";
import React,{useEffect} from "react";
import Detail from "../components/Detail";
import Heading from "../components/Heading";
import TransitionButton from "../components/PageTransitionButton";
import StartLineIcon from "../constants/icons/startLineIcon";
import { useStatistics } from "../contexts/statistics";




function StartPage() {

  //The function that returns aggregate data and aggregate score data is taken over context.
  const {overallRating,getOverallRating}=useStatistics();
  
  //The general data collected is taken from the context.
  useEffect(() => {
    getOverallRating();
    },[]);

  //Components of the startPage page are printed to the screen.
  return (
    <div className="startPage">
      <header>
        <Heading headline="Mathematics Game" />
      </header>
      <div className="Line">
        <StartLineIcon />
      </div>
      <section>
        <Detail contents={"Total Score: " +overallRating.Point }/>
        <Detail contents={"Total Questions: " +overallRating.Ask} />
        <Detail contents={"Correct Answers: "+ overallRating.TrueAnswer}/>
      </section>
      <footer>
        <TransitionButton name="Start" />
      </footer>
    </div>
  );
}
export default StartPage;
