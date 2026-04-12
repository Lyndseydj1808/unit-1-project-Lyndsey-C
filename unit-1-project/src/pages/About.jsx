import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import "./About.css";
import profilePicture from "../assets/images/profile-pic.jpg";

export default function About({ childName }) {
  return (
    <div className="about-container">
      <h1 className="about-the-game">About the game!</h1>
      <p className="about-description">
        {childName ? `Hi ${childName}!` : "Hi friend!"} Welcome to Little
        Creatures Feel Big! We hope you have so much fun playing with us! We
        love learning about our big feelings in a fun way!{" "}
      </p>
      <ul className="about-list">
        <li>
          ✨ Play our Feeling Friends game to guess how the creatures are
          feeling today!
        </li>
        <li>
          ✨ Play Kind Creatures and pick a kind saying for our creatures to
          say!
        </li>
        <li>
          ✨Parents, check out our parent dashboard for more information and to
          enter your child's name and age to add to their fun!
        </li>
      </ul>
      <h1 className="about-the-dev">About the developer!</h1>
      <img
        className="profile-picture"
        src={profilePicture}
        alt="Profile picture"
      />
      <p className="about-dev">
        Hi! My name is Lyndsey. I'm a software development student and, most
        importantly, a mother. I created Little Creatures Feel Big as a
        heart-led project to help my own children learn about emotional
        intelligence and build a foundation of self-worth.
        <br />
        <br />
        This project has allowed me to tie together the front-end fundamentals
        I've been mastering. Moving from basic JavaScript/HTML/CSS to building a
        dynamic, state-driven React application. By focusing on reusable
        components and clean data structures, I've built a scalable application
        that I hope to expand on and grow as my children do.{" "}
      </p>
      <div className="dev-links">
        <a
          href="https://github.com/Lyndseydj1808"
          target="_blank"
          rel="noreferrer"
          className="github-button"
        >
          GitHub
        </a>
      </div>
      <BackButton />
    </div>
  );
}
