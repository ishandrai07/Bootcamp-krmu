import React, { useState } from 'react'

const FormHandleing = () => {
    const [first, setfirst] = useState("")
    const handleForm = (e)=>{
        e.preventDefault();
        console.log("name: ", first);
        
        setfirst("")
    }
  return (

    <div>
        <form onSubmit={(e)=>{
            handleForm(e);
        }}>
            <input type='text' value={first} placeholder='Enter your name' onChange={(e)=>{setfirst(e.target.value)}}/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default FormHandleing