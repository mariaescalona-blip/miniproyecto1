/*
Archivo principal de arranque de la aplicación React.

Este archivo se encarga de:

1. Importar React
2. Conectar React con el HTML
3. Activar el sistema de rutas
4. Renderizar la aplicación completa
*/

import React from "react"; 
// Importa la librería principal de React

import ReactDOM from "react-dom/client"; 
// Permite renderizar la aplicación en el navegador

import { BrowserRouter } from "react-router-dom"; 
// Permite manejar rutas en la aplicación (SPA)

import App from "./App.jsx"; 
// Importa el componente principal de la aplicación

import "./styles/global.css"; 
// Importa los estilos globales del sistema


/*
ReactDOM.createRoot busca el elemento HTML
con id "root" dentro de index.html.

Dentro de ese elemento se renderiza toda la aplicación.
*/

ReactDOM.createRoot(document.getElementById("root")).render(

  /*
  StrictMode ayuda a detectar errores
  y mejorar las buenas prácticas en React.
  */

  <React.StrictMode>

    {/* BrowserRouter habilita la navegación entre páginas */}
    <BrowserRouter>

      {/* App es el componente principal del sistema */}
      <App />

    </BrowserRouter>

  </React.StrictMode>
);
