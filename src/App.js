import React from "react";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Homepage />
    </div>
  );
}

export default App;
