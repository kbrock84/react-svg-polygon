import React from "react";
import ReactDOM from "react-dom";
import Poly from "./Poly";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Poly sides={3} size={40} cx={50} cy={50} r={30} />
      <Poly sides={4} size={40} cx={50} cy={50} r={30} />
      <Poly sides={5} size={40} cx={50} cy={50} r={30} />
      <Poly sides={6} size={40} cx={50} cy={50} r={30} />
      <Poly sides={7} size={40} cx={50} cy={50} r={30} />
      <Poly sides={8} size={40} cx={50} cy={50} r={30} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
