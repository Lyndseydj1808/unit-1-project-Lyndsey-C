import React from "react";
import { Link } from "react-router-dom";

export default function HomeButton() {

  return <div>
    <Link className="home-button" to="/">🏠 Home </Link>
  </div>;
}
