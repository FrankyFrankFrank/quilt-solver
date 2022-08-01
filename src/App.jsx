import { useState } from 'react'
import './App.css'
import { generateSquares } from './utils'

function App() {
  const squares = generateSquares()

  const getRotation = () => {
    const rotations = [0, 90, 180, 270]
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
          <svg width="50" height="50" viewBox="0 0 100 100" style={{ transform: `rotate(${getRotation()}deg)`}}>
            <polygon points="0 0, 100 0, 100 100" fill='white' />
          </svg>
        </div>
      ))}
    </div>
  )
}

export default App
