//const http = require('http');



var fs=require("fs");

var bodyParser=require("body-parser");
var exp=require("express");
var app=exp();
var server = require('http').Server(app);
//var io = require('socket.io').listen(server); 

var modelo = require("./servidor/modelo.js"); 
//var comSrv=require('./servidor/comSrv.js'); // se encarga de gestionar el API WebSocket
//var com=new comSrv.ComSrv();

var evaluacion = new modelo.Evaluacion(); //cuando se inicia el servidor se crea una instancia de juego

app.set('port', (process.env.PORT || 5000));
app.use(exp.static(__dirname + '/'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',function(request, response) {
	//Esto lo hacemos para que cargue el archivo index.html 
	//cuando se conecten a nuestro servidor Web.
	 var contenido=fs.readFileSync("evaluacion.html"); 
	 response.setHeader("Content-type","text/html");
	 response.send(contenido); 
});

app.post('/registrarUsuario', function(request, response) {
	var nombre=request.body.nombre;
	var email=request.body.email;
	var clave=request.body.clave;
	var experiencia=request.body.experiencia;
	

	evaluacion.registrarUsuario(nombre,email,clave,experiencia,function(data){
		response.send(data);
	});

});

app.get('/obtenerEvaluaciones/:email', function(request, response) {
	var email=request.params.email;
	var json=[];
	//var email=request.body.email;
	//var evaluaciones=evaluacion.obtenerEvaluaciones(email);

	/*evaluacion.obtenerEvaluaciones(email,function(data){
		response.send(data);
	});*/

	evaluacion.obtenerEvaluaciones(email,function(data){
            response.send(data);
            //console.log("console index.js: "+data);
    });

	/*if (evaluaciones.length!=0){
		
		for(var i=0;i<evaluaciones.length;i++){
			var evaluacion=evaluaciones[i];

			
			json.push({"nombre":evaluacion.nombreEvaluacion,"empresa":evaluacion.nombreEmpresa,"nm":evaluacion.nivelesEmpresa});
		}
	}
	
	response.send(json);*/
});


app.delete("/eliminarEvaluacion/:nombreEvaluacion",function(request,response){
    var nombreEvaluacion=request.params.nombreEvaluacion;

    evaluacion.eliminarEvaluacion(nombreEvaluacion,function(result){
        response.send(result);
    });
});

app.get('/obtenerEvaluacion/:nombreEvaluacion', function(request, response) {
	var nombreEvaluacion=request.params.nombreEvaluacion;
	var json=[];
	//var email=request.body.email;
	//var evaluaciones=evaluacion.obtenerEvaluaciones(email);

	/*evaluacion.obtenerEvaluaciones(email,function(data){
		response.send(data);
	});*/

	evaluacion.obtenerEvaluacion(nombreEvaluacion,function(data){
			
            response.send(data);
            //console.log("console index.js: "+data);
    });

	/*if (evaluaciones.length!=0){
		
		for(var i=0;i<evaluaciones.length;i++){
			var evaluacion=evaluaciones[i];

			
			json.push({"nombre":evaluacion.nombreEvaluacion,"empresa":evaluacion.nombreEmpresa,"nm":evaluacion.nivelesEmpresa});
		}
	}
	
	response.send(json);*/
});




app.post("/crearCasoEvaluacion",function(request,response){
	var nombreEvaluacion=request.body.nombreEvaluacion;
	var estado=request.body.estado;
	var nombreEmpresa=request.body.nombreEmpresa;

	var fechaEvaluacion=request.body.fechaEvaluacion;


	var email=request.body.email;


	var emailEmpresa=request.body.emailEmpresa;
	var tlfEmpresa=request.body.tlfEmpresa;
	var personaEmpresa=request.body.personaEmpresa;
	var nivelesEmpresa=request.body.nivelesEmpresa;
	var nivelesInferioresSeleccionado=request.body.nivelesInferioresSeleccionado;


    evaluacion.crearCasoEvaluacion(email,nombreEvaluacion,estado,fechaEvaluacion,nombreEmpresa,emailEmpresa,tlfEmpresa,personaEmpresa,nivelesEmpresa,nivelesInferioresSeleccionado,function(data){
            response.send(data);
    });
});

app.get("/confirmarUsuario/:email/:key",function(request,response){
	var email=request.params.email;
	var key=request.params.key;

	console.log(key);

	evaluacion.confirmarUsuario(email,key,function(data){
		
		response.redirect("/activada.html");
		
		


	});
});



app.put("/actualizarUsuario",function(request,response){
    juego.actualizarUsuario(request.body,function(result){
            response.send(result);
    });
});




/*app.put("/actualizarEvaluacion",function(request,response){
	var nombreEvaluacion=request.body.nombreEvaluacion;
	var persona='Claudia';
	//var prueba=get(prueba);
	console.log('PONE: '+nombreEvaluacion+persona);
    evaluacion.actualizarEvaluacion(nombreEvaluacion,persona,function(result){
            response.send(result);
    });
});*/



app.put("/actualizarEstado",function(request,response){
	var nombreEvaluacion=request.body.nombreEvaluacion;
	var datosEstado=request.body.estado;
	
	/*console.log(nombreEvaluacion);
	console.log(datosEstado);*/
    evaluacion.actualizarEstado(nombreEvaluacion,datosEstado,function(result){
            response.send(result);
    });
});


app.put("/actualizarPasswordPerfil",function(request,response){
	
	var email=request.body.email;
	var password=request.body.clave;
	var newPassword=request.body.newPassword;
	

    evaluacion.actualizarPasswordPerfil(email,password,newPassword,function(result){
            response.send(result);
    });
});


app.put("/actualizarPerfilUsuario",function(request,response){
	var nombre=request.body.nombre;
	var emailViejo=request.body.email;
	var emailNuevo=request.body.emailNuevo;
	var experiencia=request.body.experiencia;
	
	/*console.log(nombreEvaluacion);
	console.log(datosEstado);*/
    evaluacion.actualizarPerfilUsuario(nombre,emailViejo,emailNuevo,experiencia,function(result){
            response.send(result);
    });
});






app.put("/actualizarEvaluacion",function(request,response){
	var nombreEvaluacion=request.body.nombreEvaluacion;
	var arrayCampos=request.body.arrayCampos;
	var fechaModificacionEvaluacion=request.body.fechaModificacionEvaluacion;
	console.log(nombreEvaluacion);
	console.log(arrayCampos);
	//var arrayCampos=request.body.arrayC;
	//var campos=request.body.arrayC;
	//var campos=request.arrayCampos;
	//console.log(nombreEvaluacion);
	//console.log(request.body.nombreEvaluacion);
	//var prueba=get(prueba);
	//console.log('PONE: '+nombreEvaluacion+persona);
    evaluacion.actualizarEvaluacion(nombreEvaluacion,arrayCampos,fechaModificacionEvaluacion,function(result){
            response.send(result);
    });
});

app.post('/recuperarPassword', function(request, response) {
	var email=request.body.email;
	//alert(email);

	evaluacion.recuperarPassword(email,function(data){
		response.send(data);
	});

});


app.post('/loginUsuario',function(request,response){
	var email=request.body.email;
    var clave=request.body.clave;    
    
    evaluacion.loginUsuario(email,clave,function(data){
         response.send(data);
     });
});

//sirven para lanzar los dos servidores (Web y WebSocket)
server.listen(app.get('port'), function() {
 console.log('Node app is running on port', app.get('port'));
 });
