var _=require("underscore");
var cf=require("./cifrado.js");
var dao=require("./dao.js");
var moduloEmail=require("./email.js");


function Evaluacion(){
	this.dao=new dao.Dao();
	this.evaluaciones=[];



	this.registrarUsuario=function(nombre,email,clave,experiencia,callback){
		var ju=this;
		var claveCifrada=cf.encrypt(clave);
		var key=(new Date().valueOf()).toString();

		this.dao.encontrarUsuarioCriterio({email:email},function(usr){
			//console.log(usr);
			if(!usr){
				var camposColores=[{ "fondoPanel": "#2a3e4c", "seccionTextoPanel": "#878787","textoPanel": "#FFFFFF"}];

				ju.dao.insertarUsuario({nombre:nombre,email:email,clave:claveCifrada,experiencia:experiencia,key:key,confirmada:false,colores:camposColores},function(usu){
		           
				








					moduloEmail.enviarEmail(nombre,email,key);
		            callback({email:email});
		 	    });
		    }
		    else{

		        callback({email:undefined});
		    }
    	});
	}

	this.crearCasoEvaluacion=function(email,nombreEvaluacion,estado,fechaEvaluacion,nombreEmpresa,emailEmpresa,tlfEmpresa,personaEmpresa,nivelesEmpresa,nivelesInferioresSeleccionado,callback){
		//var oldC=cf.encrypt(nuevo.oldpass);
		//var newC=cf.encrypt(nuevo.newpass);
		var ju=this;
		var camposProcesos;
		var cadena;
		//var pers=this.dao;
		//alert(nuevo.email);

		this.dao.encontrarEvaluacionCriterio({nombreEvaluacion:nombreEvaluacion},function(eva){
			//console.log(usr);
			if(!eva){// si no hay ninguna evaluación ya creada con el mismo nombre
				//camposProcesos=[{ "nombreProceso": "Planificación del proyecto (PPY): AP 1.1 Realización del proceso", "resultadosProceso" : [{ "descripcion": "", "documentacion" : "", "evidenciaDirecta" : "" }]},{ "nombreProceso": "Implementación (IMP): AP 1.1 Realización del proceso", "resultadosProceso" : [{ "descripcion": "", "documentacion" : "", "evidenciaDirecta" : "" }]}];
				//[{ "wk": 1, "score" : 10 },{ "wk": 2, "score" : 8 }]
				
				//var today = new Date();
    			//var options = { year: 'numeric', month: 'numeric', day: 'numeric', hour12: false, hour: 'numeric', minute: 'numeric' };
    			//var fechaEvaluacion = today.toLocaleDateString('es-ES', options);

				if(nivelesEmpresa=='1'){
					//procesos='"quizzes" : [{ "wk": 1, "score" : 10 },{ "wk": 2, "score" : 8 }]';
					
					camposProcesos=[{ "nombreProceso": "Planificación del proyecto (PPY): AP 1.1 Realización del proceso", "abrevProceso": "PPY", "resultadosProceso" : [{ "descripcion": "RP 1: se definen los objetivos y los planes", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se definen los roles, responsabilidades, rendiciones de cuenta y autoridades", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se solicitan y comprometen formalmente los recursos y servicios necesarios para lograr los objetivos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se ponen en marcha los planes para la ejecución del proyecto", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},{ "nombreProceso": "Implementación (IMP): AP 1.1 Realización del proceso", "abrevProceso": "IMP", "resultadosProceso" : [{ "descripcion": "RP 1: se identifican las restricciones de implementación que influyen en los requisitos, la arquitectura o el diseño", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se realiza un elemento del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se empaqueta o almacena un elemento del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: todos los sistemas o servicios habilitantes necesarios para la implementación están disponibles", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se establece la trazabilidad de los elementos del sistema implementado", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]}];
				}
				if(nivelesEmpresa=='2' && nivelesInferioresSeleccionado==true){
					camposProcesos=[{ "nombreProceso": "Suministro (SUM): AP 1.1 Realización del proceso","abrevProceso": "SUM", 
					"resultadosProceso" : [{ "descripcion": "RP 1: se identifica un cliente para el producto o servicio", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se da respuesta a la solicitud del cliente", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se establece un acuerdo entre el cliente y el proveedor", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se proporciona un producto o servicio", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se satisfacen las obligaciones del proveedor definidas en el acuerdo", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se transfiere la responsabilidad para el producto o servicio adquirido, según lo establecido en el acuerdo", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					{ "nombreProceso": "Gestión del modelo del ciclo de vida (GMCV): AP 1.1 Realización del proceso","abrevProceso": "GMCV",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se establecen políticas y procedimientos organizacionales para la gestión y el despliegue de modelos y procesos del ciclo de vida", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se define la responsabilidad, rendición de cuentas y autoridad sobre las políticas, procesos, modelos y procedimientos del ciclo de vida", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se evalúan los modelos y procesos del ciclo de vida para su uso por la organización", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se implementan, de manera priorizada, las mejoras de procesos, modelos y procedimientos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					{ "nombreProceso": "Evaluación y control del proyecto (ECP): AP 1.1 Realización del proceso","abrevProceso": "ECP",
					 "resultadosProceso" : [{ "descripcion": "RP 1: están disponibles las medidas de desempeño y los resultados de las evaluaciones", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se evalúa la adecuación de los roles, responsabilidades, rendiciones de cuentas y autoridades", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se evalúa la adecuación de los recursos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se llevan a cabo las revisiones de progreso técnico", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se investigan y analizan las desviaciones en la realización de los proyectos respecto a los planes", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se informa a los stakeholders afectados del estado del proyecto", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 7: se definen y dirigen acciones correctivas cuando en el proyecto no se están cumpliendo los objetivos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 8: se inicia la replanificación del proyecto, si es necesario", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 9: se autoriza (o no) el progreso de un hito o evento planificado del proyecto al siguiente", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 10 Se logran los objetivos del proyecto", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					{ "nombreProceso": "Gestión de la configuración (GCF): AP 1.1 Realización del proceso","abrevProceso": "GCF",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se identifican y gestionan los elementos que requieran de gestión de configuración", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se establecen las líneas base de la configuración", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se controlan los cambios a los elementos que se encuentran bajo la gestión de configuración", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: la información del estado de la configuración está disponible", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se realizan las auditorías de configuración requeridas", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se controlan y aprueban las liberaciones y los entregables del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					 { "nombreProceso": "Medición (MED): AP 1.1 Realización del proceso","abrevProceso": "MED",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se identifican las necesidades de información", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se identifica o desarrolla un conjunto apropiado de medidas a partir de las necesidades de información", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se recogen, verifican y almacenan los datos requeridos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se analizan los datos y se interpretan los resultados", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: los datos de medición proporcionan información objetiva que da soporte a la toma de decisiones", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					 { "nombreProceso": "Definición de requisitos y necesidades de stakeholders (DNRS): AP 1.1 Realización del proceso","abrevProceso": "DNRS",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se identifican los stakeholders del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se definen las características requeridas y el contexto de uso de las capacidades y conceptos en las etapas del ciclo de vida", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se identifican las restricciones del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se definen las necesidades de los stakeholders", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se priorizan las necesidades de los stakeholders y se transforman en requisitos de stakeholders claramente definidos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se definen las medidas de desempeño crítico", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 7: se consigue el acuerdo de los stakeholders de que sus necesidades y expectativas se reflejan de manera adecuada en los requisitos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 8: se disponen de los sistemas o servicios habilitadores necesarios para las necesidades y requisitos de los stakeholders", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 9: se establece la trazabilidad de los requisitos de los stakeholders con los stakeholders y sus necesidades", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					 { "nombreProceso": "Aseguramiento de la calidad (AC): AP 1.1 Realización del proceso","abrevProceso": "AC",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se definen e implementan procedimientos de aseguramiento de la calidad del proyecto", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se definen los criterios y métodos para las evaluaciones del aseguramiento de la calidad", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se llevan a cabo las evaluaciones de forma consistente con las políticas, procedimientos y requisitos de la gestión de la calidad", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se proporcionan a los stakeholders relevantes los resultados de las evaluaciones", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se resuelven los incidentes", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se tratan los problemas priorizados", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]}];
				}
				else if(nivelesEmpresa=='2' && nivelesInferioresSeleccionado==false){
					camposProcesos=[{ "nombreProceso": "Planificación del proyecto (PPY): AP 1.1 Realización del proceso", "abrevProceso": "PPY", "resultadosProceso" : [{ "descripcion": "RP 1: se definen los objetivos y los planes", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se definen los roles, responsabilidades, rendiciones de cuenta y autoridades", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se solicitan y comprometen formalmente los recursos y servicios necesarios para lograr los objetivos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se ponen en marcha los planes para la ejecución del proyecto", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},{ "nombreProceso": "Implementación (IMP): AP 1.1 Realización del proceso", "abrevProceso": "IMP", "resultadosProceso" : [{ "descripcion": "RP 1: se identifican las restricciones de implementación que influyen en los requisitos, la arquitectura o el diseño", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se realiza un elemento del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se empaqueta o almacena un elemento del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: todos los sistemas o servicios habilitantes necesarios para la implementación están disponibles", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se establece la trazabilidad de los elementos del sistema implementado", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					{ "nombreProceso": "Suministro (SUM): AP 1.1 Realización del proceso","abrevProceso": "SUM", 
					"resultadosProceso" : [{ "descripcion": "RP 1: se identifica un cliente para el producto o servicio", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se da respuesta a la solicitud del cliente", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se establece un acuerdo entre el cliente y el proveedor", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se proporciona un producto o servicio", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se satisfacen las obligaciones del proveedor definidas en el acuerdo", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se transfiere la responsabilidad para el producto o servicio adquirido, según lo establecido en el acuerdo", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					{ "nombreProceso": "Gestión del modelo del ciclo de vida (GMCV): AP 1.1 Realización del proceso","abrevProceso": "GMCV",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se establecen políticas y procedimientos organizacionales para la gestión y el despliegue de modelos y procesos del ciclo de vida", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se define la responsabilidad, rendición de cuentas y autoridad sobre las políticas, procesos, modelos y procedimientos del ciclo de vida", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se evalúan los modelos y procesos del ciclo de vida para su uso por la organización", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se implementan, de manera priorizada, las mejoras de procesos, modelos y procedimientos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					{ "nombreProceso": "Evaluación y control del proyecto (ECP): AP 1.1 Realización del proceso","abrevProceso": "ECP",
					 "resultadosProceso" : [{ "descripcion": "RP 1: están disponibles las medidas de desempeño y los resultados de las evaluaciones", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se evalúa la adecuación de los roles, responsabilidades, rendiciones de cuentas y autoridades", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se evalúa la adecuación de los recursos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se llevan a cabo las revisiones de progreso técnico", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se investigan y analizan las desviaciones en la realización de los proyectos respecto a los planes", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se informa a los stakeholders afectados del estado del proyecto", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 7: se definen y dirigen acciones correctivas cuando en el proyecto no se están cumpliendo los objetivos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 8: se inicia la replanificación del proyecto, si es necesario", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 9: se autoriza (o no) el progreso de un hito o evento planificado del proyecto al siguiente", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 10 Se logran los objetivos del proyecto", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					{ "nombreProceso": "Gestión de la configuración (GCF): AP 1.1 Realización del proceso","abrevProceso": "GFC",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se identifican y gestionan los elementos que requieran de gestión de configuración", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se establecen las líneas base de la configuración", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se controlan los cambios a los elementos que se encuentran bajo la gestión de configuración", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: la información del estado de la configuración está disponible", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se realizan las auditorías de configuración requeridas", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se controlan y aprueban las liberaciones y los entregables del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					 { "nombreProceso": "Medición (MED): AP 1.1 Realización del proceso","abrevProceso": "MED",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se identifican las necesidades de información", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se identifica o desarrolla un conjunto apropiado de medidas a partir de las necesidades de información", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se recogen, verifican y almacenan los datos requeridos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se analizan los datos y se interpretan los resultados", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: los datos de medición proporcionan información objetiva que da soporte a la toma de decisiones", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					 { "nombreProceso": "Definición de requisitos y necesidades de stakeholders (DNRS): AP 1.1 Realización del proceso","abrevProceso": "DNRS",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se identifican los stakeholders del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se definen las características requeridas y el contexto de uso de las capacidades y conceptos en las etapas del ciclo de vida", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se identifican las restricciones del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se definen las necesidades de los stakeholders", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se priorizan las necesidades de los stakeholders y se transforman en requisitos de stakeholders claramente definidos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se definen las medidas de desempeño crítico", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 7: se consigue el acuerdo de los stakeholders de que sus necesidades y expectativas se reflejan de manera adecuada en los requisitos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 8: se disponen de los sistemas o servicios habilitadores necesarios para las necesidades y requisitos de los stakeholders", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 9: se establece la trazabilidad de los requisitos de los stakeholders con los stakeholders y sus necesidades", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					 { "nombreProceso": "Aseguramiento de la calidad (AC): AP 1.1 Realización del proceso","abrevProceso": "AC",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se definen e implementan procedimientos de aseguramiento de la calidad del proyecto", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se definen los criterios y métodos para las evaluaciones del aseguramiento de la calidad", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se llevan a cabo las evaluaciones de forma consistente con las políticas, procedimientos y requisitos de la gestión de la calidad", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se proporcionan a los stakeholders relevantes los resultados de las evaluaciones", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se resuelven los incidentes", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se tratan los problemas priorizados", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]}];
				}
				else if(nivelesEmpresa=='3' && nivelesInferioresSeleccionado==true){
					camposProcesos=[
					{ "nombreProceso": "Gestión de infraestructuras (GIN): AP 1.1 Realización del proceso","abrevProceso": "GIN", 
					"resultadosProceso" : [{ "descripcion": "RP 1: se definen los requisitos de la infraestructura", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se identifican y especifican los elementos de la infraestructura", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se desarrollan o adquieren los elementos de la infraestructura", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: la infraestructura está disponible", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					{ "nombreProceso": "Gestión de recursos humanos (GRH): AP 1.1 Realización del proceso","abrevProceso": "GRH",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se identifican las habilidades requeridas para los proyectos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se proporcionan los recursos humanos necesarios para los proyectos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se desarrollan, mantienen o mejoran las habilidades del personal", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se resuelven los conflictos en situaciones de demanda de recursos en multiproyecto", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					{ "nombreProceso": "Gestión de la decisión (GD): AP 1.1 Realización del proceso","abrevProceso": "GD",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se identifican las decisiones que requieren un análisis de alternativas", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se identifican y evalúan las opciones alternativas", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se selecciona la opción que más favorece", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se identifican la resolución, la justificación de la decisión y las suposiciones", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					{ "nombreProceso": "Gestión de riesgos (GR): AP 1.1 Realización del proceso","abrevProceso": "GR",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se identifican los riesgos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se analizan los riesgos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se identifican, priorizan y seleccionan las opciones de tratamiento del riesgo", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se implementa el tratamiento adecuado para los riesgos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se evalúan los riesgos de manera continua para evaluar los cambios en su estado y el progreso en el tratamiento de los mismos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					 { "nombreProceso": "Definición de requisitos del sistema/software (DRS): AP 1.1 Realización del proceso","abrevProceso": "DRS",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se define la descripción del elemento o sistema, incluyendo interfaces, funciones y límites para una solución de sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se definen los requisitos del sistema/software y las restricciones de diseño", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se definen las medidas de desempeño crítico", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se analizan los requisitos del sistema/software", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: todos los sistemas o servicios habilitadores necesarios para la definición de los requisitos del sistema/software están disponibles", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se establece la trazabilidad de los requisitos del sistema/software con los requisitos de los stakeholders", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					 { "nombreProceso": "Definición de la arquitectura (DA): AP 1.1 Realización del proceso","abrevProceso": "DA",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se identifican los intereses de los stakeholders que serán abordados en la arquitectura", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se desarrollan los puntos de vista arquitectónicos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se definen el contexto, los límites y las interfaces externas del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se desarrollan las vistas arquitectónicas y los modelos del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se ubican en entidades arquitectónicas lo significante para las decisiones de la arquitectura del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se identifican los elementos del sistema y sus interfaces", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 7: se evalúan las arquitecturas candidatas", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 8: se obtiene una base arquitectural para los procesos a lo largo del ciclo de vida", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 9: se logra el alineamiento de la arquitectura con los requisitos y características de diseño", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 10: se dispone de todos los sistemas o servicios habilitadores necesarios para la definición de la arquitectura", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 11: se desarrolla la trazabilidad de los elementos arquitectónicos con los requisitos de los stakeholders y los del sistema/software", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					 { "nombreProceso": "Integración (IS): AP 1.1 Realización del proceso","abrevProceso": "IS",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se identifican las restricciones de integración que influyen en los requisitos, la arquitectura o el diseño del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se definen la aproximación y los puntos de control para la operación correcta de las interfaces", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se dispone de los sistemas y servicios habilitadores necesarios para la integración", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se integra un sistema compuesto por los elementos de sistema implementados", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se verifican las interfaces entre los elementos de sistema implementados que componen el sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se verifican las interfaces entre el sistema y el entorno externo", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 7 Se identifican los resultados y anomalías en la integración", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 8: se establece la trazabilidad de los elementos del sistema integrado", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					 { "nombreProceso": "Verificación (VER): AP 1.1 Realización del proceso","abrevProceso": "VER",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se identifican las restricciones de verificación que influyen en los requisitos, la arquitectura o el diseño", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se dispone de cualquier sistema o servicio habilitador necesario para la verificación", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se verifica el sistema o el elemento del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se reportan los datos que proporcionen información para acciones correctivas", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se proporciona evidencia objetiva de que el sistema realizado satisface los requisitos, la arquitectura y el diseño", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se identifican los resultados y anomalías de verificación", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 7: se establece la trazabilidad de los elementos de sistema verificados", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					 { "nombreProceso": "Validación (VAL): AP 1.1 Realización del proceso","abrevProceso": "VAL",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se definen los criterios de validación para los requisitos de los stakeholders", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se confirma la disponibilidad de los servicios requeridos por los stakeholders", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se identifican las restricciones de validación que influyen en los requisitos, la arquitectura o el diseño", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se valida el sistema o el elemento del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se dispone de cualquier sistema o servicio habilitador necesario para la validación", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se identifican los resultados y anomalías de validación", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 7: se proporciona evidencia objetiva de que el sistema o elemento de sistema realizado satisface las necesidades de los stakeholders", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 8: se establece la trazabilidad de los elementos de sistema validados", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]}];
				}
				else if(nivelesEmpresa=='3' && nivelesInferioresSeleccionado==false){
					camposProcesos=[{ "nombreProceso": "Planificación del proyecto (PPY): AP 1.1 Realización del proceso", "abrevProceso": "PPY", "resultadosProceso" : [{ "descripcion": "RP 1: se definen los objetivos y los planes", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se definen los roles, responsabilidades, rendiciones de cuenta y autoridades", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se solicitan y comprometen formalmente los recursos y servicios necesarios para lograr los objetivos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se ponen en marcha los planes para la ejecución del proyecto", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},{ "nombreProceso": "Implementación (IMP): AP 1.1 Realización del proceso", "abrevProceso": "IMP", "resultadosProceso" : [{ "descripcion": "RP 1: se identifican las restricciones de implementación que influyen en los requisitos, la arquitectura o el diseño", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se realiza un elemento del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se empaqueta o almacena un elemento del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: todos los sistemas o servicios habilitantes necesarios para la implementación están disponibles", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se establece la trazabilidad de los elementos del sistema implementado", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					{ "nombreProceso": "Suministro (SUM): AP 1.1 Realización del proceso","abrevProceso": "SUM", 
					"resultadosProceso" : [{ "descripcion": "RP 1: se identifica un cliente para el producto o servicio", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se da respuesta a la solicitud del cliente", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se establece un acuerdo entre el cliente y el proveedor", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se proporciona un producto o servicio", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se satisfacen las obligaciones del proveedor definidas en el acuerdo", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se transfiere la responsabilidad para el producto o servicio adquirido, según lo establecido en el acuerdo", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					{ "nombreProceso": "Gestión del modelo del ciclo de vida (GMCV): AP 1.1 Realización del proceso","abrevProceso": "GMCV",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se establecen políticas y procedimientos organizacionales para la gestión y el despliegue de modelos y procesos del ciclo de vida", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se define la responsabilidad, rendición de cuentas y autoridad sobre las políticas, procesos, modelos y procedimientos del ciclo de vida", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se evalúan los modelos y procesos del ciclo de vida para su uso por la organización", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se implementan, de manera priorizada, las mejoras de procesos, modelos y procedimientos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					{ "nombreProceso": "Evaluación y control del proyecto (ECP): AP 1.1 Realización del proceso","abrevProceso": "ECP",
					 "resultadosProceso" : [{ "descripcion": "RP 1: están disponibles las medidas de desempeño y los resultados de las evaluaciones", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se evalúa la adecuación de los roles, responsabilidades, rendiciones de cuentas y autoridades", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se evalúa la adecuación de los recursos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se llevan a cabo las revisiones de progreso técnico", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se investigan y analizan las desviaciones en la realización de los proyectos respecto a los planes", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se informa a los stakeholders afectados del estado del proyecto", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 7: se definen y dirigen acciones correctivas cuando en el proyecto no se están cumpliendo los objetivos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 8: se inicia la replanificación del proyecto, si es necesario", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 9: se autoriza (o no) el progreso de un hito o evento planificado del proyecto al siguiente", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 10 Se logran los objetivos del proyecto", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					{ "nombreProceso": "Gestión de la configuración (GCF): AP 1.1 Realización del proceso","abrevProceso": "GFC",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se identifican y gestionan los elementos que requieran de gestión de configuración", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se establecen las líneas base de la configuración", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se controlan los cambios a los elementos que se encuentran bajo la gestión de configuración", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: la información del estado de la configuración está disponible", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se realizan las auditorías de configuración requeridas", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se controlan y aprueban las liberaciones y los entregables del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					 { "nombreProceso": "Medición (MED): AP 1.1 Realización del proceso","abrevProceso": "MED",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se identifican las necesidades de información", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se identifica o desarrolla un conjunto apropiado de medidas a partir de las necesidades de información", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se recogen, verifican y almacenan los datos requeridos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se analizan los datos y se interpretan los resultados", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: los datos de medición proporcionan información objetiva que da soporte a la toma de decisiones", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					 { "nombreProceso": "Definición de requisitos y necesidades de stakeholders (DNRS): AP 1.1 Realización del proceso","abrevProceso": "DNRS",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se identifican los stakeholders del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se definen las características requeridas y el contexto de uso de las capacidades y conceptos en las etapas del ciclo de vida", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se identifican las restricciones del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se definen las necesidades de los stakeholders", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se priorizan las necesidades de los stakeholders y se transforman en requisitos de stakeholders claramente definidos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se definen las medidas de desempeño crítico", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 7: se consigue el acuerdo de los stakeholders de que sus necesidades y expectativas se reflejan de manera adecuada en los requisitos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 8: se disponen de los sistemas o servicios habilitadores necesarios para las necesidades y requisitos de los stakeholders", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 9: se establece la trazabilidad de los requisitos de los stakeholders con los stakeholders y sus necesidades", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					 { "nombreProceso": "Aseguramiento de la calidad (AC): AP 1.1 Realización del proceso","abrevProceso": "AC",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se definen e implementan procedimientos de aseguramiento de la calidad del proyecto", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se definen los criterios y métodos para las evaluaciones del aseguramiento de la calidad", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se llevan a cabo las evaluaciones de forma consistente con las políticas, procedimientos y requisitos de la gestión de la calidad", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se proporcionan a los stakeholders relevantes los resultados de las evaluaciones", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se resuelven los incidentes", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se tratan los problemas priorizados", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					{ "nombreProceso": "Gestión de infraestructuras (GIN): AP 1.1 Realización del proceso","abrevProceso": "GIN", 
					"resultadosProceso" : [{ "descripcion": "RP 1: se definen los requisitos de la infraestructura", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se identifican y especifican los elementos de la infraestructura", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se desarrollan o adquieren los elementos de la infraestructura", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: la infraestructura está disponible", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					{ "nombreProceso": "Gestión de recursos humanos (GRH): AP 1.1 Realización del proceso","abrevProceso": "GRH",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se identifican las habilidades requeridas para los proyectos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se proporcionan los recursos humanos necesarios para los proyectos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se desarrollan, mantienen o mejoran las habilidades del personal", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se resuelven los conflictos en situaciones de demanda de recursos en multiproyecto", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					{ "nombreProceso": "Gestión de la decisión (GD): AP 1.1 Realización del proceso","abrevProceso": "GD",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se identifican las decisiones que requieren un análisis de alternativas", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se identifican y evalúan las opciones alternativas", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se selecciona la opción que más favorece", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se identifican la resolución, la justificación de la decisión y las suposiciones", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					{ "nombreProceso": "Gestión de riesgos (GR): AP 1.1 Realización del proceso","abrevProceso": "GR",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se identifican los riesgos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se analizan los riesgos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se identifican, priorizan y seleccionan las opciones de tratamiento del riesgo", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se implementa el tratamiento adecuado para los riesgos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se evalúan los riesgos de manera continua para evaluar los cambios en su estado y el progreso en el tratamiento de los mismos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					 { "nombreProceso": "Definición de requisitos del sistema/software (DRS): AP 1.1 Realización del proceso","abrevProceso": "DRS",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se define la descripción del elemento o sistema, incluyendo interfaces, funciones y límites para una solución de sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se definen los requisitos del sistema/software y las restricciones de diseño", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se definen las medidas de desempeño crítico", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se analizan los requisitos del sistema/software", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: todos los sistemas o servicios habilitadores necesarios para la definición de los requisitos del sistema/software están disponibles", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se establece la trazabilidad de los requisitos del sistema/software con los requisitos de los stakeholders", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					 { "nombreProceso": "Definición de la arquitectura (DA): AP 1.1 Realización del proceso","abrevProceso": "DA",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se identifican los intereses de los stakeholders que serán abordados en la arquitectura", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se desarrollan los puntos de vista arquitectónicos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se definen el contexto, los límites y las interfaces externas del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se desarrollan las vistas arquitectónicas y los modelos del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se ubican en entidades arquitectónicas lo significante para las decisiones de la arquitectura del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se identifican los elementos del sistema y sus interfaces", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 7: se evalúan las arquitecturas candidatas", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 8: se obtiene una base arquitectural para los procesos a lo largo del ciclo de vida", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 9: se logra el alineamiento de la arquitectura con los requisitos y características de diseño", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 10: se dispone de todos los sistemas o servicios habilitadores necesarios para la definición de la arquitectura", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 11: se desarrolla la trazabilidad de los elementos arquitectónicos con los requisitos de los stakeholders y los del sistema/software", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					 { "nombreProceso": "Integración (IS): AP 1.1 Realización del proceso","abrevProceso": "IS",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se identifican las restricciones de integración que influyen en los requisitos, la arquitectura o el diseño del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se definen la aproximación y los puntos de control para la operación correcta de las interfaces", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se dispone de los sistemas y servicios habilitadores necesarios para la integración", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se integra un sistema compuesto por los elementos de sistema implementados", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se verifican las interfaces entre los elementos de sistema implementados que componen el sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se verifican las interfaces entre el sistema y el entorno externo", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 7 Se identifican los resultados y anomalías en la integración", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 8: se establece la trazabilidad de los elementos del sistema integrado", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					 { "nombreProceso": "Verificación (VER): AP 1.1 Realización del proceso","abrevProceso": "VER",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se identifican las restricciones de verificación que influyen en los requisitos, la arquitectura o el diseño", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se dispone de cualquier sistema o servicio habilitador necesario para la verificación", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se verifica el sistema o el elemento del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se reportan los datos que proporcionen información para acciones correctivas", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se proporciona evidencia objetiva de que el sistema realizado satisface los requisitos, la arquitectura y el diseño", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se identifican los resultados y anomalías de verificación", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 7: se establece la trazabilidad de los elementos de sistema verificados", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					 { "nombreProceso": "Validación (VAL): AP 1.1 Realización del proceso","abrevProceso": "VAL",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se definen los criterios de validación para los requisitos de los stakeholders", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se confirma la disponibilidad de los servicios requeridos por los stakeholders", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se identifican las restricciones de validación que influyen en los requisitos, la arquitectura o el diseño", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se valida el sistema o el elemento del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se dispone de cualquier sistema o servicio habilitador necesario para la validación", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se identifican los resultados y anomalías de validación", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 7: se proporciona evidencia objetiva de que el sistema o elemento de sistema realizado satisface las necesidades de los stakeholders", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 8: se establece la trazabilidad de los elementos de sistema validados", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]}];
				}
				else if(nivelesEmpresa=='4' && nivelesInferioresSeleccionado==true){
					camposProcesos=[
					{ "nombreProceso": "Gestión del portfolio (GPO): AP 1.1 Realización del proceso", "abrevProceso": "GPO", "resultadosProceso" : [{ "descripcion": "RP 1: se califican y priorizan las oportunidades de negocio, inversiones o necesidades", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se identifican los proyectos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se asignan recursos y presupuestos para cada proyecto", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se definen las responsabilidades de gestión del proyecto, la rendición de cuentas y las autoridades", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se mantienen los proyectos que cumplen los acuerdos y los requisitos de las partes interesadas", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: los proyectos que no cumplan con los acuerdos o no satisfagan los requisitos de las partes interesadas son redirigidos o terminados", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 7: se finalizan y cierran los proyectos que han cumplido lo acordado y satisfacen los requisitos de los stakeholders", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]}];
				}
				else if(nivelesEmpresa=='4' && nivelesInferioresSeleccionado==false){
					camposProcesos=[{ "nombreProceso": "Planificación del proyecto (PPY): AP 1.1 Realización del proceso", "abrevProceso": "PPY", "resultadosProceso" : [{ "descripcion": "RP 1: se definen los objetivos y los planes", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se definen los roles, responsabilidades, rendiciones de cuenta y autoridades", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se solicitan y comprometen formalmente los recursos y servicios necesarios para lograr los objetivos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se ponen en marcha los planes para la ejecución del proyecto", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},{ "nombreProceso": "Implementación (IMP): AP 1.1 Realización del proceso", "abrevProceso": "IMP", "resultadosProceso" : [{ "descripcion": "RP 1: se identifican las restricciones de implementación que influyen en los requisitos, la arquitectura o el diseño", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se realiza un elemento del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se empaqueta o almacena un elemento del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: todos los sistemas o servicios habilitantes necesarios para la implementación están disponibles", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se establece la trazabilidad de los elementos del sistema implementado", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					{ "nombreProceso": "Suministro (SUM): AP 1.1 Realización del proceso","abrevProceso": "SUM", 
					"resultadosProceso" : [{ "descripcion": "RP 1: se identifica un cliente para el producto o servicio", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se da respuesta a la solicitud del cliente", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se establece un acuerdo entre el cliente y el proveedor", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se proporciona un producto o servicio", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se satisfacen las obligaciones del proveedor definidas en el acuerdo", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se transfiere la responsabilidad para el producto o servicio adquirido, según lo establecido en el acuerdo", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					{ "nombreProceso": "Gestión del modelo del ciclo de vida (GMCV): AP 1.1 Realización del proceso","abrevProceso": "GMCV",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se establecen políticas y procedimientos organizacionales para la gestión y el despliegue de modelos y procesos del ciclo de vida", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se define la responsabilidad, rendición de cuentas y autoridad sobre las políticas, procesos, modelos y procedimientos del ciclo de vida", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se evalúan los modelos y procesos del ciclo de vida para su uso por la organización", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se implementan, de manera priorizada, las mejoras de procesos, modelos y procedimientos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					{ "nombreProceso": "Evaluación y control del proyecto (ECP): AP 1.1 Realización del proceso","abrevProceso": "ECP",
					 "resultadosProceso" : [{ "descripcion": "RP 1: están disponibles las medidas de desempeño y los resultados de las evaluaciones", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se evalúa la adecuación de los roles, responsabilidades, rendiciones de cuentas y autoridades", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se evalúa la adecuación de los recursos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se llevan a cabo las revisiones de progreso técnico", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se investigan y analizan las desviaciones en la realización de los proyectos respecto a los planes", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se informa a los stakeholders afectados del estado del proyecto", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 7: se definen y dirigen acciones correctivas cuando en el proyecto no se están cumpliendo los objetivos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 8: se inicia la replanificación del proyecto, si es necesario", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 9: se autoriza (o no) el progreso de un hito o evento planificado del proyecto al siguiente", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 10 Se logran los objetivos del proyecto", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					{ "nombreProceso": "Gestión de la configuración (GCF): AP 1.1 Realización del proceso","abrevProceso": "GFC",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se identifican y gestionan los elementos que requieran de gestión de configuración", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se establecen las líneas base de la configuración", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se controlan los cambios a los elementos que se encuentran bajo la gestión de configuración", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: la información del estado de la configuración está disponible", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se realizan las auditorías de configuración requeridas", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se controlan y aprueban las liberaciones y los entregables del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					 { "nombreProceso": "Medición (MED): AP 1.1 Realización del proceso","abrevProceso": "MED",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se identifican las necesidades de información", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se identifica o desarrolla un conjunto apropiado de medidas a partir de las necesidades de información", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se recogen, verifican y almacenan los datos requeridos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se analizan los datos y se interpretan los resultados", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: los datos de medición proporcionan información objetiva que da soporte a la toma de decisiones", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					 { "nombreProceso": "Definición de requisitos y necesidades de stakeholders (DNRS): AP 1.1 Realización del proceso","abrevProceso": "DNRS",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se identifican los stakeholders del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se definen las características requeridas y el contexto de uso de las capacidades y conceptos en las etapas del ciclo de vida", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se identifican las restricciones del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se definen las necesidades de los stakeholders", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se priorizan las necesidades de los stakeholders y se transforman en requisitos de stakeholders claramente definidos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se definen las medidas de desempeño crítico", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 7: se consigue el acuerdo de los stakeholders de que sus necesidades y expectativas se reflejan de manera adecuada en los requisitos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 8: se disponen de los sistemas o servicios habilitadores necesarios para las necesidades y requisitos de los stakeholders", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 9: se establece la trazabilidad de los requisitos de los stakeholders con los stakeholders y sus necesidades", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					 { "nombreProceso": "Aseguramiento de la calidad (AC): AP 1.1 Realización del proceso","abrevProceso": "AC",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se definen e implementan procedimientos de aseguramiento de la calidad del proyecto", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se definen los criterios y métodos para las evaluaciones del aseguramiento de la calidad", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se llevan a cabo las evaluaciones de forma consistente con las políticas, procedimientos y requisitos de la gestión de la calidad", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se proporcionan a los stakeholders relevantes los resultados de las evaluaciones", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se resuelven los incidentes", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se tratan los problemas priorizados", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					{ "nombreProceso": "Gestión de infraestructuras (GIN): AP 1.1 Realización del proceso","abrevProceso": "GIN", 
					"resultadosProceso" : [{ "descripcion": "RP 1: se definen los requisitos de la infraestructura", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se identifican y especifican los elementos de la infraestructura", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se desarrollan o adquieren los elementos de la infraestructura", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: la infraestructura está disponible", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					{ "nombreProceso": "Gestión de recursos humanos (GRH): AP 1.1 Realización del proceso","abrevProceso": "GRH",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se identifican las habilidades requeridas para los proyectos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se proporcionan los recursos humanos necesarios para los proyectos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se desarrollan, mantienen o mejoran las habilidades del personal", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se resuelven los conflictos en situaciones de demanda de recursos en multiproyecto", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					{ "nombreProceso": "Gestión de la decisión (GD): AP 1.1 Realización del proceso","abrevProceso": "GD",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se identifican las decisiones que requieren un análisis de alternativas", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se identifican y evalúan las opciones alternativas", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se selecciona la opción que más favorece", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se identifican la resolución, la justificación de la decisión y las suposiciones", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					{ "nombreProceso": "Gestión de riesgos (GR): AP 1.1 Realización del proceso","abrevProceso": "GR",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se identifican los riesgos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se analizan los riesgos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se identifican, priorizan y seleccionan las opciones de tratamiento del riesgo", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se implementa el tratamiento adecuado para los riesgos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se evalúan los riesgos de manera continua para evaluar los cambios en su estado y el progreso en el tratamiento de los mismos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					 { "nombreProceso": "Definición de requisitos del sistema/software (DRS): AP 1.1 Realización del proceso","abrevProceso": "DRS",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se define la descripción del elemento o sistema, incluyendo interfaces, funciones y límites para una solución de sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se definen los requisitos del sistema/software y las restricciones de diseño", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se definen las medidas de desempeño crítico", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se analizan los requisitos del sistema/software", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: todos los sistemas o servicios habilitadores necesarios para la definición de los requisitos del sistema/software están disponibles", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se establece la trazabilidad de los requisitos del sistema/software con los requisitos de los stakeholders", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					 { "nombreProceso": "Definición de la arquitectura (DA): AP 1.1 Realización del proceso","abrevProceso": "DA",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se identifican los intereses de los stakeholders que serán abordados en la arquitectura", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se desarrollan los puntos de vista arquitectónicos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se definen el contexto, los límites y las interfaces externas del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se desarrollan las vistas arquitectónicas y los modelos del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se ubican en entidades arquitectónicas lo significante para las decisiones de la arquitectura del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se identifican los elementos del sistema y sus interfaces", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 7: se evalúan las arquitecturas candidatas", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 8: se obtiene una base arquitectural para los procesos a lo largo del ciclo de vida", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 9: se logra el alineamiento de la arquitectura con los requisitos y características de diseño", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 10: se dispone de todos los sistemas o servicios habilitadores necesarios para la definición de la arquitectura", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 11: se desarrolla la trazabilidad de los elementos arquitectónicos con los requisitos de los stakeholders y los del sistema/software", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					 { "nombreProceso": "Integración (IS): AP 1.1 Realización del proceso","abrevProceso": "IS",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se identifican las restricciones de integración que influyen en los requisitos, la arquitectura o el diseño del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se definen la aproximación y los puntos de control para la operación correcta de las interfaces", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se dispone de los sistemas y servicios habilitadores necesarios para la integración", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se integra un sistema compuesto por los elementos de sistema implementados", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se verifican las interfaces entre los elementos de sistema implementados que componen el sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se verifican las interfaces entre el sistema y el entorno externo", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 7 Se identifican los resultados y anomalías en la integración", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 8: se establece la trazabilidad de los elementos del sistema integrado", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					 { "nombreProceso": "Verificación (VER): AP 1.1 Realización del proceso","abrevProceso": "VER",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se identifican las restricciones de verificación que influyen en los requisitos, la arquitectura o el diseño", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se dispone de cualquier sistema o servicio habilitador necesario para la verificación", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se verifica el sistema o el elemento del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se reportan los datos que proporcionen información para acciones correctivas", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se proporciona evidencia objetiva de que el sistema realizado satisface los requisitos, la arquitectura y el diseño", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se identifican los resultados y anomalías de verificación", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 7: se establece la trazabilidad de los elementos de sistema verificados", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					 { "nombreProceso": "Validación (VAL): AP 1.1 Realización del proceso","abrevProceso": "VAL",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se definen los criterios de validación para los requisitos de los stakeholders", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se confirma la disponibilidad de los servicios requeridos por los stakeholders", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se identifican las restricciones de validación que influyen en los requisitos, la arquitectura o el diseño", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se valida el sistema o el elemento del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se dispone de cualquier sistema o servicio habilitador necesario para la validación", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se identifican los resultados y anomalías de validación", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 7: se proporciona evidencia objetiva de que el sistema o elemento de sistema realizado satisface las necesidades de los stakeholders", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 8: se establece la trazabilidad de los elementos de sistema validados", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					{ "nombreProceso": "Gestión del portfolio (GPO): AP 1.1 Realización del proceso", "abrevProceso": "GPO", "resultadosProceso" : [{ "descripcion": "RP 1: se califican y priorizan las oportunidades de negocio, inversiones o necesidades", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se identifican los proyectos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se asignan recursos y presupuestos para cada proyecto", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se definen las responsabilidades de gestión del proyecto, la rendición de cuentas y las autoridades", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se mantienen los proyectos que cumplen los acuerdos y los requisitos de las partes interesadas", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: los proyectos que no cumplan con los acuerdos o no satisfagan los requisitos de las partes interesadas son redirigidos o terminados", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 7: se finalizan y cierran los proyectos que han cumplido lo acordado y satisfacen los requisitos de los stakeholders", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]}];
				}
				else if(nivelesEmpresa=='5' && nivelesInferioresSeleccionado==true){
					camposProcesos=[{ "nombreProceso": "Gestión del conocimiento (GCO): AP 1.1 Realización del proceso", "abrevProceso": "GCO", "resultadosProceso" : [{ "descripcion": "RP 1: se identifica una taxonomía para la aplicación de los activos de conocimiento", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: los conocimientos, las habilidades y los activos de conocimiento de la organización se desarrollan o adquieren", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: los conocimientos, las habilidades y los activos de conocimiento de la organización están disponibles", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: los datos del uso de la gestión del conocimiento se recopilan y analizan", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					{ "nombreProceso": "Análisis del negocio o misión (ANM): AP 1.1 Realización del proceso", "abrevProceso": "ANM", "resultadosProceso" : [{ "descripcion": "RP 1: se define el ámbito del problema o de la oportunidad", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se caracteriza el espacio de la solución", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se definen los conceptos operacionales preliminares y otros conceptos en las etapas del ciclo de vida", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se identifican y analizan las clases de soluciones alternativas", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se seleccionan las clases de soluciones alternativas candidatas preferidas", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: todos los sistemas o servicios habilitantes necesarios para el análisis de negocios o misiones están disponibles", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 7: se establece la trazabilidad entre los problemas u oportunidades de negocio o de la misión y las clases de soluciones alternativas preferidas", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]}];
				}
				else if(nivelesEmpresa=='5' && nivelesInferioresSeleccionado==false){
					camposProcesos=[{ "nombreProceso": "Planificación del proyecto (PPY): AP 1.1 Realización del proceso", "abrevProceso": "PPY", "resultadosProceso" : [{ "descripcion": "RP 1: se definen los objetivos y los planes", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se definen los roles, responsabilidades, rendiciones de cuenta y autoridades", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se solicitan y comprometen formalmente los recursos y servicios necesarios para lograr los objetivos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se ponen en marcha los planes para la ejecución del proyecto", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},{ "nombreProceso": "Implementación (IMP): AP 1.1 Realización del proceso", "abrevProceso": "IMP", "resultadosProceso" : [{ "descripcion": "RP 1: se identifican las restricciones de implementación que influyen en los requisitos, la arquitectura o el diseño", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se realiza un elemento del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se empaqueta o almacena un elemento del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: todos los sistemas o servicios habilitantes necesarios para la implementación están disponibles", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se establece la trazabilidad de los elementos del sistema implementado", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					{ "nombreProceso": "Suministro (SUM): AP 1.1 Realización del proceso","abrevProceso": "SUM", 
					"resultadosProceso" : [{ "descripcion": "RP 1: se identifica un cliente para el producto o servicio", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se da respuesta a la solicitud del cliente", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se establece un acuerdo entre el cliente y el proveedor", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se proporciona un producto o servicio", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se satisfacen las obligaciones del proveedor definidas en el acuerdo", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se transfiere la responsabilidad para el producto o servicio adquirido, según lo establecido en el acuerdo", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					{ "nombreProceso": "Gestión del modelo del ciclo de vida (GMCV): AP 1.1 Realización del proceso","abrevProceso": "GMCV",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se establecen políticas y procedimientos organizacionales para la gestión y el despliegue de modelos y procesos del ciclo de vida", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se define la responsabilidad, rendición de cuentas y autoridad sobre las políticas, procesos, modelos y procedimientos del ciclo de vida", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se evalúan los modelos y procesos del ciclo de vida para su uso por la organización", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se implementan, de manera priorizada, las mejoras de procesos, modelos y procedimientos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					{ "nombreProceso": "Evaluación y control del proyecto (ECP): AP 1.1 Realización del proceso","abrevProceso": "ECP",
					 "resultadosProceso" : [{ "descripcion": "RP 1: están disponibles las medidas de desempeño y los resultados de las evaluaciones", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se evalúa la adecuación de los roles, responsabilidades, rendiciones de cuentas y autoridades", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se evalúa la adecuación de los recursos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se llevan a cabo las revisiones de progreso técnico", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se investigan y analizan las desviaciones en la realización de los proyectos respecto a los planes", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se informa a los stakeholders afectados del estado del proyecto", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 7: se definen y dirigen acciones correctivas cuando en el proyecto no se están cumpliendo los objetivos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 8: se inicia la replanificación del proyecto, si es necesario", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 9: se autoriza (o no) el progreso de un hito o evento planificado del proyecto al siguiente", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 10 Se logran los objetivos del proyecto", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					{ "nombreProceso": "Gestión de la configuración (GCF): AP 1.1 Realización del proceso","abrevProceso": "GFC",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se identifican y gestionan los elementos que requieran de gestión de configuración", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se establecen las líneas base de la configuración", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se controlan los cambios a los elementos que se encuentran bajo la gestión de configuración", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: la información del estado de la configuración está disponible", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se realizan las auditorías de configuración requeridas", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se controlan y aprueban las liberaciones y los entregables del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					 { "nombreProceso": "Medición (MED): AP 1.1 Realización del proceso","abrevProceso": "MED",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se identifican las necesidades de información", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se identifica o desarrolla un conjunto apropiado de medidas a partir de las necesidades de información", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se recogen, verifican y almacenan los datos requeridos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se analizan los datos y se interpretan los resultados", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: los datos de medición proporcionan información objetiva que da soporte a la toma de decisiones", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					 { "nombreProceso": "Definición de requisitos y necesidades de stakeholders (DNRS): AP 1.1 Realización del proceso","abrevProceso": "DNRS",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se identifican los stakeholders del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se definen las características requeridas y el contexto de uso de las capacidades y conceptos en las etapas del ciclo de vida", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se identifican las restricciones del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se definen las necesidades de los stakeholders", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se priorizan las necesidades de los stakeholders y se transforman en requisitos de stakeholders claramente definidos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se definen las medidas de desempeño crítico", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 7: se consigue el acuerdo de los stakeholders de que sus necesidades y expectativas se reflejan de manera adecuada en los requisitos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 8: se disponen de los sistemas o servicios habilitadores necesarios para las necesidades y requisitos de los stakeholders", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 9: se establece la trazabilidad de los requisitos de los stakeholders con los stakeholders y sus necesidades", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					 { "nombreProceso": "Aseguramiento de la calidad (AC): AP 1.1 Realización del proceso","abrevProceso": "AC",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se definen e implementan procedimientos de aseguramiento de la calidad del proyecto", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se definen los criterios y métodos para las evaluaciones del aseguramiento de la calidad", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se llevan a cabo las evaluaciones de forma consistente con las políticas, procedimientos y requisitos de la gestión de la calidad", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se proporcionan a los stakeholders relevantes los resultados de las evaluaciones", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se resuelven los incidentes", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se tratan los problemas priorizados", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					{ "nombreProceso": "Gestión de infraestructuras (GIN): AP 1.1 Realización del proceso","abrevProceso": "GIN", 
					"resultadosProceso" : [{ "descripcion": "RP 1: se definen los requisitos de la infraestructura", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se identifican y especifican los elementos de la infraestructura", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se desarrollan o adquieren los elementos de la infraestructura", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: la infraestructura está disponible", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					{ "nombreProceso": "Gestión de recursos humanos (GRH): AP 1.1 Realización del proceso","abrevProceso": "GRH",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se identifican las habilidades requeridas para los proyectos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se proporcionan los recursos humanos necesarios para los proyectos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se desarrollan, mantienen o mejoran las habilidades del personal", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se resuelven los conflictos en situaciones de demanda de recursos en multiproyecto", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					{ "nombreProceso": "Gestión de la decisión (GD): AP 1.1 Realización del proceso","abrevProceso": "GD",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se identifican las decisiones que requieren un análisis de alternativas", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se identifican y evalúan las opciones alternativas", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se selecciona la opción que más favorece", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se identifican la resolución, la justificación de la decisión y las suposiciones", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					{ "nombreProceso": "Gestión de riesgos (GR): AP 1.1 Realización del proceso","abrevProceso": "GR",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se identifican los riesgos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se analizan los riesgos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se identifican, priorizan y seleccionan las opciones de tratamiento del riesgo", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se implementa el tratamiento adecuado para los riesgos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se evalúan los riesgos de manera continua para evaluar los cambios en su estado y el progreso en el tratamiento de los mismos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					 { "nombreProceso": "Definición de requisitos del sistema/software (DRS): AP 1.1 Realización del proceso","abrevProceso": "DRS",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se define la descripción del elemento o sistema, incluyendo interfaces, funciones y límites para una solución de sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se definen los requisitos del sistema/software y las restricciones de diseño", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se definen las medidas de desempeño crítico", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se analizan los requisitos del sistema/software", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: todos los sistemas o servicios habilitadores necesarios para la definición de los requisitos del sistema/software están disponibles", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se establece la trazabilidad de los requisitos del sistema/software con los requisitos de los stakeholders", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					 { "nombreProceso": "Definición de la arquitectura (DA): AP 1.1 Realización del proceso","abrevProceso": "DA",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se identifican los intereses de los stakeholders que serán abordados en la arquitectura", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se desarrollan los puntos de vista arquitectónicos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se definen el contexto, los límites y las interfaces externas del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se desarrollan las vistas arquitectónicas y los modelos del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se ubican en entidades arquitectónicas lo significante para las decisiones de la arquitectura del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se identifican los elementos del sistema y sus interfaces", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 7: se evalúan las arquitecturas candidatas", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 8: se obtiene una base arquitectural para los procesos a lo largo del ciclo de vida", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 9: se logra el alineamiento de la arquitectura con los requisitos y características de diseño", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 10: se dispone de todos los sistemas o servicios habilitadores necesarios para la definición de la arquitectura", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 11: se desarrolla la trazabilidad de los elementos arquitectónicos con los requisitos de los stakeholders y los del sistema/software", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					 { "nombreProceso": "Integración (IS): AP 1.1 Realización del proceso","abrevProceso": "IS",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se identifican las restricciones de integración que influyen en los requisitos, la arquitectura o el diseño del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se definen la aproximación y los puntos de control para la operación correcta de las interfaces", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se dispone de los sistemas y servicios habilitadores necesarios para la integración", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se integra un sistema compuesto por los elementos de sistema implementados", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se verifican las interfaces entre los elementos de sistema implementados que componen el sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se verifican las interfaces entre el sistema y el entorno externo", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 7 Se identifican los resultados y anomalías en la integración", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 8: se establece la trazabilidad de los elementos del sistema integrado", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					 { "nombreProceso": "Verificación (VER): AP 1.1 Realización del proceso","abrevProceso": "VER",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se identifican las restricciones de verificación que influyen en los requisitos, la arquitectura o el diseño", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se dispone de cualquier sistema o servicio habilitador necesario para la verificación", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se verifica el sistema o el elemento del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se reportan los datos que proporcionen información para acciones correctivas", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se proporciona evidencia objetiva de que el sistema realizado satisface los requisitos, la arquitectura y el diseño", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se identifican los resultados y anomalías de verificación", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 7: se establece la trazabilidad de los elementos de sistema verificados", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					 { "nombreProceso": "Validación (VAL): AP 1.1 Realización del proceso","abrevProceso": "VAL",
					 "resultadosProceso" : [{ "descripcion": "RP 1: se definen los criterios de validación para los requisitos de los stakeholders", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se confirma la disponibilidad de los servicios requeridos por los stakeholders", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se identifican las restricciones de validación que influyen en los requisitos, la arquitectura o el diseño", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se valida el sistema o el elemento del sistema", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se dispone de cualquier sistema o servicio habilitador necesario para la validación", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: se identifican los resultados y anomalías de validación", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 7: se proporciona evidencia objetiva de que el sistema o elemento de sistema realizado satisface las necesidades de los stakeholders", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 8: se establece la trazabilidad de los elementos de sistema validados", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					{ "nombreProceso": "Gestión del portfolio (GPO): AP 1.1 Realización del proceso", "abrevProceso": "GPO", "resultadosProceso" : [{ "descripcion": "RP 1: se califican y priorizan las oportunidades de negocio, inversiones o necesidades", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se identifican los proyectos", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se asignan recursos y presupuestos para cada proyecto", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se definen las responsabilidades de gestión del proyecto, la rendición de cuentas y las autoridades", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se mantienen los proyectos que cumplen los acuerdos y los requisitos de las partes interesadas", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: los proyectos que no cumplan con los acuerdos o no satisfagan los requisitos de las partes interesadas son redirigidos o terminados", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 7: se finalizan y cierran los proyectos que han cumplido lo acordado y satisfacen los requisitos de los stakeholders", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					{ "nombreProceso": "Gestión del conocimiento (GCO): AP 1.1 Realización del proceso", "abrevProceso": "GCO", "resultadosProceso" : [{ "descripcion": "RP 1: se identifica una taxonomía para la aplicación de los activos de conocimiento", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: los conocimientos, las habilidades y los activos de conocimiento de la organización se desarrollan o adquieren", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: los conocimientos, las habilidades y los activos de conocimiento de la organización están disponibles", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: los datos del uso de la gestión del conocimiento se recopilan y analizan", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]},
					{ "nombreProceso": "Análisis del negocio o misión (ANM): AP 1.1 Realización del proceso", "abrevProceso": "ANM", "resultadosProceso" : [{ "descripcion": "RP 1: se define el ámbito del problema o de la oportunidad", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 2: se caracteriza el espacio de la solución", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 3: se definen los conceptos operacionales preliminares y otros conceptos en las etapas del ciclo de vida", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 4: se identifican y analizan las clases de soluciones alternativas", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 5: se seleccionan las clases de soluciones alternativas candidatas preferidas", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 6: todos los sistemas o servicios habilitantes necesarios para el análisis de negocios o misiones están disponibles", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" },{ "descripcion": "RP 7: se establece la trazabilidad entre los problemas u oportunidades de negocio o de la misión y las clases de soluciones alternativas preferidas", "documentacion" : "", "evidenciaDirecta" : "", "anotaciones" : "" }]}];
				}

				ju.dao.insertarEvaluacion({email:email,nombreEvaluacion:nombreEvaluacion,estado:estado,fechaEvaluacion:fechaEvaluacion,nombreEmpresa:nombreEmpresa,emailEmpresa:emailEmpresa,tlfEmpresa:tlfEmpresa,personaEmpresa:personaEmpresa,nivelesEmpresa:nivelesEmpresa,procesos:camposProcesos,nivelesInferioresSeleccionado:nivelesInferioresSeleccionado},function(eval){
		            
					//moduloEmail.enviarEmail(nombre,email,key);
		            callback({nombreEvaluacion:nombreEvaluacion});
		 	    });
		    }
		    else{

		        callback({nombreEvaluacion:undefined});
		    }
    	});
	}

	this.obtenerEvaluaciones=function(email,callback){

		var ju=this;

		this.dao.encontrarEvaluacionesUsuario({email:email},function(eva){
			//console.log(usr);
			if(!eva){
				/*ju.dao.insertarEvaluacion({email:email,nombreEvaluacion:nombreEvaluacion,nombreEmpresa:nombreEmpresa,emailEmpresa:emailEmpresa,tlfEmpresa:tlfEmpresa,personaEmpresa:personaEmpresa,nivelesEmpresa:nivelesEmpresa,nivelesInferioresSeleccionado:nivelesInferioresSeleccionado},function(eval){
		            
					//moduloEmail.enviarEmail(nombre,email,key);
		            callback({nombreEvaluacion:nombreEvaluacion});
		 	    });*/
		 	    callback({email:undefined});
		    }
		    else{

		        callback(eva);
		    }
    	});
	}





	this.obtenerEvaluacion=function(nombreEvaluacion,callback){

		var ju=this;

		this.dao.encontrarEvaluacionCriterio({nombreEvaluacion:nombreEvaluacion},function(eva){
			//console.log(usr);
			if(!eva){
				/*ju.dao.insertarEvaluacion({email:email,nombreEvaluacion:nombreEvaluacion,nombreEmpresa:nombreEmpresa,emailEmpresa:emailEmpresa,tlfEmpresa:tlfEmpresa,personaEmpresa:personaEmpresa,nivelesEmpresa:nivelesEmpresa,nivelesInferioresSeleccionado:nivelesInferioresSeleccionado},function(eval){
		            
					//moduloEmail.enviarEmail(nombre,email,key);
		            callback({nombreEvaluacion:nombreEvaluacion});
		 	    });*/
		 	    callback({nombreEvaluacion:undefined});
		    }
		    else{
		    	//console.log('PASA POR AQUI'+eva.nombreEvaluacion);
		        callback(eva);
		    }
    	});
	}


	this.eliminarEvaluacion=function(nombreEvaluacion,callback){
		var json={'resultados':-1};
		
			this.dao.eliminarEvaluacion(nombreEvaluacion,function(result){
	            if (result.result.n==0){
	                console.log("No se pudo eliminar de evaluaciones");
	            }
	            else{
	                json={"resultados":1};
	                console.log("Evaluación eliminada de evaluaciones");
	                callback(json);
	            }
	        }); 
		
	}



	this.actualizarUsuario=function(nuevo,callback){
		var oldC=cf.encrypt(nuevo.oldpass);
		var newC=cf.encrypt(nuevo.newpass);
		var pers=this.dao;

		this.dao.encontrarUsuarioCriterio({email:nuevo.email},function(usr){ //,clave:oldC PARA VALIDAR CLAVE ANTIGUA
			if(usr){
				if (oldC==usr.clave && nuevo.newpass!="" && nuevo.newpass==nuevo.newpass2){
					usr.clave=newC;

					pers.modificarColeccionUsuarios(usr,function(nusu){
			            console.log("Usuario modificado");
			            
			            callback({_id:usr._id,email:nuevo.email,oldC:oldC, clave:usr.clave});
		        	});
				}
				else{
					callback({_id:usr._id,email:nuevo.email,oldC:oldC,clave:usr.clave});
				}
		    }
		    else{
		    	callback({email:undefined});	
		    }
		});
	}




	/*this.actualizarEvaluacion=function(nombreEvaluacion,persona,callback){
		//console.log(nuevo.evaluacionNombre);
		//var prueba=prueba;
		//console.log('pasa por modelo: '+prueba);
		var pers=this.dao;
		//console.log(nombreEvaluacion);
		this.dao.encontrarEvaluacionCriterioActualizar({nombreEvaluacion:nombreEvaluacion},function(eva){ //,clave:oldC PARA VALIDAR CLAVE ANTIGUA
			if(eva){
					console.log('AQUI SALE: '+eva._id);
					//console.log('AQUI: '+JSON.stringify(eva));

					eva.procesos[0].resultadosProceso[0].documentacion=persona;
					
					pers.modificarColeccionEvaluaciones(eva,function(nusu){
			            console.log("Evaluacion modificada: "+nombreEvaluacion+persona);
			            
			            callback({_id:eva._id,nombreEvaluacion:nombreEvaluacion,personaEmpresa:eva.nombreEmpresa});
		        	});
		        
		    }
		    else{
		    	callback({nombreEvaluacion:undefined});	
		    }
		});

		
	}*/



this.actualizarColoresUsuario=function(email,fondoPanel,seccionTextoPanel,textoPanel,callback){
	//console.log(nuevo.evaluacionNombre);
		//var prueba=prueba;
		//console.log('pasa por modelo: '+prueba);
		var pers=this.dao;
		var pos=0;
		//console.log(nombreEvaluacion);
		//console.log(nombreEvaluacion);
		this.dao.encontrarUsuarioCriterioActualizar({email:email},function(usu){ //,clave:oldC PARA VALIDAR CLAVE ANTIGUA
			if(usu){
					
				usu.colores[0].fondoPanel=fondoPanel;
				usu.colores[0].seccionTextoPanel=seccionTextoPanel;
				usu.colores[0].textoPanel=textoPanel;

				pers.modificarColeccionUsuarios(usu,function(nusu){
					console.log("Usuario modificado");

					           
					//callback({email:email});
					callback(usu);
		      	});
					
		    }
		    else{
		    	callback({email:undefined});	
		    }
		});
		
	}



this.actualizarEstado=function(nombreEvaluacion,datosEstado,callback){
		//console.log(nuevo.evaluacionNombre);
		//var prueba=prueba;
		//console.log('pasa por modelo: '+prueba);
		var pers=this.dao;
		var pos=0;
		//console.log(nombreEvaluacion);
		//console.log(nombreEvaluacion);
		this.dao.encontrarEvaluacionCriterioActualizar({nombreEvaluacion:nombreEvaluacion},function(eva){ //,clave:oldC PARA VALIDAR CLAVE ANTIGUA
			if(eva){
					console.log('AQUI SALE: '+eva._id);
					//console.log('AQUI: '+JSON.stringify(eva));

					eva.estado=datosEstado;
					
					
					
					pers.modificarColeccionEvaluaciones(eva,function(nusu){
			            console.log("Evaluacion modificada: "+nombreEvaluacion);
			            
			            callback({_id:eva._id,nombreEvaluacion:nombreEvaluacion,personaEmpresa:eva.nombreEmpresa});
		        		//callback(nusu);
		        	});
		        
		    }
		    else{
		    	callback({nombreEvaluacion:undefined});	
		    }
		});

		
	}



	this.actualizarPasswordPerfil=function(email,password,newPassword,callback){
		//console.log(nuevo.evaluacionNombre);
		//var prueba=prueba;
		//console.log('pasa por modelo: '+prueba);
		var pers=this.dao;
		var pos=0;
		//console.log(nombreEvaluacion);
		//console.log(nombreEvaluacion);
		this.dao.encontrarUsuarioCriterioActualizar({email:email},function(usu){ //,clave:oldC PARA VALIDAR CLAVE ANTIGUA
			if(usu){
					//console.log('AQUI SALE: '+eva._id);
					//console.log('AQUI: '+JSON.stringify(eva));
					var pass=cf.encrypt(password);
					var newPass=cf.encrypt(newPassword);

					console.log(usu.clave);
					console.log(password);
					console.log(pass);
					
					if(usu.clave==pass){
						usu.clave=newPass;

						pers.modificarColeccionUsuarios(usu,function(nusu){
				            console.log("Usuario modificado");

				            
					      	//console.log("Usuario ha iniciado sesión: "+data.email);
					      	//var usr=JSON.parse($.cookie("usr"));
				            
				            //callback(usu);
				            callback({email:email,clave:usu.clave,password:newPass});
		        		});
					}

					else{
						console.log('No se ha podido modificar la contraseña');
						callback({email:email,clave:usu.clave,password:newPass});
					}

					
					
					
					
					
					
		        
		    }
		    else{
		    	callback({email:undefined,});	
		    }
		});






		
	}



	this.actualizarPerfilUsuario=function(nombre,emailViejo,emailNuevo,experiencia,callback){
		//console.log(nuevo.evaluacionNombre);
		//var prueba=prueba;
		//console.log('pasa por modelo: '+prueba);
		var pers=this.dao;
		var pos=0;
		//console.log(nombreEvaluacion);
		//console.log(nombreEvaluacion);
		this.dao.encontrarUsuarioCriterioActualizar({email:emailViejo},function(usu){ //,clave:oldC PARA VALIDAR CLAVE ANTIGUA
			if(usu){
					//console.log('AQUI SALE: '+eva._id);
					//console.log('AQUI: '+JSON.stringify(eva));

					usu.nombre=nombre;
					usu.email=emailNuevo;
					usu.experiencia=experiencia;
					
					
					
					pers.modificarColeccionUsuarios(usu,function(nusu){
			            console.log("Usuario modificado");

			            
				      	//console.log("Usuario ha iniciado sesión: "+data.email);
				      	//var usr=JSON.parse($.cookie("usr"));
			            
			            callback(usu);
		        	});
		        
		    }
		    else{
		    	callback({email:undefined});	
		    }
		});






		
	}











	this.actualizarEvaluacion=function(nombreEvaluacion,arrayCampos,fechaModificacionEvaluacion,callback){
		//console.log(nuevo.evaluacionNombre);
		//var prueba=prueba;
		//console.log('pasa por modelo: '+prueba);
		var pers=this.dao;
		var pos=0;
		//console.log(nombreEvaluacion);
		//console.log(nombreEvaluacion);
		this.dao.encontrarEvaluacionCriterioActualizar({nombreEvaluacion:nombreEvaluacion},function(eva){ //,clave:oldC PARA VALIDAR CLAVE ANTIGUA
			if(eva){
					console.log('AQUI SALE: '+eva._id);
					//console.log('AQUI: '+JSON.stringify(eva));

					eva.fechaEvaluacion=fechaModificacionEvaluacion;
					for (var i = 0; i < eva.procesos.length; i++) {
						for (var j = 0; j < eva.procesos[i].resultadosProceso.length; j++) {
							

							eva.procesos[i].resultadosProceso[j].documentacion=arrayCampos[pos*3];
							eva.procesos[i].resultadosProceso[j].evidenciaDirecta=arrayCampos[(pos*3)+1];
							eva.procesos[i].resultadosProceso[j].anotaciones=arrayCampos[(pos*3)+2];

							pos=pos+1;
						}
					}
					//console.log(eva.procesos[0].resultadosProceso.length);
					console.log((Object.values(arrayCampos)));
					/*for (var i = 0; i < arrayCampos.length; i++) {
						console.log('==============');
						console.log(arrayCampos[i]);
					}*/
					

					//eva.procesos[0].resultadosProceso[0].documentacion=arrayCampos['06'];
					
					pers.modificarColeccionEvaluaciones(eva,function(nusu){
			            console.log("Evaluacion modificada: "+nombreEvaluacion);
			            
			            callback({_id:eva._id,nombreEvaluacion:nombreEvaluacion,personaEmpresa:eva.nombreEmpresa});
		        		//callback(nusu);
		        	});
		        
		    }
		    else{
		    	callback({nombreEvaluacion:undefined});	
		    }
		});

		
	}

	this.confirmarUsuario=function(email,key,callback){
		var ju=this;
		this.dao.encontrarUsuarioCriterio({email:email,key:key,confirmada:false},function(usr){


			console.log('PASA POR CONFIRMAR USUARIO');

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



	



	this.loginUsuario=function(email,pass,callback){
		//var ju=this;
		var passCifrada=cf.encrypt(pass);
	    this.dao.encontrarUsuarioCriterio({email:email,clave:passCifrada,confirmada:true},function(usr){
		    //console.log(usr);
		    if (usr){   	
		    	//usr.confirmada=true;        	
	            callback(usr);
	            //ju.agregarUsuario(new Usuario(usr.email,usr._id));    	
	            }
            else{
	            callback({email:undefined});
	        }
	    });



	}

	this.dao.conectar(function(db){
    	console.log("Conectado a la base de datos");
    });
}

module.exports.Evaluacion=Evaluacion;
