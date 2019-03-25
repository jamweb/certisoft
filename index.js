//const http = require('http');



var fs=require("fs");

var bodyParser=require("body-parser");
var exp=require("express");
var app=exp();
var server = require('http').Server(app);
//var io = require('socket.io').listen(server); 

//var modelo = require("./servidor/modelo.js"); 
//var comSrv=require('./servidor/comSrv.js'); // se encarga de gestionar el API WebSocket
//var com=new comSrv.ComSrv();

//var juego = new modelo.Juego(); //cuando se inicia el servidor se crea una instancia de juego

app.set('port', (process.env.PORT || 5000));
app.use(exp.static(__dirname + '/'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',function(request, response) {
	//Esto lo hacemos para que cargue el archivo index.html 
	//cuando se conecten a nuestro servidor Web.
	 var contenido=fs.readFileSync("login.html"); 
	 response.setHeader("Content-type","text/html");
	 response.send(contenido); 
});


//sirven para lanzar los dos servidores (Web y WebSocket)
server.listen(app.get('port'), function() {
 console.log('Node app is running on port', app.get('port'));
 });
