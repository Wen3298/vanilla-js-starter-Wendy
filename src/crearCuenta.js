import { registro } from "./Post";

let btnIniciar = document.getElementById("bntagregar")

const crearUsuario = async()=>{
let nombre = document.getElementById("Nombre").value
let email = document.getElementById("correo").value
let password = document.getElementById("Contrasenia").value
await registro(nombre,email,password)
}

btnIniciar.addEventListener("click",crearUsuario)


export {crearUsuario}





