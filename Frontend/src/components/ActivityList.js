import SubTaskForm from "./SubTaskForm"

function ActivityList({ activities, reload }) {

  return (

    <div>

      <h2>Actividades</h2>

      {activities.map((activity) => (

        <div key={activity.id}>

          <h3>{activity.titulo}</h3>

          <p>{activity.descripcion}</p>

          <ul>

            {activity.subtasks?.map((task) => (
              <li key={task.id}>
                {task.titulo} - {task.completada ? "✔" : "Pendiente"}
              </li>
            ))}

          </ul>

          <SubTaskForm
            activityId={activity.id}
            reload={reload}
          />

        </div>

      ))}

    </div>
  )
}

export default ActivityList
