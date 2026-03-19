import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <main>
      <h1>Little Creatures Feel Big!</h1>
      <Link className="mini-games" to="/mini-games">Mini-Games!</Link>
      <Link className="Parent-Dashboard" to="/parent-dashboard">Parent Dashboard</Link>
      <Link className="About" to="/about">Learn About The Game</Link>
      <footer>Created by Lyndsey Clarkson</footer>
    </main>
  )
}
