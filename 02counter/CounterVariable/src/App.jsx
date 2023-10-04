import { useState } from 'react';
import './App.css'

function App() {
    let [counter, setCounter] = useState(15);
    // let counter = 15;

    const addChai = ()=>{
      // counter = counter+1;
      setCounter(counter+1);
      console.log("successfuly added chai", Math.random());
    }
    const removeChai = ()=>{
      setCounter(counter-1);
      console.log("successfuly removed chai", Math.random());
    }
    
  return (
    <>
      <h1>Counter with chai</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick = {addChai } >AddChai</button>
      <button onClick={removeChai }>RemoveChai</button>
    </>
  )
}

export default App
