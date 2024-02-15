import { useState } from "react";
import CreateTodo from "./components/CreateTodo";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <CreateTodo />
    </div>
  );
}

export default App;
