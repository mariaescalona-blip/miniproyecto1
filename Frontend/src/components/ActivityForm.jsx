
import { useState } from "react";

function ActivityForm({ onSubmit }) {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [fecha, setFecha] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!titulo || !categoria || !fecha) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    setError("");
    onSubmit({ titulo, categoria, fecha });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="titulo">Título</label>
        <br />
        <input
          id="titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="categoria">Categoría</label>
        <br />
        <input
          id="categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="fecha">Fecha</label>
        <br />
        <input
          id="fecha"
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
      </div>

      {error && (
        <p style={{ color: "red" }} role="alert">
          {error}
        </p>
      )}

      <br />
      <button type="submit">Guardar</button>
    </form>
  );
}

export default ActivityForm;
