import { toggleSubTask, deleteActivity } from "../services/activitiesService"
import SubTaskForm from "./SubTaskForm"

function ActivityCard({ activity, reload }) {

  const toggleTask = async (task) => {

    try {

      await toggleSubTask(
        task.id,
        !task.completada
      )

      reload()

    } catch (error) {

      console.error("Error actualizando subtarea", error)

    }

  }

  const eliminarActividad = async () => {

    const confirmar = window.confirm(
      "¿Eliminar esta actividad?"
    )

    if (!confirmar) return

    try {

      await deleteActivity(activity.id)

      reload()

    } catch (error) {

      console.error("Error eliminando actividad", error)

    }

  }

  return (

    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        marginBottom: "15px",
        borderRadius: "8px"
      }}
    >

      <h3>{activity.titulo}</h3>

      <p>{activity.descripcion}</p>

      <p>
        <strong>Fecha:</strong> {activity.fecha}
      </p>

      <h4>Subtareas</h4>

      <ul>

        {activity.subtasks?.length > 0 ? (

          activity.subtasks.map(task => (

            <li key={task.id}>

              <span
                onClick={() => toggleTask(task)}
                style={{
                  cursor: "pointer",
                  textDecoration:
                    task.completada
                      ? "line-through"
                      : "none"
                }}
              >

                {task.titulo}

              </span>

            </li>

          ))

        ) : (

          <p>No hay subtareas</p>

        )}

      </ul>

      <SubTaskForm
        activityId={activity.id}
        reload={reload}
      />

      <button
        onClick={eliminarActividad}
        style={{
          marginTop: "10px",
          background: "red",
          color: "white",
          border: "none",
          padding: "8px",
          cursor: "pointer"
        }}
      >

        Eliminar actividad

      </button>

    </div>

  )
}

export default ActivityCard
