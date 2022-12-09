import "./App.css";
import React from "react";
import CardDisplay from "./components/cardDisplay/cardDisplay";

function App() {
  return (
    <div className="App">
      <div className="CardDisplay">
        <h1>Hello</h1>
        <CardDisplay />
      </div>
      <div className="GetRandomCardButton">
        <button className="RandomButton">GET RANDOM CARD</button>
      </div>
    </div>
  );
}

export default App;
