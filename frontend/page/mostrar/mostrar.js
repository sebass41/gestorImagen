window.onload = ()=>{
    obtenerImg();

}

async function obtenerImg(){
    let url = "http://localhost/gestorImagen/backend/controller/imagen.php?fun=obtener";
    
    let consulta = await fetch(url);
    let datos = await consulta.json();
    if (datos != "false"){
        mostrarImg(datos);
    }else{
        window.location.href = "http://localhost/gestorimagen";
    }
}

function mostrarImg(datos){
    let divImg = document.querySelector("#imgs");
    divImg.innerHTML = "";
    datos.forEach(element => {
        divImg.innerHTML += `
        <div>
            <img src="../../../backend/img/${element.id}.${element.extencion}">
            <p>${element.nombre}</p>
        `
    });
}

function cerrarSesion(){
    localStorage.removeItem("usuario");
    window.location.href = "http://localhost/gestorImagen";
}
