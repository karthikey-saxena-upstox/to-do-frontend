import React, { FC } from "react";
import './App.css';
import ToDos from "../pages/ToDos";
import { ToDoStore } from "../store/todoStore";

const App: FC = () => {
  const toDoStore = new ToDoStore();
  return <ToDos store = {toDoStore} />;  
}

export default App;
