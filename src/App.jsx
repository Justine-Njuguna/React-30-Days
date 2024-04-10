import React from "react";
//import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";
import './style.css';


const App = () => {
  return (
  <div className="bg-purple-400">
    <h1>Adopt Me!</h1>
    <SearchParams />
  </div>
)}

const container = document.getElementById("root");
const root = createRoot(container)
root.render(<App />)