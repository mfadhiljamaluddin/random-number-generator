import { useState } from 'react'
import './App.css'

function App() {
  const [num, setNum] = useState()
  let max = 100
  let rNum = Math.floor(Math.random() * max) + 1
  return (
    <>
      <h1>Random Number Generator</h1>
      <p>This will generate number from 1 - 100</p>
      <div className="card">
        <p>
          <button onClick={() => setNum(() => rNum)}>
          Generate </button>
        </p>
        <p>
          <br />
          Your number are : 
          <br />
          <h1> {num} </h1>
        </p>
      </div>
      <p>
      <button onClick={() => setNum(() => num == 1)}>
          Clear
          </button>      
      </p>
    </>
  )
}

export default App
