/*
Servicio que conecta React con
la API Django desplegada en Render
*/

const API_URL =
"https://miniproyecto1.onrender.com/api/activities/"


export async function getActivities(){

const response = await fetch(API_URL)

return response.json()

}


export async function createActivity(activity){

await fetch(API_URL,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(activity)

})

}
