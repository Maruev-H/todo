import React from "react";
import "./Keeper.scss";
import del from "../pictures/del.png";

export default function Keeper(props) {

  function deleteItem (id){
    props.setTodo(
      props.todo.filter((item) => item.id !== id )
    )
  }
  return (
    <div className="keeper"> {props.todo.map((item) => (
        <div className="task">
          <div className="task__text">{item.text}</div>
          <button className="delete" type="button" onClick={() => deleteItem(item.id)}>
            <img className="delete__logo" src={del} alt="a" />
          </button>
        </div>
      ))}
    </div>
  );
}
