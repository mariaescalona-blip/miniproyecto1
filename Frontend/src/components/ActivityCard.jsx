/*
Componente que representa una tarjeta
con la información de una actividad.
*/

import React from "react";
import { Link } from "react-router-dom";

export default function ActivityCard({activity}){

  return(

    <div className="card">

      {/* Título */}
      <h3>{activity.title}</h3>

      {/* Materia */}
      <p>Materia: {activity.subject}</p>

      {/* Fecha */}
      <p>Fecha: {activity.date}</p>

      {/* Estado */}
      <p>
        Estado: 
        {activity.status === "done"
          ? " ✅ Completada"
          : " ⏳ Pendiente"}
      </p>

      {/* Botón para ver detalle */}

      <Link to={`/actividad/${activity.id}`}>
        <button>Ver detalle</button>
      </Link>

    </div>

  )

}
