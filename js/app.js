import React from "react";
import ReactDOM from "react-dom";
import ToDoList from "./Components/ToDoList/ToDoList";

function App() {
  return <ToDoList />
}

ReactDOM.render(<App/>, document.querySelector("#app"));
