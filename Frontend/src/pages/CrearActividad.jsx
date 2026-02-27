import React from 'react'
import ActivityForm from '../components/ActivityForm.jsx'
import { addActivity } from '../services/activitiesService.js'
import { useNavigate } from 'react-router-dom'

export default function CrearActividad() {
  const navigate = useNavigate()

  function handleCreate(data) {
    addActivity(data)
    // luego de guardar vamos a "Hoy"
    navigate('/')
  }

  return (
    <div>
      <h1>Crear Actividad</h1>
      <ActivityForm onSubmit={handleCreate} />
    </div>
  )
}
