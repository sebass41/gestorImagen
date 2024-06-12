<?php

function conection(){
    $host = "localhost";
    $user = "root";
    $pass = "";
    $db = "gestor_imagen";
    $puerto = 3306;

    $mysqli = new mysqli($host, $user, $pass, $db, $puerto);
    return $mysqli;
}

?>