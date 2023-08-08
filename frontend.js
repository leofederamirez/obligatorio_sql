document.querySelector("#btnRegistrar").addEventListener("click", registrarUsusrio)

function registrarUsusrio() {
    let nombre = document.querySelector("#txtNombre").value;
    let apellido = document.querySelector("#txtApellido").value;
    let password = document.querySelector("#txtPass").value;

    console.log(nombre, apellido, password)
}