import "./App.css";
import React from "react";
import RandomCard from "./components/getRanCard/getRanCard";
import CardDisplay from "./components/cardDisplay/cardDisplay";

function App() {
  return (
    <div className="App">
      <div className="CardDisplay">
        <RandomCard />
        <CardDisplay />
        <h1>Hello</h1>
      </div>
    </div>
  );
}

export default App;
