import "./App.css";
import RandomCard from "./components/getRanCard/getRanCard";
import React from "react";
import CardDisplay from "./components/CardDisplay/cardDisplay.js";

function App() {
  return (
    <div className="App">
      <div className="CardDisplay">
        <h1>Card Game</h1>
      </div>
      <div className="GetRandomCardButton">
        <RandomCard />
      </div>
    </div>
  );
}

export default App;
