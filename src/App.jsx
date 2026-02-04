import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Hello from "./Hello.jsx";
import ConditionalComponent from "./ConditionalComponent.jsx";
import "./App.css";
import Friuts from "./Friuts.jsx";
import TernaryOperator from "./TernaryOperator.jsx";
const person = {
  name: "Sagar",
  message: "Welcome to React!",
  emoji: "👋",
  seatNumbers: [7, 8, 9, 10],
};

function App() {
  return (
    <div className="App">
      {/* <Hello person={person} /> */}
      {<Friuts />}
      {/* {<ConditionalComponent isLoggedIn={false} />} */}
      {/* {<TernaryOperator loggedIn={false} />} */}
    </div>
  );
}

export default App;
