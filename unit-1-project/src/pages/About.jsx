import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import "./About.css";

export default function About({ childName }) {
  return (
    <div className="about-container">
      <p className="about-description">
        {childName ? `Hi ${childName}!` : "Hi friend!"} Welcome to Little
        Creatures Feel Big! We hope you have so much fun playing with us! We
        love learning about our big feelings! You can play our Feeling Friends
        game to guess how the creatures are feeling today! Or play Kind
        Creatures and pick a kind saying for our creatures to say! Parents,
        check out our parent dashboard for more info and to enter your child's
        name and age to add to their fun!
      </p>
      <BackButton />
    </div>
  );
}
