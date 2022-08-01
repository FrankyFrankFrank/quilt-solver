import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="grid">
       <div className="square"></div>
    </div>
  )
}

export default App
