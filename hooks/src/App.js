
import "./app.css";
import UseStateHook from "./hooks/useStateHook";
import React from 'react'
import TodoList from "./projects/TodoList"


const App = () => {
  return (
    <div>
      {/* <UseStateHook/> */}
      <TodoList/>
    </div>
  )
}



export default App;
