import React, { useState } from "react";
import "../styles/App.css";
import Child from "./Child";
const App = () => {
    const [age, setAge] = useState(19);
    function incrementAge() {
        setAge(age + 1);
    }

    return (
    <div>
      <Child age={age} incrementAge={incrementAge} />
    </div>
  );
};

export default App;
