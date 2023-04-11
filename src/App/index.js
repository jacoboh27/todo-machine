import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";
// import './App.css';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false },
//   { text: 'Tomar el curso de intro de React', completed: true },
//   { text: 'Tomar la pastilla', completed: false }
// ]


function App() {
  

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
