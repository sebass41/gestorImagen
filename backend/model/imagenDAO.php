<?php

require_once "../conexion/Conexion.php";

class imagen{

    function obtener(){
        $connection = conection();
        $sql = "SELECT * FROM imagen";
        $respuesta = $connection->query($sql);
        $imagenes = $respuesta->fetch_all(MYSQLI_ASSOC);
        return $imagenes;
    }

    function insertar($nombre, $img){
        $connection = conection();
        $nomImg = $img['name'];
        $extencion = pathinfo($nomImg, PATHINFO_EXTENSION);
        $sql = "INSERT INTO imagen(nombre, extencion) VALUES('$nombre', '$extencion')";
        $connection->query($sql);
        $id = $connection->insert_id;
        $rutaTemp = $img['tmp_name'];
        move_uploaded_file($rutaTemp, "../img/$id.$extencion");

    }
}

?>