import { useCallback, useEffect, useState } from 'react'

import './App.css'

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*(){}~"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, charAllowed, numberAllowed, passwordGenerator])
  return (
    <>
      <div className='wd-full'>
        <div className='text-center'>
          Password generator
        </div>
        <div className='m-4'>
          <input type="text" name="txt" id="txt"
            value={password}
            style={{ color: 'black' }}
          />
          <button>Copy</button>
        </div>
      </div>
      <div>
        <input type="range" name="num" id="num"
          min={8}
          max={100}
          value={length}
          onChange={(e) => { setLength(e.target.value) }}
        />
        <label>length={length}</label>
      </div>
      <div className="check">
        <input type="checkbox" name="check" id="check"
          defaultChecked={numberAllowed}
          onChange={() => {
            setNumberAllowed((prev) => !prev);
          }}
        />
        <label>Number Allowed</label>
      </div>
      <div className="charcheck">
        <input type="checkbox" name="charcheck" id="charcheck"
          defaultChecked={charAllowed}
          onChange={() => {
            setCharAllowed((prev) => !prev);
          }}
        />
        <label>special characters Allowed</label>
      </div>
    </>
  )
}

export default App
