/*
Vista que muestra el detalle de una actividad.
*/

import React from "react";
import {useParams} from "react-router-dom";
import {getActivities} from "../services/activitiesService.js";

export default function DetalleActividad(){

  const {id}=useParams()

  const activities=getActivities()

  const activity=activities.find(a=>a.id==id)

  if(!activity){

    return <p>Actividad no encontrada</p>

  }

  return(

    <div>

      <h1>{activity.title}</h1>

      <p>Materia: {activity.subject}</p>

      <p>Fecha: {activity.date}</p>

      <p>Estado: {activity.status}</p>

    </div>

  )

}
