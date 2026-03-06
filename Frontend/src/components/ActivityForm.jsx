import { useState } from "react"
import { createActivity } from "../services/activitiesService"

function ActivityForm() {

  const [titulo, setTitulo] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [fecha, setFecha] = useState("")

  const handleSubmit = async (e) => {

    e.preventDefault()

    await createActivity({
      titulo,
      descripcion,
      fecha
    })

    alert("Actividad creada")

    setTitulo("")
    setDescripcion("")
    setFecha("")
  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />

      <input
        type="text"
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />

      <input
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
      />

      <button type="submit">Crear actividad</button>

    </form>
  )
}

export default ActivityForm
