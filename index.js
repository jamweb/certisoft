var fs=require("fs");

var bodyParser=require("body-parser");
var exp=require("express");
var app=exp();
var server = require('http').Server(app);

var modelo = require("./servidor/modelo.js"); 

var evaluacion = new modelo.Evaluacion(); //cuando se inicia el servidor se crea una instancia de juego

app.set('port', (process.env.PORT || 5000));
app.use(exp.static(__dirname + '/'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',function(request, response) {
	//Esto lo hacemos para que cargue el archivo evaluacion.html 
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

	evaluacion.obtenerEvaluaciones(email,function(data){
            response.send(data);
    });
});


app.delete("/eliminarEvaluacion/:nombreEvaluacion",function(request,response){
    var nombreEvaluacion=request.params.nombreEvaluacion;

    evaluacion.eliminarEvaluacion(nombreEvaluacion,function(result){
        response.send(result);
    });
});

app.delete("/eliminarUsuario/:uid",function(request,response){
    var uid=request.params.uid;

    evaluacion.eliminarUsuario(uid,function(result){
        response.send(result);
    });
});

app.get('/obtenerEvaluacion/:nombreEvaluacion', function(request, response) {
	var nombreEvaluacion=request.params.nombreEvaluacion;
	var json=[];

	evaluacion.obtenerEvaluacion(nombreEvaluacion,function(data){
            response.send(data);
    });
});


app.get('/obtenerKeyUsuario/:email',function(request,response){
	var email=request.params.email;
	
	evaluacion.obtenerKey(email,function(data){
		response.send(data);
	});
	
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

	evaluacion.confirmarUsuario(email,key,function(data){
		response.redirect("/activada.html");
	});
});

app.put("/actualizarUsuario",function(request,response){
    juego.actualizarUsuario(request.body,function(result){
            response.send(result);
    });
});

app.put("/actualizarColoresUsuario",function(request,response){
	var email=request.body.email;
	var fondoPanel=request.body.fondoPanel;
	var seccionTextoPanel=request.body.seccionTextoPanel;
	var textoPanel=request.body.textoPanel;
	var nombre=request.body.nomre;

    evaluacion.actualizarColoresUsuario(email,nombre,fondoPanel,seccionTextoPanel,textoPanel,function(result){
            response.send(result);
    });
});

app.put("/actualizarEstado",function(request,response){
	var nombreEvaluacion=request.body.nombreEvaluacion;
	var datosEstado=request.body.estado;
	
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
	var email=request.body.email;
	var experiencia=request.body.experiencia;
	
    evaluacion.actualizarPerfilUsuario(nombre,email,experiencia,function(result){
            response.send(result);
    });
});

app.put("/actualizarEvaluacion",function(request,response){
	var nombreEvaluacion=request.body.nombreEvaluacion;
	var arrayCampos=request.body.arrayCampos;
	var fechaModificacionEvaluacion=request.body.fechaModificacionEvaluacion;
	
    evaluacion.actualizarEvaluacion(nombreEvaluacion,arrayCampos,fechaModificacionEvaluacion,function(result){
            response.send(result);
    });
});

app.post('/recuperarPassword', function(request, response) {
	var email=request.body.email;
	
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

server.listen(app.get('port'), function() {
 console.log('Node app is running on port', app.get('port'));
 });
