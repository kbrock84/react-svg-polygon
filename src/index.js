import React from "react";
import ReactDOM from "react-dom";
import Poly from "./Poly";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Poly sides={3} r={30} strokeWidth={2} />
      <Poly
        sides={4}
        cx={50}
        cy={50}
        width={100}
        height={100}
        r={30}
        stroke={"#18efff"}
      />
      <Poly sides={5} r={30} fill={"red"} stroke={"none"} />
      <Poly sides={6} r={30} />
      <Poly sides={7} r={30} />
      <Poly sides={8} r={30} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
