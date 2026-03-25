import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import titleImageHorizontal from '../assets/images/lcfb-title-horizontal.png'

export default function Home() {
  return (
    <main className="home-container">
      <header>
      <img src={titleImageHorizontal} className="title-image" alt="Little Creatures Feel Big! Title generated using AI" />
      </header>
      <div className="nav-button-container">
      <Link className="nav-button mini-games" to="/mini-games">Mini-Games!</Link>
      <Link className="nav-button Parent-Dashboard" to="/parent-dashboard">Parent Dashboard</Link>
      <Link className="nav-button About" to="/about">Learn About The Game</Link>
      </div>
      <footer>Created by Lyndsey Clarkson</footer>
    </main>
  )
}
