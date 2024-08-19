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
    session_start();
    if(isset($_SESSION['usr'])){
        $nombre = $_POST['nombre'];
        $img = $_FILES['img'];
        $result = (new imagen())->insertar($nombre, $img);
        echo json_encode($result);
    }else{
        echo "false";
    }
    
}

function obtener(){
    session_start();
    if (isset($_SESSION['usr'])){
        $result = (new imagen())->obtener();
        echo json_encode($result);
    }else{
        echo "false";
    }
    
}

?>