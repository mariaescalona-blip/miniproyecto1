/*
Componente visual que representa
una actividad individual.
*/

import React from "react";

export default function ActivityCard({ activity }) {

  return (

    <div className="card">

      {/* Título de la actividad */}
      <h3>{activity.title}</h3>

      {/* Materia asociada */}
      <p>Materia: {activity.subject}</p>

      {/* Fecha de entrega */}
      <p>Fecha: {activity.date}</p>

      {/* Estado de la actividad */}
      <p>Estado: {activity.status}</p>

    </div>

  );

}
