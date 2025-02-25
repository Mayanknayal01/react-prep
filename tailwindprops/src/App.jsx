import { useState } from 'react'
import Card from '../components/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Mayank nayal</h1>
      <Card username='Mayank' relation='her Boyfriend'/>
      <Card username='Tina' relation='his girlfriend'/>
    </>
  )
}

export default App
