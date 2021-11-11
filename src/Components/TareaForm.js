import React, { useState } from "react";
import "../App.css";

const TareaForm = (props) => {
  const [inputText, setInputText] = useState("");
  const [validacion, setValidacion] = useState(true);

  const manejarFormulario = (event) => {
    setInputText(event.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    if (inputText.trim() !== "") {
      props.nuevaTarea(inputText);
      setInputText("");
      setValidacion(true);
    } else {
      setValidacion(false);
    }
  };

  return (
    <div>
      <form className="contenedor" onSubmit={submit}>
        <input
          className="input"
          type="text"
          value={inputText}
          onChange={manejarFormulario}
        ></input>
        <button className="btn btn-secondary">Crear tarea</button>
      </form>
      {!validacion && (
        <div className="validacion"> Añada una tarea porfavor</div>
      )}
    </div>
  );
};
export default TareaForm;
