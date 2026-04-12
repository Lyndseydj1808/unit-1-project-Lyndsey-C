import React, { useState } from "react";
import { creaturesArray } from "./creaturesData";
import HomeButton from "../../components/HomeButton";
import BackButton from "../../components/BackButton";
import "./KindCreatures.css";
import LoadingSpinner from "../../components/LoadingSpinner";

const shuffledCreatures = [...creaturesArray].sort(() => Math.random() - 0.5); //creates new array of shuffled creatures

export default function KindCreatures({ childName }) {
  const [selection, setSelection] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const currentCreature = shuffledCreatures[currentIndex];

  function handleAnswer(option) {
    setSelection(option);
  }

  function nextCreature() {
    setCurrentIndex(currentIndex + 1);
    setSelection("");
    setImageLoaded(false);
  }

  if (currentIndex >= shuffledCreatures.length) {
    return (
      <div className="end-game-container">
        <h2 className="end-game-feedback">
          {childName
            ? `Thank you ${childName}! You're amazing! You helped all our creatures feel so special today! 🌟`
            : `You're amazing! You helped all our creatures feel so special today! 🌟`}
        </h2>
        <button
          className="play-again-button"
          onClick={() => {
            setCurrentIndex(0);
            setSelection("");
            setImageLoaded(false);
          }}
        >
          Play Again!
        </button>
        <HomeButton />
      </div>
    );
  }

  const options = currentCreature.options.map((option) => (
    <button
      key={option}
      className="option-button"
      onClick={() => handleAnswer(option)}
    >
      {option}
    </button>
  ));

  return (
    <div className="kind-creatures-container">
      <h1 className="game-title">Kind Creatures!</h1>
      <h2 className="game-question">
        {`Help ${currentCreature.name} the ${currentCreature.creature} feel amazing! Pick something kind to say!`}
      </h2>
      {!imageLoaded && (
        <div className="loading-placeholder">
          <LoadingSpinner />
        </div>
      )}
      {imageLoaded && selection && (
        <div className="user-selection">{selection}</div>
      )}
      <img
        className="creature-image"
        src={currentCreature.image}
        alt={`Image of a ${currentCreature.creature} generated using Nano Banana (AI)`}
        onLoad={() => setImageLoaded(true)}
        style={{ display: imageLoaded ? "block" : "none" }}
      />
      <div className="options">{options}</div>
      {selection && (
        <button className="next-question-button" onClick={nextCreature}>
          Next Creature
        </button>
      )}
      <BackButton />
    </div>
  );
}
