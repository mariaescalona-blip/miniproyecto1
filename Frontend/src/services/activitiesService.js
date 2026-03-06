const API_URL = "https://miniproyecto1-6.onrender.com/api"

export const getActivities = async () => {
  const res = await fetch(`${API_URL}/activities/`)

  if (!res.ok) throw new Error("Error cargando actividades")

  return res.json()
}

export const createActivity = async (activity) => {
  const res = await fetch(`${API_URL}/activities/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(activity)
  })

  if (!res.ok) throw new Error("Error creando actividad")

  return res.json()
}

export const deleteActivity = async (id) => {
  await fetch(`${API_URL}/activities/${id}/`, {
    method: "DELETE"
  })
}

export const createSubTask = async (subtask) => {
  const res = await fetch(`${API_URL}/subtasks/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(subtask)
  })

  if (!res.ok) throw new Error("Error creando subtarea")

  return res.json()
}

export const toggleSubTask = async (id, completada) => {
  const res = await fetch(`${API_URL}/subtasks/${id}/`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completada })
  })

  if (!res.ok) throw new Error("Error actualizando subtarea")

  return res.json()
}

export const getProgress = async () => {
  const res = await fetch(`${API_URL}/progreso/`)

  if (!res.ok) throw new Error("Error obteniendo progreso")

  return res.json()
}
