const API_URL = "https://miniproyecto1-6.onrender.com/api"

export const getActivities = async () => {
  const res = await fetch(`${API_URL}/activities/`)
  return res.json()
}

export const createActivity = async (activity) => {
  const res = await fetch(`${API_URL}/activities/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(activity)
  })

  return res.json()
}
