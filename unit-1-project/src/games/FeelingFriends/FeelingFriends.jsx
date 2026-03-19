import React from "react";
import BackButton from "../../components/BackButton";
import { feelingFriendsQuestions } from "./FeelingFriendsQuestions";
import { useState } from "react";

const shuffledQuestions = [...feelingFriendsQuestions].sort(
  () => Math.random() - 0.5,
); //creates new array of shuffled questions

export default function FeelingFriends() {
  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedback, setFeedback] = useState("");

  const currentQuestion = shuffledQuestions[currentIndex];

    if (currentIndex >= shuffledQuestions.length) {
    return (
      <div>
        <h2>Congratulations! You finished the game!</h2>
        <p>
          You got {score} out of {shuffledQuestions.length} questions right!
          Great job!
        </p>
        <button
          onClick={() => {
            (setCurrentIndex(0), setScore(0), setFeedback(""));
          }}
        >
          Play Again!
        </button>
      </div>
    );
  }

  function handleAnswer(option) {
    if (option === currentQuestion.correctAnswer) {
      setScore(score + 1);
      setFeedback(`That's right! ${currentQuestion.name} the ${currentQuestion.creature} is
          feeling ${currentQuestion.correctAnswer}. Great job!`);
    } else {
      setFeedback(`Not quite. The ${currentQuestion.creature} is feeling
          ${currentQuestion.correctAnswer} right now.`);
    }
  }

  function nextQuestion() {
    setCurrentIndex(currentIndex + 1);
    setFeedback("");
  }

  const options = currentQuestion.options.map((option) => (
    <button key={option} onClick={() => handleAnswer(option)}>
      {option}
    </button>
  ));

  return (
    <div>
      <h1>Feeling Friends!</h1>
      <h2>
        How do you think {currentQuestion.name} the {currentQuestion.creature}{" "}
        is feeling today?
      </h2>
      <img
        src={currentQuestion.image}
        alt={`Image of a ${currentQuestion.creature} generated using Nano Banana (AI)`}
      />
      {feedback && <div>{feedback}</div>} {/*If feedback is truthy, show this*/}
      {feedback && <button onClick={nextQuestion}>Next Question</button>}{" "}
      {/*Shows next question button if feedback exists */}
      {!feedback && <div>{options}</div>}{" "}
      {/*only shows options when feedback does not exist */}
      <BackButton />
    </div>
  );
}
