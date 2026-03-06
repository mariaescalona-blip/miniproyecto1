import React from "react";
import { Routes, Route } from "react-router-dom";

import Hoy from "./pages/Hoy.jsx";
import CrearActividad from "./pages/CrearActividad.jsx";

function DetalleActividad() {
  return <h2>Detalle de actividad</h2>;
}

function Progreso() {
  return <h2>Vista de progreso</h2>;
}

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hoy />} />
        <Route path="/crear" element={<CrearActividad />} />
        <Route path="/actividad/:id" element={<DetalleActividad />} />
        <Route path="/progreso" element={<Progreso />} />
      </Routes>
    </div>
  );
}
