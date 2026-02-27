import React, { useEffect, useState } from 'react'
import ActivityCard from '../components/ActivityCard.jsx'
import { getAll } from '../services/activitiesService.js'

export default function Hoy() {
  const [activities, setActivities] = useState([])

  useEffect(() => {
    setActivities(getAll())
  }, [])

  return (
    <div>
      <h1>Vista Hoy</h1>
      <p>Aquí se mostrarán las actividades del día.</p>

      <div>
        {activities.map(a => (
          <ActivityCard key={a.id} activity={a} />
        ))}

        {activities.length === 0 && <div className="card">No hay actividades</div>}
      </div>
    </div>
  )
}
