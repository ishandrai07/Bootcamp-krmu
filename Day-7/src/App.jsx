import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Timer from './Timer';
import Routing from './Routing'
const App = () => {

  

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    alert("Button Pressed")
  
    return () => {
      
    }
  }, [count1])
  
  
  return (
    <div>
      <h1>{count1},{count2} </h1>
      <button onClick={()=>{setCount1(count1+1)}}>increase1</button>
      <button onClick={()=>{setCount2(count2+1)}}>increase2</button>
      
      <Timer/>
       <Routing/>
    </div>
  )
}

export default App