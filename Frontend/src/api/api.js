const API_URL = "https://miniproyecto1-6.onrender.com/api"

export const getActivities = async () => {
  const res = await fetch(`${API_URL}/activities/`)
  return res.json()
}

export const createActivity = async (data) => {
  const res = await fetch(`${API_URL}/activities/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  return res.json()
}

export const createSubTask = async (data) => {
  const res = await fetch(`${API_URL}/subtasks/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  return res.json()
}

export const getProgress = async () => {
  const res = await fetch(`${API_URL}/progreso/`)
  return res.json()
}
