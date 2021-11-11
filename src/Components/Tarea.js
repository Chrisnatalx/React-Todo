import React from "react";
import "../App.css";

const Tarea = (props) => {
  const borrarTarea = () => {
    props.borrar(props.id);
  };
  return (
    <div className="tarea">
      <li className="listaTareas">
        {props.tarea}
        <input type="checkbox"></input>
        <button className="btn btn-danger" onClick={borrarTarea}>
          X
        </button>
      </li>
    </div>
  );
};
export default Tarea;
