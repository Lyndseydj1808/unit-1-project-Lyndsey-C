import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import './MainGames.css'

export default function MainGames() {
  return (
    <div className="main-games-container">
      <h1 className="games-title">Choose Your Game!</h1>
      <div className="game-button feeling-friends">
        <Link className="game-card" to="/games/feeling-friends">
          <h2>Feeling Friends!</h2>
          <p>Can you tell how the creatures are feeling?</p>
        </Link>
      </div>
      <BackButton />
    </div>
  );
}
