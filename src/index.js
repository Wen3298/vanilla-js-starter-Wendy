const e = require("cors")

let btnagre = document.getElementById("addbtn")
let cont = document.getElementById("contTareas")

let addTask = ()=>{
    let div = document.createElement("div")
    let p = document.createElement("p")
    let check = document.createElement("input")
    check.type = "checkbox"
    p.innerHTML= ( "  ")
    div.appendChild(p)
    div.appendChild(check)
    cont.appendChild(div)
}


//GET
 async function getDatos() {
    const respuesta = await fetch("")
    const datos = respuesta.json()
    datos.forEach(tarea=>{
        
        let p = document.createElement("p")
    })
    console.log(datos);    
 }






//POST
async function postDatos() {
    try {
        let tarea = {
            id:Date.now(),
            titulo:"TAREA A",
            estado: false
        }
        const respuesta = await fetch("http://localhost:3000/api/task",{
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
              },
              body: JSON.stringify(tarea)
        })
        const datos = await respuesta.json()
        console.log(datos);
    } catch (error) {
        console.error(error);
    }
}

btnagre.addEventListener("click",addTask)