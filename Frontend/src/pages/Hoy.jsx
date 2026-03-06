/*
Página principal del sistema.

Esta vista muestra las actividades
registradas para el usuario.
*/

import React, { useEffect, useState } from "react";

// Importa el componente visual de cada actividad
import ActivityCard from "../components/ActivityCard.jsx";

// Importa el servicio que maneja las actividades
import { getAll } from "../services/activitiesService.js";

export default function Hoy() {

  // Estado que almacenará las actividades
  const [activities, setActivities] = useState([]);

  /*
  useEffect se ejecuta cuando
  el componente se carga por primera vez.
  */

  useEffect(() => {

    // Obtiene todas las actividades
    const data = getAll();

    // Guarda las actividades en el estado
    setActivities(data);

  }, []);

  return (

    <div>

      <h1>Vista Hoy</h1>

      <p>
        Aquí se muestran las actividades registradas.
      </p>

      {/* Recorre todas las actividades */}
      {activities.map((activity) => (

        <ActivityCard
          key={activity.id}
          activity={activity}
        />

      ))}

    </div>

  );

}
