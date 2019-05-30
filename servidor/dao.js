var mongo=require("mongodb").MongoClient;
var ObjectID=require("mongodb").ObjectID;

function Dao(){
	this.usuarios=undefined;
    this.evaluaciones=undefined;

	this.encontrarUsuario=function(email,callback){
		encontrar(this.usuarios,{email:email},callback);
	};

    this.encontrarEvaluacion=function(nombreEvaluacion,callback){
        encontrar(this.evaluaciones,{nombreEvaluacion:nombreEvaluacion},callback);
    };

	this.encontrarUsuarioCriterio=function(criterio,callback){
		encontrar(this.usuarios,criterio,callback);
	};

     this.encontrarUsuarioCriterioActualizar=function(criterio,callback){
        encontrarActualizar(this.usuarios,criterio,callback);
    };
	
    this.encontrarEvaluacionCriterio=function(criterio,callback){
        encontrarEva(this.evaluaciones,criterio,callback);
    };
    this.encontrarEvaluacionCriterioActualizar=function(criterio,callback){
        encontrarEvaActualizar(this.evaluaciones,criterio,callback);
    };

    this.encontrarEvaluacionesUsuario=function(criterio,callback){
        encontrarEva(this.evaluaciones,criterio,callback);
    };

	function encontrar(coleccion,criterio,callback){ // funcion privada que usan las otras publicas
        


        coleccion.find(criterio).toArray(function(error,usr){
            if (usr.length==0){
                callback(undefined);
                
            }
            else{
                //console.log(usr);
                callback(usr[0]);
                
            }
        });
    };







    function encontrarActualizar(coleccion,criterio,callback){ // funcion privada que usan las otras publicas
        


        coleccion.find(criterio).toArray(function(error,usr){
            if (usr.length==0){
                callback(undefined);
                
            }
            else{
                //console.log(usr);
                callback(usr[0]);
                
            }
        });
    };

    function encontrarEva(coleccion,criterio,callback){ // funcion privada que usan las otras publicas
        


        coleccion.find(criterio).toArray(function(error,eva){
            if (eva.length==0){
                callback(undefined);
                
            }
            else{
                console.log(eva);
                callback(eva);
                
            }
        });
    };

    function encontrarEvaActualizar(coleccion,criterio,callback){ // funcion privada que usan las otras publicas
        


        coleccion.find(criterio).toArray(function(error,eva){
            if (eva.length==0){
                callback(undefined);
                
            }
            else{
                console.log(eva);
                callback(eva[0]);
                
            }
        });
    };

    function encontrarUsuActualizar(coleccion,criterio,callback){ // funcion privada que usan las otras publicas
        


        coleccion.find(criterio).toArray(function(error,usu){
            if (usu.length==0){
                callback(undefined);
                
            }
            else{
                console.log(eva);
                callback(usu[0]);
                
            }
        });
    };

    function obtenerEvaluaciones(criterio,callback){ // funcion privada que usan las otras publicas
        
        database.db("certisoft").collection("evaluaciones").find(criterio).forEach( function(iter) { 
                    console.log( "evaluacion: " + iter.nombreEvaluacion ); 
        });

        coleccion.find(criterio).toArray(function(error,usr){
            if (usr.length==0){
                callback(undefined);
                
            }
            else{
                callback(usr[0]);
                
            }
        });
    };

    this.insertarUsuario=function(usu,callback){
        insertar(this.usuarios,usu,callback);
    }

    this.insertarEvaluacion=function(eva,callback){
        insertarEvaluacion(this.evaluaciones,eva,callback);
    }

    
    this.eliminarUsuario=function(uid,callback){
 
       eliminar(this.usuarios,{_id:ObjectID(uid)},callback);
    }

    this.eliminarEvaluacion=function(uid,callback){
 
       eliminar(this.evaluaciones,{_id:ObjectID(uid)},callback);
    }

 	function eliminar(coleccion,criterio,callback){
        coleccion.remove(criterio,function(err,result){
            if(!err){
                callback(result);
            }
        });
    }


    function insertar(coleccion,usu,callback){
        coleccion.insertOne(usu,function(err,result){
            if(err){
                console.log("error");
            }
            else{
                console.log("Nuevo elemento creado: "+usu.email);
                callback(usu);
            }
        });
    }

    function insertarEvaluacion(coleccion,eva,callback){
        coleccion.insertOne(eva,function(err,result){
            if(err){
                console.log("error");
            }
            else{
                console.log("Nueva evaluación creada: "+eva.nombreEvaluacion);
                callback(eva);
            }
        });
    }

    function eliminar(coleccion,criterio,callback){
        coleccion.remove(criterio,function(err,result){
                
            if(!err){
                callback(result);
            }
        });
    }

    this.modificarColeccionUsuarios=function(usr,callback){
        modificarColeccion(this.usuarios,usr,callback);
    }

    this.modificarColeccionEvaluaciones=function(eva,callback){
        modificarColeccionEval(this.evaluaciones,eva,callback);
    }


	function modificarColeccion(coleccion,usr,callback){
        coleccion.findAndModify({_id:ObjectID(usr._id)},{},usr,{},function(err,result){
            if (err){
                console.log("No se pudo actualizar (método genérico)");
            }
            else{     
                console.log("Evaluación actualizada"); 
            }
            //database.close(); //PARA HEROKU COMENTADO, PARA TEST: parche para los test que no se quede enganchado
            callback(result);
        });
    }

    function modificarColeccionEval(coleccion,eva,callback){
        coleccion.findAndModify({_id:ObjectID(eva._id)},{},eva,{},function(err,result){
            console.log('AQUI SALE: '+eva._id);
            if (err){
                console.log("No se pudo actualizar (método genérico)");
            }
            else{ 
                console.log("OBJETO EVALUACION: "+eva._id);    
                console.log("Usuario actualizado"); 
            }
            //database.close(); //PARA HEROKU COMENTADO, PARA TEST: parche para los test que no se quede enganchado
            callback(result);
        });
    }

	this.conectar=function(callback){
        var dao=this;
        mongo.connect("mongodb://pepe:pepepepe1&@ds131296.mlab.com:31296/certisoft",{ useNewUrlParser:true},function(err, database) {
            if (err){
                console.log("No pudo conectar a la base de datos")
            }
            else{
                console.log("conectado a Mongo: usuarios");

                database.db("certisoft").collection("usuarios",function(err,col){
                    if (err){
                        console.log("No pude obtener la coleccion")
                    }
                    else{       
                        console.log("tenemos la colección usuarios");
                        
                        dao.usuarios=col;   
                    }
                    //db.close(); 
                });


                database.db("certisoft").collection("evaluaciones",function(err,col){
                    if (err){
                        console.log("No pude obtener la coleccion")
                    }
                    else{       
                        console.log("tenemos la colección evaluaciones");
                        
                        dao.evaluaciones=col;   
                    }
                    //db.close(); 
                });

                database.db("certisoft").collection("evaluaciones").find().forEach( function(iter) { 
                    console.log( "evaluacion: " + iter.nombreEvaluacion ); 
                });

                callback(database);
            }

        });
    }
}

module.exports.Dao=Dao; 