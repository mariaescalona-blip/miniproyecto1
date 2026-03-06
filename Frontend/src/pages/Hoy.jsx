import { useEffect, useState } from "react"
import { getActivities } from "../services/activitiesService"
import ActivityList from "../components/ActivityList"
import ActivityForm from "../components/ActivityForm"

function Hoy() {

  const [activities, setActivities] = useState([])

  const loadActivities = async () => {
    const data = await getActivities()
    setActivities(data)
  }

  useEffect(() => {
    loadActivities()
  }, [])

  return (

    <div>

      <h1>Gestor de Actividades</h1>

      <ActivityForm reload={loadActivities} />

      <ActivityList
        activities={activities}
        reload={loadActivities}
      />

    </div>

  )
}

export default Hoy
