import React from "react";
import { useState } from "react";
import ParentDashboard from "./ParentDashboard";
import HomeButton from "../components/HomeButton";
import ParentDashboardButton from "../components/ParentDashboardButton";


export default function CreateChildAccount({ onUpdateChild, childName }) {
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
      onUpdateChild(inputName, inputAge);
      setFormSubmit(true);
      setFormValidationFeedback("");
    }
  };
  return (
    <main className="parent-create-account-container">
      <div className="create-account">
        <header>
          <h1>Make A Child Account</h1>
          <h2> You can make a seperate account for each child.</h2>
        </header>
        <section className="form">
          {/*form for parents to create account */}
          {formValidationFeedback && (
            <div className="form-validation-feedback">
              {formValidationFeedback}
            </div>
          )}
          {!formSubmit && (
            <form className="parent-form" onSubmit={handleSubmit}>
              <label htmlFor="childName">Child's Name</label>
              <input
                className="parent-form-input"
                type="text"
                id="childName"
                value={inputName}
                onChange={(event) => setInputName(event.target.value)}
                placeholder="Enter child's name"
              />
              <label htmlFor="childAge">Child's Age</label>
              <input
                className="parent-form-input"
                type="number"
                id="childAge"
                min="1"
                max="17"
                value={inputAge}
                onChange={(event) => setInputAge(event.target.value)}
                placeholder="Enter child's age"
              />
              <label htmlFor="creature-choice">Choose A Creature</label>
              <select name="chooseCreature" id="creature-choice">
                <option value="Unicorn">Unicorn</option>
                <option value="Dragon">Dragon</option>
                <option value="Llama">Llama</option>
                <option value="Peacock">Peacock</option>
                <option value="Pheonix">Pheonix</option>
              </select>
              <button className="save-button" type="submit">
                Save
              </button>
            </form>
          )}
        </section>

        {formSubmit && (
          <section className="form-feedback-section">
            <div className="form-submit-feedback">{`Thank you! We hope ${childName} has so much fun exploring Little Creatures Feel Big!`}</div>
          </section>
        )}

        <ParentDashboardButton/>
        <HomeButton/>
      </div>
    </main>
  );
}