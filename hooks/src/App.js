
import "./app.css";
import UseStateHook from "./hooks/useStateHook";
import React from 'react'
import TodoList from "./projects/TodoList"
import UseEffectHook from "./hooks/UseEffectHook";


const App = () => {
  return (
    <div>
      {/* <UseStateHook/> */}
      {/* <TodoList/> */}
      <UseEffectHook/>
    </div>
  )
}



export default App;
