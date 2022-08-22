// import { useState } from "react";
import "./App.css";
import Card from "./component/Card";
import LayoutContextNewProvider from "./context/layoutContextNew";
import MainContextProvider from "./context/mainContext";

function App() {
  return (
    <div className="App">
      <LayoutContextNewProvider>
        <MainContextProvider>
          <Card />
        </MainContextProvider>
      </LayoutContextNewProvider>
    </div>
  );
}

export default App;
