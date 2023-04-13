import React, { useState } from "react";

const useStateHook = () => {
  const [color, setColor] = useState("black");

  const changeColor = () => {
    if (color === "red") {
      setColor("black");
    } else {
      setColor("red");
    }
  };

  return (
    <div className="container">
      <h1>I'am {color}</h1>
      {/* note-- changeColor() is not used its changeColor */}
      <button onClick={changeColor}>Change Me</button>
    </div>
  );
};

export default useStateHook;
