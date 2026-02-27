import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Hoy from './pages/Hoy.jsx'
import CrearActividad from './pages/CrearActividad.jsx'

export default function App() {
  return (
    <div className="app-root">
      <header className="app-header">
        <Link to="/" className="brand">TaskFlow</Link>
        <nav>
          <Link to="/">Hoy</Link> | <Link to="/crear">Crear actividad</Link>
        </nav>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Hoy />} />
          <Route path="/crear" element={<CrearActividad />} />
        </Routes>
      </main>
    </div>
  )
}
