import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import titleImageHorizontal from '../assets/images/lcfb-title-horizontal.png'
import titleImageVertical from '../assets/images/lcfb-title-vertical.png'

export default function Home() {
  return (
    <main className="home-container">
      <header className="home-header">
      <img src={titleImageHorizontal} className="title-horizontal" alt="Little Creatures Feel Big! Title generated using AI" />
      <img src={titleImageVertical} className="title-vertical" alt="Little Creatures Feel Big! Title generated using AI" />
      </header>
      <div className="nav-buttons">
      <Link className="nav-button mini-games" to="/mini-games">Mini-Games!</Link>
      <Link className="nav-button parent-dashboard" to="/parent-dashboard">Parent Dashboard</Link>
      <Link className="nav-button about" to="/about">Learn About The Game</Link>
      </div>
      <footer>Created by Lyndsey Clarkson</footer>
    </main>
  )
}
