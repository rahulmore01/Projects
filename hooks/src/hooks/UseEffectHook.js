import React from 'react'
import { useState } from 'react'
const UseEffectHook = () => {

    const[count, setCount]=useState("0");

    const increment = ()=>{

        count =count + 1;
        setCount(console.log)
    }

  return (
    <div>
      <button onClick={increment}>Counter{count}</button>
    </div>
  )
}

export default UseEffectHook
