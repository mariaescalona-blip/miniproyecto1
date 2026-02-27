import ActivityCard from "../components/ActivityCard";
import { getActivities } from "../services/activitiesService";

function Hoy() {
  const actividades = getActivities();

  if (actividades.length === 0) {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Vista Hoy</h1>
        <p>No hay actividades registradas.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Vista Hoy</h1>
      <p>Aquí se mostrarán las actividades del día.</p>

      {actividades.map((actividad) => (
        <ActivityCard
          key={actividad.id}
          titulo={actividad.titulo}
          categoria={actividad.categoria}
          fecha={actividad.fecha}
          estado={actividad.estado}
        />
      ))}
    </div>
  );
}

export default Hoy;
