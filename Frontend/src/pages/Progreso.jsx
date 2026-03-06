import { useEffect, useState } from "react"
import { getProgress } from "../services/activitiesService"

function Progreso() {

  const [progress, setProgress] = useState({})

  useEffect(() => {
    loadProgress()
  }, [])

  const loadProgress = async () => {
    const data = await getProgress()
    setProgress(data)
  }

  return (

    <div>

      <h2>Progreso</h2>

      <p>Total: {progress.total}</p>

      <p>Completadas: {progress.completadas}</p>

      <p>Porcentaje: {progress.porcentaje}%</p>

    </div>

  )
}

export default Progreso
