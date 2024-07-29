window.onload = ()=>{
    insertar();
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