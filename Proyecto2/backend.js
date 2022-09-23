//Captura de usuario y contraseña en login
function capturaLogin(){
	var usuario=document.getElementById("usuario").value;
	var contraseña=document.getElementById("contraseña").value;
	if (usuario==""){
		alert("Debe llenar todos los campos");
		document.getElementById("usuario").focus();
	}
	else if (contraseña==""){
	alert("Debe llenar todos los campos");
	document.getElementById("contraseña").focus();
	}

	console.log(usuario + " " + contraseña); 
}

//Al dar click en el boton registrarse en el Login, pide un permiso en la nueva página.
//function permisoCamara(){

//}

//Captura del registro
function capturaRegistro(){
	var nuevoUsuario=document.getElementById("nuevoUsuario").value;
	var identificacion=document.getElementById("identificacion").value;
	var crearContraseña=document.getElementById("crearContraseña").value;

	if (nuevoUsuario==""){
		alert("Debe llenar todos los campos");
		document.getElementById("nuevoUsuario").focus();
	}
	else if (identificacion==""){
	alert("Debe llenar todos los campos");
	document.getElementById("identificacion").focus();
	}
	else if (crearContraseña==""){
	alert("Debe llenar todos los campos");
	document.getElementById("crearContraseña").focus();
	}
	console.log(nuevoUsuario+" "+identificacion+" "+crearContraseña);
}

	navigator.mediaDevices.getUserMedia({audio:false, video:true}).then((stream)=>{
 	console.log(stream)

 	let video = document.getElementById('video')

 	video.srcObject = stream
 	video.onloadedmetadata = (ev)=>video.play()
	}).catch((err)=>console.log(err))