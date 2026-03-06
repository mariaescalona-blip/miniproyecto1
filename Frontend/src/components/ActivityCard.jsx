import { Link } from "react-router-dom"

function ActivityCard({ activity }) {

  return (
    <div className="card">

      <h3>{activity.titulo}</h3>

      <p>{activity.descripcion}</p>

      <p>{activity.fecha}</p>

      <Link to={`/actividad/${activity.id}`}>
        Ver detalle
      </Link>

    </div>
  )
}

export default ActivityCard
