window.onload = ()=>{
    ingresar();
}

async function ingresar(){
    let formElement = document.querySelector("#login");
    
    formElement.onsubmit = async (e) =>{
        e.preventDefault()
        let formData =  new FormData(formElement);
        let url = "http://localhost/gestor_imagen/gestor_img/backend/controller/usuario.php?fun=login";

        let config = {
            method: 'POST',
            body: formData
        }
        
        let respuesta = await fetch(url, config);
        let datos = await respuesta.json();
        
        if (datos != "false"){
            console.log(datos)
            guardarSesion(datos);
        }
    }
}


function guardarSesion(usuario){
    window.localStorage.setItem("usuario", usuario);
}
