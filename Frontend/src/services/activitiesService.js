const API_URL =
"https://tu-backend.onrender.com/api/activities/"

export async function getActivities(){

const res = await fetch(API_URL)

return res.json()

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
