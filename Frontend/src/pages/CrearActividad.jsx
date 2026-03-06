/*
Página encargada de registrar
una nueva actividad en el sistema.
*/

import React from "react";

import ActivityForm from "../components/ActivityForm.jsx";

export default function CrearActividad() {

  return (

    <div>

      <h1>Crear Actividad</h1>

      {/* Componente que contiene el formulario */}
      <ActivityForm />

    </div>

  );

}<div>
      <h1>Crear Actividad</h1>
      <ActivityForm onSubmit={handleCreate} />
    </div>
  )
}
