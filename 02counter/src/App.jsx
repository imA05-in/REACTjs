import { useState } from 'react';
import './App.css'

function App() {
  let [counter, setcounter] = useState(0)
  function addValue() {
    if(counter<20){
      setcounter(++counter)
    }
  }
  function decValue(){
    if(counter>0){
      setcounter(--counter)
    }
  }
  return(
    <div>
      <div className="value">Value: {`${counter}`}</div>
      <button id="add" onClick={addValue}>Add</button>
      <button id="dec" onClick={decValue}>Dec</button>
    </div>
  )
}

export default App
