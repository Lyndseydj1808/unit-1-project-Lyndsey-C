import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <main className="home-container">
      <div className="nav-buttons">
        <Link className="nav-button mini-games" to="/mini-games">
          Mini-Games!
        </Link>
        <Link className="nav-button parent-dashboard" to="/parent-dashboard">
          Parent Dashboard
        </Link>
        <Link className="nav-button about" to="/about">
          Learn About The Game
        </Link>
      </div>
      <footer>
        <p>Designed for children ages 4-8</p>
        <p>© 2026 Little Creatures Feel Big Created by Lyndsey Clarkson</p>
        <p>Images generated using AI - Nano Banana 2</p>
      </footer>
    </main>
  );
}
