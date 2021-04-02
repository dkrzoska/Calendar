import React from "react";
import ReactDOM from "react-dom";
import Application from "./Components/Application/Application";
import Test from "./Components/Test/Test";

function App() {
  return <Application />
  // return <Test />
}

ReactDOM.render(<App/>, document.querySelector("#app"));
