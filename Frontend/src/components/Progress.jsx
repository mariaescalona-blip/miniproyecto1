import { useEffect, useState } from "react"
import { getProgress } from "../services/activitiesService"

function Progress() {

  const [progress, setProgress] = useState({
    total: 0,
    completadas: 0,
    porcentaje: 0
  })

  useEffect(() => {
    load()
  }, [])

  const load = async () => {
    const data = await getProgress()
    setProgress(data)
  }

  return (

    <div>

      <h2>Progreso</h2>

      <div
        style={{
          width: "100%",
          background: "#ddd",
          height: "20px"
        }}
      >

        <div
          style={{
            width: `${progress.porcentaje}%`,
            background: "green",
            height: "20px"
          }}
        />

      </div>

      <p>{progress.porcentaje}% completado</p>

    </div>

  )
}

export default Progress
