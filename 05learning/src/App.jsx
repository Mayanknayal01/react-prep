import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numbers, setNumbers] = useState(false)
  const [chars, setChars] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const copyToClipboard = useCallback (() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  const passwordGenerator = useCallback (() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numbers) str += "0123456789"
    if (chars) str += "~!@#$%^&*(){}"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numbers, chars, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numbers, chars, passwordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-black-500 bg-pink-800'>
      <h1 className='text-white text-center'>Password Generator</h1>
      <div className='shadow flex rounded-lg overflow-hidden mb-4 mt-4 bg-white'>
        <input 
          type='text'
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
        />
        <button onClick = {copyToClipboard}
        className='bg-blue-500 px-3 text-white'>Copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1 text-white'>
          <input
            type='range'
            min={6}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1 text-white'>
          <input
            type='checkbox'
            defaultChecked={numbers}
            id='numberInput'
            onChange={() => {
              setNumbers((prev) => !prev);
            }}
          />
          <label>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1 text-white'>
          <input
            type='checkbox'
            defaultChecked={chars}
            id='charInput'
            onChange={() => {
              setChars((prev) => !prev);
            }}
          />
          <label>Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
