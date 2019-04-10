function ClienteRest(){
	this.registrarUsuario=function(nombre,email,clave,experiencia){
	  $.ajax({
	    type:'POST',
	    url:'/registrarUsuario/',
	    data:JSON.stringify({nombre:nombre,email:email,clave:clave, experiencia:experiencia}),
	    success:function(data){
	      if (!data.email){
	      	console.log("No se ha podido registrar");
	        //mostrarAviso("#formRegistro","<p style='color:yellow'>La dirección de correo ya existe</p>");
	        $('#modalRegistroError').modal();
	      }
	      else{   
	      	console.log("Debes confirmar la cuenta: " + data.email);     
	        //mostrarAviso("#formRegistro","<p style='color:white;font-weight:bold;'>Confirma la cuenta en tu correo</p>");
	      	$('#modalRegistroOk').modal();
	      }
	      },
	    contentType:'application/json',
	    dataType:'json'
	  });
	}


	this.recuperarPassword=function(email){
	  $.ajax({
	    type:'POST',
	    url:'/recuperarPassword/',
	    data:JSON.stringify({email:email}),
	    success:function(data){
	      if (!data.email){
	      	console.log("No se ha podido recuperar la contraseña");
	        //mostrarAviso("#formRegistro","<p style='color:yellow'>La dirección de correo ya existe</p>");
	        $('#modalRecuperarError').modal();
	      }
	      else{   
	      	console.log("Contraseña recuperada de: " + data.email);    
	        //mostrarAviso("#formRegistro","<p style='color:white;font-weight:bold;'>Confirma la cuenta en tu correo</p>");
	      	$('#modalRecuperarOk').modal();
	      }
	      },
	    contentType:'application/json',
	    dataType:'json'
	  });
	}
}