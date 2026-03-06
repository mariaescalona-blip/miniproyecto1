/*
Tarjeta que muestra información
de una actividad.
*/

import React from "react";
import {Link} from "react-router-dom";

export default function ActivityCard({activity}){

return(

<div className="card">

<h3>{activity.title}</h3>

<p>Materia: {activity.subject}</p>

<p>Fecha: {activity.date}</p>

<p>
Estado:
{activity.status==="done"
?" ✅ Completada"
:" ⏳ Pendiente"}
</p>

<p>
Subtareas: {activity.subtasks?.length || 0}
</p>

<Link to={`/actividad/${activity.id}`}>
<button>Ver detalle</button>
</Link>

</div>

)

}
