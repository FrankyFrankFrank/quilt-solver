import { useState } from 'react'
import './App.css'
import { generateSquares } from './utils'

function App() {
  const squares = generateSquares()

  const getRotation = (index) => {
    const rotations = [0, 90, 180, 270]

    // get a random rotation
    const rotation = rotations[Math.floor(Math.random() * rotations.length)]
    return rotation
  }

  return (
    <div id="grid">
      {squares.map((square, index) => (
        <div
          key={index}
          className="square"
          style={{ backgroundColor: square.color }}
        >
          <svg width="38" height="38" viewBox="0 0 100 100" style={{ transform: `rotate(${getRotation()}deg)`}}>
            <polygon points="0 0, 100 0, 100 100" fill='white' />
          </svg>
        </div>
      ))}
    </div>
  )
}

export default App
