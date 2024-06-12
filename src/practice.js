
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
                user:nom ,
                email:Correo,
                password:Contrasenia,
            }

              )
        })


    } catch (error) {
        
    }
    
}
export{registro}














})
