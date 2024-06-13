import { obtDatos } from "./get";

let btnIniciarSesion = document.getElementById("bntLG")
const validacionUsuario = async()=>{
  let datosRegistrados = await obtDatos()
  let bandera = true
  let email = document.getElementById("Email").value
  let clave = document.getElementById("contrasenna").value
  

  datosRegistrados.forEach(usuario=>{
    if(email===usuario.email && clave===usuario.password){
      console.log("PUEDE INGRESAR");
      bandera=true
    }
    if(!bandera){
      console.log("NO PUEDE ENTRAR");
      bandera=true
    }
  })
}

btnIniciarSesion.addEventListener("click",async()=>{
  await validacionUsuario()
})