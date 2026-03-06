/*
Componente principal de la aplicación.

Aquí se define:

- La estructura general
- Las rutas de navegación
*/

import React from "react";

// Importamos el sistema de rutas
import { Routes, Route } from "react-router-dom";

// Importamos las páginas del sistema
import Hoy from "./pages/Hoy.jsx";
import CrearActividad from "./pages/CrearActividad.jsx";

/*
Componente de ejemplo para mostrar
detalle de una actividad específica.
*/
function DetalleActividad() {
  return <h2>Detalle de actividad</h2>;
}

/*
Componente para visualizar
el progreso del usuario.
*/
function Progreso() {
  return <h2>Vista de progreso</h2>;
}

/*
Componente principal del sistema.
*/
export default function App() {

  return (

    <div>

      {/* Sistema de rutas SPA */}

      <Routes>

        {/* Ruta principal */}
        <Route path="/" element={<Hoy />} />

        {/* Ruta para crear actividad */}
        <Route path="/crear" element={<CrearActividad />} />

        {/* Ruta dinámica para ver actividad */}
        <Route path="/actividad/:id" element={<DetalleActividad />} />

        {/* Ruta para ver progreso */}
        <Route path="/progreso" element={<Progreso />} />

      </Routes>

    </div>

  );

}
