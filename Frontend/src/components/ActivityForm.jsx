/*
Formulario con validaciones
y mensajes de error.
*/

import React,{useState} from "react";
import {addActivity} from "../services/activitiesService.js";

export default function ActivityForm(){

const [title,setTitle]=useState("")
const [subject,setSubject]=useState("")
const [date,setDate]=useState("")

const [message,setMessage]=useState("")
const [error,setError]=useState("")

function handleSubmit(e){

e.preventDefault()

if(!title){

setError("El título es obligatorio")
return
}

if(!date){

setError("La fecha es obligatoria")
return
}

setError("")

const newActivity={
title,
subject,
date,
status:"pending",
subtasks:[]
}

addActivity(newActivity)

setMessage("Actividad creada correctamente")

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
Guardar actividad
</button>

{error && <p className="error">{error}</p>}

{message && <p className="success">{message}</p>}

</form>

)

}
