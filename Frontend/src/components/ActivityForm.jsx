import { useState } from "react"
import { createActivity } from "../services/activitiesService"

function ActivityForm({ onCreated }) {

  const [titulo, setTitulo] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [fecha, setFecha] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    const nuevaActividad = {
      titulo,
      descripcion,
      fecha
    }

    try {

      const activity = await createActivity(nuevaActividad)

      if (onCreated) {
        onCreated(activity)
      }

      setTitulo("")
      setDescripcion("")
      setFecha("")

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        placeholder="Titulo"
        value={titulo}
        onChange={(e)=>setTitulo(e.target.value)}
      />

      <input
        placeholder="Descripcion"
        value={descripcion}
        onChange={(e)=>setDescripcion(e.target.value)}
      />

      <input
        type="date"
        value={fecha}
        onChange={(e)=>setFecha(e.target.value)}
      />

      <button type="submit">
        Crear actividad
      </button>

    </form>
  )
}

export default ActivityForm
