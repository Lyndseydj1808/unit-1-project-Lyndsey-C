import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import './About.css'

export default function About() {
  return (
    <div className="about-container">
      <p className="about-description">
        Hi freind! Welcome to Little Creatures Feel Big! We hope you have so
        much fun playing with us! We love learning about our big feelings! You
        can play our Feeling Friends game to guess how the creatures are feeling
        today! Parents, check out our parent dashboard for more info and to
        enter your childs name and age to add to their fun!
      </p>
      <BackButton />
    </div>
  );
}
