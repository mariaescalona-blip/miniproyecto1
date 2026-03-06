const API_URL = "https://miniproyecto1-6.onrender.com/api"

export const getActivities = async () => {
  const res = await fetch(`${API_URL}/activities/`)
  return res.json()
}

export const createActivity = async (activity) => {
  const res = await fetch(`${API_URL}/activities/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(activity)
  })

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

  return res.json()
}

export const toggleSubTask = async (id, completada) => {
  const res = await fetch(`${API_URL}/subtasks/${id}/`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completada })
  })

  return res.json()
}

export const getProgress = async () => {
  const res = await fetch(`${API_URL}/progreso/`)
  return res.json()
}
