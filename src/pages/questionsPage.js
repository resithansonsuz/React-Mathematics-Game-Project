import "../App.css";
import Detail from "../components/Detail";
import AnswerButton from "../components/OptionsButton";
import { useState, useEffect } from "react";
import QuestionsSide from "../components/QuestionSide";
import { useStatistics } from "../contexts/statistics";


//The necessary states and functions on the page, the data received from the context.
function QuestionsPage() {
  const [color1, setColor1] = useState("white");
  const [color2, setColor2] = useState("white");
  const [color3, setColor3] = useState("white");
  const [answer1, setAnswer1] = useState(0);
  const [answer2, setAnswer2] = useState(0);
  const [answer3, setAnswer3] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const {
    instantScore,
    randomMultiplication,
    instantQuestions,
    checkAnswer,
    randomAnswers,
   
  } = useStatistics();
 //In the process done here, to ensure that the answers of the answer buttons are multiplied randomly.
  useEffect(() => {
    const answers=randomMultiplication(true);
    setAnswer1(answers[0]);
    setAnswer2(answers[1]);
    setAnswer3(answers[2]);
  }, []);
  
  //In controlled, a function that will make the background green if the answers are correct and red if incorrect,
  const backgroundColor = (id, answer) => {
    let element = document.querySelector("body");

    const controlSplit = instantQuestions[questionIndex].split("x");
    const realAnswer = parseInt(controlSplit[0]) * parseInt(controlSplit[1]);
    let boolAnswer = false;
    if (realAnswer === parseInt(answer)) {
      element.style.background = "green";
      boolAnswer = true;
    } else {
      element.style.background = "red";
    }

    switch (id) {
      case (id = 1):
        setColor1("black");
        break;

      case (id = 2):
        setColor2("black");
        break;

      case (id = 3):
        setColor3("black");
        break;
      default:
    }

    setTimeout(() => {
      element.style.background = "#2D2D2D";
      if(questionIndex===9){
        

      }
      setQuestionIndex(questionIndex + 1);
      checkAnswer(questionIndex, boolAnswer);
      const answers = randomAnswers(questionIndex);
      setAnswer1(answers[0]);
      setAnswer2(answers[1]);
      setAnswer3(answers[2]);
    }, 3000);
  };
  
//The questions and options on the screen are taken from the context. Arranges to be displayed on the screen.
  return (
    <div className="questionsPage">
      <div className="question-left">
        <div className="actionIcon">
          <QuestionsSide ask={instantQuestions[questionIndex]} />
        </div>
      </div>

      <div className="question-right">
        <div className="right-top">
          <div className="instructions">
            <div className="info">
              <Detail contents={"Score: " + instantScore.Point} />
            </div>
            <div className="info">
              <Detail contents={"Tour: " + instantScore.Tour} />
            </div>
            <div className="info">
              <Detail
                contents={
                  "Questions: " +
                  instantScore.TrueAnswer +
                  "/" +
                  instantScore.Ask
                }
              />
            </div>
          </div>
        </div>

        <div className="answer">
          <div>
            <AnswerButton
              answer={answer1}
              num="1"
              color={color1}
              click={() => backgroundColor(1, answer1)}
            />
          </div>

          <div>
            <AnswerButton
              answer={answer2}
              num="2"
              color={color2}
              click={() => backgroundColor(2, answer2)}
            />
          </div>

          <div>
            <AnswerButton
              answer={answer3}
              num="3"
              color={color3}
              click={() => backgroundColor(3, answer3)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default QuestionsPage;
