import React from 'react'
import { useNavigate } from 'react-router-dom'

//back button component to go back to previous page
export default function BackButton() {

    const navigate = useNavigate()
  return (

    <div>
      <button className="game-button" onClick={() => navigate(-1)}>Back</button>
    </div>
  )
}
