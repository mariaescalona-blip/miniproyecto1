/*
Vista principal del sistema.

Aquí se muestran todas las actividades.
*/

import React,{useEffect,useState} from "react";

import ActivityCard from "../components/ActivityCard.jsx";
import {getActivities} from "../services/activitiesService.js";

export default function Hoy(){

  const [activities,setActivities]=useState([])

  useEffect(()=>{

    const data=getActivities()

    setActivities(data)

  },[])

  return(

    <div>

      <h1>Vista Hoy</h1>

      <p>Aquí se mostrarán las actividades del día.</p>

      {activities.map(activity=>(
        <ActivityCard
        key={activity.id}
        activity={activity}
        />
      ))}

    </div>

  )

}
