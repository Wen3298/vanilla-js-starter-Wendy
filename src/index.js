document.addEventListener("DOMContentLoaded",()=>{
    let btnagre = document.getElementById("addbtn")
    let tareas = document.getElementById("tareas")
    let input = document.getElementById("textoo")  

//GET
async function getDatos() {
    try {
        tareas.innerHTML=""
        const respuesta = await fetch("http://localhost:3000/api/task")
        const datos = await respuesta.json()
        let numtask = 0
        
        datos.forEach(tarea=>{
            let div = document.createElement("div")
            let p = document.createElement("p")
            let check = document.createElement("input")
            check.type = "checkbox"
            p.innerHTML=tarea.titulo
            div.appendChild(p)
            tareas.appendChild(div)
            let btnEliminar = document.createElement("button")
            btnEliminar.innerHTML="Eliminar"
            p.appendChild(check)
            p.appendChild(btnEliminar)
            numtask++

            btnEliminar.addEventListener("click",()=>{
                deleteTask(tarea.id)
                
            })
        })
        //Agregar en el HTML el Contador
        document.getElementById("numTask").innerHTML = numtask
        console.log(getDatos);  
    } 
    catch (error) {
        console.error(error);  
    }  
}

//POST
async function postDatos() {
    try {
        let tarea = {
            id:Date.now(),
            titulo:textoo.value,
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
        getDatos()
    } catch (error) {
        console.error(error);
    }
}
// para que no  deje agregar tareas si no tengo nada escrito
btnagre.addEventListener("click",()=>{
    if(input.value==""){
        alert("Escribe tu tarea primero !")
    }else{
        postDatos()
    }
})

//DELETE
async function deleteTask(id) {
    console.log("ENTRA");
    try {
        const respuesta = await fetch(`http://localhost:3000/api/task/${id}`,{
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
              },
        })
        let datosSalida = respuesta.json()
        console.log(datosSalida);
        getDatos()
    } catch (error) {
        console.error(error);
    }
}
})


