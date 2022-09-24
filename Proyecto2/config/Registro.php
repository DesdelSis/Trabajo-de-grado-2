<?php  
 //Recibimos los datos del index registrarse
 include("conexion.php");
 if (isset($_POST['registro'])) {
 $nom_usuario=$_POST['nom_usuario'];
 $identi_usuario=$_POST['identi_usuario'];
 $fot_usuario=$_POST['fot_usuario'];




 				$conectar=conn();
 				$sql="INSERT INTO usuarios (nom_usuario, identi_usuario, fot_usuario)
 				VALUES ('$nom_usuario', '$identi_usuario', 'fot_usuario')";
 				$resul= mysqli_query($conectar , $sql)or trigger_error("Query faild SQL- Error: ".mysql_error($conectar),E_USER_ERROR);


  }				echo "$sql";

?>



