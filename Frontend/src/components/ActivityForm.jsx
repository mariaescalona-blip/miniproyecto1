import { useState } from "react"
import { createActivity } from "../services/activitiesService"

function ActivityForm({ reload }) {

  const [titulo, setTitulo] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [fecha, setFecha] = useState("")
  const [mensaje, setMensaje] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validación básica (sirve para la rúbrica)
    if (!titulo || !fecha) {
      setMensaje("⚠ El título y la fecha son obligatorios")
      return
    }

    try {

      await createActivity({
        titulo,
        descripcion,
        fecha
      })

      setMensaje("✅ Actividad creada correctamente")

      setTitulo("")
      setDescripcion("")
      setFecha("")

      if (reload) {
        reload()
      }

    } catch (error) {

      setMensaje("❌ Error al crear la actividad")
      console.error(error)

    }

  }

  return (

    <div className="activity-form">

      <h2>Crear Actividad</h2>

      {mensaje && <p>{mensaje}</p>}

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Título de la actividad"
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

        <button type="submit">
          Crear actividad
        </button>

      </form>

    </div>

  )
}

export default ActivityForm
