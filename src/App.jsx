import { useState } from 'react'

import './App.css'

function App() {

//let counter = 15;
const [counter, setCounter ] = useState(15);

const addValue = () =>{
  
  // Batching setCounter(counter + 1)
  // setCounter(counter + 1)
  setCounter((preCounter) => preCounter + 1)
  setCounter((preCounter) => preCounter + 1)
}

const removeValue = () =>{
  setCounter(counter - 1)
}
  

  return (
    <>
      <h1>Hello my name is Loyiso and I am learning and tryig to understand UseState and Props</h1>
      <button onClick={addValue}>Add: {counter}</button><br></br>
      <button onClick={removeValue}>Minus: {counter}</button>
      <p>{counter}</p>
       
    </>
  )
}

export default App
