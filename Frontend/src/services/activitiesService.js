/*
Servicio que maneja las actividades.

Se usa localStorage para simular
una base de datos.
*/

import {seedActivities} from "../data/activities.js"

const KEY="activities"

export function getActivities(){

  let data=localStorage.getItem(KEY)

  if(!data){

    localStorage.setItem(KEY,JSON.stringify(seedActivities))

    return seedActivities

  }

  return JSON.parse(data)

}

export function addActivity(activity){

  const activities=getActivities()

  const newActivity={
    id:Date.now(),
    ...activity
  }

  activities.push(newActivity)

  localStorage.setItem(KEY,JSON.stringify(activities))

}
