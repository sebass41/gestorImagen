<?php

require_once "../model/imagenDAO.php";

$funcion = $_GET['fun'];

switch ($funcion){
    case "insertar":
        insertar();
        break;
    case "obtener":
        obtener();
        break;
}

function insertar(){
    $nombre = $_POST['nombre'];
    $img = $_FILES['img'];
    $result = (new imagen())->insertar($nombre, $img);
    echo json_encode($result);
}

function obtener(){
    if (isset($_SESSION)){
        $result = (new imagen())->obtener();
        echo json_encode($result);
    }else{
        echo "false";
    }
    
}

?>