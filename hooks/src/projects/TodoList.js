import React, { useState } from "react";
import "./TodoList.css";

const TodoList = () => {
  let data = [
    {
      id: 0,
      Name: "Vinod",
      Age: 26,
    },
    {
      id: 1,
      Name: "Ajay",
      Age: 20,
    },
  ];

  const [array, setArray] = useState(data);

  function removeData() {
    setArray([]);
  }
  //   filter those objects in the array who doesnt match with the given parameter id only filter those and ignore matched id, also save them in the setArray
  function removeCard(id) {
    const newArray = array.filter((currentObj) => {
      return currentObj.id != id;
    });
    setArray(newArray)
  }

  return (
    <div className="container">
      {array.map((currentObj) => {
        // we are using return because we have to log more that 1 currentObj and also they should be different//
        return (
          <h1 className="h1style" key={currentObj.id}>
            Name:{currentObj.Name} & Age:{currentObj.Age}
            <button
              className="card-btn"
              onClick={() => removeCard(currentObj.id)}
            >
              Remove
            </button>
          </h1>
        );
      })}
      <button className="todo-btn" onClick={removeData}>Clear</button>
    </div>
  );
};

export default TodoList;
