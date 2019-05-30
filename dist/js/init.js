 "use strict"; 
/*****Ready function start*****/
$(document).ready(function(){
	philbert();
	/*var urlLogin = 'http://localhost:5000/login.html';
	var urlRemotaLogin = 'http://certisoft.herokuapp.com/login.html';

	var urlRegistro = 'http://localhost:5000/registro.html';
	var urlRemotaRegistro = 'http://certisoft.herokuapp.com/registro.html';*/

	var $preloader = $(".preloader-it > .la-anim-1");
	$preloader.addClass('la-animate');

	/*if(document.referrer == window.location.href) {
       alert("VIENE REDIRECCIONADA");
    }*/


   


	$('#registroBtn').on('click',function(){
		if ($("#nombreRegistroId").hasClass("has-success") && $("#emailRegistroId").hasClass("has-success") && $("#passwordRegistroId").hasClass("has-success") && $("#repasswordRegistroId").hasClass("has-success") && $("#condicionesUsoRegistroId").hasClass("has-success") ){
			var nombre=$("#nombreReg").val();
			var email=$("#emailReg").val();
			var password=$("#passwordReg").val();
			var experiencia=$("#experienciaReg option:selected").text();

			
			//alert(experiencia);
			rest.registrarUsuario(nombre,email,password,experiencia);
		}	
 	}); 

 	$('#loginBtn').on('click',function(){
		
		var email=$("#emailLog").val();
		var password=$("#passwordLog").val();
		//alert(email + password);
			
		rest.loginUsuario(email,password);
			
 	}); 

 	$('#recuperarBtn').on('click',function(){
		if ($("#emailRecuperarId").hasClass("has-success")){
			var email=$("#emailRec").val();
			
			//alert(email);
			rest.recuperarPassword(email);
		}	
 	});   


 	  
          
  
	// REDIRECCIÓN AL LOGIN
	$('#modalRegistroOkBtn, #modalRegistroErrorBtn, #modalCuentaActivadaBtn').on('click',function(){
		location.replace('./login.html'); 

	});

	$('#modalRecuperarErrorBtn').on('click',function(){
		location.replace('./registro.html'); 

	});

	$('#modalNuevoCasoOkBtn').on('click',function(){
		location.replace('./evaluacion.html'); 

	});


	


	


 
    $('#formRegistro, #formRecuperarPassword, #formNuevoCaso').bootstrapValidator({
    	message: 'El valor es incorrecto',
    	
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            //valid: 'glyphicon glyphicon-ok',
            //invalid: 'glyphicon glyphicon-remove',
            //validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
        	nombreRegistro: {
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
        	},
        	confirmPassword: {
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
        	},
        	condicionesUsoRegistro: {
                validators: {
                    notEmpty: {
                        message: 'Para registrarse debes aceptar las condiciones de uso'
                    }
                   
                }
            }
        }
           
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#formRegistro, #formRecuperarPassword').data('bootstrapValidator').resetForm();

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





        




});
/*****Ready function end*****/

/*****Load function start*****/
$(window).load(function(){
	$(".preloader-it").delay(500).fadeOut("slow");
	/*Progress Bar Animation*/
	var progressAnim = $('.progress-anim');
	if( progressAnim.length > 0 ){
		for(var i = 0; i < progressAnim.length; i++){
			var $this = $(progressAnim[i]);
			$this.waypoint(function() {
			var progressBar = $(".progress-anim .progress-bar");
			for(var i = 0; i < progressBar.length; i++){
				$this = $(progressBar[i]);
				$this.css("width", $this.attr("aria-valuenow") + "%");
			}
			}, {
			  triggerOnce: true,
			  offset: 'bottom-in-view'
			});
		}
	}
});
/*****Load function* end*****/

/***** Full height function start *****/
var setHeightWidth = function () {
	var height = $(window).height();
	var width = $(window).width();
	$('.full-height').css('height', (height));
	$('.page-wrapper').css('min-height', (height));
	
	/*Right Sidebar Scroll Start*/
	if(width<=1007){
		$('#chat_list_scroll').css('height', (height - 270));
		$('.fixed-sidebar-right .chat-content').css('height', (height - 279));
		$('.fixed-sidebar-right .set-height-wrap').css('height', (height - 219));
		
	}
	else {
		$('#chat_list_scroll').css('height', (height - 204));
		$('.fixed-sidebar-right .chat-content').css('height', (height - 213));
		$('.fixed-sidebar-right .set-height-wrap').css('height', (height - 153));
	}	
	/*Right Sidebar Scroll End*/
	
	/*Vertical Tab Height Cal Start*/
	var verticalTab = $(".vertical-tab");
	if( verticalTab.length > 0 ){ 
		for(var i = 0; i < verticalTab.length; i++){
			var $this =$(verticalTab[i]);
			$this.find('ul.nav').css(
			  'min-height', ''
			);
			$this.find('.tab-content').css(
			  'min-height', ''
			);
			height = $this.find('ul.ver-nav-tab').height();
			$this.find('ul.nav').css(
			  'min-height', height + 40
			);
			$this.find('.tab-content').css(
			  'min-height', height + 40
			);
		}
	}
	/*Vertical Tab Height Cal End*/
};
/***** Full height function end *****/

/***** philbert function start *****/
var $wrapper = $(".wrapper");
var philbert = function(){
	
	/*Counter Animation*/
	var counterAnim = $('.counter-anim');
	if( counterAnim.length > 0 ){
		counterAnim.counterUp({ delay: 10,
        time: 1000});
	}
	
	/*Tooltip*/
	if( $('[data-toggle="tooltip"]').length > 0 )
		$('[data-toggle="tooltip"]').tooltip();
	
	/*Popover*/
	if( $('[data-toggle="popover"]').length > 0 )
		$('[data-toggle="popover"]').popover()
	
	
	/*Sidebar Collapse Animation*/
	var sidebarNavCollapse = $('.fixed-sidebar-left .side-nav  li .collapse');
	var sidebarNavAnchor = '.fixed-sidebar-left .side-nav  li a';
	$(document).on("click",sidebarNavAnchor,function (e) {
		if ($(this).attr('aria-expanded') === "false")
				$(this).blur();
		$(sidebarNavCollapse).not($(this).parent().parent()).collapse('hide');
	});
	
	/*Panel Remove*/
	$(document).on('click', '.close-panel', function (e) {
		var effect = $(this).data('effect');
			$(this).closest('.panel')[effect]();
		return false;	
	});
	
	/*Accordion js*/
		$(document).on('show.bs.collapse', '.panel-collapse', function (e) {
		$(this).siblings('.panel-heading').addClass('activestate');
	});
	
	$(document).on('hide.bs.collapse', '.panel-collapse', function (e) {
		$(this).siblings('.panel-heading').removeClass('activestate');
	});
	
	/*Sidebar Navigation*/
	$(document).on('click', '#toggle_nav_btn,#open_right_sidebar,#setting_panel_btn', function (e) {
		$(".dropdown.open > .dropdown-toggle").dropdown("toggle");
		return false;
	});
	$(document).on('click', '#toggle_nav_btn', function (e) {
		$wrapper.removeClass('open-right-sidebar open-setting-panel').toggleClass('slide-nav-toggle');
		return false;
	});
	
	$(document).on('click', '#open_right_sidebar', function (e) {
		$wrapper.toggleClass('open-right-sidebar').removeClass('open-setting-panel');
		return false;
	
	});
	
	$(document).on('click','.product-carousel .owl-nav',function(e){
		return false;
	});
	
	$(document).on('click', 'body', function (e) {
		if($(e.target).closest('.fixed-sidebar-right,.setting-panel').length > 0) {
			return;
		}
		$('body > .wrapper').removeClass('open-right-sidebar open-setting-panel');
		return;
	});
	
	$(document).on('show.bs.dropdown', '.nav.navbar-right.top-nav .dropdown', function (e) {
		$wrapper.removeClass('open-right-sidebar open-setting-panel');
		return;
	});
	
	$(document).on('click', '#setting_panel_btn', function (e) {
		$wrapper.toggleClass('open-setting-panel').removeClass('open-right-sidebar');
		return false;
	});
	$(document).on('click', '#toggle_mobile_nav', function (e) {
		$wrapper.toggleClass('mobile-nav-open').removeClass('open-right-sidebar');
		return;
	});
	

	$(document).on("mouseenter mouseleave",".wrapper > .fixed-sidebar-left", function(e) {
		if (e.type == "mouseenter") {
			$wrapper.addClass("sidebar-hover"); 
		}
		else { 
			$wrapper.removeClass("sidebar-hover");  
		}
		return false;
	});
	
	$(document).on("mouseenter mouseleave",".wrapper > .setting-panel", function(e) {
		if (e.type == "mouseenter") {
			$wrapper.addClass("no-transition"); 
		}
		else { 
			$wrapper.removeClass("no-transition");  
		}
		return false;
	});
	
	/*Todo*/
	var random = Math.random();
	$(document).on("keypress","#add_todo",function (e) {
		if ((e.which == 13)&&(!$(this).val().length == 0))  {
				$('<li class="todo-item"><div class="checkbox checkbox-success"><input type="checkbox" id="checkbox'+random+'"/><label for="checkbox'+random+'">' + $('.new-todo input').val() + '</label></div></li><li><hr class="light-grey-hr"/></li>').insertAfter(".todo-list li:last-child");
				$('.new-todo input').val('');
		} else if(e.which == 13) {
			alert('Please type somthing!');
		}
		return;
	});


	
	
	/*Slimscroll*/
	$('.nicescroll-bar').slimscroll({height:'100%',color: '#878787', disableFadeOut : true,borderRadius:0,size:'4px',alwaysVisible:false});
	$('.message-nicescroll-bar').slimscroll({height:'229px',size: '4px',color: '#878787',disableFadeOut : true,borderRadius:0});
	$('.message-box-nicescroll-bar').slimscroll({height:'350px',size: '4px',color: '#878787',disableFadeOut : true,borderRadius:0});
	$('.product-nicescroll-bar').slimscroll({height:'346px',size: '4px',color: '#878787',disableFadeOut : true,borderRadius:0});
	$('.app-nicescroll-bar').slimscroll({height:'162px',size: '4px',color: '#878787',disableFadeOut : true,borderRadius:0});
	$('.todo-box-nicescroll-bar').slimscroll({height:'310px',size: '4px',color: '#878787',disableFadeOut : true,borderRadius:0});
	$('.users-nicescroll-bar').slimscroll({height:'370px',size: '4px',color: '#878787',disableFadeOut : true,borderRadius:0});
	$('.users-chat-nicescroll-bar').slimscroll({height:'257px',size: '4px',color: '#878787',disableFadeOut : true,borderRadius:0});
	$('.chatapp-nicescroll-bar').slimscroll({height:'543px',size: '4px',color: '#878787',disableFadeOut : true,borderRadius:0});
	$('.chatapp-chat-nicescroll-bar').slimscroll({height:'483px',size: '4px',color: '#878787',disableFadeOut : true,borderRadius:0});
	
	
	


	/*Refresh Init Js*/
	var refreshMe = '.refresh';
	$(document).on("click",refreshMe,function (e) {
		var panelToRefresh = $(this).closest('.panel').find('.refresh-container');
		var dataToRefresh = $(this).closest('.panel').find('.panel-wrapper');
		var loadingAnim = panelToRefresh.find('.la-anim-1');
		panelToRefresh.show();
		setTimeout(function(){
			loadingAnim.addClass('la-animate');
		},100);
		function started(){} //function before timeout
		setTimeout(function(){
			function completed(){} //function after timeout
			panelToRefresh.fadeOut(800);
			setTimeout(function(){
				loadingAnim.removeClass('la-animate');
			},800);
		},1500);
		  return false;
	});
	
	/*Fullscreen Init Js*/
	$(document).on("click",".full-screen",function (e) {
		$(this).parents('.panel').toggleClass('fullscreen');
		$(window).trigger('resize');
		return false;
	});
	
	/*Nav Tab Responsive Js*/
	$(document).on('show.bs.tab', '.nav-tabs-responsive [data-toggle="tab"]', function(e) {
		var $target = $(e.target);
		var $tabs = $target.closest('.nav-tabs-responsive');
		var $current = $target.closest('li');
		var $parent = $current.closest('li.dropdown');
			$current = $parent.length > 0 ? $parent : $current;
		var $next = $current.next();
		var $prev = $current.prev();
		$tabs.find('>li').removeClass('next prev');
		$prev.addClass('prev');
		$next.addClass('next');
		return;
	});






};
/***** philbert function end *****/



/***** Resize function start *****/
$(window).on("resize", function () {
	setHeightWidth();
	
	
}).resize();
/***** Resize function end *****/

