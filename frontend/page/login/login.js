window.onload = ()=>{
    let usuario = [];
    usuario = JSON.parse(window.localStorage.getItem("usuario"));
    console.log(usuario);
    if (usuario == null){
        ingresar();
    }else{
        window.location.href = "http://localhost/actImagen/gestorImagen/frontend/page/mostrar/mostrar.html";
    }
}

async function ingresar(){
    let formElement = document.querySelector("#login");
    
    formElement.onsubmit = async (e) =>{
        e.preventDefault()
        let formData =  new FormData(formElement);
        let url = "http://localhost/gestorImagen/backend/controller/usuario.php?fun=login";

        let config = {
            method: 'POST',
            body: formData
        }
        
        let respuesta = await fetch(url, config);
        let datos = await respuesta.json();
        
        if (datos != "false"){
            console.log(datos);
            guardarSesion(datos);
            window.location.href = "http://localhost/gestorImagen/frontend/page/mostrar/mostrar.html";
        }else{
            console.log(datos);
            console.log("No se pudo iniciar sesion");
        }
    }
}


function guardarSesion(usuario){
    window.localStorage.setItem("usuario", JSON.stringify(usuario));
}
