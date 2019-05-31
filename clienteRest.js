/*var modelo = require("./servidor/modelo.js"); 
var evaluacion = new modelo.Evaluacion();*/

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





	this.crearCasoEvaluacion=function(email,nombreEvaluacion,estado,fechaEvaluacion,nombreEmpresa,emailEmpresa,tlfEmpresa,personaEmpresa,nivelesEmpresa,nivelesInferioresSeleccionado){
	 var usr=JSON.parse($.cookie("usr"));
	 $.ajax({
	    type:'POST',
	    url:'/crearCasoEvaluacion/', 
	    data:JSON.stringify({email:usr.email,nombreEvaluacion:nombreEvaluacion,estado:estado,fechaEvaluacion:fechaEvaluacion,nombreEmpresa:nombreEmpresa,emailEmpresa:emailEmpresa,tlfEmpresa:tlfEmpresa,personaEmpresa:personaEmpresa,nivelesEmpresa:nivelesEmpresa,nivelesInferioresSeleccionado:nivelesInferioresSeleccionado}),
	    success:function(data){
	      if (!data.nombreEvaluacion){
	        //alert('El nombre del caso de evaluación ya existe en nuestros registros');
	        console.log("No se ha podido registrar el caso de evaluación");
	        $('#modalNuevoCasoError').modal();
	      }
	      else{
	        //alert('Caso creado correctamente');
	        console.log("Caso de evaluación creado: " + data.nombreEvaluacion);  
	        //ejemplo(data.nombreEvaluacion);
	        $('#modalNuevoCasoOk').modal();
	      }
	      },
	    contentType:'application/json',
	    dataType:'json'
	  });
	}


	this.obtenerEvaluacion=function(nombreEvaluacion){
	 //var usr=JSON.parse($.cookie("usr"));
	 //console.log('A VER: '+nombreEvaluacion);
	 $.ajax({
	    type:'GET',
	    url:'/obtenerEvaluacion/'+nombreEvaluacion, 
	    data:JSON.stringify({nombreEvaluacion:nombreEvaluacion}),
	    success:function(data){
	      if (!data.nombreEvaluacion){
	        
	        //console.log(data[0]);
	        
	        //console.log(data[0]);
	        //console.log(data[0]);
	        mostrarAnalisis(data[0]);
	      }
	      else{
	      	//var size = Object.keys(data).length;
	      	//console.log(size);
	      	//console.log(data);
	        //alert('Caso creado correctamente');
	        //console.log("Tiene 0 evaluaciones");  
	        ;
	        
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
	        //alert('El nombre del caso de evaluación ya existe en nuestros registros');
	        //console.log("Tiene algunas evaluaciones" +data.length);

	        /*for (var i = 0; i < data.length; i++) {
	        	console.log(data[i].tlfEmpresa);
	        }*/
	        //$('#modalNuevoCasoError').modal();
	        //console.log(data);
	        mostrarTablaEvaluaciones(data);
	      }
	      else{
	      	//var size = Object.keys(data).length;
	      	//console.log(size);
	      	console.log(data);
	        //alert('Caso creado correctamente');
	        console.log("Tiene 0 evaluaciones");  
	        /*for (i in data) {
	        	console.log(data[i].tlfEmpresa);
	        }*/


	        //ejemplo(data.nombreEvaluacion);
	        //$('#modalNuevoCasoOk').modal();
	      }
	      },
	    contentType:'application/json',
	    dataType:'json'
	  });
	}



	this.eliminarEvaluacion=function(eva){
	  //var usr=JSON.parse($.cookie("usr"));
	  $.ajax({
	    type:'DELETE',
	    url:'/eliminarEvaluacion/'+eva,
	    data:'{}',
	    success:function(data){
	      if (data.resultados==1)
	      {

	      	//$('#modalEliminadaEvaluacion').modal();
	        //mostrarAviso("#menu2","<p style='color:red'>Usuario correctamente eliminado</p>");

	        /*$.removeCookie("usr");
		      $('.well').remove();
		      mostrarCabecera();
		      
		      $('#btnLogin li').remove();
		      mostrarNavLogin();
		      mostrarLogoInicio();

		      $('#myModal').modal({backdrop: false});*/
	      }
	      },
	    contentType:'application/json',
	    dataType:'json'
	  });
	}



this.actualizarUsuario=function(oldpass,newpass,newpass2){
	  var usr=JSON.parse($.cookie("usr"));
	 $.ajax({
	    type:'PUT',
	    url:'/actualizarUsuario', 
	    data:JSON.stringify({uid:usr._id,email:usr.email,oldpass:oldpass,newpass:newpass,newpass2:newpass2}),
	    success:function(data){
	      if (!data.email){
	        mostrarRegistro();
	      }
	      else{
	        $.cookie("usr",JSON.stringify(data));
	       
	        if(data.oldC!=usr.clave){
	        	
	        	mostrarAviso("#menu1","<p id='msg' style='color:red'>La contraseña actual no es correcta</p>");
	        }
	        else{
	        	mostrarAviso("#menu1","<p id='msg' style='color:green'>Datos correctamente actualizados</p>");
	      	}
	      }
	      },
	    contentType:'application/json',
	    dataType:'json'
	  });
	}







	/*this.actualizarEvaluacion=function(nombreEvaluacion,personaEmpresa){
	  //var usr=JSON.parse($.cookie("usr"));
	  console.log('pasa por rest: '+nombreEvaluacion+personaEmpresa);
	 $.ajax({
	    type:'PUT',
	    url:'/actualizarEvaluacion', 
	    data:JSON.stringify({nombreEvaluacion:nombreEvaluacion,personaEmpresa:personaEmpresa}),
	    success:function(data){
	    	console.log('QUE PASA AQUI: '+data.nombreEvaluacion+data.personaEmpresa);
	      if (!data.nombreEvaluacion){
	        //console.log('no se ha encontrado: '+data.nombreEvaluacion);
	        console.log('no se ha encontrado la evaluación');
	      }
	      else{
	        $.cookie("eval",JSON.stringify(data));
	       
	      
	      	console.log('evaluación modificada: ' + data.nombreEvaluacion);
	      }
	      },
	    contentType:'application/json',
	    dataType:'json'
	  });
	}*/


	this.actualizarColoresUsuario=function(email,fondoPanel,seccionTextoPanel,textoPanel){
	 
	 $.ajax({
	    type:'PUT',
	    url:'/actualizarColoresUsuario', 
	    data:JSON.stringify({email:email,fondoPanel:fondoPanel,seccionTextoPanel:seccionTextoPanel,textoPanel:textoPanel}),
	    success:function(data){
	    	//console.log('PASA AQUI: '+data.nombreEvaluacion+data.personaEmpresa);
	      if (!data.email){
	        //console.log('no se ha encontrado: '+data.nombreEvaluacion);
	        console.log('no se ha encontrado al usuario');
	      }
	      else{
	        //$.cookie("eval",JSON.stringify(data));
	       
	      	

	      	//('#tituloPestaña').remove();
  			//$('#fechaModificacion').append('<h6 id="tituloPestaña" class="panel-title txt-dark" style="font-weight:bold;">Evaluación de los resultados del proceso para los procesos definidos en el Nivel '+obj.nivelesEmpresa+' de madurez</h6>');

	      	console.log('Se han modificado los colores del usuario: ' + data.email);

	      	anadirColores(fondoPanel,seccionTextoPanel,textoPanel);

	      	//getEvaluacion(data);
	      }
	      },
	    contentType:'application/json',
	    dataType:'json'
	  });
	}


	this.actualizarEstado=function(nombreEvaluacion,datosEstado){
	 console.log(nombreEvaluacion);
	 console.log(datosEstado);
	  //console.log(arrayCampos);
	  
	 $.ajax({
	    type:'PUT',
	    url:'/actualizarEstado', 
	    data:JSON.stringify({nombreEvaluacion:nombreEvaluacion,estado:datosEstado}),
	    success:function(data){
	    	//console.log('PASA AQUI: '+data.nombreEvaluacion+data.personaEmpresa);
	      if (!data.nombreEvaluacion){
	        //console.log('no se ha encontrado: '+data.nombreEvaluacion);
	        console.log('no se ha encontrado la evaluación');
	      }
	      else{
	        //$.cookie("eval",JSON.stringify(data));
	       
	      	

	      	//('#tituloPestaña').remove();
  			//$('#fechaModificacion').append('<h6 id="tituloPestaña" class="panel-title txt-dark" style="font-weight:bold;">Evaluación de los resultados del proceso para los procesos definidos en el Nivel '+obj.nivelesEmpresa+' de madurez</h6>');

	      	console.log('evaluación modificada: ' + data.nombreEvaluacion);

	      	//getEvaluacion(data);
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
	    	//console.log('PASA AQUI: '+data.nombreEvaluacion+data.personaEmpresa);
	      if (!data.email){
	        //console.log('no se ha encontrado: '+data.nombreEvaluacion);
	        
	        console.log('no se ha encontrado al usuario');
	      }
	      else{
	      	console.log(data.clave);
	      	console.log(data.password);
	        if(data.clave==data.password){
	        	passwordOk();
	        }
	        else{
	        	passwordError();
	        }
	      	
	      	console.log('usuario modificado con email: ' + data.email);

	      	//console.log(data.email);
	      	
	      	
	      }
	      },
	    contentType:'application/json',
	    dataType:'json'
	  });
	}




	this.actualizarPerfilUsuario=function(nombre,emailViejo,email,experiencia){
	 //console.log(nombreEvaluacion);
	 //console.log(datosEstado);
	  //console.log(arrayCampos);
	  
	 $.ajax({
	    type:'PUT',
	    url:'/actualizarPerfilUsuario', 
	    data:JSON.stringify({nombre:nombre,email:emailViejo,emailNuevo:email,experiencia:experiencia}),
	    success:function(data){
	    	//console.log('PASA AQUI: '+data.nombreEvaluacion+data.personaEmpresa);
	      if (!data.email){
	        //console.log('no se ha encontrado: '+data.nombreEvaluacion);
	        console.log('no se ha encontrado al usuario');
	      }
	      else{
	        //$.cookie("eval",JSON.stringify(data));
	       
	      	//console.log('pasa');
	      	$.removeCookie("usr");
			$.cookie("usr",JSON.stringify(data));
			console.log('pone nueva usr');

	      	//('#tituloPestaña').remove();
  			//$('#fechaModificacion').append('<h6 id="tituloPestaña" class="panel-title txt-dark" style="font-weight:bold;">Evaluación de los resultados del proceso para los procesos definidos en el Nivel '+obj.nivelesEmpresa+' de madurez</h6>');

	      	console.log('usuario modificado con email: ' + data.email);

	      	console.log(data.email);
	      	
	      	//mostrarTablaEvaluaciones(data);

	      	//getEvaluacion(data);
	      }
	      },
	    contentType:'application/json',
	    dataType:'json'
	  });
	}






	this.actualizarEvaluacion=function(nombreEvaluacion,arrayCampos,fechaModificacionEvaluacion){
	 
	  console.log(arrayCampos);
	  
	 $.ajax({
	    type:'PUT',
	    url:'/actualizarEvaluacion', 
	    data:JSON.stringify({nombreEvaluacion:nombreEvaluacion,arrayCampos:arrayCampos,fechaModificacionEvaluacion:fechaModificacionEvaluacion}),
	    success:function(data){
	    	//console.log('PASA AQUI: '+data.nombreEvaluacion+data.personaEmpresa);
	      if (!data.nombreEvaluacion){
	        //console.log('no se ha encontrado: '+data.nombreEvaluacion);
	        console.log('no se ha encontrado la evaluación');
	      }
	      else{
	        //$.cookie("eval",JSON.stringify(data));
	       
	      	$('#fechaModificacion').remove();

	      	$('#nombreEvaluacionGuardada').append('<p id="fechaModificacion">Última modificación: <span>'+fechaModificacionEvaluacion+'</span></p>');

	      	//('#tituloPestaña').remove();
  			//$('#fechaModificacion').append('<h6 id="tituloPestaña" class="panel-title txt-dark" style="font-weight:bold;">Evaluación de los resultados del proceso para los procesos definidos en el Nivel '+obj.nivelesEmpresa+' de madurez</h6>');

	      	console.log('evaluación modificada: ' + data.nombreEvaluacion);

	      	//getEvaluacion(data);
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

	this.loginUsuario=function(email,clave){
		//var cli=this;
		$.ajax({
		    type:'POST',
		    url:'/loginUsuario',
		    data:JSON.stringify({email:email,clave:clave}),
		    success:function(data){
		      if (!data.email){
		        console.log('No se ha podido iniciar sesión');
		        $('#modalErrorLogin').modal();
		        //mostrarAviso("#formInicio","<p style='color:red;'>Datos incorrectos</p>");
		      }
		      else{     
		      	//$('#logoInicio').remove();
		      	//$('#formInicio').remove();  
		    //
		      	//$('.dropdown-toggle').parent().removeClass('open');
		      	$.cookie("usr",JSON.stringify(data));
		      	console.log("Usuario ha iniciado sesión: "+data.email);
		      	var usr=JSON.parse($.cookie("usr"));
		      	//alert(usr.nombre);
		      	

		      	url = "./evaluacion.html";
     			$( location ).attr("href", url);

				
			    //com.ini(data._id);
			    
			    //mostrarCrearElegirPartida(data.email);
		      }
		     },
		    contentType:'application/json',
		    dataType:'json'
		});
	}
}