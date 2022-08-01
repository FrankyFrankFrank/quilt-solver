import { useState } from 'react'
import './App.css'
import { generateSquares } from './utils'

function App() {
  const squares = generateSquares()

  return (
    <div id="grid">
      {squares.map((square, index) => (
        <div
          key={index}
          className="square"
          style={{ backgroundColor: square.color }}
        />
      ))}
    </div>
  )
}

export default App
