<?php

require_once "../model/usuarioDAO.php";

$funcion = $_GET['fun'];

switch ($funcion){
    case "insertar":
        insertar();
        break;
    case "login":
        login();
        break;
}

function insertar(){
    $nombre = $_POST['nombre'];
    $img = $_FILES['img'];
    $result = (new imagen())->insertar($nombre, $img);
    echo json_encode($result);
}

function login(){
    $usr = $_POST['usr'];
    $pass = $_POST['pass'];
    $result = (new usuario())->login($usr, $pass);
    if (count($result) > 0){
        session_start();
        $_SESSION['usr'] = $usr;
        $_SESSION['pass'] = $pass;
        echo json_encode($result);
    }else{
        echo json_encode($result);
    }
}
?>