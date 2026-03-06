# Documentación API (Mock)

## GET /activities

Obtiene todas las actividades.

Respuesta:

[
{
id:1,
title:"Estudiar React",
subject:"Programación",
date:"2026-02-27",
status:"pending"
}
]

---

## POST /activities

Crea una actividad.

Request

{
title:"Estudiar React",
subject:"Programación",
date:"2026-02-27"
}

Response

{
id:3,
title:"Estudiar React",
status:"pending"
}

---

## GET /activities/:id

Obtiene una actividad específica.

Response

{
id:1,
title:"Estudiar React",
subtasks:[
{
title:"Leer documentación"
}
]
}
