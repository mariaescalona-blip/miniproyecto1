import { toggleSubTask, deleteActivity } from "../services/activitiesService"
import SubTaskForm from "./SubTaskForm"

function ActivityCard({ activity, reload }) {

  const toggleTask = async (task) => {
    await toggleSubTask(task.id, !task.completada)
    reload()
  }

  const eliminar = async () => {
    await deleteActivity(activity.id)
    reload()
  }

  return (

    <div className="card">

      <h3>{activity.titulo}</h3>

      <p>{activity.descripcion}</p>

      <ul>

        {activity.subtasks?.map(task => (

          <li key={task.id}>

            <span
              onClick={() => toggleTask(task)}
              style={{
                textDecoration: task.completada
                  ? "line-through"
                  : "none",
                cursor: "pointer"
              }}
            >

              {task.titulo}

            </span>

          </li>

        ))}

      </ul>

      <SubTaskForm
        activityId={activity.id}
        reload={reload}
      />

      <button onClick={eliminar}>
        Eliminar actividad
      </button>

    </div>

  )
}

export default ActivityCard
