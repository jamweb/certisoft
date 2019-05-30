var str = '{"artist":"prueba espacio","title":"prueba espacio"}';
var str2 = 'una prueba';
var jsonObj = JSON.parse(str);
var autoGuardado;
var procesoSeleccionado;


function limpiar(){
  //$('#formInicio').remove();


}

function mostrarAnalisis(obj){
  
  $('.divTablasEvaluaciones').hide();
  $('.tablasEvaluaciones2').hide();


  $('#tituloPestaña').remove();
  $('#divNombreEvaluacionGuardada').append('<h6 id="tituloPestaña" class="panel-title txt-dark" style="font-weight:bold;">Análisis de los resultados del proceso para los procesos definidos en el Nivel '+obj.nivelesEmpresa+' de madurez</h6>');

  
    
    var cadena;
    var cont=0;
    var calificacion;
    var nombreCalificacion;
    var contadorResultados=0;
    var arrayResultadosProceso=[];
    var porcenta=[];
    
    var porcentajePorProceso=0;

    var resultadoFinalProceso=[];

    var porcentajeNivel=0;

  //alert(obj.procesos[0].resultadosProceso[0].documentacion);

    for (var i = 0; i < obj.procesos.length; i++) {
      contadorResultados=contadorResultados+obj.procesos[i].resultadosProceso.length;;
    }

    /*for (var i = 0; i < obj.procesos.length; i++) {
      
      porcenta.push(100/(obj.procesos[i].resultadosProceso.length));
      
    }*/

    for (var i = 0; i < obj.procesos.length; i++) {
      var puntuaciones={};

      porcenta.push(100/(obj.procesos[i].resultadosProceso.length));
      //console.log(porcenta);
      puntuaciones[0] = (0.3333*porcenta[i]);
      //console.log(puntuaciones[0]);
      puntuaciones[1] = (0.6666*porcenta[i]);
      //console.log(puntuaciones[1]);
      puntuaciones[2] = porcenta[i];
      //console.log(puntuaciones);
      //arrayResultadosProceso[i]=puntuaciones;
     // console.log(arrayResultadosProceso);
     arrayResultadosProceso.push(puntuaciones);
     //console.log(arrayResultadosProceso);
    }
    
    //  console.log(porcenta);
    //console.log(arrayResultadosProceso);
    //console.log(arrayResultadosProceso[0][0]);
   


    // gráficas
    $('.otraSeccion').remove();
    cadena='<div class="row otraSeccion">'

    cadena=cadena+'<div id="total" class="col-lg-12 col-md-12 col-sm-12 col-xs-12"><div style="background-color:#EDF1F5;border-color:#2ecd99;margin-top:2%;" class="panel panel-default"> <div class="panel-wrapper collapse in"> <div class="panel-body sm-data-box-1"> <span class="uppercase-font weight-500 font-14 block text-center txt-dark">Cobertura</span> <div class="cus-sat-stat weight-500 txt-success text-center mt-5"> <span id="coberturaTotal" class="animacionNumeros"></span><span>%</span> </div><div style="margin:0.5%" class="progress"><div class="progress-bar progress-bar-success"></div></div> <ul class="flex-stat mt-5">';
    
    for (var i = 0; i < obj.procesos.length; i++) {
      cadena=cadena+'<li class="half-width"> <span class="block">'+obj.procesos[i].abrevProceso+'</span><span class="animacionNumeros" id="porcentajeSpanP'+i+'" style="color:#2ecd99;font-weight:bold"></span><span style="color:#2ecd99;font-weight:bold">%</span><div style="margin:1%" class="progress" data-datos-porcentajeP="'+resultadoFinalProceso[i]+'"><div class="progress-bar progress-bar-success"></div></div> </li>';
    }
    

    cadena=cadena+'</ul> </div> </div> </div></div>';
    cadena=cadena+'<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"><div style="background-color:#EDF1F5;border-color:#2ecd99;margin-top:0%;" class="panel panel-default "> <div class="panel-wrapper collapse in"> <div class="panel-body pa-0"> <div class="sm-data-box"> <div class="container-fluid"> <div class="row"> <div class="col-xs-6 text-center pl-0 pr-0 data-wrap-left"> <span class="txt-dark block counter"><span class="animacionNumeros">'+obj.procesos.length+'</span></span> <span class="weight-500 uppercase-font block font-13">Procesos</span> </div> <div class="col-xs-6 text-center  pl-0 pr-0 data-wrap-right"> <i class="icon-layers data-right-rep-icon txt-dark-grey"></i> </div> </div> </div> </div> </div> </div> </div></div>';
    cadena=cadena+'<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"><div style="background-color:#EDF1F5;border-color:#2ecd99;margin-top:0%;" class="panel panel-default"> <div class="panel-wrapper collapse in"> <div class="panel-body pa-0"> <div class="sm-data-box"> <div class="container-fluid"> <div class="row"> <div class="col-xs-6 text-center pl-0 pr-0 data-wrap-left"> <span class="txt-dark block counter"><span class="animacionNumeros">'+contadorResultados+'</span></span> <span class="weight-500 uppercase-font block">Resultados</span> </div> <div class="col-xs-6 text-center  pl-0 pr-0 data-wrap-right"> <i class="icon-list data-right-rep-icon txt-dark-grey"></i> </div> </div> </div> </div> </div> </div> </div></div>';
    //cadena=cadena+'<div class="col-lg-8 col-md-6 col-sm-6 col-xs-6"><div style="background-color:#EDF1F5;border-color:#2ecd99;margin-top:0%;" class="panel panel-default"> <div class="panel-wrapper collapse in"> <div class="panel-body pa-0"> <div class="sm-data-box"> <div class="container-fluid"> <div class="row"> <div class="col-xs-6 text-center pl-0 pr-0 data-wrap-left"> <span class="txt-dark block counter"><span class="counter-anim">9</span></span> <span class="weight-500 uppercase-font block">RP</span> </div> <div class="col-xs-6 text-center  pl-0 pr-0 data-wrap-right"> <i class="icon-list data-right-rep-icon txt-dark-grey"></i> </div> </div> </div> </div> </div> </div> </div></div>';
    
    /*cadena=cadena+'<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="pruebaImpresion"> <div class="panel panel-default card-view"> <div class="panel-heading"> <div class="pull-left"> <h6 class="panel-title txt-dark">Calificación de los resultados del proceso</h6> </div> <div class="pull-right"><div class="pull-left form-group mb-0 sm-bootstrap-select mr-15 eleccion"> <select id="elegirProcesos" class="selectpicker" data-style="form-control">';
    cadena=cadena+'<option selected value="todos">Todos</option>';
    for (var i = 0; i < obj.procesos.length; i++) {

      cadena=cadena+'<option value="'+obj.procesos[i].abrevProceso+'">'+obj.procesos[i].abrevProceso+'</option>';
      
    }
    
    
    cadena=cadena+'</select> </div><a href="#" class="pull-left inline-block full-screen mr-15"> <i class="zmdi zmdi-fullscreen"></i> </a> <a href="#" id="imprimir" class="pull-left inline-block mr-15"> <i class="zmdi zmdi-download"></i> </a></div> <div class="clearfix"></div> </div> <div class="panel-wrapper collapse in"> <div class="panel-body row pa-0"> <div class="table-wrap"> <div id= class="table-responsive"> <table id="botonImprimir" class="table table-hover mb-0"> <thead> <tr><th>Proceso</th> <th>Resultado del proceso</th> <th>Calificación</th> <th>Cobertura</th> </tr> </thead> <tbody class="introducirProcesos">';
    */





/*for (var i = 0; i < obj.procesos.length; i++) {

    //cadena=cadena+'<div class="row otraSeccion" > <div id="total" class="col-xs-12 col-sm-12"> <div style="margin-top:2%;" class="panel panel-default card-view bordeTablas"> <div class="panel-heading"> <div class="pull-left"> <h6 class="panel-title" style="color:#268666;font-weight:bold">Calificación de los resultados del proceso</h6> </div> <div class="clearfix"></div> </div> <div class="panel-wrapper collapse in"> <div class="panel-body"> <div class="table table-wrap"> <table id="footable_1" class="table" data-sorting="false">';
    //cadena=cadena+'<thead> <tr> <th style="font-weight:bold">Proceso</th> <th style="font-weight:bold" data-breakpoints="xs">Resultados del proceso</th> <th data-breakpoints="xs" style="font-weight:bold">Calificación</th> <th style="font-weight:bold" data-breakpoints="xs">Cobertura</th> </tr> </thead><tbody class="tablasResultados2">';
    for (var j = 0; j < obj.procesos[i].resultadosProceso.length; j++) {

      cadena=cadena+'<tr class="filaDatos"> <td style="width:60%;;overflow: auto;">'+obj.procesos[i].resultadosProceso[j].descripcion+'</td> <td class="filaDatosRellenar" data-breakpoints="xs"><a href="#" class="comentarios" id="'+(i+1)+(cont+1)+'" data-type="textarea" data-campos="'+obj.procesos[i].resultadosProceso[j].documentacion+'" data-pk="1" data-placeholder="Escribe aquí" data-title="Enter comments">'+obj.procesos[i].resultadosProceso[j].documentacion+'</a></td> <td class="filaDatosRellenar" data-breakpoints="xs"><a href="#" class="comentarios" id="'+(i+1)+(cont+2)+'" data-type="textarea" data-campos="'+obj.procesos[i].resultadosProceso[j].evidenciaDirecta+'" data-pk="1" data-placeholder="Escribe aquí" data-title="Enter comments">'+obj.procesos[i].resultadosProceso[j].evidenciaDirecta+'</a></td> <td class="filaDatosRellenar" data-breakpoints="xs"><a href="#" class="comentarios" id="'+(i+1)+(cont+3)+'" data-type="textarea" data-campos="'+obj.procesos[i].resultadosProceso[j].anotaciones+'" data-pk="1" data-placeholder="Escribe aquí" data-title="Enter comments">'+obj.procesos[i].resultadosProceso[j].anotaciones+'</a></td> </tr>';
    
      //cont=cont+2;
    }

    //cont=0;

    cadena=cadena+'</tbody></table> </div> </div> </div> </div> ';
  }

cadena=cadena+'</div> </div>';*/











          cadena=cadena+'<div class="row otraSeccion" > <div id="total" class="col-xs-12 col-sm-12"> <div style="margin-top:2%;margin-right:1%" class="panel panel-default card-view bordeTablas"> <div class="panel-heading"> <div class="pull-left"> <h6 class="panel-title" style="color:#268666;font-weight:bold">Calificación de los resultados del proceso</h6></div><div class="pull-right"><a href="#" class="pull-left inline-block full-screen"><i class="zmdi zmdi-fullscreen"></i></a></div> <div class="clearfix"></div> </div> <div class="panel-wrapper collapse in"> <div class="panel-body"> <div class="table table-wrap"> <table id="footable_3" class="table" data-sorting="false"><div style="float:left" class="pull-left form-group mb-0 sm-bootstrap-select mr-15 eleccion"><select id="elegirProcesos" class="selectpicker" data-style="form-control">';
          

           cadena=cadena+'<option selected value="todos">Todos</option>';
            for (var i = 0; i < obj.procesos.length; i++) {

              cadena=cadena+'<option value="'+obj.procesos[i].abrevProceso+'">'+obj.procesos[i].abrevProceso+'</option>';
              
            }

          cadena=cadena+'</div><thead> <tr> <th style="font-weight:bold">Proceso</th> <th style="font-weight:bold" data-breakpoints="xs">Resultados del proceso</th> <th data-breakpoints="xs" style="font-weight:bold">Calificación</th> <th style="font-weight:bold" data-breakpoints="xs">Cobertura</th> </tr> </thead><tbody class="introducirProcesos">';

     for (var i = 0; i < obj.procesos.length; i++) {
          porcentajePorProceso=0;

          calificacionN='escalaCalificacionN';
          calificacionP='escalaCalificacionP';
          calificacionL='escalaCalificacionL';
          calificacionF='escalaCalificacionF';
          nombreCalificacion='';
    
        for (var j = 0; j < obj.procesos[i].resultadosProceso.length; j++) {
          calificacionN='escalaCalificacionN';
          calificacionP='escalaCalificacionP';
          calificacionL='escalaCalificacionL';
          calificacionF='escalaCalificacionF';
          nombreCalificacion='';

        
           if(obj.procesos[i].resultadosProceso[j].documentacion=="" && obj.procesos[i].resultadosProceso[j].evidenciaDirecta==""){
            calificacionN='escalaCalificacionNN';
            nombreCalificacion='No implementado';
           }
           else if(obj.procesos[i].resultadosProceso[j].documentacion=="" && obj.procesos[i].resultadosProceso[j].evidenciaDirecta!=""){
            calificacionP='escalaCalificacionPP';
            nombreCalificacion='Parcialmente implementado';
           }
           else if(obj.procesos[i].resultadosProceso[j].documentacion!="" && obj.procesos[i].resultadosProceso[j].evidenciaDirecta==""){
            calificacionL='escalaCalificacionLL';
            nombreCalificacion='Ampliamente implementado'; 
           }
           
           else if(obj.procesos[i].resultadosProceso[j].documentacion!="" && obj.procesos[i].resultadosProceso[j].evidenciaDirecta!=""){
            calificacionF='escalaCalificacionFF';
            nombreCalificacion='Completamente implementado';
           }

          ///////////////
          
    

          //cadena=cadena+'<tr class="listaProcesos"> <td>'+obj.procesos[i].nombreProceso+'</td><td>'+obj.procesos[i].resultadosProceso[j].descripcion+'</td> <td> <div style="float:left" class="'+calificacionF+'"></div><div style="float:left" class="'+calificacionL+'"></div><div style="float:left" class="'+calificacionP+'"></div><div style="float:left" class="'+calificacionN+'"></div></div> </td> <td>'+nombreCalificacion+'</td></tr>';
          

          cadena=cadena+'<tr class="listaProcesos"><td data-breakpoints="xs" style="width:25%;;overflow: auto;">'+obj.procesos[i].nombreProceso+'</td> <td>'+obj.procesos[i].resultadosProceso[j].descripcion+'</td> <td data-breakpoints="xs"><div style="float:left" class="'+calificacionF+'"></div><div style="float:left" class="'+calificacionL+'"></div><div style="float:left" class="'+calificacionP+'"></div><div style="float:left" class="'+calificacionN+'"></div></td> <td data-breakpoints="xs">'+nombreCalificacion+'</td> </tr>';
          //cadena=cadena+'<tr class="listaProcesos"><td>hola</td><td>2</td><td>3</td><td>4</td></tr>';
          


          if(nombreCalificacion=='No implementado'){
            porcentajePorProceso=porcentajePorProceso+0;
          }
          else if(nombreCalificacion=='Parcialmente implementado'){
            porcentajePorProceso=porcentajePorProceso+arrayResultadosProceso[i][0];
          }
          else if(nombreCalificacion=='Ampliamente implementado'){
            porcentajePorProceso=porcentajePorProceso+arrayResultadosProceso[i][1];
          }
          else if(nombreCalificacion=='Completamente implementado'){
            porcentajePorProceso=porcentajePorProceso+arrayResultadosProceso[i][2];
          }
          
        }
        

        resultadoFinalProceso.push(Math.round(porcentajePorProceso * 100) / 100);
    

        
      }

      cadena=cadena+'</tbody></table> </div> </div> </div> </div> ';
      cadena=cadena+'</div> </div>';

      //alert(Math.round(porcentajePorProceso * 100) / 100);

      for (var i = 0; i < resultadoFinalProceso.length; i++) {
        //alert(resultadoFinalProceso[i]);
      }
 
      //cadena=cadena+'</tbody> </table> </div> </div> </div> </div> </div> </div></div>';

    $('#aqui').append(cadena);



    

    // Elegir procesos de la lista
    $('#elegirProcesos').on('change',function(){
      var procesoSeleccionado=document.getElementById("elegirProcesos").value;
      var cadena="";
      
      //alert(procesoSeleccionado);
      //$('footable_3').remove();
      $('.listaProcesos').remove();
      
      //alert('pasa');

      
      for (var i = 0; i < obj.procesos.length; i++) {

        for (var j = 0; j < obj.procesos[i].resultadosProceso.length; j++) {
          //console.log(procesoSeleccionado);
          //console.log(obj.procesos[i].abrevProceso);
          if(procesoSeleccionado==obj.procesos[i].abrevProceso){
            //alert('ppy');
              if(obj.procesos[i].resultadosProceso[j].documentacion=="" && obj.procesos[i].resultadosProceso[j].evidenciaDirecta==""){
              calificacionN='escalaCalificacionNN';
              calificacionP='escalaCalificacionP';
              calificacionL='escalaCalificacionL';
              calificacionF='escalaCalificacionF';
              nombreCalificacion='No implementado';
             }
             else if(obj.procesos[i].resultadosProceso[j].documentacion=="" && obj.procesos[i].resultadosProceso[j].evidenciaDirecta!=""){
              calificacionN='escalaCalificacionN';
              calificacionP='escalaCalificacionPP';
              calificacionL='escalaCalificacionL';
              calificacionF='escalaCalificacionF';
              nombreCalificacion='Parcialmente implementado';
             }
             else if(obj.procesos[i].resultadosProceso[j].documentacion!="" && obj.procesos[i].resultadosProceso[j].evidenciaDirecta==""){
              calificacionN='escalaCalificacionN';
              calificacionP='escalaCalificacionP';
              calificacionL='escalaCalificacionLL';
              calificacionF='escalaCalificacionF';
              nombreCalificacion='Ampliamente implementado'; 
             }
             
             else if(obj.procesos[i].resultadosProceso[j].documentacion!="" && obj.procesos[i].resultadosProceso[j].evidenciaDirecta!=""){
              calificacionN='escalaCalificacionN';
              calificacionP='escalaCalificacionP';
              calificacionL='escalaCalificacionL';
              calificacionF='escalaCalificacionFF';
              nombreCalificacion='Completamente implementado';
             }



              cadena=cadena+'<tr class="listaProcesos"><td data-breakpoints="xs" style="width:25%;;overflow: auto;">'+obj.procesos[i].nombreProceso+'</td> <td>'+obj.procesos[i].resultadosProceso[j].descripcion+'</td> <td data-breakpoints="xs"><div style="float:left" class="'+calificacionF+'"></div><div style="float:left" class="'+calificacionL+'"></div><div style="float:left" class="'+calificacionP+'"></div><div style="float:left" class="'+calificacionN+'"></div></td> <td data-breakpoints="xs">'+nombreCalificacion+'</td> </tr>';
              //cadena=cadena+'<tr class="listaProcesos"><td>hola</td><td>2</td><td>3</td><td>4</td></tr>';
          }
          else if(procesoSeleccionado=="todos"){
            if(obj.procesos[i].resultadosProceso[j].documentacion=="" && obj.procesos[i].resultadosProceso[j].evidenciaDirecta==""){
              calificacionN='escalaCalificacionNN';
              calificacionP='escalaCalificacionP';
              calificacionL='escalaCalificacionL';
              calificacionF='escalaCalificacionF';
              nombreCalificacion='No implementado';
             }
             else if(obj.procesos[i].resultadosProceso[j].documentacion=="" && obj.procesos[i].resultadosProceso[j].evidenciaDirecta!=""){
              calificacionN='escalaCalificacionN';
              calificacionP='escalaCalificacionPP';
              calificacionL='escalaCalificacionL';
              calificacionF='escalaCalificacionF';
              nombreCalificacion='Parcialmente implementado';
             }
             else if(obj.procesos[i].resultadosProceso[j].documentacion!="" && obj.procesos[i].resultadosProceso[j].evidenciaDirecta==""){
              calificacionN='escalaCalificacionN';
              calificacionP='escalaCalificacionP';
              calificacionL='escalaCalificacionLL';
              calificacionF='escalaCalificacionF';
              nombreCalificacion='Ampliamente implementado'; 
             }
             
             else if(obj.procesos[i].resultadosProceso[j].documentacion!="" && obj.procesos[i].resultadosProceso[j].evidenciaDirecta!=""){
              calificacionN='escalaCalificacionN';
              calificacionP='escalaCalificacionP';
              calificacionL='escalaCalificacionL';
              calificacionF='escalaCalificacionFF';
              nombreCalificacion='Completamente implementado';
             }


            cadena=cadena+'<tr class="listaProcesos"><td data-breakpoints="xs" style="width:25%;;overflow: auto;">'+obj.procesos[i].nombreProceso+'</td> <td>'+obj.procesos[i].resultadosProceso[j].descripcion+'</td> <td data-breakpoints="xs"><div style="float:left" class="'+calificacionF+'"></div><div style="float:left" class="'+calificacionL+'"></div><div style="float:left" class="'+calificacionP+'"></div><div style="float:left" class="'+calificacionN+'"></div></td> <td data-breakpoints="xs">'+nombreCalificacion+'</td> </tr>';
            //cadena=cadena+'<tr class="listaProcesos"><td>hola</td><td>2</td><td>3</td><td>4</td></tr>';
          }
          
        }
      }
      //alert(cadena);
      $('.introducirProcesos').append(cadena);
      cadena="";

      /*FooTable Init, para efecto responsive en las tablas. Aqui es para que funcione el responsive al elegir en el filtrado*/
$(function () {
  "use strict";
  
  /*Init FooTable*/
  $('#footable_3').footable();
  
  /*Editing FooTable*/
  
  var $modal = $('#editor-modal'),
  $editor = $('#editor'),
  $editorTitle = $('#editor-title'),
  ft = FooTable.init('#footable_2', {
    editing: {
      enabled: true,
      addRow: function(){
        $modal.removeData('row');
        $editor[0].reset();
        $editorTitle.text('Add a new row');
        $modal.modal('show');
      },
      editRow: function(row){
        var values = row.val();
        $editor.find('#rp').val(values.rp);
        $editor.find('#firstName').val(values.firstName);
        $editor.find('#lastName').val(values.lastName);
        $editor.find('#jobTitle').val(values.jobTitle);
        $editor.find('#startedOn').val(values.startedOn);
        $editor.find('#dob').val(values.dob);

        $modal.data('row', row);
        $editorTitle.text('Edit row #' + values.id);
        $modal.modal('show');
      },
      deleteRow: function(row){
        if (confirm('Are you sure you want to delete the row?')){
          row.delete();
        }
      }
    }
  }),
  uid = 10;

  $editor.on('submit', function(e){
    if (this.checkValidity && !this.checkValidity()) return;
    e.preventDefault();
    var row = $modal.data('row'),
      values = {
        id: $editor.find('#id').val(),
        firstName: $editor.find('#firstName').val(),
        lastName: $editor.find('#lastName').val(),
        jobTitle: $editor.find('#jobTitle').val(),
        startedOn: moment($editor.find('#startedOn').val(), 'YYYY-MM-DD'),
        dob: moment($editor.find('#dob').val(), 'YYYY-MM-DD')
      };

    if (row instanceof FooTable.Row){
      row.val(values);
    } else {
      values.id = uid++;
      ft.rows.add(values);
    }
    $modal.modal('hide');
  });
});

      //.eleccion






     });


  /*$('#botonImprimir').DataTable( {
      dom: 'Bfrtip',
      buttons: [
        'print'
      ]
    } )*/



    for (var i = 0; i < resultadoFinalProceso.length; i++) {
      porcentajeNivel=porcentajeNivel+resultadoFinalProceso[i];
    }

    porcentajeNivel=porcentajeNivel/resultadoFinalProceso.length;
    //alert(Math.round(porcentajeNivel * 100) / 100);
    $("#coberturaTotal").append((porcentajeNivel * 100) / 100);

    for (var i = 0; i < obj.procesos.length; i++) {
      $("#porcentajeSpanP"+i).append(resultadoFinalProceso[i]);
    }
    

   



$('.animacionNumeros').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 1000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.round(now * 100) / 100);
        }
    });
});



/*FooTable Init, para efecto responsive en las tablas*/
$(function () {
  "use strict";
  
  /*Init FooTable*/
  $('#footable_3').footable();
  
  /*Editing FooTable*/
  
  var $modal = $('#editor-modal'),
  $editor = $('#editor'),
  $editorTitle = $('#editor-title'),
  ft = FooTable.init('#footable_2', {
    editing: {
      enabled: true,
      addRow: function(){
        $modal.removeData('row');
        $editor[0].reset();
        $editorTitle.text('Add a new row');
        $modal.modal('show');
      },
      editRow: function(row){
        var values = row.val();
        $editor.find('#rp').val(values.rp);
        $editor.find('#firstName').val(values.firstName);
        $editor.find('#lastName').val(values.lastName);
        $editor.find('#jobTitle').val(values.jobTitle);
        $editor.find('#startedOn').val(values.startedOn);
        $editor.find('#dob').val(values.dob);

        $modal.data('row', row);
        $editorTitle.text('Edit row #' + values.id);
        $modal.modal('show');
      },
      deleteRow: function(row){
        if (confirm('Are you sure you want to delete the row?')){
          row.delete();
        }
      }
    }
  }),
  uid = 10;

  $editor.on('submit', function(e){
    if (this.checkValidity && !this.checkValidity()) return;
    e.preventDefault();
    var row = $modal.data('row'),
      values = {
        id: $editor.find('#id').val(),
        firstName: $editor.find('#firstName').val(),
        lastName: $editor.find('#lastName').val(),
        jobTitle: $editor.find('#jobTitle').val(),
        startedOn: moment($editor.find('#startedOn').val(), 'YYYY-MM-DD'),
        dob: moment($editor.find('#dob').val(), 'YYYY-MM-DD')
      };

    if (row instanceof FooTable.Row){
      row.val(values);
    } else {
      values.id = uid++;
      ft.rows.add(values);
    }
    $modal.modal('hide');
  });
});




$(function () {
  
  var prog = $(".progress-bar");
  //var porcentaje = $(this).attr('data-datos-porcentajeP');
  
  //alert(porcentaje);

  if(((porcentajeNivel * 100) / 100)>=0 && ((porcentajeNivel * 100) / 100)<14.99){

      //prog.eq(i).removeClass('progress-bar-success');
      prog.eq(0).addClass('n');
     
    }
    else if(((porcentajeNivel * 100) / 100)>=15 && ((porcentajeNivel * 100) / 100)<49.99){
      //prog.eq(i).removeClass('progress-bar-success');
      prog.eq(0).addClass('p');
    }
    else if(((porcentajeNivel * 100) / 100)>=50 && ((porcentajeNivel * 100) / 100)<84.99){
      //prog.eq(i).removeClass('progress-bar-success');
      prog.eq(0).addClass('l');
    }
    else if(((porcentajeNivel * 100) / 100)>=85){
      //prog.eq(i).removeClass('progress-bar-success');
      prog.eq(0).addClass('progress-bar-success');
    }

  prog.eq(0).animate({width:((porcentajeNivel * 100) / 100)+"%"}, 1500)

  for (var i = 1; i < (obj.procesos.length+1); i++) {
    if(resultadoFinalProceso[i-1]>=0 && resultadoFinalProceso[i-1]<14.99){

      //prog.eq(i).removeClass('progress-bar-success');
      prog.eq(i).addClass('n');
     
    }
    else if(resultadoFinalProceso[i-1]>=15 && resultadoFinalProceso[i-1]<49.99){
      //prog.eq(i).removeClass('progress-bar-success');
      prog.eq(i).addClass('p');
    }
    else if(resultadoFinalProceso[i-1]>=50 && resultadoFinalProceso[i-1]<84.99){
      //prog.eq(i).removeClass('progress-bar-success');
      prog.eq(i).addClass('l');
    }
    else if(resultadoFinalProceso[i-1]>=85){
      //prog.eq(i).removeClass('progress-bar-success');
      prog.eq(i).addClass('progress-bar-success');
    } 
    prog.eq(i).animate({width:resultadoFinalProceso[i-1]+"%"}, 1500)
  }


//prog.eq(0).animate({width:"70.13%"}, 1500)

//prog.eq(1).animate({width:"40%"}, 1500)

//prog.eq(2).animate({width:"90%"}, 1500)

});







$(function () {

    var specialElementHandlers = {
        '#editor': function (element,renderer) {
            return true;
        }
    };

$('#imprimir').on('click',function(){
     /*var doc = new jsPDF();
        doc.fromHTML($('#total').html(), 15, 15, {
            'width': 170,'elementHandlers': specialElementHandlers
        });
        doc.save('sample-file.pdf');*/
        $('#total').addClass('col-lg-12');

        const filename  = obj.nombreEvaluacion+'.pdf';

    html2canvas(document.querySelector('#total')).then(canvas => {
      let pdf = new jsPDF('p', 'mm', 'a4');
      //var alturaTotal=canvas.height-24;



      var pageHeight = 295;  
      var imgWidth = (canvas.width * 33) / 212 ; 
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      var position = 0;

      


      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, 200, 0);
      heightLeft -= pageHeight;
      //pdf.text('hola');




      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight; 
      }

      //pdf.text('hola');
      //pdf.output('dataurlnewwindow');
      pdf.save(filename);

      $('#total').removeClass('col-lg-12');

      console.log(canvas.height);
      console.log(alturaTotal);
    });
    
    
    });

});









}

/*function getEvaluacion(eval){
    obj=eval;
    console.log('AQUI O QUE');
    console.log(obj);
  }  */



function comprobarUsuario(){
  if ($.cookie("usr")){
    //alert('PASA POR AQUI');
    var usr=JSON.parse($.cookie("usr"));
    mostrarNavUser(usr.nombre,usr.email,usr.experiencia);

    rest.obtenerEvaluaciones(usr.email);


    //mostrarTablaEvaluaciones(usr);

    //rest.comprobarUsuario(usr._id, usr.email);
  }
  else{
      location.replace('./login.html');
  }
}

function ejemplo(){
  alert('hola');
}

function mostrarNavUser(nombre,email,experiencia){
  //alert(nombre);
  var cadena='<ul class="nav navbar-right top-nav pull-right" id="menuPrincipal"><li class="dropdown auth-drp">';
  cadena = cadena + '<a id="nombreSesion" href="#" class="dropdown-toggle pr-0" data-toggle="dropdown"><span class="user-online-status"></span> Hola, '+nombre+'</a>';
  cadena = cadena + '<ul class="dropdown-menu user-auth-dropdown" data-dropdown-in="flipInX" data-dropdown-out="flipOutX"><li>';
  cadena = cadena + '<a href="#" id="btnPerfil" data-datos-nombre="'+nombre+'" data-datos-email="'+email+'" data-datos-experiencia="'+experiencia+'"><i class="zmdi zmdi-account"></i><span>Perfil</span></a></li><li><a href="#" onclick="dashboard()"><i class="zmdi zmdi-card"></i><span>Mis evaluaciones</span></a></li>';
  cadena = cadena + '<li class="divider"></li><li><a href="#" id="cerrarSesion"><i class="zmdi zmdi-power"></i><span>Cerrar sesión</span></a></li></ul></li></ul>';

  $('#menu').append(cadena);
  //$('#dashboard').append('<p>HOLA</p>');


  $('#btnPerfil').on('click',function(){
    $('#idPerfil').remove();
    $('#panel').remove();
    $('#nuevoCasoForm').remove();
    $('#tablaEvaluacion').remove();



    var nombre = $(this).attr('data-datos-nombre');
    var email = $(this).attr('data-datos-email');
    //var telefono = $(this).attr('data-datos-telefono');
    var experiencia = $(this).attr('data-datos-experiencia');



    var cadena='<div class="row" id="idPerfil"><div class="col-lg-12 col-xs-12 col-sm-12 col-md-12"> <div class="panel panel-default card-view pa-0"> <div class="panel-wrapper collapse in"> <div  class="panel-body pb-0"> <div  class="tab-struct custom-tab-1"> <ul role="tablist" class="nav nav-tabs nav-tabs-responsive" id="myTabs_8"> <li role="presentation" class="prev"><a  data-toggle="tab" id="settings_tab_8" role="tab" href="#settings_8" aria-expanded="false"><span>Modificar datos</span></a></li><li role="presentation" class="active"><a  data-toggle="tab" id="earning_tab_8" role="tab" href="#earnings_8" aria-expanded="false"><span>Modificar contraseña</span></a></li><li id="coloresTab" class="next" role="presentation"><a  data-toggle="tab" id="profile_tab_8" role="tab" href="#profile_8" aria-expanded="false"><span>Colores</span></a></li></ul> <div class="tab-content" id="myTabContent_8"> <div  id="profile_8" class="tab-pane fade in" role="tabpanel"> <div class="col-md-12"> <div class="pt-0">   <div class="row"> <div class="col-sm-12"> <div class="form-group mb-0"> <label class="control-label mb-10 text-left">Fondo del panel lateral</label> <div id="cp3" class="colorpicker-rgb input-group colorpicker-component"> <input id="fondoPanel" type="text" value="#2A3E4C" class="form-control" /> <span class="input-group-addon"><i></i></span> </div> </div> </div><div class="col-sm-12" style="margin-top:2%"> <div class="form-group mb-0"> <label class="control-label mb-10 text-left">Texto del panel lateral</label> <div id="cp3" class="colorpicker-rgb2 input-group colorpicker-component"> <input id="textoPanel" type="text" value="#2A3E4C" class="form-control" /> <span class="input-group-addon"><i></i></span> </div> </div> </div><div class="col-sm-12" style="margin-top:2%"> <div class="form-group mb-0"> <label class="control-label mb-10 text-left">Bordes</label> <div id="cp3" class="colorpicker-rgb3 input-group colorpicker-component"> <input id="bordes" type="text" value="#2A3E4C" class="form-control" /> <span class="input-group-addon"><i></i></span> </div> </div> <div class="form-actions mt-10"> <button  style="margin-top:1%" id="actualizarColoresPerfilBtn" class="btn btn-success mr-10 mb-30">Actualizar</button> </div></div></div>       </div> </div> </div><div  id="earnings_8" class="tab-pane fade in active" role="tabpanel">';
    cadena=cadena+'<!-- Row --> <div class="row"> <div class="col-lg-6"> <div class=""> <div class="panel-wrapper collapse in"> <div class="panel-body pa-0"> <div class="col-sm-12 col-xs-12"><div class="form-wrap"> <form action="#" id="formPassword"> <div class="form-body overflow-hide"> <div class="form-group" id="passwordPerfilId"> <label class="control-label mb-10">Contraseña antigua</label> <div class="input-group"> <div class="input-group-addon"><i class="icon-lock"></i></div> <input type="password" name="password" id="passwordPerf" class="form-control" placeholder="Introduce la contraseña antigua" value=""> </div> </div> <div class="form-group" id="newPasswordPerfilId"> <label class="control-label mb-10">Nueva contraseña</label> <div class="input-group"> <div class="input-group-addon"><i class="icon-lock"></i></div> <input type="password" name="newPassword" id="newPasswordPerf" class="form-control" placeholder="Introduce la nueva contraseña" value=""> </div> </div>   <div class="form-group" id="reNewPasswordPerfilId"> <label class="control-label mb-10">Repetición de nueva contraseña</label> <div class="input-group"> <div class="input-group-addon"><i class="icon-lock"></i></div> <input type="password" name="reNewPassword" id="reNewPasswordPerf" class="form-control" placeholder="Introduce de nuevo la contraseña nueva" value=""> </div> </div> </div> <div class="form-actions mt-10"> <button id="actualizarPasswordPerfilBtn" class="btn btn-success mr-10 mb-30">Actualizar</button> </div> </form> </div> </div> </div> </div> </div> </div> </div></div> ';
    cadena=cadena+'<div id="settings_8" class="tab-pane fade" role="tabpanel"> <!-- Row --> <div class="row"> <div class="col-lg-6"> <div class=""> <div class="panel-wrapper collapse in"> <div class="panel-body pa-0"> <div class="col-sm-12 col-xs-12"><div class="form-wrap"> <form action="#" id="formPerfil"> <div class="form-body overflow-hide"> <div class="form-group" id="nombrePerfilId"> <label class="control-label mb-10">Nombre</label> <div class="input-group"> <div class="input-group-addon"><i class="icon-user"></i></div> <input name="nombrePerfil" id="nombrePerf" type="text" class="form-control"  placeholder="'+nombre+'"> </div> </div> <div class="form-group" id="emailPerfilId"> <label class="control-label mb-10">Correo electrónico</label> <div class="input-group"> <div class="input-group-addon"><i class="icon-envelope-open"></i></div> <input type="email" name="email" disabled id="emailPerf" class="form-control" id="exampleInputEmail_01" placeholder="'+email+'"> </div> </div>   <div class="form-group"> <label class="control-label mb-10">Años de experiencia en certificaciones</label> <select id="experienciaPerf" class="form-control" data-placeholder="Elige una opción" tabindex="1"> <option id="expSelected1" value="Category 1">1</option> <option id="expSelected2" value="Category 2">2</option> <option id="expSelected3" value="Category 3">3 o más</option>  </select> </div> </div> <div class="form-actions mt-10"> <button id="actualizarPerfilBtn" data-datos-nombre="'+nombre+'" data-datos-email="'+email+'" class="btn btn-success mr-10 mb-30">Actualizar</button> </div> </form> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div></div></div>';


    //<div class="form-group" id="passwordPerfilId"> <label class="control-label mb-10" for="exampleInputpwd_01">Contraseña</label> <div class="input-group"> <div class="input-group-addon"><i class="icon-lock"></i></div> <input type="password" name="password" id="passwordPerf" class="form-control" id="exampleInputpwd_01" placeholder="Introduce contraseña" value=""> </div> </div>

    $('#dashboard').append(cadena);


    
    /* Bootstrap Colorpicker Init*/
  $('.colorpicker').colorpicker();

  $('.colorpicker-rgb').colorpicker({
    color: '#2A3E4C',
    format: 'hex'
  });

  $('.colorpicker-rgb2').colorpicker({
    color: '#FFFFFF',
    format: 'hex'
  });
  $('.colorpicker-rgb3').colorpicker({
    color: '#1B6B4D',
    format: 'hex'
  });

  $('.colorpicker-inline').colorpicker({
    color: '#ffaa00',
    container: true,
    inline: true
  });
  
  /* Datetimepicker Init*/
  /*$('#datetimepicker1').datetimepicker({
      useCurrent: false,
      icons: {
                    time: "fa fa-clock-o",
                    date: "fa fa-calendar",
                    up: "fa fa-arrow-up",
                    down: "fa fa-arrow-down"
                },
    }).on('dp.show', function() {
    if($(this).data("DateTimePicker").date() === null)
      $(this).data("DateTimePicker").date(moment());
  });

  $('#datetimepicker2').datetimepicker({
      format: 'LT',
      useCurrent: false,
      icons: {
                    time: "fa fa-clock-o",
                    date: "fa fa-calendar",
                    up: "fa fa-arrow-up",
                    down: "fa fa-arrow-down"
                },
    }).data("DateTimePicker").date(moment());;
   
  $('#datetimepicker3').datetimepicker({
      format: 'DD-MM-YYYY',
      inline:true,
      sideBySide: true,
      icons: {
                    time: "fa fa-clock-o",
                    date: "fa fa-calendar",
                    up: "fa fa-arrow-up",
                    down: "fa fa-arrow-down"
                },
  }); 

  $('#datetimepicker4').datetimepicker({
      inline:true,
      sideBySide: true,
      useCurrent: false,
      icons: {
                    time: "fa fa-clock-o",
                    date: "fa fa-calendar",
                    up: "fa fa-arrow-up",
                    down: "fa fa-arrow-down"
                },
  }).data("DateTimePicker").date(moment());*/
  
  /* Daterange picker Init*/
 /* $('.input-daterange-datepicker').daterangepicker({
    buttonClasses: ['btn', 'btn-sm'],
      applyClass: 'btn-info',
      cancelClass: 'btn-default'
  });
  $('.input-daterange-timepicker').daterangepicker({
    timePicker: true,
    format: 'MM/DD/YYYY h:mm A',
    timePickerIncrement: 30,
    timePicker12Hour: true,
    timePickerSeconds: false,
    buttonClasses: ['btn', 'btn-sm'],
    applyClass: 'btn-info',
    cancelClass: 'btn-default'
  });
  $('.input-limit-datepicker').daterangepicker({
    format: 'MM/DD/YYYY',
    minDate: '06/01/2015',
    maxDate: '06/30/2015',
    buttonClasses: ['btn', 'btn-sm'],
    applyClass: 'btn-info',
    cancelClass: 'btn-default',
    dateLimit: {
      days: 6
    }
  });*/





      $('#formPerfil').bootstrapValidator({
      message: 'El valor es incorrecto',
      
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            //valid: 'glyphicon glyphicon-ok',
            //invalid: 'glyphicon glyphicon-remove',
            //validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
          nombrePerfil: {
                validators: {
                    
                    stringLength: {
                    max: 40,
                    min: 3
                    },
                }
            },
            email: {
                validators: {
                    
                    emailAddress: {
                        message: 'La dirección de correo no es correcta'
                    }
                }
            },
            password: {
              validators: {
                identical: {
                        field: 'password',
                        message: 'Las contraseñas no coinciden.'
                    },
                stringLength: {
                    min: 6
                },
                notEmpty: {
                    message: "La contraseña debe tener más de 6 caracteres"
                },
              }
          }
              }
          
        
           
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#formPerfil').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });



        $('#formPassword').bootstrapValidator({
      message: 'El valor es incorrecto',
      
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            //valid: 'glyphicon glyphicon-ok',
            //invalid: 'glyphicon glyphicon-remove',
            //validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            password: {
              validators: {
                
                stringLength: {
                    min: 6
                },
                notEmpty: {
                    message: "La contraseña debe tener más de 6 caracteres"
                },
              }
          },
            newPassword: {
              validators: {
                identical: {
                        field: 'reNewPassword',
                        message: 'Las contraseñas no coinciden.'
                    },
                stringLength: {
                    min: 6
                },
                notEmpty: {
                    message: "La contraseña debe tener más de 6 caracteres"
                },
              }
          },
          reNewPassword: {
              validators: {
                identical: {
                        field: 'newPassword',
                        message: 'Las contraseñas no coinciden.'
                    },
                stringLength: {
                    min: 6
                },
                notEmpty: {
                    message: "La contraseña debe tener más de 6 caracteres"
                },
              }
          }




              }
          
        
           
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#formPassword').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });



    if(experiencia=="1"){
      $("select #expSelected1").attr("selected","selected");
    }
    if(experiencia=="2"){
      $("select #expSelected2").attr("selected","selected");
    }
    else if(experiencia=="3 o más"){
      //alert('es 3');
      $("select #expSelected3").attr("selected","selected");
    }
    //alert(experiencia);


    


    $('#actualizarColoresPerfilBtn').on('click',function(){
        
        
        var fondoPanel=$("#fondoPanel").val();
        var textoPanel=$("#textoPanel").val();
        var bordes=$("#bordes").val();

        alert(fondoPanel + ' ' + textoPanel+' ' + bordes);
        
      });


    

      $('#actualizarPasswordPerfilBtn').on('click',function(){
        //alert('pasa');
        var usr=JSON.parse($.cookie("usr"));

        var password=$("#passwordPerf").val();
        var newPassword=$("#newPasswordPerf").val();
        
        var email=usr.email;
        //alert(password+email);

        if ($("#passwordPerfilId").hasClass("has-success") && $("#newPasswordPerfilId").hasClass("has-success") && $("#reNewPasswordPerfilId").hasClass("has-success") ){
            rest.actualizarPasswordPerfil(email,password,newPassword);
        }

        
      });






    $('#actualizarPerfilBtn').on('click',function(){
      //$('#modalCambiarEstado').remove();
      var usr=JSON.parse($.cookie("usr"));

      var nombre=$("#nombrePerf").val();
      var emailViejo=usr.email;
      var email=$("#emailPerf").val();
      
      //alert(emailViejo+email);
     
      if(nombre!="" && email!=""){
          if ($("#nombrePerfilId").hasClass("has-success") && $("#emailPerfilId").hasClass("has-success")){
          //var nombre=$("#nombrePerf").val();
          //var email=$("#emailPerf").val();
          //var password=$("#passwordPerf").val();
          var experiencia=$("#experienciaPerf option:selected").text();


          var cadena='<div id="modalCambiarDatos" data-keyboard="false" data-backdrop="static" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"><h5 class="modal-title" id="myModalLabel">Modificación de datos</h5></div> <div class="modal-body" text-align: justify> <h5 class="mb-15">¿Estás seguro/a?</h5> <p style="text-align:justify;">Te informamos que podrás modificar tus datos las veces que lo veas oportuno.</p> </div> <div class="modal-footer"> <button type="button" class="btn btn-default" data-dismiss="modal">No</button><button type="button" class="btn btn-success data-dismiss="modal" id="cambiarDatos">Sí, modificar</button></div> </div></div></div>';
          $("body").append(cadena);
          $('#modalCambiarDatos').modal();

          $('#cambiarDatos').on('click', function(){
            //alert('hola');

            rest.actualizarPerfilUsuario(nombre,emailViejo,email,experiencia);
            /*location.reload();*/
            //location.replace('./evaluacion.html');
            $('#menuPrincipal').remove();
            mostrarNavUser(nombre,email,experiencia);
            $('#modalCambiarDatos').modal('hide');

            $.toast({
                heading: 'Datos guardados',
                text: 'Los cambios se han guardado correctamente.',
                position: 'top-right',
                stack: false,
                icon: 'success'
            })
            
          });

          
        } 
      }
      else if(email=="" && nombre!=""){
        email=$(this).attr('data-datos-email');

        if ($("#nombrePerfilId").hasClass("has-success")){
          var nombre=$("#nombrePerf").val();
          //var email=$("#emailPerf").val();
          //var password=$("#passwordPerf").val();
          var experiencia=$("#experienciaPerf option:selected").text();


          var cadena='<div id="modalCambiarDatos" data-keyboard="false" data-backdrop="static" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"><h5 class="modal-title" id="myModalLabel">Modificación de datos</h5></div> <div class="modal-body" text-align: justify> <h5 class="mb-15">¿Estás seguro/a?</h5> <p style="text-align:justify;">Te informamos que podrás modificar tus datos las veces que lo veas oportuno.</p> </div> <div class="modal-footer"> <button type="button" class="btn btn-default" data-dismiss="modal">No</button><button type="button" class="btn btn-success data-dismiss="modal" id="cambiarDatos">Sí, modificar</button></div> </div></div></div>';
          $("body").append(cadena);
          $('#modalCambiarDatos').modal();

          $('#cambiarDatos').on('click', function(){
            //alert('hola');

            rest.actualizarPerfilUsuario(nombre,emailViejo,email,experiencia);
            /*location.reload();*/
            //location.replace('./evaluacion.html');
            $('#menuPrincipal').remove();
            mostrarNavUser(nombre,email,experiencia);
            $('#modalCambiarDatos').modal('hide');


            $.toast({
                heading: 'Datos guardados',
                text: 'Los cambios se han guardado correctamente.',
                position: 'top-right',
                stack: false,
                icon: 'success'
            })
          });
          }
      }
      else if(nombre=="" && email!=""){
          nombre=$(this).attr('data-datos-nombre');
          //alert(nombre);

        if ($("#emailPerfilId").hasClass("has-success")){
          //var nombre=$("#nombrePerf").val();
          //var email=$("#emailPerf").val();
          //var password=$("#passwordPerf").val();
          var experiencia=$("#experienciaPerf option:selected").text();


          var cadena='<div id="modalCambiarDatos" data-keyboard="false" data-backdrop="static" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"><h5 class="modal-title" id="myModalLabel">Modificación de datos</h5></div> <div class="modal-body" text-align: justify> <h5 class="mb-15">¿Estás seguro/a?</h5> <p style="text-align:justify;">Te informamos que podrás modificar tus datos las veces que lo veas oportuno.</p> </div> <div class="modal-footer"> <button type="button" class="btn btn-default" data-dismiss="modal">No</button><button type="button" class="btn btn-success data-dismiss="modal" id="cambiarDatos">Sí, modificar</button></div> </div></div></div>';
          $("body").append(cadena);
          $('#modalCambiarDatos').modal();

          $('#cambiarDatos').on('click', function(){
            //alert('hola');

            rest.actualizarPerfilUsuario(nombre,emailViejo,email,experiencia);
            /*location.reload();*/
            //location.replace('./evaluacion.html');
            $('#menuPrincipal').remove();
            mostrarNavUser(nombre,email,experiencia);
            $('#modalCambiarDatos').modal('hide');


            $.toast({
                heading: 'Datos guardados',
                text: 'Los cambios se han guardado correctamente.',
                position: 'top-right',
                stack: false,
                icon: 'success'
            })
          });
          }
      }
      else if(nombre=="" && email==""){
          nombre=$(this).attr('data-datos-nombre');
          email=$(this).attr('data-datos-email');

          var experiencia=$("#experienciaPerf option:selected").text();
          alert('ESTOY AQUI');

          var cadena='<div id="modalCambiarDatos" data-keyboard="false" data-backdrop="static" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"><h5 class="modal-title" id="myModalLabel">Modificación de datos</h5></div> <div class="modal-body" text-align: justify> <h5 class="mb-15">¿Estás seguro/a?</h5> <p style="text-align:justify;">Te informamos que podrás modificar tus datos las veces que lo veas oportuno.</p> </div> <div class="modal-footer"> <button type="button" class="btn btn-default" data-dismiss="modal">No</button><button type="button" class="btn btn-success data-dismiss="modal" id="cambiarDatos">Sí, modificar</button></div> </div></div></div>';
          $("body").append(cadena);
          $('#modalCambiarDatos').modal();

          $('#cambiarDatos').on('click', function(){
            //alert('hola');

            rest.actualizarPerfilUsuario(nombre,emailViejo,email,experiencia);
            /*location.reload();*/
            //location.replace('./evaluacion.html');
            $('#menuPrincipal').remove();
            mostrarNavUser(nombre,email,experiencia);
            $('#modalCambiarDatos').modal('hide');


            $.toast({
                heading: 'Datos guardados',
                text: 'Los cambios se han guardado correctamente.',
                position: 'top-right',
                stack: false,
                icon: 'success'
            })
          });
      }


   });
});






      


      
      

  




    


    


      

      










    

  $('#cerrarSesion').on('click',function(){
  //alert('CIERRO SESION');
  if ($.cookie("usr")){
      $.removeCookie("usr");
      location.replace('./login.html');
      //mostrarLogoInicio();
    }
    
});
























}

function mostrarTablaEvaluaciones(data){
  $('#panel').remove();

  


  /*var cadena='<div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="panel"><div class="panel panel-default card-view"><div class="panel-heading"><div class="pull-left"><h6 class="panel-title txt-dark">Evaluaciones</h6></div>';
  cadena=cadena+'<div class="pull-right"><a href="#" class="pull-left inline-block full-screen"><i class="zmdi zmdi-fullscreen"></i></a></div><div class="clearfix"></div></div>';
  cadena=cadena+'<div class="panel-wrapper collapse in"><div class="panel-body row pa-0"><div class="table-wrap">';
  cadena=cadena+'<div class="table-responsive"><table class="table display product-overview border-none" id="support_table"><thead><tr><th>Nombre</th><th>Empresa</th><th>Nivel de madurez</th><th>Última modificación</th><th>Estado</th><th>Acciones</th></tr></thead><tbody>';
  
  //console.log(data);

  if(data.length>0){
    for (var i = 0; i < data.length; i++) {
      
    
      
      cadena=cadena+"<tr><td><a id='"+i+"' class='datosEval' data-datos-datos='"+JSON.stringify(data[i])+"' style='color:#2ECD99;font-weight:bold;' href='#''>"+data[i].nombreEvaluacion+"</a></td><td>"+data[i].nombreEmpresa+"</td><td>Nivel "+data[i].nivelesEmpresa+"</td><td>"+data[i].fechaEvaluacion+"</td><td><span class='label label-warning'>Pendiente</span></td><td><a href='javascript:void(0)' class='pr-10' data-toggle='tooltip' title='Finalizar' ><i class='zmdi zmdi-check'></i></a> <a href='javascript:void(0)' class='text-inverse pr-10' title='Exportar a PDF' data-toggle='tooltip'><i class='zmdi zmdi-collection-pdf'></i></a> <a href='#' class='text-inverse pr-10 btneliminarEvaluacion' data-datos-nombreEvaluacion='"+data[i].nombreEvaluacion+"' data-datos-idEvaluacion='"+data[i]._id+"' title='Eliminar'><i class='zmdi zmdi-delete'></i></a></td></tr>";
      
    }
  
          
  }

 
  cadena=cadena+'</tbody></table></div></div></div></div></div></div></div>';

  $('#dashboard').append(cadena);*/




var cadena="";
var estado="";
var iconoEstado="";
var tooltipEstado="";



//<div class="row" id="acercaDe"> <div class="col-sm-12"> <div class="panel panel-default card-view"> <div class="panel-heading"> <div class="pull-left"> <h6 style="font-weight:bold" class="panel-title txt-dark">


cadena=cadena+'<div class="row" id="panel" > <div class="col-xs-12 col-sm-12"> <div style="margin-top:2%;margin-right:1%" class="panel panel-default card-view bordeTablas"> <div class="panel-heading"> <div class="pull-left"> <h6 class="panel-title" style="color:#268666;font-weight:bold">Evaluaciones</h6></div><div class="pull-right"><a href="#" class="pull-left inline-block full-screen"><i class="zmdi zmdi-fullscreen"></i></a></div> <div class="clearfix"></div> </div> <div class="panel-wrapper collapse in"> <div class="panel-body"> <div class="table table-wrap"> <table id="footable_5" class="table" data-sorting="false">';
          

          

          cadena=cadena+'<thead> <tr> <th style="font-weight:bold">Nombre</th> <th style="font-weight:bold" data-breakpoints="xs">Empresa</th> <th data-breakpoints="xs" style="font-weight:bold">Nivel de madurez</th> <th style="font-weight:bold" data-breakpoints="xs">Última modificación</th><th style="font-weight:bold" data-breakpoints="xs">Estado</th><th style="font-weight:bold" data-breakpoints="xs">Acciones</th> </tr> </thead><tbody class="introducirEvaluaciones">';

     
          if(data.length>0){
            for (var i = 0; i < data.length; i++) {
              if(data[i].estado=="pendiente"){
                estado="<span class='label label-warning'>Pendiente</span>";
                iconoEstado="<i class='zmdi zmdi-check'></i>";
                tooltipEstado="Fijar como completada";
              }
              else if(data[i].estado=="completada"){
                estado="<span class='label label-success'>Completada</span>";
                iconoEstado="<i class='zmdi zmdi-mail-reply-all'></i>";
                tooltipEstado="Fijar como pendiente";
              }

              cadena=cadena+"<tr><td data-breakpoints='xs' style='width:25%;overflow: auto;'><a id='"+i+"' class='datosEval' data-datos-datos='"+JSON.stringify(data[i])+"' style='color:#2ECD99;font-weight:bold;' href='#''>"+data[i].nombreEvaluacion+"</a></td><td>"+data[i].nombreEmpresa+"</td><td>Nivel "+data[i].nivelesEmpresa+"</td> <td data-breakpoints='xs'>"+data[i].fechaEvaluacion+"</td> <td>"+estado+"</td><td><a href='#' class='pr-10 btnCompletarEvaluacion' data-datos-estado='"+data[i].estado+"' data-datos-nombreEvaluacion='"+data[i].nombreEvaluacion+"' data-toggle='tooltip' title='"+tooltipEstado+"'>"+iconoEstado+"</a> <a href='javascript:void(0)' class='text-inverse pr-10' title='Exportar a PDF' data-toggle='tooltip'><i class='zmdi zmdi-collection-pdf'></i></a> <a href='#' class='text-inverse pr-10 btneliminarEvaluacion' data-datos-estado='"+data[i]._estado+"' data-datos-nombreEvaluacion='"+data[i].nombreEvaluacion+"' data-datos-idEvaluacion='"+data[i]._id+"' title='Eliminar'><i class='zmdi zmdi-delete'></i></a></td> </tr>";
              estado="";
            }
          }
       
          
          //cadena=cadena+'<tr class="listaEvaluaciones"><td data-breakpoints="xs" style="width:25%;;overflow: auto;"><a id="'+i+'" class="datosEval" data-datos-datos="'+JSON.stringify(data[i])+'" style="color:#2ECD99;font-weight:bold;" href="#"">'+data[i].nombreEvaluacion+'</a></td></td> <td>'+data[i].nombreEmpresa+'</td> <td data-breakpoints="xs"><div style="float:left" class="'+calificacionF+'"></div><div style="float:left" class="'+calificacionL+'"></div><div style="float:left" class="'+calificacionP+'"></div><div style="float:left" class="'+calificacionN+'"></div></td> <td data-breakpoints="xs">'+nombreCalificacion+'</td> </tr>';
          //cadena=cadena+"<tr><td><a id='"+i+"' class='datosEval' data-datos-datos='"+JSON.stringify(data[i])+"' style='color:#2ECD99;font-weight:bold;' href='#''>"+data[i].nombreEvaluacion+"</a></td><td>"+data[i].nombreEmpresa+"</td><td>Nivel "+data[i].nivelesEmpresa+"</td><td>"+data[i].fechaEvaluacion+"</td><td><span class='label label-warning'>Pendiente</span></td><td><a href='javascript:void(0)' class='pr-10' data-toggle='tooltip' title='Finalizar' ><i class='zmdi zmdi-check'></i></a> <a href='javascript:void(0)' class='text-inverse pr-10' title='Exportar a PDF' data-toggle='tooltip'><i class='zmdi zmdi-collection-pdf'></i></a> <a href='#' class='text-inverse pr-10 btneliminarEvaluacion' data-datos-nombreEvaluacion='"+data[i].nombreEvaluacion+"' data-datos-idEvaluacion='"+data[i]._id+"' title='Eliminar'><i class='zmdi zmdi-delete'></i></a></td></tr>";
  

      cadena=cadena+'</tbody></table> </div> </div> </div> </div> ';
      cadena=cadena+'</div> </div>';

   

    $('#dashboard').append(cadena);






$(function () {
  "use strict";
  
  /*Init FooTable*/
  $('#footable_5').footable();
  
  /*Editing FooTable*/
  
  var $modal = $('#editor-modal'),
  $editor = $('#editor'),
  $editorTitle = $('#editor-title'),
  ft = FooTable.init('#footable_2', {
    editing: {
      enabled: true,
      addRow: function(){
        $modal.removeData('row');
        $editor[0].reset();
        $editorTitle.text('Add a new row');
        $modal.modal('show');
      },
      editRow: function(row){
        var values = row.val();
        $editor.find('#rp').val(values.rp);
        $editor.find('#firstName').val(values.firstName);
        $editor.find('#lastName').val(values.lastName);
        $editor.find('#jobTitle').val(values.jobTitle);
        $editor.find('#startedOn').val(values.startedOn);
        $editor.find('#dob').val(values.dob);

        $modal.data('row', row);
        $editorTitle.text('Edit row #' + values.id);
        $modal.modal('show');
      },
      deleteRow: function(row){
        if (confirm('Are you sure you want to delete the row?')){
          row.delete();
        }
      }
    }
  }),
  uid = 10;

  $editor.on('submit', function(e){
    if (this.checkValidity && !this.checkValidity()) return;
    e.preventDefault();
    var row = $modal.data('row'),
      values = {
        id: $editor.find('#id').val(),
        firstName: $editor.find('#firstName').val(),
        lastName: $editor.find('#lastName').val(),
        jobTitle: $editor.find('#jobTitle').val(),
        startedOn: moment($editor.find('#startedOn').val(), 'YYYY-MM-DD'),
        dob: moment($editor.find('#dob').val(), 'YYYY-MM-DD')
      };

    if (row instanceof FooTable.Row){
      row.val(values);
    } else {
      values.id = uid++;
      ft.rows.add(values);
    }
    $modal.modal('hide');
  });
});





  $('.datosEval').on('click', function(){

   
    var evalua = $(this).attr('data-datos-datos');
    
    var obj = JSON.parse(evalua);
    
    mostrarEvaluacion(evalua);
    rest.obtenerEvaluacion(obj.nombreEvaluacion);
    
});



  // Botón para dar por completada la evaluación 
  $('.btnCompletarEvaluacion').on('click', function(){

    $('#modalCambiarEstado').remove();
    
    var nombreEval = $(this).attr('data-datos-nombreEvaluacion');
    var datosEstado = $(this).attr('data-datos-estado');
    var botonModalEstado="";
    //var cambioEstado="";
    //console.log(nombreEval);
    //console.log(datosEstado);


    if(datosEstado=="pendiente"){
      datosEstado="completada";
      botonModalEstado="btn-success";
    }
    else if(datosEstado=="completada"){
      datosEstado="pendiente";
      botonModalEstado="btn-warning";
    }
    //console.log(datosEstado);

    var cadena='<div id="modalCambiarEstado" data-keyboard="false" data-backdrop="static" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"><h5 class="modal-title" id="myModalLabel">Cambio de estado</h5></div> <div class="modal-body" text-align: justify> <h5 class="mb-15">¿Estás seguro/a?</h5> <p style="text-align:justify;">Te informamos que si cambias el estado de la evaluación <span style="color:#2ECD99;">'+nombreEval+' </span> pasará a ser catalogada como '+datosEstado+'.</p> </div> <div class="modal-footer"> <button type="button" class="btn btn-default" data-dismiss="modal">No</button><button type="button" class="btn '+botonModalEstado+'" data-dismiss="modal" id="cambiarEstadoEva">Sí, cambiar estado</button></div> </div></div></div>';
    $("body").append(cadena);
    $('#modalCambiarEstado').modal();

    $('#cambiarEstadoEva').on('click', function(){
      //alert('hola');
      rest.actualizarEstado(nombreEval,datosEstado);
      location.reload();
    });




    



  });



  // Botón para eliminar la evaluación elegida
  $('.btneliminarEvaluacion').on('click', function(){
    //$("#champions").data("datos-datos",ole);
    $('#modalPreguntarEliminarEvaluacion').remove();

    var evalua = $(this).attr('data-datos-idEvaluacion');
    var nombreEval = $(this).attr('data-datos-nombreEvaluacion');

    //alert(nombreEval);

    //var myobj = JSON.parse(evalua);
    //alert(evalua);
    //console.log(evalua);
    //alert(evalua);
    var cadena='<div id="modalPreguntarEliminarEvaluacion" data-keyboard="false" data-backdrop="static" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"><h5 class="modal-title" id="myModalLabel">Eliminación de evaluación</h5></div> <div class="modal-body" text-align: justify> <h5 class="mb-15">¿Estás seguro/a?</h5> <p style="text-align:justify;">Te informamos que si elimina la evaluación <span style="color:#2ECD99;">'+nombreEval+' </span> no podrá recuperarla posteriormenente.</p> </div> <div class="modal-footer"> <button type="button" class="btn btn-default" data-dismiss="modal">No</button><button type="button" class="btn btn-danger" data-dismiss="modal" id="eliminarEva">Sí, eliminar</button></div> </div></div></div>';
    $("body").append(cadena);
    $('#modalPreguntarEliminarEvaluacion').modal();

    $('#eliminarEva').on('click', function(){
      //alert('hola');
      rest.eliminarEvaluacion(evalua);
      location.reload();
    });

    
    //rest.eliminarEvaluacion(evalua);
});

 /*function eliminarEvaluacion(evalua){
    rest.eliminarEvaluacion(evalua);
    location.reload()
  }*/
                          

  //db.restaurants.find().forEach( function(myDoc) { print( "name: " + myDoc.name ); } );
  

  /*for (var i = 0; i < data.length; i++) {
    $(data[i].nombreEvaluacion).on('click',function(){
      alert('hola');
    });
  }*/
  //var cadenaprueba='<ul><li><a onclick="alert(JSON.stringify(jsonObj))" title="NA">Link</a></li></ul>';

  //$("#dashboard2").append(cadenaprueba);


}



function mostrarEvaluacion(evaluaId){



  $('#panel').remove();

  if(typeof evaluaId !== 'object'){
    var obj = JSON.parse(evaluaId);
    console.log('EL DE ABAJO ES JSON');
    console.log(obj);
  }
  else{
    var obj=evaluaId;
    console.log('EL DE ABAJO ES OBJECT');
    console.log(obj);
  }

  var cont=0;

  var cadena;

cadena='<div class="panel panel-default card-view" id="tablaEvaluacion"><div class="panel-heading"><div class="pull-left col-lg-12 col-xs-12 col-md-12 col-sm-12" id="aqui" style="margin-top:-4%">';


cadena=cadena+'<div class="pills-struct mt-40 col-xs-12">';
cadena=cadena+'<ul role="tablist" class="nav nav-pills nav-pills-rounded" id="myTabs_11">';

cadena=cadena+'<li class="active" role="presentation" class=""><a  data-toggle="tab" id="analisisId" role="tab" href="#" aria-expanded="false">dashboard</a></li>';
cadena=cadena+'<li role="presentation"><a aria-expanded="true"  data-toggle="tab" role="tab" id="evaluacionId" href="#">Evaluación</a></li>';
//cadena=cadena+'<li role="presentation" class=""><a  data-toggle="tab" id="informesId" role="tab" href="#" aria-expanded="false">Informes</a></li>';


cadena=cadena+'</ul></div>';



cadena=cadena+'<div style="margin-top:2%;margin-left:0%;margin-top: 2%;border: 2px solid #1b6b4d;border-radius: 5px;margin-right: 0%;background:aliceblue;" id="divNombreEvaluacionGuardada" class="col-xs-12"><h6 id="tituloPestaña" class="panel-title txt-dark col-xs-12" style="font-weight:bold;">Evaluación de los resultados del proceso para los procesos definidos en el Nivel '+obj.nivelesEmpresa+' de madurez</h6><p id="nombreEvaluacionGuardada";font-weight:bold">Nombre: <span style="color:#268666; font-weight:bold">'+obj.nombreEvaluacion+'</span></p><p id="fechaModificacion">Última modificación: <span style="font-style: italic;">'+obj.fechaEvaluacion+'</span></p></div></div></div>';


  /*for (var i = 0; i < obj.procesos.length; i++) {
    
    cadena=cadena+'<div class="row" id="tablasEvaluaciones"><div class="col-xs-12">';
  
    
    cadena=cadena+'<div class="panel-wrapper collapse in"><div class="row"><div class="col-md-12 table-responsive"><table style="clear: both" class="table table-bordered table-striped" id="user"><tbody class="tablasEvaluaciones2">';
    cadena=cadena+'<tr><th a href="#" data-toggle="tooltip" data-placement="top" title="Aquí la descripción del proceso" colspan="4" style="font-weight:bold;text-align:center;background-color:#95c395;color:black">'+obj.procesos[i].nombreProceso+'</a></th></tr>';
    cadena=cadena+'<tr class="filaAnterior"><td id="colRP" style="width: 60%;overflow: auto;background-color:#BEFFBF;color:black">Resultados del proceso</td><td class="colDocumentacion" style="background-color:#BEFFBF;color:black">Documentación</td><td class="colED" style="background-color:#BEFFBF;color:black">Evidencia directa</td><td class="colAnotaciones" style="background-color:#BEFFBF;color:black">Anotaciones</td></tr>';  
    
    for (var j = 0; j < obj.procesos[i].resultadosProceso.length; j++) {
      cadena=cadena+'<tr class="filaDatos"><td style="width: 60%;overflow: auto;">'+obj.procesos[i].resultadosProceso[j].descripcion+'</td><td class="filaDatosRellenar"><a href="#" class="comentarios" id="'+(i+1)+(cont+1)+'" data-type="textarea" data-campos="'+obj.procesos[i].resultadosProceso[j].documentacion+'" data-pk="1" data-placeholder="Escribe aquí" data-title="Enter comments">'+obj.procesos[i].resultadosProceso[j].documentacion+'</a></td><td class="filaDatosRellenar"><a href="#" class="comentarios" id="'+(i+1)+(cont+2)+'" data-type="textarea" data-campos="'+obj.procesos[i].resultadosProceso[j].evidenciaDirecta+'" data-pk="1" data-placeholder="Escribe aquí" data-title="Enter comments">'+obj.procesos[i].resultadosProceso[j].evidenciaDirecta+'</a></td><td class="filaDatosRellenar"><a href="#" class="comentarios" id="'+(i+1)+(cont+3)+'" data-type="textarea" data-campos="'+obj.procesos[i].resultadosProceso[j].anotaciones+'" data-pk="1" data-placeholder="Escribe aquí" data-title="Enter comments">'+obj.procesos[i].resultadosProceso[j].anotaciones+'</a></td>  </tr>';  

      cont=cont+2;
    }
    
    cont=0; // para asignarle como primera cifra el proceso del que trata el RP:0,1,etc.
    
  }
  cadena=cadena+'</tbody></table></div></div>';

    $('#dashboard').append(cadena);*/


  for (var i = 0; i < obj.procesos.length; i++) {

    cadena=cadena+'<div class="row" > <div class="col-xs-12 col-sm-12 divTablasEvaluaciones"> <div style="margin-top:2%;margin-right:1%" class="panel panel-default card-view tablasEvaluaciones bordeTablas"> <div class="panel-heading"> <div class="pull-left"> <h6 class="panel-title" style="color:#268666;font-weight:bold">'+obj.procesos[i].nombreProceso+' <a href="#" class="infoProceso" data-datos-infoProcesos="'+obj.procesos[i].nombreProceso+'" title="Descripción del proceso" data-toggle="tooltip"><i style="color:#000" class="zmdi zmdi-info"></i></a></h6> </div><div class="pull-right"><a href="#" class="pull-left inline-block full-screen"><i class="zmdi zmdi-fullscreen"></i></a></div> <div class="clearfix"></div> </div> <div class="panel-wrapper collapse in"> <div class="panel-body"> <div class="table table-wrap"> <table id="footable_1" class="table" data-sorting="false">';
    cadena=cadena+'<thead> <tr class="filaAnterior"> <th style="font-weight:bold" data-name="rp">Resultados del proceso</th> <th style="font-weight:bold" data-breakpoints="xs">Documentación</th> <th data-breakpoints="xs" style="font-weight:bold">Evidencia directa</th> <th style="font-weight:bold" data-breakpoints="xs">Anotaciones</th> </tr> </thead><tbody class="tablasEvaluaciones2">';
    for (var j = 0; j < obj.procesos[i].resultadosProceso.length; j++) {

      cadena=cadena+'<tr class="filaDatos"> <td style="width:60%;;overflow: auto;">'+obj.procesos[i].resultadosProceso[j].descripcion+'</td> <td class="filaDatosRellenar" data-breakpoints="xs"><a href="#" class="comentarios" id="'+(i+1)+(cont+1)+'" data-type="textarea" data-campos="'+obj.procesos[i].resultadosProceso[j].documentacion+'" data-pk="1" data-placeholder="Escribe aquí" data-title="Enter comments">'+obj.procesos[i].resultadosProceso[j].documentacion+'</a></td> <td class="filaDatosRellenar" data-breakpoints="xs"><a href="#" class="comentarios" id="'+(i+1)+(cont+2)+'" data-type="textarea" data-campos="'+obj.procesos[i].resultadosProceso[j].evidenciaDirecta+'" data-pk="1" data-placeholder="Escribe aquí" data-title="Enter comments">'+obj.procesos[i].resultadosProceso[j].evidenciaDirecta+'</a></td> <td class="filaDatosRellenar" data-breakpoints="xs"><a href="#" class="comentarios" id="'+(i+1)+(cont+3)+'" data-type="textarea" data-campos="'+obj.procesos[i].resultadosProceso[j].anotaciones+'" data-pk="1" data-placeholder="Escribe aquí" data-title="Enter comments">'+obj.procesos[i].resultadosProceso[j].anotaciones+'</a></td> </tr>';
    
      cont=cont+2;
    }

    cont=0;

    cadena=cadena+'</tbody></table> </div> </div> </div> </div> ';
  }

cadena=cadena+'</div> </div>';



  $('#dashboard').append(cadena);

  $('.infoProceso').on('click',function(){
    $('#modalInfoProceso').remove();
    
    var nombreProceso = $(this).attr('data-datos-infoProcesos');
    //alert(nombreProceso);
    var cadena='<div id="modalInfoProceso" data-keyboard="false" data-backdrop="static" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"><h5 class="modal-title" id="myModalLabel">Información de procesos</h5></div> <div class="modal-body" text-align: justify> <h5 class="mb-15">'+nombreProceso+'</h5> <p style="text-align:justify;">Para obtener más información sobre este proceso puedes localizarla en el <span style="font-weight:bold">Modelo de madurez de ingeniería del software Versión 2.0</span>, en el que nos hemos apoyado para realizar esta herramienta web.</p>&nbsp; <p style="text-align:justify;">Puedes acceder a él mediante este <a target="_blank" href="https://www.aenor.com/normas-y-libros/buscar-libros/detalle?c=12508">enlace.</a></p> </div> <div class="modal-footer"> <button id="modalNuevoCasoOkBtn" type="button" class="btn btn-success" data-dismiss="modal">Cerrar</button> </div> </div> <!-- /.modal-content --> </div> <!-- /.modal-dialog --> </div>';
    
    $("body").append(cadena);
    $('#modalInfoProceso').modal();

  });

    
/*FooTable Init, para efecto responsive en las tablas*/
$(function () {
  "use strict";
  
  /*Init FooTable*/
  $('#footable_1,#footable_3').footable();
  
  /*Editing FooTable*/
  
  var $modal = $('#editor-modal'),
  $editor = $('#editor'),
  $editorTitle = $('#editor-title'),
  ft = FooTable.init('#footable_2', {
    editing: {
      enabled: true,
      addRow: function(){
        $modal.removeData('row');
        $editor[0].reset();
        $editorTitle.text('Add a new row');
        $modal.modal('show');
      },
      editRow: function(row){
        var values = row.val();
        $editor.find('#rp').val(values.rp);
        $editor.find('#firstName').val(values.firstName);
        $editor.find('#lastName').val(values.lastName);
        $editor.find('#jobTitle').val(values.jobTitle);
        $editor.find('#startedOn').val(values.startedOn);
        $editor.find('#dob').val(values.dob);

        $modal.data('row', row);
        $editorTitle.text('Edit row #' + values.id);
        $modal.modal('show');
      },
      deleteRow: function(row){
        if (confirm('Are you sure you want to delete the row?')){
          row.delete();
        }
      }
    }
  }),
  uid = 10;

  $editor.on('submit', function(e){
    if (this.checkValidity && !this.checkValidity()) return;
    e.preventDefault();
    var row = $modal.data('row'),
      values = {
        id: $editor.find('#id').val(),
        firstName: $editor.find('#firstName').val(),
        lastName: $editor.find('#lastName').val(),
        jobTitle: $editor.find('#jobTitle').val(),
        startedOn: moment($editor.find('#startedOn').val(), 'YYYY-MM-DD'),
        dob: moment($editor.find('#dob').val(), 'YYYY-MM-DD')
      };

    if (row instanceof FooTable.Row){
      row.val(values);
    } else {
      values.id = uid++;
      ft.rows.add(values);
    }
    $modal.modal('hide');
  });
});
  


//var id = $(elem).attr("id");
  

  //$.fn.editable.defaults.mode = 'inline';
  $('.comentarios').editable({
    type: 'text',
    showbuttons: 'bottom',
    mode: 'inline',
    type: 'text',
    value:$(this).attr("data-campos"),
    //value:($(this).attr("data-campos")), // poner en blanco el textarea,
      success: function(k,mensaje){

        var d = new Date();
        var t = d.toLocaleTimeString();
        //console.log(mensaje);
        //$(this).attr("data-value")=v;
        
        $(this).attr('data-campos', mensaje);


        $(this).text($(this).attr("data-campos"));

        autoSave(obj);
        var objaux=obj;
        //console.log('ALBAAA');
        //console.log(objaux);
        //obj=rest.obtenerEvaluacion(objaux.nombreEvaluacion);
        //console.log('ALBAAA');
        //console.log(obj);
        //$('#nombreEvaluacionGuardada').remove();
        //$('#DivNombreEvaluacionGuardada').append('<span> (última modificación realizada: '+t+')</span>');
       //var texto = $(this).attr("data-campos");
        //$(this).attr('text',texto);
        //alert(v);
        //$('.name-list '+href).html(v);
    },


    display: function(value, sourceData) {
     //var colors = {"": "#98a6ad", 1: "#5fbeaa", 2: "#5d9cec"},
     var ole=$(this).attr("data-campos");
     /*if(value==''){
        $(this).text('VACIO');
     }*/
     
     //$(this).attr('value', ole);
     //elem = $(sourceData, function(o){return o.value == value;});

     /*if(elem.length) {
     $(this).text(elem[0].text).css("color", colors[value]);
     } else {
     $(this).empty();
     }*/
   }

  });
  /*$('#inline-comments2').editable({
    showbuttons: 'bottom',
    mode: 'inline',
    value:'' // poner en blanco el textarea
  });*/

  //rest.obtenerEvaluacion(obj.nombreEvaluacion);




                            
//Para que salga primero el DASHBOARD
$('.tablasEvaluaciones').hide();
//$('.tablasEvaluaciones2').hide();
$('#tituloPestaña').remove();






$('#evaluacionId').on('click',function(){

  var cadena3;
  var contad=0;

  $('.otraSeccion').remove();

  $('#tituloPestaña').remove();
  $('#divNombreEvaluacionGuardada').append('<h6 id="tituloPestaña" class="panel-title txt-dark col-xs-12" style="font-weight:bold;">Evaluación de los resultados del proceso para los procesos definidos en el Nivel '+obj.nivelesEmpresa+' de madurez</h6>');


  $('.divTablasEvaluaciones').show();
  $('.tablasEvaluaciones').show()
  $('.tablasEvaluaciones2').show()





  /******* AUTOGUARDADO *********/
  //autoGuardado=setInterval(function() { autoSave(obj); }, 15000 );
 

});                           


$('#analisisId').on('click',function(){
  /******* AUTOGUARDADO *********/
  //clearInterval(autoGuardado);


  rest.obtenerEvaluacion(obj.nombreEvaluacion);

});









$('#informesId').on('click',function(){
  /******* AUTOGUARDADO *********/
  //clearInterval(autoGuardado);

  /*$('#tituloPestaña').remove();
  $('#fechaModificacion').append('<h6 id="tituloPestaña" class="panel-title txt-dark" style="font-weight:bold;">Informes de los resultados del proceso para los procesos definidos en el Nivel '+obj.nivelesEmpresa+' de madurez</h6></div><div class="clearfix"></div></div>');

  var nombreEvaluacion=obj.nombreEvaluacion;
  var arrayCampos=[];

  $(".comentarios").each(function(){
    arrayCampos.push($(this).attr("data-campos"));

  });

  $('.table').hide();

  console.log(arrayCampos);*/

  //rest.actualizarEvaluacion(nombreEvaluacion,arrayCampos);

 

});





  /******* AUTOGUARDADO *********/
  //autoGuardado=setInterval(function() { autoSave(obj); }, 15000 );

  

}

function passwordOk(){
  //alert(email);
  
  $.toast({
    heading: 'Contraseña modificada',
    text: 'La contraseña ha sido modificada correctamente.',
    position: 'top-right',
    stack: false,
    icon: 'success'
  })
}

function passwordError(){
  //alert(email);
  
  $.toast({
    heading: 'Error',
    text: 'La contraseña antigua no es la registrada en nuestra base de datos.',
    position: 'top-right',
    stack: false,
    icon: 'error'
  })
}



function autoSave(obj){
    //var obj = JSON.parse(evaluaId);
    //console.log('PRUEBA: '+obj);
    var nombreEvaluacion=obj.nombreEvaluacion;

    var arrayCampos=[];

    var today = new Date();
    var options = { year: 'numeric', month: 'numeric', day: 'numeric', hour12: false, hour: 'numeric', minute: 'numeric' };
    //console.log(evaluacionNombre+prueba);


    $(".comentarios").each(function(){
            arrayCampos.push($(this).attr("data-campos"));   
    });

    $.toast({
    heading: 'Autoguardado',
    text: 'La evaluación ha sido guardada de forma automática.',
    position: 'top-right',
    stack: false,
    icon: 'success'
})
    rest.actualizarEvaluacion(nombreEvaluacion,arrayCampos,today.toLocaleDateString('es-ES', options));
  }




/*function perfil(){
  $('#idPerfil').remove();
  $('#panel').remove();
  $('#nuevoCasoForm').remove();
  $('#tablaEvaluacion').remove();

  var cadena='<div class="row" id="idPerfil"><div class="col-lg-12 col-xs-12"> <div class="panel panel-default card-view pa-0"> <div class="panel-wrapper collapse in"> <div  class="panel-body pb-0"> <div  class="tab-struct custom-tab-1"> <ul role="tablist" class="nav nav-tabs nav-tabs-responsive" id="myTabs_8"> <li class="active" role="presentation" class=""><a  data-toggle="tab" id="settings_tab_8" role="tab" href="#settings_8" aria-expanded="false"><span>Perfil</span></a></li><li role="presentation" class=""><a  data-toggle="tab" id="earning_tab_8" role="tab" href="#earnings_8" aria-expanded="false"><span>Modificar contraseña</span></a></li><li role="presentation"><a  data-toggle="tab" id="profile_tab_8" role="tab" href="#profile_8" aria-expanded="false"><span>Colores</span></a></li></ul> <div class="tab-content" id="myTabContent_8"> <div  id="profile_8" class="tab-pane fade in" role="tabpanel"> <div class="col-md-12"> <div class="pt-20"> <div class="streamline user-activity"> <div class="sl-item"> <a href="javascript:void(0)"> <div class="sl-avatar avatar avatar-sm avatar-circle"> <img class="img-responsive img-circle" src="dist/img/user.png" alt="avatar"/> </div> <div class="sl-content"> <p class="inline-block"><span class="capitalize-font txt-success mr-5 weight-500">Clay Masse</span><span>invited to join the meeting in the conference room at 9.45 am</span></p> <span class="block txt-grey font-12 capitalize-font">3 Min</span> </div> </a> </div></div> </div> </div> </div><div  id="earnings_8" class="tab-pane fade" role="tabpanel"> <!-- Row --> <div class="row"> <div class="col-lg-12"> <form id="example-advanced-form" action="#"> <div class="table-wrap"> <div class="table-responsive"> <table class="table table-striped display product-overview" id="datable_1"> <thead> <tr> <th>Date</th> <th>Item Sales Colunt</th> <th>Modificar contraseña</th> </tr> </thead> <tfoot> <tr> <th colspan="2">total:</th> <th></th> </tr> </tfoot> <tbody> <tr> <td>monday, 12</td> <td> 3 </td> <td>$400</td> </tr></tbody> </table> </div> </div> </form> </div> </div> </div> <div  id="settings_8" class="tab-pane fade in active" role="tabpanel"> <!-- Row --> <div class="row"> <div class="col-lg-6"> <div class=""> <div class="panel-wrapper collapse in"> <div class="panel-body pa-0"> <div class="col-sm-12 col-xs-12"> <div class="form-wrap"> <form action="#"> <div class="form-body overflow-hide"> <div class="form-group"> <label class="control-label mb-10" for="exampleInputuname_01">Nombre</label> <div class="input-group"> <div class="input-group-addon"><i class="icon-user"></i></div> <input type="text" class="form-control" id="exampleInputuname_01" placeholder="willard bryant"> </div> </div> <div class="form-group"> <label class="control-label mb-10" for="exampleInputEmail_01">Correo electrónico</label> <div class="input-group"> <div class="input-group-addon"><i class="icon-envelope-open"></i></div> <input type="email" class="form-control" id="exampleInputEmail_01" placeholder="xyz@gmail.com"> </div> </div> <div class="form-group"> <label class="control-label mb-10" for="exampleInputContact_01">Teléfono</label> <div class="input-group"> <div class="input-group-addon"><i class="icon-phone"></i></div> <input type="email" class="form-control" id="exampleInputContact_01" placeholder="+102 9388333"> </div> </div> <div class="form-group"> <label class="control-label mb-10" for="exampleInputpwd_01">Contraseña</label> <div class="input-group"> <div class="input-group-addon"><i class="icon-lock"></i></div> <input type="password" class="form-control" id="exampleInputpwd_01" placeholder="Enter pwd" value="password"> </div> </div>  <div class="form-group"> <label class="control-label mb-10">Años de experiencia en certificaciones</label> <select class="form-control" data-placeholder="Choose a Category" tabindex="1"> <option value="Category 1">1</option> <option value="Category 2">2</option> <option value="Category 3">3 o más</option>  </select> </div> </div> <div class="form-actions mt-10"> <button type="submit" class="btn btn-success mr-10 mb-30">Actualizar</button> </div> </form> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div></div></div>';

  $('#dashboard').append(cadena);

  


}*/



function dashboard(){
  /******* FINALIZAR AUTOGUARDADO *********/
  //clearInterval(autoGuardado);
  $('#panel').remove();
  $('#nuevoCasoForm').remove();
  $('#tablaEvaluacion').remove();
  $('#acercaDe').remove();
  $('#idPerfil').remove();


  $('#panelPerfil').remove();
  $('.seccionPerfil').remove();
  $('.seccionPassword').remove();
  // Para resaltar en verde la sección en la que estamos
    $('#panelDeControlBtn').addClass('active');
    $('#nuevoCasoBtnMenu').removeClass('active');
    $('#acercaDeBtn').removeClass('active');

    /*var cadena='<p>';
    cadena=cadena+'PRUEBA</p>';*/


  if ($.cookie("usr")){
    //alert('PASA POR AQUI');
    var usr=JSON.parse($.cookie("usr"));
    //mostrarNavUser(usr.nombre);

    rest.obtenerEvaluaciones(usr.email);



    //$('#dashboard').append(cadena);
  }
}

function acercaDe(){
  //alert('hola');
  $('#acercaDe').remove();
  $('#panel').remove();
  $('#nuevoCasoForm').remove();
  $('#tablaEvaluacion').remove();


  $('#nuevoCasoBtnMenu').removeClass('active');
  $('#panelDeControlBtn').removeClass('active');
  $('#acercaDeBtn').addClass('active');
  $('#idPerfil').remove();

  var cadena='<div class="row" id="acercaDe"> <div class="col-sm-12"> <div class="panel panel-default card-view"> <div class="panel-heading"> <div class="pull-left"> <h6 style="font-weight:bold" class="panel-title txt-dark">Acerca de la web</h6> </div> <div class="clearfix"></div> </div>';
    cadena=cadena+'<div class="panel-wrapper collapse in"><div class="panel-body"><p class="muted" style="text-align: justify">Esta herramienta web ha sido desarrollada por <span style="font-weight:bold">José Ángel Martínez Martínez</span>, con motivo de la realización de su <span style="font-weight:bold">Trabajo Fin de Grado de Ingenería informática en la Universidad de Castilla-La Mancha</span>. Tras analizar la importancia y el creciente interés por parte de las empresas u organizaciones sobre las diferentes certificaciones que acreditan la calidad en sus procesos de desarrollo software, se presentó la oportunidad de desarrollar una aplicación que permitiese ofrecer un <span style="font-weight:bold">mejor soporte para la evaluación de sus procesos a las diferentes empresas u organizaciones involucradas en proyectos de software.</span></p>&nbsp';
    cadena=cadena+'<p style="text-align:justify">Las principales herramientas que existen actualmente para ofrecer ese soporte son aplicaciones de escritorio y presentan una pobre experiencia de usuario de cara a la usabilidad o accesibilidad de las mismas. Además, en dichas aplicaciones todavía no se existe la posibilidad de realizar evaluaciones para <span style="font-weight:bold">obtener certificaciones para la ISO/IEC 33000</span>. Por lo cual, en este TFG se propone desarrollar una aplicación web con diseño adaptable, que garantizase su uso en cualquier dispositivo, y que proporcione una mayor flexibilidad en cuanto a su uso y aporte facilidades didácticas respecto al marco de madurez y capacidad que presenta la familia de normas ISO/IEC 33000.</p>&nbsp';
    cadena=cadena+'<p><strong>¿Tienes dudas, preguntas o sugerencias?</strong></p><p>Escríbenos a <a href="mailto:soporte.certisoft@gmail.com" style="text-decoration:none;color:#337ab7" target="_blank">soporte.certisoft@gmail.com</a>.</p>';
    //cadena=cadena+'<table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse" width="100%"><tbody>';
    cadena=cadena+'<div style="margin-top:1%" class="pull-left"><p><a href="https://twitter.com/jamartinezWEB" target="_blank"><img alt="twitter" class="m_-5794247025677382622rrss CToWUd" src="https://github.com/jamweb/certisoft/blob/master/dist/img/twitter.png?raw=true" style="border-width:0px;border-style:solid;width:34px;height:34px" width="100%"></a></td><td width="40"><a href="https://www.linkedin.com/in/joseangelmartinezmartinez/" target="_blank"><img alt="linkedin" class="m_-5794247025677382622rrss CToWUd" src="https://github.com/jamweb/certisoft/blob/master/dist/img/linkedin.png?raw=true" style="border-width:0px;border-style:solid;width:34px;height:34px" width="100%"></a></p></div>';
    cadena=cadena+'<div class="col-lg-10"></div><div class="pull-right" style=""><img style="float:left;" class="adaptable" src="./dist/img/acercade.png"></div></div></div></div></div></div>';


    $('#dashboard').append(cadena);
  
}

function nuevoCaso(){

   $('#panel').remove();

    $('#nuevoCasoForm').remove();
    $('#tablaEvaluacion').remove();
    $('#acercaDe').remove();
  // Para resaltar en verde la sección en la que estamos
    $('#nuevoCasoBtnMenu').addClass('active');
    $('#panelDeControlBtn').removeClass('active');
    $('#acercaDeBtn').removeClass('active');
    $('#idPerfil').remove();

    

    var cadena='<div class="panel panel-default card-view container-fluid><div class="container-fluid" id="nuevoCasoForm"><div class="table-struct full-width full-height"><div class="table-cell vertical-align-middle">';
    cadena=cadena+'<div class="auth-form ml-auto mr-auto no-float"><div class="row"><div class="col-sm-12 col-xs-12"><div class="mb-30">';
    cadena=cadena+'<h3 style="margin-top:5%;" class="text-center txt-dark mb-10">Nuevo caso de evaluación</h3><h6 class="text-center nonecase-font txt-grey">Rellena el formulario</h6></div>';
    cadena=cadena+'<div class="form-wrap"><form action="" method="post" id="formNuevoCaso">';
    cadena=cadena+'<div class="form-group" id="nombreEvaluacionNuevo"><label class="control-label mb-10">Nombre del caso</label><input type="text" id="nombreEvaluacionNuevoCasoId" name="nombreEvaluacion" class="form-control"placeholder="Introduce nombre"></div>';
    cadena=cadena+'<div class="form-group" id="nombreNuevo"><label class="control-label mb-10">Nombre de la empresa</label><input type="text" id="nombreNuevoCasoId" name="nombreEmpresa" class="form-control"placeholder="Introduce nombre"></div>';
    cadena=cadena+'<div class="form-group" id="emailNuevo"><label class="control-label mb-10">Dirección de correo electrónico</label><input type="text" id="emailNuevoCaso" name="email" class="form-control"placeholder="Introduce Email"></div>';
    cadena=cadena+'<div class="form-group" id="telefonoNuevo"><label class="pull-left control-label mb-10">Teléfono</label>';
    cadena=cadena+'<div class="clearfix"></div><input type="number" id="telefonoNuevoId" name="phone" class="form-control"placeholder="Introduce teléfono"></div>';
    cadena=cadena+'<div class="form-group" id="personaNuevo"><label class="control-label mb-10">Nombre de la persona de contacto</label><input type="text" id="personaNuevoCasoId" name="personaEmpresa" class="form-control"placeholder="Introduce nombre"></div>';
    
    cadena=cadena+'<div class="form-group" id="agregarNivelesInferiores"> <label class="control-label mb-10 text-left">Nivel de madurez</label><select id="nivelesNuevoCaso" name="nivelesNuevo" class="form-control"><option name="nivel1" value="1">1</option><option name="nivel2" value="2">2</option><option name="nivel3" value="3">3</option><option name="nivel4" value="4">4</option><option name="nivel5" value="5">5</option></select></div>';
    

   
    cadena=cadena+'<div class="form-group text-center"><button id="nuevoCasoBtn" class="btn btn-info btn-success btn-rounded">Crear caso</button></div>';
    cadena=cadena+'</form></div></div></div></div></div></div></div></div>';


    $('#dashboard').append(cadena);

    // PARA COMPROBAR QUE SOLO EXISTE NIVELES INFERIORES AL SELECCIONADO SI >1 
    $('#nivelesNuevoCaso').change(function(){
        var niveles=$("#nivelesNuevoCaso option:selected").text();
        if(niveles!=1){
           $('#niveles_quitar').remove();
           $('#agregarNivelesInferiores').append('<div class="form-group" id="niveles_quitar"><div class="checkbox pr-10 pull-left"><input id="checkboxNuevoCaso" type="checkbox"><label for="checkbox_2">Marcar si los niveles inferiores al seleccionado ya están certificados</a></label></div><div class="clearfix"></div></div>');
        }
        else{
           $('#niveles_quitar').remove();
        }
    });

    

    $('#nuevoCasoBtn').on('click',function(){
   
    if ($("#nombreEvaluacionNuevo").hasClass("has-success") && $("#nombreNuevo").hasClass("has-success") && $("#emailNuevo").hasClass("has-success") && $("#telefonoNuevo").hasClass("has-success") && $("#personaNuevo").hasClass("has-success") ){
      var nombreEvaluacion=$("#nombreEvaluacionNuevoCasoId").val();
      var nombreEmpresa=$("#nombreNuevoCasoId").val();
      var emailEmpresa=$("#emailNuevoCaso").val();
      var tlfEmpresa=$("#telefonoNuevoId").val();
      var personaEmpresa=$("#personaNuevoCasoId").val();

      var nivelesEmpresa=$("#nivelesNuevoCaso option:selected").text();

      var nivelesInferioresSeleccionado;
      var estado="pendiente";

      var today = new Date();
      var options = { year: 'numeric', month: 'numeric', day: 'numeric', hour12: false, hour: 'numeric', minute: 'numeric' };

      if ($('#checkboxNuevoCaso').is(":checked")){
          nivelesInferioresSeleccionado=true;
          
      }
      else{
          nivelesInferioresSeleccionado=false;
      }

      if ($.cookie("usr")){
  
        var usr=JSON.parse($.cookie("usr"));
        //alert(usr.email);
        //alert(nivelesInferioresSeleccionado);

        rest.crearCasoEvaluacion(usr.email,nombreEvaluacion,estado,today.toLocaleDateString('es-ES', options),nombreEmpresa,emailEmpresa,tlfEmpresa,personaEmpresa,nivelesEmpresa,nivelesInferioresSeleccionado);
   
      }
  

      
    }

    });
    


    


    $('#formNuevoCaso').bootstrapValidator({
      message: 'El valor es incorrecto',
      
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            //valid: 'glyphicon glyphicon-ok',
            //invalid: 'glyphicon glyphicon-remove',
            //validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            nombreEvaluacion: {
                validators: {
                    notEmpty: {
                        message: 'Debe estar comprendido entre 6 y 20 caracteres'
                    },
                    stringLength: {
                    max: 20,
                    min: 6
                },
                }
            },
            nombreEmpresa: {
                validators: {
                    notEmpty: {
                        message: 'Debe estar comprendido entre 3 y 40 caracteres'
                    },
                    stringLength: {
                    max: 40,
                    min: 3
                },
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Debes rellenar este campo'
                    },
                    emailAddress: {
                        message: 'La dirección de correo no es correcta'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Debes rellenar este campo'
                    },
                    /*zipCode: {
                    country: 'ES',
                    message: 'The value is not valid zipcode'
                },*/
                    stringLength: {
                    max: 9,
                    min: 8
                },
                    
                }
            },
            personaEmpresa: {
                validators: {
                    notEmpty: {
                        message: 'Debe estar comprendido entre 3 y 40 caracteres'
                    },
                    stringLength: {
                    max: 40,
                    min: 3
                },
                }
            },
            
        }
           
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#formNuevoCaso').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
}




function mostrarFormularioNombre(){
  var cadena='<div id="formInicio2">';
  cadena=cadena+'<h3>Iniciar sesion</h3>';
  cadena=cadena+'<input id="emailUsuario2" type="text" class="form-control" name="nombre" placeholder="Nombre usuario">';
  cadena=cadena+'<input id="passwordUser2" type="password" class="form-control" name="passwordUser2" placeholder="Contraseña usuario">';
  cadena=cadena+'<button type="button" id="inicioBtn" class="btn btn-primary btn-md">Iniciar Usuario</button>';
  cadena=cadena+'</div>';

  $('#inicio').append(cadena);

  $('#inicioBtn').on('click',function(){
        $('#formInicio2 p').remove();

        var email=$('#emailUsuario2').val();
        var patronEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        var password=$('#passwordUser2').val();

        if($('#emailUsuario2').val().length<1 || $('#passwordUser2').val().length<1){
          var cadena='<p>Rellena los dos campos</p>';
          $('#formInicio2').append(cadena);
        }
        else{
          if($('#passwordUser2').val().length<4){
            var cadena='<p>La contraseña al menos tiene 4 caracteres</p>';
            $('#formInicio2').append(cadena);
          }
          else{
            if (patronEmail.test(email)){
              rest.loginUsuario(email,password);
            }
            else{
              var cadena='<p>Dirección email inválida</p>';
              $('#formInicio2').append(cadena);
            }
          }
        }
    });
}


function mostrarAviso(id,cadena){
  $(id).append(cadena);
}

function mostrarCrearElegirPartida(data){
  mostrarCrearPartida();
  rest.obtenerPartidas();
  mostrarNavUser(data);
}



function cerrarSesion(){
  if ($.cookie("usr")){
      $.removeCookie("usr");
      location.reload();
      mostrarLogoInicio();
  }
}

function eliminarEvaluacion(eval){
  alert(eval);
}


function mostrarActualizarEliminar(){
  $('#granCabecera').remove();
  $('#mostrarCabeceraJuego').remove();
  $('.well').remove();
  $('#formCrearPartidaImg').remove();
  $('#formListaPartidasImg').remove();
  $('#mostrarListaPartidas').remove();
  var uid;
  if ($.cookie("usr")!=undefined){
    var usr=JSON.parse($.cookie("usr"));
    uid=usr._id;
  }
  if(uid)
  {
    var cadena = '<div class="well">';
    cadena = cadena + '<ul class="nav nav-tabs">';
    cadena = cadena + '<li class="active"><a data-toggle="tab" href="#home">Perfil</a></li>';
  
    cadena = cadena + '<li><a data-toggle="tab" href="#menu1">Modificar contraseña</a></li>';
    cadena = cadena + '<li><a data-toggle="tab" href="#menu2">Darse de baja</a></li>';
    cadena = cadena + '<li><a data-toggle="tab" href="#menu3">Resultados</a></li></ul>';

    cadena = cadena + '<div class="tab-content"><div id="menu0" class="tab-pane fade in active"><h3 style="color:black">Configuración de la cuenta</h3></div>';
    cadena = cadena + '<div id="menu1" class="tab-pane fade">';
    cadena = cadena + '<p>Dirección de correo</p><input type="text" value="'+usr.email+' " class="form-control" disabled>';
    
    cadena = cadena + '<p>Contraseña actual </p><input type="password" id="oldpass" class="form-control">';
    
    cadena = cadena + '<p>Introduzca la nueva contraseña </p><input type="password" id="newpass" class="form-control">';
    cadena = cadena + '<p>Repita la nueva contraseña </p><input type="password" id="newpass2" class="form-control">';
    cadena = cadena + '<button class="btn btn-primary" id="actualizarBtn">Actualizar</button></div>';
    cadena = cadena + '<div id="menu2" class="tab-pane fade">';
    
    cadena = cadena + '<p>Al pulsar el botón se dará de baja en nuestra base de datos</p>';
    cadena = cadena + '<button class="btn btn-danger" id="btnBaja">Quiero darme de baja</button></div>';

    cadena = cadena + '<div id="menu3" class="tab-pane fade">';
    cadena = cadena + '<p style="color:green;font-size: 300%;font-weight: bold;">Victorias:' + usr.victorias + '</p>';
    cadena = cadena + '<p style="color:red;font-size: 300%;font-weight: bold;">Derrotas:'+ usr.derrotas + ' </p>';
    

    $('#cabecera').append(cadena);
    $('#actualizarBtn').on('click',function(){
      $('#msg').remove();
      var oldpass=$('#oldpass').val();
      var newpass=$('#newpass').val();
      var newpass2=$('#newpass2').val();
      
      if (oldpass=="" && newpass=="" && newpass2==""){
        mostrarAviso("#menu1","<p id='msg' style='color:red'>No rellenaste ningún campo</p>");
      }
      
      else if(newpass!=newpass2){
        mostrarAviso("#menu1","<p id='msg' style='color:red'>Las contraseñas no coinciden</p>");
      }
      else if($('#newpass').val().length<4){
            mostrarAviso("#menu1","<p id='msg' style='color:red'>Las contraseñas deben tener al menos 4 caracteres</p>");
      }
      else{
        rest.actualizarUsuario(oldpass,newpass,newpass2);
      }
    });
    $('#btnBaja').on('click',function(){
      $('#btnBaja').remove();
      rest.eliminarUsuario();
    });
  }
  else{
    mostrarNavLogin();
  }
}



function mostrarNavLogin(){
  var cadena='<li class="dropdown"><a href="#" class="dropdown-toggle"><b>INICIAR SESIÓN</b></a>';
  cadena=cadena+'<ul id="login-dp" class="dropdown-menu"><li><div class="row"><div class="col-md-12">';
  cadena=cadena+'<div id="formInicio">';
  
  cadena=cadena+'<input id="emailUsr" type="text" class="form-control" name="nombre" placeholder="Nombre usuario">';
 
  cadena=cadena+'<input id="passwordUser" type="password" class="form-control" name="nombre2" placeholder="Contraseña usuario"';
  cadena=cadena+'<div class="help-block text-right"><a href=""></a></div>';
  cadena=cadena+'<button type="button" id="inicioBtn2" class="btn btn-primary btn-md">Iniciar sesión</button>';  
  cadena=cadena+''
  cadena=cadena+'<div class="bottom text-center" id="reg"><a style="color:black;" href="#" onclick="mostrarRegistro();"<b>Registro</b></a></div></div></li></ul></li>';        
                                
  $('#btnLogin').append(cadena);

  $('#reg').on('click', function (event) {
      $('.dropdown-toggle').parent().removeClass('open');
  });


  $('.dropdown-toggle').on('click', function (event) {
      $(this).parent().toggleClass('open');
  });








  $('#inicioBtn2').on('click',function(){
        
        $('#formInicio p').remove();

        var email=$('#emailUsr').val();
        var patronEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        var password=$('#passwordUser').val();

        if($('#emailUsr').val().length<1 || $('#passwordUser').val().length<1){
          var cadena='<p style="color:red;">Rellena los dos campos</p>';
          $('#formInicio').append(cadena);
        }
        else{
          if($('#passwordUser').val().length<4){
            var cadena='<p style="color:red;">La contraseña al menos debe tener 4 caracteres</p>';
            $('#formInicio').append(cadena);
          }
          else{
            if (patronEmail.test(email)){
              rest.loginUsuario(email,password);
            }
            else{
              var cadena='<p style="color:red;">Dirección email inválida</p>';
              $('#formInicio').append(cadena);
            }
          }
        }
    });
}





function cerrar(){
  var usr=JSON.parse($.cookie("usr"));

  if ($.cookie("usr")){
    limpiar();
    mostrarNavUser(usr.email);
    $('#abandonarP').remove();
    mostrarCabecera();
    mostrarCrearPartida();
    rest.obtenerPartidas();
  } 
}

function mostrarInicio(){
  $('#formCrearPartidaImg').remove();
  $('#formListaPartidasImg').remove();
  if ($.cookie("usr")){
    limpiar();
    mostrarCabecera();

    mostrarCrearPartida();
    rest.obtenerPartidas();
  }
}

function mostrarCabecera(){
  limpiar();
  $("#granCabecera").remove();
  var cadena='<div class="jumbotron text-center" id="granCabecera">';
  cadena=cadena+'<h1>BattleCards</h1>';
  cadena=cadena+'<p>JOSEVIC SL</p></div>';
  $("#cabecera").append(cadena);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var el = ev.target;
    var txt="";
    var destino="";
    

    if (!el.classList.contains('col-md-1')) {
       el = ev.target.parentNode;
       ev.target.remove();
    }
    
    el.appendChild(document.getElementById(data).cloneNode(true));
    var atacante = document.getElementById(data);
    origen = atacante.attributes[1].value;
    destino = el.attributes[1].value;
    
    com.atacar(origen,destino);
}

function mostrarFire(datos){
  $('#fire2').remove();
  if(datos.carta.haAtacado!=datos.carta.haAtacadoOrigen){
    var cadena='<div id="fire2"><img src="cliente/img/fire.gif"></div>'; 
    //datos.carta.haAtacadoOrigen=true;
  }
  else{
    var cadena='<div id="fire2"><img src="cliente/img/prohibido.png"></div>'; 
  }
  $('#fire').append(cadena);
  desaparecerFire();

}

function desaparecerFire(){
  setTimeout(function(){
        $("#fire2").fadeOut(1500);
  },500);
}

function eliminarFire(){
  $('#fire').remove();
}

function dropUser(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var el = ev.target;
    var txt="";
    var destino="";
    
    el.appendChild(document.getElementById(data).cloneNode(true));
    var atacante = document.getElementById(data);
    origen = atacante.attributes[1].value;
  
    com.atacarRival(origen);
}

function comprobarFin(msg){
  if(msg=="final"){
    $('#msgFinal').modal();
    $('#modalBtn').on('click',function(){
      abandonarPartida();
    })
  }
}
