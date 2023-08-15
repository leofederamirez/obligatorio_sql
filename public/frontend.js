// document.querySelector("#btnRegistrar").addEventListener("click", registrarUsusrio)

// function registrarUsusrio() {
//     let nombre = document.querySelector("#txtNombre").value;
//     let apellido = document.querySelector("#txtApellido").value;
//     let password = document.querySelector("#txtPass").value;

//     console.log(nombre, apellido, password)
// }

/*
-----------------------------
Detalle de la funcion fetch()
-----------------------------
*/

// La primer variable es un h1 donde se devluelve un mensaje x
let mensaje = document.getElementById('mensaje')

// La segunda linea comienza llamando al elemento form cuando se dispara la accion de enviar con el button submit, envia una peticion de nuevo registro
document.getElementById('formularioRegistro').addEventListener('submit', (e) => {
    // y prevenimos el comportamiento por defaul que tiene el form para manejarlo nosotros mismos.
    e.preventDefault();
    
    // Guardamos en una constante el contenido de la tarjeta del formulario, osea los campos que en el html seria los atributos name de cada inpunt
    const formData = new FormData(e.target);
    
    console.log(formData);
    
    //Para luego guardar en la variable data solo los que nos importa extraer de ese form.
    let data ={
        nombre: formData.get('nombre'),
        apellido: formData.get('apellido'),
        edad: formData.get('edad')
    };

    console.log(data)
// Utilizamos la funcion fetch() a la cual de vamos a pasar 2 parametros:
// El primerro va ar la ruta a la cual queremos conectarnos.
    fetch('/query',{
// El siguiente paramatro la info que le vamos a mandar al servidor para hacerle una peticion.

        method: 'POST',//Aca le mandamos el metodo  de envio
        headers: {"Content-Type": "application/json"},//esta linea en el formato en el que le vamos a mandar esa info en este caso seria aplicacion o json.
        body: JSON.stringify(data)//y aqui propiamente en mensaje que nosotros queremos que lea el servidor. la propiedad bodi=y ase referencia al cuerpo de la peticion. JSON se refiere al formato en el lo vamos a mandar, stringify() lo connvierne en una cadena de texto y dentro lo que queremos que se convierta.
    }) 
    .then(res => res.json())//Aca leemos lo que el servidor nos responde que cual es una funcion que lo que vamos a hacer en tranformar esa respuesta en un json.
    .then(data =>{console.log(data.mensaje),//aca devuelta nos pregunts que hacemos con ese json, le prongo el nombre data y esa data mostramela por consola.
                 mensaje.innerText = data.mensaje//y tambien inserta ese datos en la primera variable que declare arriba ahi lo veo en el navegador tambien.
    })
    .catch(err =>{console.log(err)})//si hay un errro en lo anterior, mostramelo.

    document.getElementById("formularioRegistro").reset();//Resetea el formulario.

})


/*
                            -----------------------------------------
                                        RUTA /SELECT
                            -----------------------------------------
*/

async function select() {
    
    
    let tbody = document.getElementById("tbody")
    await fetch('select')
    .then(res => res.json())
    .then(data => { 
        console.log(data.length),
        console.log(data[0].nombre)
        tbody.innerHTML = ''
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            console.log(element)
            
            let tr = document.createElement("tr")
            
            tr.innerHTML =      `
                                    <th scope="row">${element.id}</th>
                                    <td>${element.nombre}</td>
                                    <td>${element.apellido}</td>
                                    <td>${element.edad}</td>
                                `
            tbody.appendChild(tr)
            console.log(tbody)
        }
    })
    .catch(err=> console.log(err))
}


