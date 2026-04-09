import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import "./About.css";

export default function About({ childName }) {
  return (
    <div className="about-container">
      <h1 className="about-the-game">About the game!</h1>
      <p className="about-description">
        {childName ? `Hi ${childName}!` : "Hi friend!"} Welcome to Little
        Creatures Feel Big! We hope you have so much fun playing with us! We
        love learning about our big feelings! You can play our Feeling Friends
        game to guess how the creatures are feeling today! Or play Kind
        Creatures and pick a kind saying for our creatures to say! Parents,
        check out our parent dashboard for more info and to enter your child's
        name and age to add to their fun!
      </p>
      <h1 className="about-the-dev">About the developer!</h1>
      <p className="about-description">......</p>
      <BackButton />
    </div>
  );
}
