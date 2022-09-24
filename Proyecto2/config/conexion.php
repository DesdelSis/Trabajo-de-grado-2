<?php
//configuracion para acceder a la BD
function conn(){
$hostname ="localhost";
$usuariobd = 'root';
$passwordbd = "";
$bdname="login";

// conexion con el servidor
  
  $conectar = mysqli_connect(hostname,usuariobd,passwordbd,bdname);
  return $conectar;


 
    
  }

?>
