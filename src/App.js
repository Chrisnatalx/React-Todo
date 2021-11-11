import "./App.css";
import React, { useState, useEffect } from "react";
import TareaForm from "./Components/TareaForm";
import Tarea from "./Components/Tarea";
import "bootstrap/dist/css/bootstrap.min.css";
const LOCAL_STOREGA_KEY = "react-todo";
function App() {
  const [listaTarea, setListaTarea] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STOREGA_KEY));
    if (storageTodos) {
      setListaTarea(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STOREGA_KEY, JSON.stringify(listaTarea));
  }, [listaTarea]);

  const nuevaTarea = (tarea) => {
    setListaTarea([tarea, ...listaTarea]);
  };

  const borrar = (id) => {
    const listaFiltrada = listaTarea.filter((e, index) => index !== id);
    setListaTarea(listaFiltrada);
  };

  return (
    <div className="Main">
      <div className="App">
        <h1>React Todo</h1>
        <TareaForm nuevaTarea={nuevaTarea}></TareaForm>

        {listaTarea.map((e, index) => (
          <Tarea tarea={e} borrar={borrar} id={index}></Tarea>
        ))}
      </div>
    </div>
  );
}

export default App;
