import { useEffect, useState } from "react"
import { getActivities } from "../services/activitiesService"
import ActivityCard from "../components/ActivityCard"

function Hoy() {

  const [activities, setActivities] = useState([])

  useEffect(() => {

    const loadActivities = async () => {
      const data = await getActivities()
      setActivities(data)
    }

    loadActivities()

  }, [])

  return (
    <div>

      <h2>Actividades</h2>

      {activities.map((act) => (
        <ActivityCard key={act.id} activity={act} />
      ))}

    </div>
  )
}

export default Hoy
