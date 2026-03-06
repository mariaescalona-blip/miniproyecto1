/*
Datos iniciales del sistema.

Cada actividad ahora puede tener
subtareas asociadas.
*/

export const seedActivities = [

{
id:1,
title:"Estudiar React",
subject:"Programación Web",
date:"2026-02-27",
status:"pending",

subtasks:[
{
id:1,
title:"Leer documentación",
done:true
},

{
id:2,
title:"Practicar hooks",
done:false
}
]

},

{
id:2,
title:"Hacer ejercicio",
subject:"Personal",
date:"2026-02-27",
status:"done",

subtasks:[
{
id:1,
title:"Calentamiento",
done:true
}
]

}

]
