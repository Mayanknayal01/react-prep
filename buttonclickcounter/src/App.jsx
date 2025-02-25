import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)

  const addvalue = () => {
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }

  const subvalue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Mayank Nayal {counter}</h1>
      <button onClick={addvalue}>Increase</button>
      <button onClick={subvalue}>Decrease</button>
    </>
  )
}

export default App
