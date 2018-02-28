<?php
$destino = "ventas01@impresionlosreyes.com";
$nombre = $_POST['nombre'];
$correo = $_POST['email'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];


$contenido = "Nombre: ".$nombre . "\nCorreo: ".$correo . "\nTeléfono". $telefono . "\nmensaje ". $mensaje;

mail($destino, "Contenido", $contenido);

header("Location:index.php");

?>