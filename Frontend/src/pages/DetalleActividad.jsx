/*
Vista detallada de una actividad.

Aquí se muestran también
las subtareas asociadas.
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

<h3>Subtareas</h3>

<ul>

{activity.subtasks?.map(sub=>(
<li key={sub.id}>
{sub.done ? "✅":"⬜"} {sub.title}
</li>
))}

</ul>

</div>

)

}
