import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import "./MainGames.css";

export default function MainGames({ childName }) {
  return (
    <div className="main-games-container">
      <h1 className="games-title">
        {childName ? `Hi ${childName}! Choose your game!` : `Choose your Game!`}
      </h1>
      <Link className="game-button feeling-friends" to="/games/feeling-friends">
        <h2>Feeling Friends!</h2>
        <p>Can you tell how the creatures are feeling?</p>
      </Link>
      <BackButton />
    </div>
  );
}
