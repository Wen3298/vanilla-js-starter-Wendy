//POST
async function registro(nom,Correo,Contrasenia) {
    try {
        const respuesta = await fetch("http://localhost:3000/api/task",{
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
              },
              body: JSON.stringify(
                {
                user:nom,
                email:Correo,
                password:Contrasenia,
            }
              )
        })
        let datos = await respuesta.json()
        console.log(datos)
    } catch (error) {
        console.log(error)
    }
}


export {registro}













