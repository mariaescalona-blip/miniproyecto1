import { useState } from "react"
import { createSubTask } from "../services/activitiesService"

function SubTaskForm({ activityId, reload }) {

  const [titulo, setTitulo] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    await createSubTask({
      actividad: activityId,
      titulo,
      completada: false
    })

    setTitulo("")
    reload()
  }

  return (

    <form onSubmit={handleSubmit}>

      <input
        placeholder="Nueva subtarea"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />

      <button>Agregar</button>

    </form>

  )
}

export default SubTaskForm
