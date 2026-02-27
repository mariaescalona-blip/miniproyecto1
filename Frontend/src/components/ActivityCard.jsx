import "../styles/App.css";

export default function ActivityCard({ activity, onToggle }) {
  return (
    <div className={`card ${activity.estado === "Completada" ? "done" : ""}`}>
      <h3>{activity.titulo}</h3>

      <p className="materia">{activity.materia}</p>
      <p className="fecha">{activity.fecha}</p>

      <span
        className={`badge ${
          activity.estado === "Completada"
            ? "badge-success"
            : "badge-pending"
        }`}
        onClick={onToggle}
      >
        {activity.estado}
      </span>
    </div>
  );
}
