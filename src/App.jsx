import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Hello from "./Hello.jsx";

import "./App.css";
import Friuts from "./Friuts.jsx";

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
    </div>
  );
}

export default App;
