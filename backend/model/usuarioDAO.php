<?php

require_once "../conexion/Conexion.php";

class usuario{
    function login($usr, $pass){
        $connection = conection();
        $sql = "SELECT * FROM usuario WHERE nombre = '$usr' AND pass = '$pass';";
        $respuesta = $connection->query($sql);
        $login = $respuesta->fetch_all(MYSQLI_ASSOC);
        return $login;
    }
}

?>