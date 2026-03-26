import React, { useState } from "react";
import BackButton from "../components/BackButton";
import "./ParentDashboard.css";
export default function ParentDashboard({ onUpdate }) {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdate(inputName, inputAge);
  };
  return (
    <div className="parent-dashboard-container">
      <h1>Hi Parents!</h1>
      <h2> Welcome to Little Creatures Feel Big!</h2>
      <p className="dashboard-description">
        We created this game to turn emotional learning into a joyful adventure
        for your little ones. As parents, we know that big emotions can feel
        overwhelming for children. Research shows that developing emotional
        intelligence at an early age is a superpower—it helps kids build
        resilience, empathy, and better communication skills. In our world of
        mini-games, your child will: Meet the Creatures: Friendly characters who
        experience the same highs and lows kids do. Name That Feeling: Practice
        identifying emotions through play. Build a Toolkit: Learn simple,
        effective ways to regulate those "big feelings" in a safe, stress-free
        environment. Let's get started! Please enter your child's details below
        so our creatures can greet them by name and tailor the experience to
        their age.
      </p>
      {/*form for parents to add name and age */}
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
          value={inputAge}
          onChange={(event) => setInputAge(event.target.value)}
          placeholder="Enter child's age"
        />
        <button className="save-button" type="submit">
          Save
        </button>
      </form>
      <BackButton />
    </div>
  );
}
