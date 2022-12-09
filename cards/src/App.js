import "./App.css";
import RandomCard from "./components/getRanCard/getRanCard";
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
      <RandomCard />
      </div>
    </div>
  );
}

export default App;
