var _=require("underscore");
var cf=require("./cifrado.js");
var dao=require("./dao.js");
var moduloEmail=require("./email.js");


function Evaluacion(){
	this.dao=new dao.Dao();


	this.registrarUsuario=function(nombre,email,clave,experiencia,callback){
		var ju=this;
		var claveCifrada=cf.encrypt(clave);
		var key=(new Date().valueOf()).toString();

		this.dao.encontrarUsuarioCriterio({email:email},function(usr){
			//console.log(usr);
			if(!usr){
				ju.dao.insertarUsuario({nombre:nombre,email:email,clave:claveCifrada,experiencia:experiencia,key:key,confirmada:false},function(usu){
		            
					moduloEmail.enviarEmail(nombre,email,key);
		            callback({email:email});
		 	    });
		    }
		    else{

		        callback({email:undefined});
		    }
    	});
	}

	this.confirmarUsuario=function(email,key,callback){
		var ju=this;
		this.dao.encontrarUsuarioCriterio({email:email,key:key,confirmada:false},function(usr){
			if(usr){
				usr.confirmada=true;
				//$('#modalRegistroOk').modal();


				ju.dao.modificarColeccionUsuarios(usr,function(data){
					
					callback({res:"ok"}); // se pone aqui dentro porque ponerlo fuera no seria seguro 
					//callback(usr);
				});
				
			}
			else{
				callback({res:"no ok"})
			}
		});
	}

	this.recuperarPassword=function(email,callback){
		
		//var pers=this.dao;

		
		this.dao.encontrarUsuarioCriterio({email:email},function(usr){ //,clave:oldC PARA VALIDAR CLAVE ANTIGUA
			//console.log(usr);

			if(usr){

					var pass=cf.decrypt(usr.clave);
					moduloEmail.enviarEmailPassword(usr.nombre,usr.email,pass);
				
				
					callback({email:usr.email});
				
		    }
		    else{
		    	//console.log('NO LO ENCUENTRA');
		    	callback({email:undefined});	
		    }
		});
	}

	this.dao.conectar(function(db){
    	console.log("Conectado a la base de datos");
    });
}

module.exports.Evaluacion=Evaluacion;
