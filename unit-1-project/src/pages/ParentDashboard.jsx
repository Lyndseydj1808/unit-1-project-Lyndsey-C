import React, { useState } from "react";
import BackButton from "../components/BackButton";
import "./ParentDashboard.css";
export default function ParentDashboard({ onUpdate, childName }) {
  const [formSubmit, setFormSubmit] = useState(false);
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [formValidationFeedback, setFormValidationFeedback] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    const age = Number(inputAge);
    if (!inputName || !inputAge) {
      setFormValidationFeedback("⚠️ Please enter name and age.");
    } else if (age >= 18 || age <= 0) {
      setFormValidationFeedback("⚠️ Please enter a valid age.");
    } else {
      onUpdate(inputName, inputAge);
      setFormSubmit(true);
      setFormValidationFeedback("");
    }
  };
  return (
    <div className="parent-dashboard-container">
      <h1>Hi Parents!</h1>
      <h2> Welcome to Little Creatures Feel Big!</h2>
      <p className="dashboard-description">
        I created this game to turn emotional learning into a joyful adventure
        for your little ones. As a parent, I know that big emotions can feel
        overwhelming for children. Research shows that developing emotional
        intelligence at an early age is a superpower—it helps kids build
        resilience, empathy, and better communication skills.
        <br /> In this world of mini-games, your child will:
      </p>
      <ul className="dashboard-list">
        <li>
          ✨ Meet the Creatures: Friendly characters who experience the same
          highs and lows kids do.
        </li>
        <li>
          ✨ Name That Feeling: Practice identifying emotions through play.
        </li>
        <li>
          ✨ Build a Toolkit: Practice self-kindness and body confidence in a safe, stress-free environment.
        </li>
      </ul>
      <p className="dashboard-description">
        Let's get started! Please enter your child's details below so the
        creatures can greet them by name and tailor the experience to their age.
      </p>
      {/*form for parents to add name and age */}
      {formValidationFeedback && (
        <div className="form-validation-feedback">{formValidationFeedback}</div>
      )}
      {!formSubmit && (
        <form className="parent-form" onSubmit={handleSubmit}>
          <input
            className="parent-form-input"
            type="text"
            value={inputName}
            onChange={(event) => setInputName(event.target.value)}
            placeholder="Enter child's name"
          />
          <input
            className="parent-form-input"
            type="number"
            min="1"
            max="17"
            value={inputAge}
            onChange={(event) => setInputAge(event.target.value)}
            placeholder="Enter child's age"
          />
          <button className="save-button" type="submit">
            Save
          </button>
        </form>
      )}

      {formSubmit && (
        <div className="form-submit-feedback">{`Thank you! We hope ${childName} has so much fun exploring Little Creatures Feel Big!`}</div>
      )}

      <BackButton />
    </div>
  );
}
