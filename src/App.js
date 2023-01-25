import "./App.scss";
import Saver from "./saver/Saver";
import { useState } from "react";
import Keeper from "./keeper/Keeper";

function App() {

  const [todo, setTodo] = useState([]);

  return (
    <div className="App">
      <Saver setTodo={setTodo} todo={todo} />
      <Keeper setTodo={setTodo} todo={todo} />
    </div>
  );
}

export default App;
