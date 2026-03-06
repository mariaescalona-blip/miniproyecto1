/*
Formulario para registrar nuevas actividades.
*/

import React, { useState } from "react";

import { addActivity } from "../services/activitiesService.js";

export default function ActivityForm() {

  /*
  Estado que almacena los datos
  ingresados en el formulario.
  */
  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    date: "",
    status: "Pendiente"
  });

  /*
  Actualiza los valores del formulario
  cuando el usuario escribe.
  */
  function handleChange(e) {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  }

  /*
  Se ejecuta cuando se envía el formulario.
  */
  function handleSubmit(e) {

    e.preventDefault();

    addActivity(formData);

    alert("Actividad creada");

  }

  return (

    <form onSubmit={handleSubmit}>

      <input
        type="text"
        name="title"
        placeholder="Título"
        onChange={handleChange}
      />

      <input
        type="text"
        name="subject"
        placeholder="Materia"
        onChange={handleChange}
      />

      <input
        type="date"
        name="date"
        onChange={handleChange}
      />

      <button type="submit">
        Guardar
      </button>

    </form>

  );

}
