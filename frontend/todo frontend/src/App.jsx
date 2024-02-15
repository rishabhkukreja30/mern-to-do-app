import { useState } from "react";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  let x = true;

  if (x) {
    fetch("http://localhost:3000/todos").then(async (res) => {
      const json = await res.json();
      console.log(json.todos);
      setTodos(json.todos);
    });
    x = false;
  }

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
