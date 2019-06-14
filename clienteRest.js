function ClienteRest(){
	this.registrarUsuario=function(nombre,email,clave,experiencia){
	  $.ajax({
	    type:'POST',
	    url:'/registrarUsuario/',
	    data:JSON.stringify({nombre:nombre,email:email,clave:clave, experiencia:experiencia}),
	    success:function(data){
	      if (!data.email){
	      	console.log("No se ha podido registrar");
	        $('#modalRegistroError').modal();
	      }
	      else{   
	      	console.log("Debes confirmar la cuenta: " + data.email);     
	      	$('#modalRegistroOk').modal();
	      }
	      },
	    contentType:'application/json',
	    dataType:'json'
	  });
	}

	this.crearCasoEvaluacion=function(email,nombreEvaluacion,estado,fechaEvaluacion,nombreEmpresa,emailEmpresa,tlfEmpresa,personaEmpresa,nivelesEmpresa,nivelesInferioresSeleccionado){
	 var usr=JSON.parse($.cookie("usr"));
	 $.ajax({
	    type:'POST',
	    url:'/crearCasoEvaluacion/', 
	    data:JSON.stringify({email:usr.email,nombreEvaluacion:nombreEvaluacion,estado:estado,fechaEvaluacion:fechaEvaluacion,nombreEmpresa:nombreEmpresa,emailEmpresa:emailEmpresa,tlfEmpresa:tlfEmpresa,personaEmpresa:personaEmpresa,nivelesEmpresa:nivelesEmpresa,nivelesInferioresSeleccionado:nivelesInferioresSeleccionado}),
	    success:function(data){
	      if (!data.nombreEvaluacion){
	        console.log("No se ha podido registrar el caso de evaluación");
	        $('#modalNuevoCasoError').modal();
	      }
	      else{
	        console.log("Caso de evaluación creado: " + data.nombreEvaluacion);  
	        $('#modalNuevoCasoOk').modal();
	      }
	      },
	    contentType:'application/json',
	    dataType:'json'
	  });
	}

	this.obtenerEvaluacion=function(nombreEvaluacion){
	 $.ajax({
	    type:'GET',
	    url:'/obtenerEvaluacion/'+nombreEvaluacion, 
	    data:JSON.stringify({nombreEvaluacion:nombreEvaluacion}),
	    success:function(data){
	      if (!data.nombreEvaluacion){
	        mostrarAnalisis(data[0]);
	      }
	      
	      },
	    contentType:'application/json',
	    dataType:'json'
	  });
	}

	this.obtenerEvaluaciones=function(email){
	 var usr=JSON.parse($.cookie("usr"));
	 $.ajax({
	    type:'GET',
	    url:'/obtenerEvaluaciones/'+email, 
	    data:JSON.stringify({email:usr.email}),
	    success:function(data){
	      if (!data.email){
	        mostrarTablaEvaluaciones(data);
	      }
	      else{
	        console.log("Tiene 0 evaluaciones");  
	      }
	      },
	    contentType:'application/json',
	    dataType:'json'
	  });
	}

	this.eliminarEvaluacion=function(eva){
	  $.ajax({
	    type:'DELETE',
	    url:'/eliminarEvaluacion/'+eva,
	    data:'{}',
	    success:function(data){
	      if (data.resultados==1)
	      {
	      	console.log('Evaluación eliminada');
	      }
	      },
	    contentType:'application/json',
	    dataType:'json'
	  });
	}

	this.actualizarColoresUsuario=function(email,nombre,fondoPanel,seccionTextoPanel,textoPanel){
	 
	 $.ajax({
	    type:'PUT',
	    url:'/actualizarColoresUsuario', 
	    data:JSON.stringify({email:email,nombre:nombre,fondoPanel:fondoPanel,seccionTextoPanel:seccionTextoPanel,textoPanel:textoPanel}),
	    success:function(data){
	      if (!data.email){
	        console.log('no se ha encontrado al usuario');
	      }
	      else{
	      	console.log('Se han modificado los colores del usuario: ' + data.email);

	      	$.removeCookie("usr");
	      	$.cookie("usr",JSON.stringify(data));

	      	anadirColores(fondoPanel,seccionTextoPanel,textoPanel);
	      }
	      },
	    contentType:'application/json',
	    dataType:'json'
	  });
	}

	this.actualizarEstado=function(nombreEvaluacion,datosEstado){
	 $.ajax({
	    type:'PUT',
	    url:'/actualizarEstado', 
	    data:JSON.stringify({nombreEvaluacion:nombreEvaluacion,estado:datosEstado}),
	    success:function(data){
	      if (!data.nombreEvaluacion){
	        console.log('no se ha encontrado la evaluación');
	      }
	      else{
	      	console.log('evaluación modificada: ' + data.nombreEvaluacion);
	      }
	      },
	    contentType:'application/json',
	    dataType:'json'
	  });
	}

	this.actualizarPasswordPerfil=function(email,password,newPassword){
	
	 $.ajax({
	    type:'PUT',
	    url:'/actualizarPasswordPerfil', 
	    data:JSON.stringify({email:email,clave:password,newPassword:newPassword}),
	    success:function(data){
	      if (!data.email){
	        console.log('no se ha encontrado al usuario');
	      }
	      else{
	        if(data.clave==data.password){
	        	passwordOk();
	        }
	        else{
	        	passwordError();
	        }
	      	
	      	
	      }
	      },
	    contentType:'application/json',
	    dataType:'json'
	  });
	}

	this.actualizarPerfilUsuario=function(nombre,email,experiencia){
	 $.ajax({
	    type:'PUT',
	    url:'/actualizarPerfilUsuario', 
	    data:JSON.stringify({nombre:nombre,email:email,experiencia:experiencia}),
	    success:function(data){
	      if (!data.email){
	        console.log('no se ha encontrado al usuario');
	      }
	      else{
	      	$.removeCookie("usr");
			$.cookie("usr",JSON.stringify(data));
	
	      	console.log('usuario modificado con email: ' + data.email);
	      }
	      },
	    contentType:'application/json',
	    dataType:'json'
	  });
	}

	this.actualizarEvaluacion=function(nombreEvaluacion,arrayCampos,fechaModificacionEvaluacion){
	 $.ajax({
	    type:'PUT',
	    url:'/actualizarEvaluacion', 
	    data:JSON.stringify({nombreEvaluacion:nombreEvaluacion,arrayCampos:arrayCampos,fechaModificacionEvaluacion:fechaModificacionEvaluacion}),
	    success:function(data){
	      if (!data.nombreEvaluacion){
	        console.log('no se ha encontrado la evaluación');
	      }
	      else{
	      	$('#fechaModificacion').remove();
	      	$('#nombreEvaluacionGuardada').append('<p id="fechaModificacion">Última modificación: <span>'+fechaModificacionEvaluacion+'</span></p>');

	      	console.log('evaluación modificada: ' + data.nombreEvaluacion);
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
	        $('#modalRecuperarError').modal();
	      }
	      else{   
	      	console.log("Contraseña recuperada de: " + data.email);    
	      	$('#modalRecuperarOk').modal();
	      }
	      },
	    contentType:'application/json',
	    dataType:'json'
	  });
	}

	this.loginUsuario=function(email,clave){
		$.ajax({
		    type:'POST',
		    url:'/loginUsuario',
		    data:JSON.stringify({email:email,clave:clave}),
		    success:function(data){
		      if (!data.email){
		        console.log('No se ha podido iniciar sesión');
		        $('#modalErrorLogin').modal();
		      }
		      else{     
		      	$.cookie("usr",JSON.stringify(data));
		      	console.log("Usuario ha iniciado sesión: "+data.email);
		      	var usr=JSON.parse($.cookie("usr"));
		     
		      	url = "./evaluacion.html";
     			$( location ).attr("href", url);
		      }
		     },
		    contentType:'application/json',
		    dataType:'json'
		});
	}
}