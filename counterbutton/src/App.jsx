import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter < 20) setCounter(counter + 1)
  }

  const subValue = () => {
    if (counter > 0 ) setCounter(counter - 1)
  }

  return (
    <>
    <h1>Mayank nayal Counter {counter}:- </h1>
    <button
    onClick={addValue}
    >Maximise {counter}</button>

    <button
    onClick={subValue}
    >Minimise {counter}</button>
    </>
  )
}

export default App
