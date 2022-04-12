import React, { useContext, useState } from "react";

const StatisticsContext = React.createContext();
//provider oluşturmuş olduk.
const StatisticsProvider = ({ children }) => {
  //datayı aktaracağımız stateti oluşturduk.
  
  
  const [overallRating, setOverallRating] = useState({
    Point: 0,
    Ask: 1,
    TrueAnswer: 0,
  });

  const [instantQuestions, setInstantQuestions] = useState([]);
  const [instantAnswers, setInstantAnswers] = useState([]);
  const [instantScore, setInstantScore] = useState({
    Point: 0,
    Ask: 1,
    Tour: 1,
    TrueAnswer: 0,
  });

  //Multiplication is done by randomly using numbers between 1 and 10.
  const randomMultiplication = (starting) => {
    let questions = [];

    for (let i = 0; i < 10; i++) {
      const num1 = Math.floor(Math.random() * 9) + 1;
      const num2 = Math.floor(Math.random() * 9) + 1;
      let question = String(num1 + " x " + num2);
      questions.push(question);
    }

    setInstantQuestions(questions);

    if(starting){
    const question = questions[0];
    const numbers = question.split("x");
    const num1 = parseInt(numbers[0]);
    const num2 = parseInt(numbers[1]);

    var answer1 = 0;
    var answer2 = 0;
    var answer3 = 0;

    switch (Math.floor(Math.random() * 3) + 1) {
      case 1:
        answer1 = num1 * num2;
        answer2 = ((num1 - 1) * num2);
        answer3 = ((num2 + 1) * num1);
        console.log(answer1, answer2, answer3, "1.eleman");
        break;

      case 2:
        answer1 = ((num1 - 1) * num2);
        answer2 = num1 * num2;
        answer3 = ((num2 + 1) * num1);
        console.log(answer1, answer2, answer3, "2.eleman");
        break;

      case 3:
        answer1 = ((num2 + 1) * num1);
        answer2 = ((num1 - 1) * num2);
        answer3 = num1 * num2;
        console.log(answer1, answer2, answer3, "3.eleman");
        break;
      default:
    }

    return [String(answer1), String(answer2), String(answer3)];
      
    }
  };

  //Answer options are generated randomly.
  const randomAnswers = (questionIndex) => {
    const question = instantQuestions[questionIndex];
    const numbers = question.split("x");
    const num1 = parseInt(numbers[0]);
    const num2 = parseInt(numbers[1]);

    var answer1 = 0;
    var answer2 = 0;
    var answer3 = 0;

    switch (Math.floor(Math.random() * 3) + 1) {
      case 1:
        answer1 = num1 * num2;
        answer2 = ((num1 - 1) * num2);
        answer3 = ((num2 + 1) * num1);
        console.log(answer1, answer2, answer3, "1.eleman");
        break;

      case 2:
        answer1 = ((num1 - 1) * num2);
        answer2 = num1 * num2;
        answer3 = ((num2 + 1) * num1);
        console.log(answer1, answer2, answer3, "2.eleman");
        break;

      case 3:
        answer1 = ((num2 + 1) * num1);
        answer2 = ((num1 - 1) * num2);
        answer3 = num1 * num2;
        console.log(answer1, answer2, answer3, "3.eleman");
        break;
      default:
    }

    return [String(answer1), String(answer2), String(answer3)];
  };
  
  //The scoring system and control of the answers given are done.
  const checkAnswer = (questionIndex, boolAnswer) => {
    const control = instantQuestions[questionIndex];
    control.trim();
    const controlSplit = control.split("x");
    const answer = parseInt(controlSplit[0]) * parseInt(controlSplit[1]);
    let Point = 0;
    let TheAnswer = instantScore.TrueAnswer;
    if (boolAnswer) {
      Point = Math.ceil(Math.sqrt(answer));
      TheAnswer = instantScore.TrueAnswer + 1;
    }
    let question = instantScore.Ask + 1;
    setInstantScore({
      Point: Point + instantScore.Point,
      Ask: question,
      TrueAnswer: TheAnswer,
      Tour: instantScore.Tour,
    });
  };

  //We used this function to get the overallRating data in local storage.
  const getOverallRating = () => {
    const data = JSON.parse(localStorage.getItem("overallRatings"));

    if (data) {
      setOverallRating(data);
    } else {
      localStorage.setItem("overallRatings", JSON.stringify(overallRating));
    }
  };

  //The purpose of this function is to update the local stroage by adding new data on top of the old data overallRatings.
  const updateOverallRating = (instantData) => {
    const data = JSON.parse(localStorage.getItem("overallRatings"));
    data.Point += instantData.Point;
    data.Ask += instantData.Ask;
    data.TrueAnswer += instantData.TrueAnswer;
    localStorage.setItem("overallRatings", JSON.stringify(data));
  };

  //
  const resetInstantScore = () => {
    setInstantQuestions([]);
    setInstantAnswers([]);

    setInstantScore({
      Point: 0,
      Ask: 1,
      Tour: instantScore.Tour++,
      TrueAnswer: 0,
    });
  };

  return (
    <StatisticsContext.Provider
      value={{
        instantQuestions,
        instantAnswers,
        instantScore,
        overallRating,
        getOverallRating,
        updateOverallRating,
        resetInstantScore,
        randomMultiplication,
        checkAnswer,
        randomAnswers,
        
      }}
    >
      {children}
    </StatisticsContext.Provider>
  );
};

//With this useStatistics function, the necessary data is exported.
function useStatistics() {
  return useContext(StatisticsContext);
}

export { StatisticsProvider, StatisticsContext, useStatistics };
