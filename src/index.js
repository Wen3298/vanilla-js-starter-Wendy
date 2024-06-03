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


btnagre.addEventListener("click",addTask)