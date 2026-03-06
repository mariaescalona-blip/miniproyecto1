import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import Hoy from "./pages/Hoy"
import CrearActividad from "./pages/CrearActividad"
import DetalleActividad from "./pages/DetalleActividad"
import Progreso from "./pages/Progreso"

import "./styles/App.css"

function App() {
  return (
    <Router>

      <nav className="navbar">
        <h2>Gestor de Actividades</h2>

        <div className="menu">
          <Link to="/">Hoy</Link>
          <Link to="/crear">Crear</Link>
          <Link to="/progreso">Progreso</Link>
        </div>
      </nav>

      <div className="container">

        <Routes>

          <Route path="/" element={<Hoy />} />

          <Route path="/crear" element={<CrearActividad />} />

          <Route path="/actividad/:id" element={<DetalleActividad />} />

          <Route path="/progreso" element={<Progreso />} />

        </Routes>

      </div>

    </Router>
  )
}

export default App
