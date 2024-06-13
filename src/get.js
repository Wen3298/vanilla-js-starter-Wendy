//Get
 async function obtDatos() {
    try {
        const respuesta = await fetch("http://localhost:3000/api/task")
        let UsuarioFetch = await respuesta.json()
        return UsuarioFetch
        
    } catch (error) {
        console.log(error)
    }
    
 }
 export{ obtDatos}