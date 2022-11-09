import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import MainRouter from "./routes";
function App() {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
}

export default App;
