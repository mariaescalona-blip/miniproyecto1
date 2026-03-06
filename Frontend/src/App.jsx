/*
Componente principal del sistema.

Aquí se definen todas las rutas de la aplicación.
*/

import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Hoy from "./pages/Hoy.jsx";
import CrearActividad from "./pages/CrearActividad.jsx";
import DetalleActividad from "./pages/DetalleActividad.jsx";
import Progreso from "./pages/Progreso.jsx";

import "./styles/App.css";

export default function App(){

  return(

    <div className="app-container">

      {/* Barra de navegación */}
      <nav className="navbar">

        <h2>TaskFlow</h2>

        <div className="nav-links">

          <Link to="/hoy">
            <button>Hoy</button>
          </Link>

          <Link to="/crear">
            <button>Crear Actividad</button>
          </Link>

          <Link to="/progreso">
            <button>Progreso</button>
          </Link>

        </div>

      </nav>

      {/* Definición de rutas */}

      <Routes>

        <Route path="/" element={<Hoy />} />

        <Route path="/hoy" element={<Hoy />} />

        <Route path="/crear" element={<CrearActividad />} />

        <Route path="/actividad/:id" element={<DetalleActividad />} />

        <Route path="/progreso" element={<Progreso />} />

      </Routes>

    </div>

  )

}
