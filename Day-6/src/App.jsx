import React, { useState } from 'react'
import FormHandleing from './FormHandleing';

const App = () => {
  const [num, setfirst] = useState(1);

  return (
    <div className='maindiv'>
      <h1 className='head'>{num}</h1>
      
    <div className='bothbtn'>
      <button className='btn' onClick={()=>{setfirst(num+1)}}>Increase</button>
      <button className='btn' onClick={()=>{setfirst(num-1)}}>Decrease</button>
      <button className='btn' onClick={()=>{setfirst(0)}}>Reset</button>
    </div>
      
      <FormHandleing/>
    </div>
  )
}

export default App