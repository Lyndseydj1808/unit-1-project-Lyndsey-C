import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BAckButton";

export default function ParentDashboard() {
  return (
    <div>
      <h1>Hi Parents! Welcome to Little Creatures Feel Big!</h1>
      <p>
        We created this game to turn emotional learning into a joyful adventure
        for your little ones. As parents, we know that big emotions can feel
        overwhelming for children. Research shows that developing emotional
        intelligence at an early age is a superpower—it helps kids build
        resilience, empathy, and better communication skills. In our world of
        mini-games, your child will: Meet the Creatures: Friendly characters who
        experience the same highs and lows kids do. Name That Feeling: Practice
        identifying emotions through play. Build a Toolkit: Learn simple,
        effective ways to regulate those "big feelings" in a safe, stress-free
        environment. Let’s get started! Please enter your child’s details below
        so our creatures can greet them by name and tailor the experience to
        their age.
      </p>
      <form>Form here!!!</form>
      <BackButton/>
    </div>
  );
}
