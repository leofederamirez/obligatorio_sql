document.querySelector("#btnRegistrar").addEventListener("click", registrarUsusrio)

function registrarUsusrio() {
    let nombre = document.querySelector("#txtNombre").value;
    let apellido = document.querySelector("#txtApellido").value;
    let password = document.querySelector("#txtPass").value;

    console.log(nombre, apellido, password)
}
const resultsList = document.getElementById('results')


function api() {
    
    fetch('/consulta')
        .then(res => res.json())
        .then(data =>{
            console.log(data)
    
        })
        .catch(err => {
            console.log(err)
        })
}
    