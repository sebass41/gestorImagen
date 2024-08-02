window.onload = ()=>{
    insertar();
    cerrarSesion();
}

function insertar(){
    let formElement = document.querySelector("#imgForm");
    
    formElement.onsubmit = async (e) =>{
        e.preventDefault()
        let formData =  new FormData(formElement);
        let url = "http://localhost/actImagen/gestorimagen/backend/controller/imagen.php?fun=insertar";

        let config = {
            method: 'POST',
            body: formData
        }
        
        let respuesta = await fetch(url, config);
        let datos = await respuesta.json();
        console.log(datos);
        
}
}

function cerrarSesion(){
    let btnCerrarSesoin = document.querySelector("#logout");
    console.log("funciona");
    btnCerrarSesoin.addEventListener('click', ()=>{
        localStorage.removeItem("usuario");

        console.log("Se cerró la sesion");
    });

    console.log("si funciona");
}