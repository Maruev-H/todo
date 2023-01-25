import React, { useState } from "react";
import "./Saver.scss";

export default function Saver(props) {
  const [tasksList, setTasksList] = useState("");

  function addTodo() {
    props.setTodo([ {text: tasksList, id: Date.now()}, ...props.todo,]);
  }

  return (
    <div className="save">
      <input className="save__input" value={tasksList} type="text" onChange={(e) => setTasksList(e.target.value)} />
      <div>
        <button className="save__button" type="button" onClick={addTodo}> Save Todo</button>
      </div>
    </div>
  );
}
