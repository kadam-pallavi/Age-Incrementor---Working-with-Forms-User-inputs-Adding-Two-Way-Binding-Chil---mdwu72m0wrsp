import React from "react";

function Child(props) {
  const { age, incrementAge } = props;

  function handleClick() {
    incrementAge();
  }

  return (
    <div id="child">
      <p id="text">Today I am {age} Years of Age</p>
      <button id="button" onClick={handleClick}>Increment Age</button>
    </div>
  );
}

export default Child;
