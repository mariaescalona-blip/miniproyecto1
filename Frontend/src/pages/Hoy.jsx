import { useState } from "react";
import ActivityCard from "../components/ActivityCard";

export default function Hoy() {
  const [actividades, setActividades] = useState([
    {
      titulo: "Estudiar React",
      materia: "Programación Web",
      fecha: "2026-02-27",
      estado: "Pendiente",
    },
    {
      titulo: "Hacer ejercicio",
      materia: "Personal",
      fecha: "2026-02-27",
      estado: "Completada",
    },
  ]);

  const toggleEstado = (index) => {
    const nuevas = [...actividades];
    nuevas[index].estado =
      nuevas[index].estado === "Pendiente"
        ? "Completada"
        : "Pendiente";
    setActividades(nuevas);
  };

  return (
    <div className="container">
      <h1>Vista Hoy</h1>
      <p className="subtitulo">
        Aquí se mostrarán las actividades del día.
      </p>

      {actividades.map((actividad, index) => (
        <ActivityCard
          key={index}
          activity={actividad}
          onToggle={() => toggleEstado(index)}
        />
      ))}

      <button className="fab">+ Crear Actividad</button>
    </div>
  );
}
