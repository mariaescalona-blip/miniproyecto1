/*
Vista que muestra estadísticas
del progreso del usuario.
*/

import React from "react";
import {getActivities} from "../services/activitiesService.js";

export default function Progreso(){

  const activities=getActivities()

  const total=activities.length

  const completadas=activities.filter(a=>a.status==="done").length

  const porcentaje=(completadas/total)*100

  return(

    <div>

      <h1>Progreso</h1>

      <p>Total actividades: {total}</p>

      <p>Completadas: {completadas}</p>

      <p>Progreso: {porcentaje.toFixed(0)}%</p>

    </div>

  )

}
