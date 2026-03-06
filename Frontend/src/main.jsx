/*
Archivo principal que inicia la aplicación React.

Este archivo:

1. Importa React
2. Conecta React con el HTML
3. Activa el sistema de rutas
4. Renderiza la aplicación
*/

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./styles/global.css";

/*
createRoot busca el div con id="root"
dentro del archivo index.html
*/
ReactDOM.createRoot(document.getElementById("root")).render(

  /*
  StrictMode ayuda a detectar errores
  durante el desarrollo
  */
  <React.StrictMode>

    {/* BrowserRouter habilita la navegación entre rutas */}
    <BrowserRouter>

      {/* Componente principal */}
      <App />

    </BrowserRouter>

  </React.StrictMode>

);
