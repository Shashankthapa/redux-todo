import { useState } from "react";
import "./App.css";
import TodoForm from "./components/todoform";
import TodoList from "./components/TodoList";

function App() {
  const [task, setTask] = useState("");

  const propsObj = {
    task: task,
    setTask: setTask,
  };

  return (
    <div className = "bg-gray-50" style={{ height: "100vh"}}>
      <TodoForm {...propsObj} />
      <TodoList {...propsObj} />
    </div>
  );
}

export default App;
