import { useEffect, useState } from "react"
import { getActivities } from "../services/activitiesService"
import ActivityList from "../components/ActivityList"

function Hoy() {

  const [activities, setActivities] = useState([])

  useEffect(() => {
    loadActivities()
  }, [])

  const loadActivities = async () => {
    const data = await getActivities()
    setActivities(data)
  }

  return (

    <div>

      <h1>Actividades de hoy</h1>

      <ActivityList
        activities={activities}
        reload={loadActivities}
      />

    </div>

  )
}

export default Hoy
