import React from "react";
import "./App.css";
import { Application } from "./components/Application/Application";
import { Skills } from "./components/Skills/Skills";

function App() {
  return (
    // <AppProviders>
    <div className="App">
      <Application />
      <Skills skills={["HTML", "CSS", "Javascript"]} />
      {/* <Counter />
      <CounterTwo count={1} />
      <Users />
    <MuiMode /> */}
    </div>
    //</AppProviders>
  );
}

export default App;
