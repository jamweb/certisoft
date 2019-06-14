var autoGuardado;
var procesoSeleccionado;

function mostrarAnalisis(obj){
  $('.divTablasEvaluaciones').hide();
  $('.tablasEvaluaciones2').hide();
  $('#tituloPestaña').remove();
 
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

    for (var i = 0; i < obj.procesos.length; i++) {
      contadorResultados=contadorResultados+obj.procesos[i].resultadosProceso.length;;
    }

    for (var i = 0; i < obj.procesos.length; i++) {
      var puntuaciones={};

      porcenta.push(100/(obj.procesos[i].resultadosProceso.length));
      puntuaciones[0] = (0.3333*porcenta[i]);
      puntuaciones[1] = (0.6666*porcenta[i]);
      puntuaciones[2] = porcenta[i];
      arrayResultadosProceso.push(puntuaciones);
     
    }
    
    // gráficas
    $('.otraSeccion').remove();
    cadena='<div class="row otraSeccion">'
    cadena=cadena+'<div id="total" class="col-lg-12 col-md-12 col-sm-12 col-xs-12 impresion"><div style="background-color:#EDF1F5;border-color:#2ecd99;margin-top:2%;" class="panel panel-default"> <div class="panel-wrapper collapse in"> <div class="panel-body sm-data-box-1"> <span id="coberturaId" class="uppercase-font weight-500 font-14 block text-center txt-dark">Cobertura</span> <div class="cus-sat-stat weight-500 txt-success text-center mt-5"> <span id="coberturaTotal" class="animacionNumeros"></span><span>%</span> </div><div style="margin:0.5%" class="progress"><div class="progress-bar progress-bar-success"></div></div> <ul class="flex-stat mt-5">';
    
    for (var i = 0; i < obj.procesos.length; i++) {
      cadena=cadena+'<li class="half-width"> <span class="block">'+obj.procesos[i].abrevProceso+'</span><span class="animacionNumeros" id="porcentajeSpanP'+i+'" style="color:#2ecd99;font-weight:bold"></span><span style="color:#2ecd99;font-weight:bold">%</span><div style="margin:1%" class="progress" data-datos-porcentajeP="'+resultadoFinalProceso[i]+'"><div class="progress-bar progress-bar-success"></div></div> </li>';
    }

    cadena=cadena+'</ul> </div> </div> </div></div>';
    cadena=cadena+'<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"><div style="background-color:#EDF1F5;border-color:#2ecd99;margin-top:0%;" class="panel panel-default "> <div class="panel-wrapper collapse in"> <div class="panel-body pa-0"> <div class="sm-data-box"> <div class="container-fluid"> <div class="row"> <div class="col-xs-6 text-center pl-0 pr-0 data-wrap-left"> <span class="txt-dark block counter"><span class="animacionNumeros">'+obj.procesos.length+'</span></span> <span class="weight-500 uppercase-font block font-13">Procesos</span> </div> <div class="col-xs-6 text-center  pl-0 pr-0 data-wrap-right"> <i class="icon-layers data-right-rep-icon txt-dark-grey"></i> </div> </div> </div> </div> </div> </div> </div></div>';
    cadena=cadena+'<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"><div style="background-color:#EDF1F5;border-color:#2ecd99;margin-top:0%;" class="panel panel-default"> <div class="panel-wrapper collapse in"> <div class="panel-body pa-0"> <div class="sm-data-box"> <div class="container-fluid"> <div class="row"> <div class="col-xs-6 text-center pl-0 pr-0 data-wrap-left"> <span class="txt-dark block counter"><span class="animacionNumeros">'+contadorResultados+'</span></span> <span class="weight-500 uppercase-font block">Resultados</span> </div> <div class="col-xs-6 text-center  pl-0 pr-0 data-wrap-right"> <i class="icon-list data-right-rep-icon txt-dark-grey"></i> </div> </div> </div> </div> </div> </div> </div></div>';
    cadena=cadena+'<div class="row otraSeccion" > <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"> <div style="margin-top:2%;margin-right:1%" class="panel panel-default card-view bordeTablas"> <div class="panel-heading"> <div class="pull-left"> <h6 class="panel-title" style="color:#268666;font-weight:bold">Calificación de los resultados de los procesos</h6></div><div class="pull-right"><a href="#" class="pull-left inline-block full-screen"><i class="zmdi zmdi-fullscreen"></i></a></div> <div class="clearfix"></div> </div> <div class="panel-wrapper collapse in"> <div class="panel-body"> <div class="table table-wrap"> <table id="footable_3" class="table impresion" data-sorting="false"><div style="float:left" class="pull-left form-group mb-0 sm-bootstrap-select mr-15 eleccion"><select id="elegirProcesos" class="selectpicker" data-style="form-control">';
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
 
            cadena=cadena+'<tr class="listaProcesos"><td data-breakpoints="xs" style="width:5%;;overflow: auto;">'+obj.procesos[i].abrevProceso+'</td> <td>'+obj.procesos[i].resultadosProceso[j].descripcion+'</td><td data-breakpoints="xs">'+nombreCalificacion+'</td> <td data-breakpoints="xs"><div style="float:left" class="'+calificacionF+'"></div><div style="float:left" class="'+calificacionL+'"></div><div style="float:left" class="'+calificacionP+'"></div><div style="float:left" class="'+calificacionN+'"></div></td>  </tr>';
          

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

      $('#seccionCalificacion').append(cadena);
      $( "#imprimir" ).show();


      // Elegir procesos de la lista
      $('#elegirProcesos').on('change',function(){
        var procesoSeleccionado=document.getElementById("elegirProcesos").value;
        var cadena="";
      
        $('.listaProcesos').remove();
      
        for (var i = 0; i < obj.procesos.length; i++) {

          for (var j = 0; j < obj.procesos[i].resultadosProceso.length; j++) {
          
            if(procesoSeleccionado==obj.procesos[i].abrevProceso){
            
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

              cadena=cadena+'<tr class="listaProcesos"><td data-breakpoints="xs" style="width:5%;;overflow: auto;">'+obj.procesos[i].abrevProceso+'</td> <td>'+obj.procesos[i].resultadosProceso[j].descripcion+'</td> <td data-breakpoints="xs">'+nombreCalificacion+'</td><td data-breakpoints="xs"><div style="float:left" class="'+calificacionF+'"></div><div style="float:left" class="'+calificacionL+'"></div><div style="float:left" class="'+calificacionP+'"></div><div style="float:left" class="'+calificacionN+'"></div></td>  </tr>';
            
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
            cadena=cadena+'<tr class="listaProcesos"><td data-breakpoints="xs" style="width:5%;;overflow: auto;">'+obj.procesos[i].abrevProceso+'</td> <td>'+obj.procesos[i].resultadosProceso[j].descripcion+'</td> <td data-breakpoints="xs">'+nombreCalificacion+'</td><td data-breakpoints="xs"><div style="float:left" class="'+calificacionF+'"></div><div style="float:left" class="'+calificacionL+'"></div><div style="float:left" class="'+calificacionP+'"></div><div style="float:left" class="'+calificacionN+'"></div></td>  </tr>';
            
          }
        }
      }
      
      $('.introducirProcesos').append(cadena);
      cadena="";


      /*FooTable Init, para efecto responsive en las tablas. Aqui es para que funcione el responsive al elegir en el filtrado*/
    $(function () {
      "use strict";

      $('#footable_3').footable();    
    });

     });

    for (var i = 0; i < resultadoFinalProceso.length; i++) {
      porcentajeNivel=porcentajeNivel+resultadoFinalProceso[i];
    }

    porcentajeNivel=porcentajeNivel/resultadoFinalProceso.length;
    
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
    
    $('#footable_3').footable();
    
  });


    $(function () {
      var prog = $(".progress-bar");

      if(((porcentajeNivel * 100) / 100)>=0 && ((porcentajeNivel * 100) / 100)<14.99){
          prog.eq(0).addClass('n');
      }
      else if(((porcentajeNivel * 100) / 100)>=15 && ((porcentajeNivel * 100) / 100)<49.99){
        prog.eq(0).addClass('p');
      }
      else if(((porcentajeNivel * 100) / 100)>=50 && ((porcentajeNivel * 100) / 100)<84.99){
        prog.eq(0).addClass('l');
      }
      else if(((porcentajeNivel * 100) / 100)>=85){
        prog.eq(0).addClass('progress-bar-success');
      }

      prog.eq(0).animate({width:((porcentajeNivel * 100) / 100)+"%"}, 1500)

      for (var i = 1; i < (obj.procesos.length+1); i++) {
        if(resultadoFinalProceso[i-1]>=0 && resultadoFinalProceso[i-1]<14.99){
          prog.eq(i).addClass('n');
        }
      else if(resultadoFinalProceso[i-1]>=15 && resultadoFinalProceso[i-1]<49.99){
        prog.eq(i).addClass('p');
      }
      else if(resultadoFinalProceso[i-1]>=50 && resultadoFinalProceso[i-1]<84.99){
        prog.eq(i).addClass('l');
      }
      else if(resultadoFinalProceso[i-1]>=85){
        prog.eq(i).addClass('progress-bar-success');
      } 
      prog.eq(i).animate({width:resultadoFinalProceso[i-1]+"%"}, 1500)
    }

  });


  $(function () {
      var specialElementHandlers = {
          '#editor': function (element,renderer) {
              return true;
          }
      };
  });
}

function comprobarUsuario(){
  if ($.cookie("usr")){
    
    var usr=JSON.parse($.cookie("usr"));
    mostrarNavUser(usr.nombre,usr.email,usr.experiencia,usr.colores[0].fondoPanel,usr.colores[0].seccionTextoPanel,usr.colores[0].textoPanel);

    rest.obtenerEvaluaciones(usr.email);
  }
  else{
      location.replace('./login.html');
  }
}

function mostrarNavUser(nombre,email,experiencia,fondoPanel,seccionTextoPanel,textoPanel){
  
  $(".wrapper.theme-1-active .fixed-sidebar-left .side-nav").css("background",fondoPanel);
  $(".fixed-sidebar-left .side-nav li.navigation-header span").css("color", seccionTextoPanel);
  $(".right-nav-text").css("color", textoPanel);

  var cadena='<ul class="nav navbar-right top-nav pull-right" id="menuPrincipal"><li class="dropdown auth-drp">';
  cadena = cadena + '<a id="nombreSesion" href="#" class="dropdown-toggle pr-0" data-toggle="dropdown"><span class="user-online-status"></span> Hola, '+nombre+'</a>';
  cadena = cadena + '<ul class="dropdown-menu user-auth-dropdown" data-dropdown-in="flipInX" data-dropdown-out="flipOutX"><li>';
  cadena = cadena + '<a href="#" id="btnPerfil" data-datos-nombre="'+nombre+'" data-datos-email="'+email+'" data-datos-experiencia="'+experiencia+'"><i class="zmdi zmdi-account"></i><span>Perfil</span></a></li><li><a href="#" onclick="dashboard()"><i class="zmdi zmdi-card"></i><span>Mis evaluaciones</span></a></li>';
  cadena = cadena + '<li class="divider"></li><li><a href="#" id="cerrarSesion"><i class="zmdi zmdi-power"></i><span>Cerrar sesión</span></a></li></ul></li></ul>';

  $('#menu').append(cadena);
  
  $('#btnPerfil').on('click',function(){
  $('#idPerfil').remove();
  $('#panel').remove();
  $('#nuevoCasoForm').remove();
  $('#tablaEvaluacion').remove();

  var nombre = $(this).attr('data-datos-nombre');
  var email = $(this).attr('data-datos-email');
  var experiencia = $(this).attr('data-datos-experiencia');
  var cadena='<div class="row" id="idPerfil"><div class="col-lg-12 col-xs-12 col-sm-12 col-md-12"> <div class="panel panel-default card-view pa-0"> <div class="panel-wrapper collapse in"> <div  class="panel-body pb-0"> <div  class="tab-struct custom-tab-1"> <ul role="tablist" class="nav nav-tabs nav-tabs-responsive" id="myTabs_8"> <li role="presentation" class="prev"><a  data-toggle="tab" id="settings_tab_8" role="tab" href="#settings_8" aria-expanded="false"><span>Modificar datos</span></a></li><li role="presentation" class="active"><a  data-toggle="tab" id="earning_tab_8" role="tab" href="#earnings_8" aria-expanded="false"><span>Modificar contraseña</span></a></li><li id="coloresTab" class="next" role="presentation"><a  data-toggle="tab" id="profile_tab_8" role="tab" href="#profile_8" aria-expanded="false"><span>Colores</span></a></li></ul> <div class="tab-content" id="myTabContent_8"> <div  id="profile_8" class="tab-pane fade in" role="tabpanel"> <div class="col-md-12"> <div class="pt-0">   <div class="row"> <div class="col-sm-12 col-lg-7"> <div class="form-group mb-0"> <label class="control-label mb-10 text-left">Fondo del panel lateral</label> <div id="cp1" class="colorpicker-rgb input-group colorpicker-component"> <input id="fondoPanel" type="text" value="#2A3E4C" class="form-control" /> <span class="input-group-addon"><i></i></span> </div> </div> </div><div class="col-sm-12 col-lg-7" style="margin-top:2%"> <div class="form-group mb-0"> <label class="control-label mb-10 text-left">Sección del panel lateral</label> <div id="cp2" class="colorpicker-rgb2 input-group colorpicker-component"> <input id="seccionTextoPanel" type="text" value="#878787" class="form-control" /> <span class="input-group-addon"><i></i></span> </div> </div> </div><div class="col-sm-12 col-lg-7" style="margin-top:2%"> <div class="form-group mb-0"> <label class="control-label mb-10 text-left">Texto del panel lateral</label> <div id="cp3" class="colorpicker-rgb3 input-group colorpicker-component"> <input id="textoPanel" type="text" value="#2A3E4C" class="form-control" /> <span class="input-group-addon"><i></i></span> </div> </div> </div><div class="col-sm-12 col-xs-12 col-md-12 col-lg-7" style="margin-top:2%">  <div class="form-actions mt-10"> <button  style="margin-top:0%;" id="probarColoresPerfilBtn" class="btn btn-warning mr-10 mb-10 col-sm-12 col-xs-12 col-lg-3 col-md-12">¡Pruébalo!</button>   <button  style="margin-top:0%" id="porDefectoColoresPerfilBtn" class="btn btn-default mr-10 mb-10 col-sm-12 col-xs-12 col-lg-3 col-md-12">Por defecto</button><button  style="margin-top:0%" id="actualizarColoresPerfilBtn" class="btn btn-success mr-10 mb-10 col-sm-12 col-xs-12 col-lg-3 col-md-12">Actualizar</button> </div></div>         </div>       </div> </div> </div><div  id="earnings_8" class="tab-pane fade in active" role="tabpanel">';
  cadena=cadena+'<!-- Row --> <div class="row"> <div class="col-lg-6"> <div class=""> <div class="panel-wrapper collapse in"> <div class="panel-body pa-0"> <div class="col-sm-12 col-xs-12"><div class="form-wrap"> <form action="#" id="formPassword"> <div class="form-body overflow-hide"> <div class="form-group" id="passwordPerfilId"> <label class="control-label mb-10">Contraseña antigua</label> <div class="input-group"> <div class="input-group-addon"><i class="icon-lock"></i></div> <input type="password" name="password" id="passwordPerf" class="form-control" placeholder="Introduce la contraseña antigua" value=""> </div> </div> <div class="form-group" id="newPasswordPerfilId"> <label class="control-label mb-10">Nueva contraseña</label> <div class="input-group"> <div class="input-group-addon"><i class="icon-lock"></i></div> <input type="password" name="newPassword" id="newPasswordPerf" class="form-control" placeholder="Introduce la nueva contraseña" value=""> </div> </div>   <div class="form-group" id="reNewPasswordPerfilId"> <label class="control-label mb-10">Repetición de nueva contraseña</label> <div class="input-group"> <div class="input-group-addon"><i class="icon-lock"></i></div> <input type="password" name="reNewPassword" id="reNewPasswordPerf" class="form-control" placeholder="Introduce de nuevo la contraseña nueva" value=""> </div> </div> </div> <div class="form-actions mt-10"> <button id="actualizarPasswordPerfilBtn" class="btn btn-success mr-10 mb-10 col-sm-12 col-xs-12 col-lg-3 col-md-12">Actualizar</button> </div> </form> </div> </div> </div> </div> </div> </div> </div></div> ';
  cadena=cadena+'<div id="settings_8" class="tab-pane fade" role="tabpanel"> <!-- Row --> <div class="row"> <div class="col-lg-6"> <div class=""> <div class="panel-wrapper collapse in"> <div class="panel-body pa-0"> <div class="col-sm-12 col-xs-12"><div class="form-wrap"> <form action="#" id="formPerfil"> <div class="form-body overflow-hide"> <div class="form-group" id="nombrePerfilId"> <label class="control-label mb-10">Nombre</label> <div class="input-group"> <div class="input-group-addon"><i class="icon-user"></i></div> <input name="nombrePerfil" id="nombrePerf" type="text" class="form-control"  placeholder="'+nombre+'"> </div> </div> <div class="form-group" id="emailPerfilId"> <label class="control-label mb-10">Correo electrónico</label> <div class="input-group"> <div class="input-group-addon"><i class="icon-envelope-open"></i></div> <input type="email" name="email" disabled id="emailPerf" class="form-control" id="exampleInputEmail_01" placeholder="'+email+'"> </div> </div>   <div class="form-group"> <label class="control-label mb-10">Años de experiencia en certificaciones</label> <select id="experienciaPerf" class="form-control" data-placeholder="Elige una opción" tabindex="1"> <option id="expSelected1" value="Category 1">1</option> <option id="expSelected2" value="Category 2">2</option> <option id="expSelected3" value="Category 3">3 o más</option>  </select> </div> </div> <div class="form-actions mt-10"> <button id="actualizarPerfilBtn" data-datos-nombre="'+nombre+'" data-datos-email="'+email+'" class="btn btn-success mr-10 mb-10 col-sm-12 col-xs-12 col-lg-3 col-md-12">Actualizar</button> </div> </form> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div></div></div>';

  $('#dashboard').append(cadena);

    /* Bootstrap Colorpicker para la selección de colores en la configuración de perfil*/
  $('.colorpicker').colorpicker();

  $('.colorpicker-rgb').colorpicker({
    color: fondoPanel,
    format: 'hex'
  });

  $('.colorpicker-rgb2').colorpicker({
    color: seccionTextoPanel,
    format: 'hex'
  });

  $('.colorpicker-rgb3').colorpicker({
    color: textoPanel,
    format: 'hex'
  });

  

    // Para controlar el formulario
      $('#formPerfil').bootstrapValidator({
      message: 'El valor es incorrecto',
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
            $('#success_message').slideDown({ opacity: "show" }, "slow")
                $('#formPerfil').data('bootstrapValidator').resetForm();
            e.preventDefault();
            var $form = $(e.target);
            var bv = $form.data('bootstrapValidator');

            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });

        $('#formPassword').bootstrapValidator({
            message: 'El valor es incorrecto',
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
                $('#success_message').slideDown({ opacity: "show" }, "slow") 
                    $('#formPassword').data('bootstrapValidator').resetForm();

                e.preventDefault();

                var $form = $(e.target);
                var bv = $form.data('bootstrapValidator');

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
      $("select #expSelected3").attr("selected","selected");
    }
   
    $('#probarColoresPerfilBtn').on('click',function(){
        var fondoPanel=$("#fondoPanel").val();
        var seccionTextoPanel=$("#seccionTextoPanel").val();
        var textoPanel=$("#textoPanel").val();
      
        $(".wrapper.theme-1-active .fixed-sidebar-left .side-nav").css("background", fondoPanel);
        $(".fixed-sidebar-left .side-nav li.navigation-header span").css("color", seccionTextoPanel);
        $(".right-nav-text").css("color", textoPanel);
    });

    $('#actualizarColoresPerfilBtn').on('click',function(){
        var usr=JSON.parse($.cookie("usr"));
        var fondoPanel=$("#fondoPanel").val();
        var seccionTextoPanel=$("#seccionTextoPanel").val();
        var textoPanel=$("#textoPanel").val();
        
        $('#modalPreguntarActualizarColores').remove();
        var cadena='<div id="modalPreguntarActualizarColores" data-keyboard="false" data-backdrop="static" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"><h5 class="modal-title" id="myModalLabel">Actualización de colores</h5></div> <div class="modal-body" text-align: justify> <h5 class="mb-15">¿Estás seguro/a?</h5> <p style="text-align:justify;">Te informamos que, si procedes a realizar los cambios, la configuración de colores quedará guardada en tu perfil.</p>&nbsp<p>Recuerda que puedes modificar los colores en cualquier momento. </p> </div> <div class="modal-footer"> <button type="button" class="btn btn-default" data-dismiss="modal">No</button><button type="button" class="btn btn-success" data-dismiss="modal" id="actualizarColor">Sí, modificar</button></div> </div></div></div>';
        $("body").append(cadena);
        $('#modalPreguntarActualizarColores').modal();

        $('#actualizarColor').on('click', function(){
          
        rest.actualizarColoresUsuario(usr.email,usr.nombre,fondoPanel,seccionTextoPanel,textoPanel);
    });

  });

      $('#porDefectoColoresPerfilBtn').on('click',function(){
          var fondoPanel="#2A3E4C";
          var seccionTextoPanel="#878787";
          var textoPanel="#FFFFFF"; 

          $(".wrapper.theme-1-active .fixed-sidebar-left .side-nav").css("background", fondoPanel);
          $(".fixed-sidebar-left .side-nav li.navigation-header span").css("color", seccionTextoPanel);
          $(".right-nav-text").css("color", textoPanel);

          $("#fondoPanel").val("#2a3e4c");
          $("#cp1 span i").css("background-color","#2a3e4c");

          $("#seccionTextoPanel").val("#878787");
          $("#cp2 span i").css("background-color","#878787");

          $("#textoPanel").val("#FFFFFF");
          $("#cp3 span i").css("background-color","#FFFFFF");

      });

      $('#actualizarPasswordPerfilBtn').on('click',function(){
        var usr=JSON.parse($.cookie("usr"));
        var password=$("#passwordPerf").val();
        var newPassword=$("#newPasswordPerf").val();
        var email=usr.email;

        if ($("#passwordPerfilId").hasClass("has-success") && $("#newPasswordPerfilId").hasClass("has-success") && $("#reNewPasswordPerfilId").hasClass("has-success") ){
            rest.actualizarPasswordPerfil(email,password,newPassword);
        }
      });

    // Actualizar datos del perfil
    $('#actualizarPerfilBtn').on('click',function(){
      var usr=JSON.parse($.cookie("usr"));
      var nombre=$("#nombrePerf").val();
      var emailViejo=usr.email;
      var email=$("#emailPerf").val();
      var experiencia=$("#experienciaPerf option:selected").text();
      
      if(nombre!=""){
          if ($("#nombrePerfilId").hasClass("has-success")){
            var cadena='<div id="modalCambiarDatos" data-keyboard="false" data-backdrop="static" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"><h5 class="modal-title" id="myModalLabel">Modificación de datos</h5></div> <div class="modal-body" text-align: justify> <h5 class="mb-15">¿Estás seguro/a?</h5> <p style="text-align:justify;">Te informamos que podrás modificar tus datos las veces que lo veas oportuno.</p> </div> <div class="modal-footer"> <button type="button" class="btn btn-default" data-dismiss="modal">No</button><button type="button" class="btn btn-success data-dismiss="modal" id="cambiarDatos">Sí, modificar</button></div> </div></div></div>';
            $("body").append(cadena);
            $('#modalCambiarDatos').modal();
            $('#cambiarDatos').on('click', function(){
            
            rest.actualizarPerfilUsuario(nombre,emailViejo,experiencia);
            
            $('#menuPrincipal').remove();
            mostrarNavUser(nombre,emailViejo,experiencia);
            $('#modalCambiarDatos').modal('hide');

            $.toast({
                heading: 'Datos guardados',
                text: 'Modificación realizada. Inicie sesión para comprobar los cambios.',
                position: 'top-right',
                stack: false,
                icon: 'success'
            })

            setTimeout(function(){
                  $.removeCookie("usr");
                  location.replace('./login.html');
            },3000);
            
          }); 
        } 
      }
      else if(nombre=="" && experiencia==usr.experiencia){
          nombre=usr.nombre;
          var cadena='<div id="modalSinCambios" data-keyboard="false" data-backdrop="static" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"><h5 class="modal-title" id="myModalLabel">No se modificaron datos</h5></div> <div class="modal-body" text-align: justify><p style="text-align:justify;">Debes modificar algún campo para actualizar los datos</p></div> <div class="modal-footer"> <button id="modalSinCambiosBtn" type="button" class="btn btn-success" data-dismiss="modal">Aceptar</button> </div> </div></div></div>';
          $("body").append(cadena);
          $('#modalSinCambios').modal();
      }
      else{
          nombre=usr.nombre;
          var cadena='<div id="modalCambiarDatos" data-keyboard="false" data-backdrop="static" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"><h5 class="modal-title" id="myModalLabel">Modificación de datos</h5></div> <div class="modal-body" text-align: justify> <h5 class="mb-15">¿Estás seguro/a?</h5> <p style="text-align:justify;">Te informamos que podrás modificar tus datos las veces que lo veas oportuno.</p> </div> <div class="modal-footer"> <button type="button" class="btn btn-default" data-dismiss="modal">No</button><button type="button" class="btn btn-success data-dismiss="modal" id="cambiarDatos">Sí, modificar</button></div> </div></div></div>';
          $("body").append(cadena);
          $('#modalCambiarDatos').modal();
          $('#cambiarDatos').on('click', function(){
    
          rest.actualizarPerfilUsuario(nombre,emailViejo,experiencia);
            
          $('#menuPrincipal').remove();
           mostrarNavUser(nombre,emailViejo,experiencia);
          $('#modalCambiarDatos').modal('hide');

          $.toast({
              heading: 'Datos guardados',
              text: 'Modificación realizada. Inicie sesión para comprobar los cambios.',
              position: 'top-right',
              stack: false,
              icon: 'success'
          })

          setTimeout(function(){
                  $.removeCookie("usr");
                  location.replace('./login.html');
            },3000);
            
          });
      }
   });
});

  $('#cerrarSesion').on('click',function(){
    if ($.cookie("usr")){
        $.removeCookie("usr");
        location.replace('./login.html');
        
    }
  });
}

function mostrarTablaEvaluaciones(data){
  $('#panel').remove();

  var cadena="";
  var estado="";
  var iconoEstado="";
  var tooltipEstado="";

  cadena=cadena+'<div class="row" id="panel" > <div class="col-xs-12 col-sm-12"> <div id="listadoEvaluaciones" style="margin-top:2%;margin-right:1%" class="panel panel-default card-view bordeTablas"> <div class="panel-heading"> <div class="pull-left"> <h6 class="panel-title" style="color:#268666;font-weight:bold">Evaluaciones</h6></div><div class="pull-right"><a href="#" class="pull-left inline-block full-screen"><i class="zmdi zmdi-fullscreen"></i></a></div> <div class="clearfix"></div> </div> <div class="panel-wrapper collapse in"> <div class="panel-body"> <div class="table table-wrap"> <table id="footable_5" class="table" data-sorting="false">';
  cadena=cadena+'<thead> <tr> <th style="font-weight:bold">Nombre</th> <th style="font-weight:bold" data-breakpoints="xs">Empresa</th> <th data-breakpoints="xs" style="font-weight:bold">Nivel de madurez</th> <th style="font-weight:bold" data-breakpoints="xs">Última modificación</th><th style="font-weight:bold" data-breakpoints="xs">Estado</th><th style="font-weight:bold" data-breakpoints="xs">Acciones</th> </tr> </thead><tbody class="introducirEvaluaciones">';

  if(data.length>0){
    for (var i = 0; i < data.length; i++) {
      if(data[i].estado=="Pendiente"){
        estado="<span class='label label-warning'>Pendiente</span>";
        iconoEstado="<i class='zmdi zmdi-check'></i>";
        tooltipEstado="Fijar como completada";
      }
      else if(data[i].estado=="Completada"){
        estado="<span class='label label-success'>Completada</span>";
        iconoEstado="<i class='zmdi zmdi-mail-reply-all'></i>";
        tooltipEstado="Fijar como pendiente";
      }

      cadena=cadena+"<tr><td data-breakpoints='xs' style='width:25%;overflow: auto;'><a id='"+i+"' class='datosEval' data-datos-datos='"+JSON.stringify(data[i])+"' style='color:#2ECD99;font-weight:bold;' href='#''>"+data[i].nombreEvaluacion+"</a></td><td>"+data[i].nombreEmpresa+"</td><td>Nivel "+data[i].nivelesEmpresa+"</td> <td data-breakpoints='xs'>"+data[i].fechaEvaluacion+"</td> <td>"+estado+"</td><td><a href='#' class='pr-10 btnCompletarEvaluacion' data-datos-estado='"+data[i].estado+"' data-datos-nombreEvaluacion='"+data[i].nombreEvaluacion+"' data-toggle='tooltip' title='"+tooltipEstado+"'>"+iconoEstado+"</a> <a href='javascript:void(0)' class='text-inverse pr-10' title='Exportar a PDF' data-toggle='tooltip'></a> <a href='#' class='text-inverse pr-10 btneliminarEvaluacion' data-datos-estado='"+data[i]._estado+"' data-datos-nombreEvaluacion='"+data[i].nombreEvaluacion+"' data-datos-idEvaluacion='"+data[i]._id+"' title='Eliminar'><i class='zmdi zmdi-delete'></i></a></td> </tr>";
       estado="";
    }
  }
       
    cadena=cadena+'</tbody></table> </div> </div> </div> </div> ';
    cadena=cadena+'</div> </div>';

    $('#dashboard').append(cadena);


  // Para el responsive de las tablas
  $(function () {
    "use strict";
    
    $('#footable_5').footable();
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
    
    if(datosEstado=="Pendiente"){
      datosEstado="Completada";
      botonModalEstado="btn-success";
    }
    else if(datosEstado=="Completada"){
      datosEstado="Pendiente";
      botonModalEstado="btn-warning";
    }
    
    var cadena='<div id="modalCambiarEstado" data-keyboard="false" data-backdrop="static" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"><h5 class="modal-title" id="myModalLabel">Cambio de estado</h5></div> <div class="modal-body" text-align: justify> <h5 class="mb-15">¿Estás seguro/a?</h5> <p style="text-align:justify;">Te informamos que si cambias el estado de la evaluación <span style="color:#2ECD99;">'+nombreEval+' </span> pasará a ser catalogada como '+datosEstado+'.</p> </div> <div class="modal-footer"> <button type="button" class="btn btn-default" data-dismiss="modal">No</button><button type="button" class="btn '+botonModalEstado+'" data-dismiss="modal" id="cambiarEstadoEva">Sí, cambiar estado</button></div> </div></div></div>';
    $("body").append(cadena);
    $('#modalCambiarEstado').modal();
    $('#cambiarEstadoEva').on('click', function(){
      rest.actualizarEstado(nombreEval,datosEstado);
      location.reload();
    });
  });

  // Botón para eliminar la evaluación elegida
  $('.btneliminarEvaluacion').on('click', function(){
    $('#modalPreguntarEliminarEvaluacion').remove();

    var evalua = $(this).attr('data-datos-idEvaluacion');
    var nombreEval = $(this).attr('data-datos-nombreEvaluacion');
    var cadena='<div id="modalPreguntarEliminarEvaluacion" data-keyboard="false" data-backdrop="static" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"><h5 class="modal-title" id="myModalLabel">Eliminación de evaluación</h5></div> <div class="modal-body" text-align: justify> <h5 class="mb-15">¿Estás seguro/a?</h5> <p style="text-align:justify;">Te informamos que si elimina la evaluación <span style="color:#2ECD99;">'+nombreEval+' </span> no podrá recuperarla posteriormenente.</p> </div> <div class="modal-footer"> <button type="button" class="btn btn-default" data-dismiss="modal">No</button><button type="button" class="btn btn-danger" data-dismiss="modal" id="eliminarEva">Sí, eliminar</button></div> </div></div></div>';
    
    $("body").append(cadena);
    $('#modalPreguntarEliminarEvaluacion').modal();
    $('#eliminarEva').on('click', function(){
      
    rest.eliminarEvaluacion(evalua);
    location.reload();
  });
});

}


function mostrarEvaluacion(evaluaId){
  $('#panel').remove();

  if(typeof evaluaId !== 'object'){
    var obj = JSON.parse(evaluaId);
    
  }
  else{
    var obj=evaluaId;
    
  }
  var cont=0;
  var cadena;
  var usr=JSON.parse($.cookie("usr"));

  cadena='<div class="panel panel-default card-view" id="tablaEvaluacion"><div class="panel-heading"><div class="pull-left col-lg-12 col-xs-12 col-md-12 col-sm-12" id="seccionCalificacion" style="margin-top:-4%">';
  cadena=cadena+'<div class="pills-struct mt-40 col-xs-12">';
  cadena=cadena+'<ul role="tablist" class="nav nav-pills nav-pills-rounded" id="myTabs_11">';
  cadena=cadena+'<li class="active" role="presentation" class=""><a  data-toggle="tab" id="analisisId" role="tab" href="#" aria-expanded="false">Dashboard</a></li>';
  cadena=cadena+'<li role="presentation"><a aria-expanded="true"  data-toggle="tab" role="tab" id="evaluacionId" href="#">Evaluación</a></li>';
  cadena=cadena+'</ul></div>';

  cadena=cadena+'<div style="margin-top:2%;margin-left:0%;margin-top: 2%;margin-right: 0%;background:#dbf3e3;" id="divNombreEvaluacionGuardada" class="col-lg-12 col-md-12 col-sm-12 col-xs-12 pruebaDatos"><p id="nombreEvaluacionGuardada";font-weight:bold">Nombre: <span style="color:#268666; font-weight:bold">'+obj.nombreEvaluacion+' </span><a href="#"><img id="imprimir" class="hidden-xs" src="./dist/img/pdf.gif"/></a></p><p id="nombreEvaluador">Evaluador: '+usr.nombre+'</p><p id="nombreEmpresaId">Empresa: '+obj.nombreEmpresa+'</p><p id="nivelMadurez">Nivel de madurez: '+obj.nivelesEmpresa+'</p><p id="estadoEvaluacion">Estado: '+obj.estado+'</p><p id="fechaModificacion">Última modificación: <span style="font-style: italic;">'+obj.fechaEvaluacion+'</span></p></div></div></div>';

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
    var cadena='<div id="modalInfoProceso" data-keyboard="false" data-backdrop="static" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"><h5 class="modal-title" id="myModalLabel">Información de procesos</h5></div> <div class="modal-body" text-align: justify> <h5 class="mb-15">'+nombreProceso+'</h5> <p style="text-align:justify;">Para obtener más información sobre este proceso puedes localizarla en el <span style="font-weight:bold">Modelo de madurez de ingeniería del software Versión 2.0</span>, en el que nos hemos apoyado para realizar esta herramienta web.</p>&nbsp; <p style="text-align:justify;">Puedes acceder a él mediante este <a target="_blank" href="https://www.aenor.com/normas-y-libros/buscar-libros/detalle?c=b63d4c95-9180-e911-a84e-000d3a2fe6cc">enlace.</a></p> </div> <div class="modal-footer"> <button id="modalNuevoCasoOkBtn" type="button" class="btn btn-success" data-dismiss="modal">Cerrar</button> </div> </div> <!-- /.modal-content --> </div> <!-- /.modal-dialog --> </div>';
    
    $("body").append(cadena);
    $('#modalInfoProceso').modal();
  });

    
/*FooTable Init, para efecto responsive en las tablas*/
$(function () {
  "use strict";
  
  $('#footable_1,#footable_3').footable();
});
  
  $('.comentarios').editable({
    type: 'text',
    showbuttons: 'bottom',
    mode: 'inline',
    type: 'text',
    value:$(this).attr("data-campos"),
      success: function(k,mensaje){
        var d = new Date();
        var t = d.toLocaleTimeString();
       
        $(this).attr('data-campos', mensaje);
        $(this).text($(this).attr("data-campos"));

        autoSave(obj);
        var objaux=obj;
    },
    display: function(value, sourceData) {
     var ole=$(this).attr("data-campos");
   }
  });
                     
//Para que salga primero el DASHBOARD
$('.tablasEvaluaciones').hide();
$('#tituloPestaña').remove();

$('#imprimir').on('click',function(){
  $.toast({
          heading: 'Generación de PDF',
          text: 'Según la cantidad de procesos a exportar la generación del PDF podrá tardar unos segundos.',
          position: 'top-right',
          stack: false,
          icon: 'success'
  })


    let pdf = new jsPDF('p', 'pt', 'letter');
    pdf.page=1;

    pdf.setDrawColor(0)
    pdf.setFillColor(46,205,153)
    pdf.rect(25, 40, 5, 5, 'FD')

    pdf.setDrawColor(0)
    pdf.setFillColor(46,205,153)
    pdf.rect(25, 60, 5, 5, 'FD')

    pdf.setDrawColor(0)
    pdf.setFillColor(46,205,153)
    pdf.rect(25, 80, 5, 5, 'FD')

    pdf.setDrawColor(0)
    pdf.setFillColor(46,205,153)
    pdf.rect(25, 100, 5, 5, 'FD')

    pdf.setDrawColor(0)
    pdf.setFillColor(46,205,153)
    pdf.rect(25, 120, 5, 5, 'FD')

    pdf.setDrawColor(0)
    pdf.setFillColor(46,205,153)
    pdf.rect(25, 140, 5, 5, 'FD')

    html2canvas($(".impresion")[0]).then(
      
      canvas1 => {
         $( "#imprimir" ).show();
         var canvas11 = canvas1.toDataURL("image/png");

         pdf.setFont('helvetica')
         pdf.setFontType('bold')
         pdf.setFontSize(12)
         pdf.text(24, 20, 'Datos referentes a la evaluación');

         pdf.setLineWidth(0.5)
         //margen izquierdo,top, anchura, alto
         pdf.line(25, 24, 527, 24)  
         pdf.setFontSize(12)
         pdf.text(35, 47, 'Nombre de la evaluación: ')
         pdf.setFont('courier')
         pdf.setFontType('light')
         pdf.setFontSize(13)
         pdf.text(185, 47, obj.nombreEvaluacion)

         pdf.setFont('helvetica')
         pdf.setFontType('bold')
         pdf.setFontSize(12)
         pdf.text(35, 67, 'Nombre del evaluador: ')
         pdf.setFont('courier')
         pdf.setFontType('light')
         pdf.setFontSize(13)
         pdf.text(185, 67, usr.nombre)

         pdf.setFont('helvetica')
         pdf.setFontType('bold')
         pdf.setFontSize(12)
         pdf.text(35, 87, 'Nombre de la empresa: ')
         pdf.setFont('courier')
         pdf.setFontType('light')
         pdf.setFontSize(13)
         pdf.text(185, 87, obj.nombreEmpresa)

         pdf.setFont('helvetica')
         pdf.setFontType('bold')
         pdf.setFontSize(12)
         pdf.text(35, 107, 'Nivel de madurez: ')
         pdf.setFont('courier')
         pdf.setFontType('light')
         pdf.setFontSize(13)
         pdf.text(185, 107, obj.nivelesEmpresa)

         pdf.setFont('helvetica')
         pdf.setFontType('bold')
         pdf.setFontSize(12)
         pdf.text(35, 127, 'Estado: ')
         pdf.setFont('courier')
         pdf.setFontType('light')
         pdf.setFontSize(13)
         pdf.text(185, 127, obj.estado)

         pdf.setFont('helvetica')
         pdf.setFontType('bold')
         pdf.setFontSize(12)
         pdf.text(35, 147, 'Última modificación: ')
         pdf.setFont('courier')
         pdf.setFontType('light')
         pdf.setFontSize(13)
         pdf.text(185, 147, obj.fechaEvaluacion)

         pdf.setFontType('bold')
         pdf.setFontSize(9)
         pdf.text(578,775, '1');

         pdf.addPage();
         pdf.setPage(pdf.page+1);

         pdf.setFont('helvetica')
         pdf.setFontType('bold')
         pdf.setFontSize(12)
         pdf.text(24, 20, 'Gráficas sobre la cobertura total del nivel de madurez y la de cada proceso en particular');

         pdf.setLineWidth(0.5)
         //margen izquierdo,top, anchura, alto
         pdf.line(25, 24, 527, 24)  

         //margen izquierdo,margen top,anchura, alto
         pdf.addImage(canvas11, 'PNG', 15, 25, 570, 0, undefined,'MEDIUM');

         pdf.setFontSize(9)
         pdf.text(578,775, '2');

         pdf.addPage();
       
         pdf.setFont('helvetica')
         pdf.setFontType('bold')
         pdf.setFontSize(12)
         pdf.text(24, 20, 'Calificación de los resultados de los procesos');

         pdf.setLineWidth(0.5)
         //margen izquierdo,top, anchura, alto
         pdf.line(25, 24, 527, 24)  

         pdf.setFontSize(9)

         var columns = [{
                        title: "Proceso",
                    },
                    {
                        title: "Resultados del proceso"
                    },
                    {
                        title: "Cobertura" 
                    }   
          ];
          const totalPagesExp = '{total_pages_count_string}';
          const footer = function(data) {
            let str = '' + (data.pageCount+2);
                    
            if (typeof pdf.putTotalPages === 'function') {
                str = str;    
            }
            pdf.text(str, 578, 775);
                  
          };

          const options = {
            afterPageContent: footer,
            margin: {top: 40},
            columnStyles: {
            0: {columnWidth: 10},
            1: {columnWidth: 100},
            2: {columnWidth: 2}
                        
            }
          };
    
        var res = pdf.autoTableHtmlToJson(document.getElementById("footable_3"));
 

        console.log(res.columns);

        pdf.autoTable(columns, res.data,options);

        if (typeof pdf.putTotalPages === 'function') {
            pdf.putTotalPages(totalPagesExp);
        }
        
        pdf.save(obj.nombreEvaluacion + " - Nivel " + obj.nivelesEmpresa);

      });

    });
    
  $('#evaluacionId').on('click',function(){

    var cadena3;
    var contad=0;
    $( "#imprimir" ).hide();
    $('.otraSeccion').remove();
    $('#tituloPestaña').remove();
    
    $('.divTablasEvaluaciones').show();
    $('.tablasEvaluaciones').show()
    $('.tablasEvaluaciones2').show()
  });                           

  $('#analisisId').on('click',function(){
    rest.obtenerEvaluacion(obj.nombreEvaluacion);
  });

}

function passwordOk(){
  $.toast({
    heading: 'Contraseña modificada',
    text: 'Modificación realizada. Inicie sesión para comprobar los cambios.',
    position: 'top-right',
    stack: false,
    icon: 'success'
  })

  setTimeout(function(){
        $.removeCookie("usr");
        location.replace('./login.html');
  },3000);
}

function passwordError(){
  $.toast({
    heading: 'Error',
    text: 'La contraseña antigua no es la registrada en nuestra base de datos.',
    position: 'top-right',
    stack: false,
    icon: 'error'
  })
}

function autoSave(obj){
    var nombreEvaluacion=obj.nombreEvaluacion;
    var arrayCampos=[];
    var today = new Date();
    var options = { year: 'numeric', month: 'numeric', day: 'numeric', hour12: false, hour: 'numeric', minute: 'numeric' };

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

function dashboard(){
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

  if ($.cookie("usr")){ 
    var usr=JSON.parse($.cookie("usr"));
    rest.obtenerEvaluaciones(usr.email);
  }
}

function acercaDe(){
  $('#acercaDe').remove();
  $('#panel').remove();
  $('#nuevoCasoForm').remove();
  $('#tablaEvaluacion').remove();

  $('#nuevoCasoBtnMenu').removeClass('active');
  $('#panelDeControlBtn').removeClass('active');
  $('#acercaDeBtn').addClass('active');
  $('#idPerfil').remove();

  var cadena='<div class="row" id="acercaDe"> <div class="col-sm-12"> <div class="panel panel-default card-view"> <div class="panel-heading"> <div class="pull-left"> <h6 style="font-weight:bold" class="panel-title txt-dark">Acerca de CertiSoft</h6> </div> <div class="clearfix"></div> </div>';
  cadena=cadena+'<div class="panel-wrapper collapse in"><div class="panel-body"><p class="muted" style="text-align: justify">Esta herramienta web ha sido desarrollada por <span style="font-weight:bold">José Ángel Martínez Martínez</span>, con motivo de la realización de su <span style="font-weight:bold">Trabajo Fin de Grado de Ingenería informática en la Universidad de Castilla-La Mancha</span>. Tras analizar la importancia y el creciente interés por parte de las empresas u organizaciones sobre las diferentes certificaciones que acreditan la calidad en sus procesos de desarrollo software, se presentó la oportunidad de desarrollar una aplicación que permitiese ofrecer un <span style="font-weight:bold">mejor soporte para la evaluación de sus procesos a las diferentes empresas u organizaciones involucradas en proyectos de software.</span></p>&nbsp';
  cadena=cadena+'<p style="text-align:justify">Las principales herramientas que existen actualmente para ofrecer ese soporte son aplicaciones de escritorio y presentan una pobre experiencia de usuario de cara a la usabilidad o accesibilidad de las mismas. Además, en dichas aplicaciones todavía no se existe la posibilidad de realizar evaluaciones para <span style="font-weight:bold">obtener certificaciones para la ISO/IEC 33000</span>. Por lo cual, en este TFG se propone desarrollar una aplicación web con diseño adaptable, que garantizase su uso en cualquier dispositivo, y que proporcione una mayor flexibilidad en cuanto a su uso y aporte facilidades didácticas respecto al marco de madurez y capacidad que presenta la familia de normas ISO/IEC 33000.</p>&nbsp';
  cadena=cadena+'<p><strong>¿Tienes dudas, preguntas o sugerencias?</strong></p><p>Escríbenos a <a href="mailto:soporte.certisoft@gmail.com" style="text-decoration:none;color:#337ab7" target="_blank">soporte.certisoft@gmail.com</a>.</p>';
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
      var estado="Pendiente";
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
        rest.crearCasoEvaluacion(usr.email,nombreEvaluacion,estado,today.toLocaleDateString('es-ES', options),nombreEmpresa,emailEmpresa,tlfEmpresa,personaEmpresa,nivelesEmpresa,nivelesInferioresSeleccionado);
      }
    }

    });
    
    // Para validar el formulario
    $('#formNuevoCaso').bootstrapValidator({
      message: 'El valor es incorrecto',
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
            $('#success_message').slideDown({ opacity: "show" }, "slow") 
                $('#formNuevoCaso').data('bootstrapValidator').resetForm();

            e.preventDefault();

            var $form = $(e.target);

            var bv = $form.data('bootstrapValidator');

            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
}

function anadirColores(fondoPanel,seccionTextoPanel,textoPanel){
      $(".wrapper.theme-1-active .fixed-sidebar-left .side-nav").css("background", fondoPanel);
      $(".fixed-sidebar-left .side-nav li.navigation-header span").css("color", seccionTextoPanel);
      $(".right-nav-text").css("color", textoPanel);

      $.toast({
                heading: 'Colores actualizados',
                text: 'Los cambios se han guardado correctamente.',
                position: 'top-right',
                stack: false,
                icon: 'success'
      })
}

