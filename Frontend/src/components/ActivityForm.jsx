import { useState } from "react"
import { createActivity } from "../api/api"

function ActivityForm({ reload }) {

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

    setTitulo("")
    setDescripcion("")
    setFecha("")

    reload()
  }

  return (
    <form onSubmit={handleSubmit}>

      <h2>Crear actividad</h2>

      <input
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />

      <input
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />

      <input
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
      />

      <button type="submit">Crear</button>

    </form>
  )
}

export default ActivityForm
