/*
Servicio encargado de manejar
las actividades del sistema.

Actualmente usa localStorage
para simular una base de datos.
*/

import { seedActivities } from "../data/activities.js";

/*
Clave usada en localStorage
para guardar las actividades.
*/
const KEY = "activities";

/*
Obtiene todas las actividades
guardadas en el navegador.
*/
export function getAll() {

  // Intenta leer los datos
  let data = localStorage.getItem(KEY);

  // Si no existen actividades guardadas
  if (!data) {

    // Guarda las actividades iniciales
    localStorage.setItem(KEY, JSON.stringify(seedActivities));

    return seedActivities;
  }

  // Convierte el texto JSON en objeto
  return JSON.parse(data);

}

/*
Agrega una nueva actividad
al almacenamiento.
*/
export function addActivity(activity) {

  const activities = getAll();

  activities.push({
    id: Date.now(),
    ...activity
  });

  localStorage.setItem(KEY, JSON.stringify(activities));

}
