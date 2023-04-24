import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from ".././reducers/upDown";
import { decNumber, incNumber } from '../actions/index.js';

const Counter = () => {
    // declaring the redux hooks to use in this component & to get data from store of redux
  const count = useSelector((state)=> state.changeTheNumber)

  const dispatch = useDispatch()
  return (

        <div className="container">
      <h1>Increment/Decrement counter</h1>
      <h4>using React & Redux</h4>
      <div className="quantity">
        <a
          className="minus"
          title="Decrement"
          onClick={() => dispatch(decNumber())}
        >
          <span> - </span>
        </a>
        {/* COUNT is a state which we want to use from store */}
        <input className="input" name="quantity" type="text" value={count}/>
        <a
          className="plus"
          title="Increment"
        //   {/* dispatch triggers action which is increment or decement */
          onClick={() => dispatch(incNumber())}
        >
          <span> + </span>
        </a>
      </div>

      
    </div>
  )
}

export default Counter
