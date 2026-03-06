/*
Formulario para crear nuevas actividades.
*/

import React,{useState} from "react";
import {addActivity} from "../services/activitiesService.js";

export default function ActivityForm(){

  const [title,setTitle]=useState("");
  const [subject,setSubject]=useState("");
  const [date,setDate]=useState("");

  function handleSubmit(e){

    e.preventDefault();

    const newActivity={
      title,
      subject,
      date,
      status:"pending"
    }

    addActivity(newActivity)

    alert("Actividad creada")

  }

  return(

    <form onSubmit={handleSubmit} className="form">

      <input
      type="text"
      placeholder="Titulo"
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
      />

      <input
      type="text"
      placeholder="Materia"
      value={subject}
      onChange={(e)=>setSubject(e.target.value)}
      />

      <input
      type="date"
      value={date}
      onChange={(e)=>setDate(e.target.value)}
      />

      <button type="submit">
        Guardar Actividad
      </button>

    </form>

  )

}
