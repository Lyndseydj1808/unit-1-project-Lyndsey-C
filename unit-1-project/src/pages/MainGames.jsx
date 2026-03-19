import React from 'react'
import {Link} from 'react-router-dom'
import BackButton from '../components/BackButton'

export default function MainGames() {
  return (
    <div>
        <p>Our creatures are having big feelings! Can you tell how they are feeling?</p>
      <Link className="feeling-friends" to="/games/feeling-friends">Play Feeling Friends!</Link>
      <BackButton/>
    </div>
    
  )
}
