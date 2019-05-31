var sendgrid = require("sendgrid")("jamweb","pepepepe1&");

var urlRemota="https://certisoft.herokuapp.com/";
var url="http://127.0.0.1:5000/";

module.exports.enviarEmail=function(nombre,direccion,key){
	var email = new sendgrid.Email();
	email.addTo(direccion);
	//email.setFrom('battlecards10@gmail.com');
	email.setFrom('soporte.certisoft@gmail.com');
	email.setSubject('Confirmación de cuenta en CertiSoft'); 
	
	//email.setHtml('<body style="background-color:#D8FFDC; border-style: solid; border-width: medium;"> <h1 style= "font-family:courier; text-align:center;">Bienvenido a CertiSoft</h1> <p style="font-family:courier; text-align:center;"> Estimado '+direccion+' confírmenos la cuenta en el siguiente enlace!</p> <p style="font-family:courier; text-align:center;"><a href="'+url+'confirmarUsuario/'+direccion+'/'+key+'">'+msg+'</a></p><p><img src="https://github.com/jamweb/certisoft/blob/master/dist/img/logo.png?raw=true" class="img-rounded" style= "display: block; margin-left: auto; margin-right: auto;"/></p></body>');
	

	

	email.setHtml('<div bgcolor="#fafafa" style="margin:0px;padding:0px">'+
		'<table style="padding:0;max-width:100%;margin-left:auto;margin-right:auto;border-spacing:0;border-collapse:collapse;background-color:#fafafa;color:#333333;font-family:sans-serif" width="100%">'+
		' <tbody><tr><td style="min-width:10px">&nbsp;</td>'+
		'<td style="font-size:14px;color:rgb(50,50,50);font-family:Arial;margin:0;padding:0 0 30px;background:#fafafa;text-align:center;width:584px;padding-top:0;padding-left:0;padding-right:0;padding-bottom:0;margin-left:0;margin-right:0;width:585;max-width:585px">'+
		'<table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" style="margin:0 auto;border-spacing:0;text-align:left;border:1px solid #cbcbcb;border-radius:10px;padding:20px;max-width:585px" width="100%"><tbody><tr>'+
		'<td><table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse"><tbody><tr><td style="font-family:Arial,Helvetica,sans-serif;font-size:11px;line-height:13px;color:#333333;max-width:585px">&nbsp;</td></tr></tbody></table></td></tr>'+
		'<tr><td><table align="left" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse"><tbody><tr><td width="197"><a href="http://certisoft.herokuapp.com/" target="_blank"><img alt="CertiSoft" src="https://github.com/jamweb/certisoft/blob/master/dist/img/logo.png?raw=true" style="display:block;border-width:0px;border-style:solid" class="CToWUd"></a></td></tr></tbody></table></td></tr>'+
		'<tr><td height="20">&nbsp;</td></tr><tr><td height="15" style="font-size:12px;line-height:20px;padding:0;border-top:1px solid #dddddd;width:510px">&nbsp;</td></tr>'+
		'<tr><td align="center" style="font-size:14px;line-height:26px;color:#111111;font-family:Helvetica,Arial,sans-serif"><table border="0" cellpadding="0" cellspacing="0" style="font-family:Helvetica,Arial,sans-serif;font-size:15px" width="100%"><tbody>'+
		'<tr><td style="padding-bottom:10px;padding-top:10px">Hola '+nombre+',<p style="font-size:20px"><strong>¡Estás a un paso de activar tu cuenta en CertiSoft!</strong></p><p style="padding-top:10px;padding-bottom:20px">Haz clic en el botón para poder evaluar tus proyectos de software:</p><table class="m_-5794247025677382622row" style="width:100%;padding-bottom:15px"><tbody><tr><td style="text-align:center;font-size:16px"><span style="font-weight:bold;color:#999999">usuario:</span> <strong><a href="mailto:'+direccion+'" target="_blank">'+direccion+'</a></strong></td></tr></tbody></table><table width="280" height="18" border="0" align="center" cellpadding="0" cellspacing="0" style="border-radius:4px"><tbody><tr><td style="font-size:30px;width:100%;text-align:center" height="20" align="center"><a href="'+url+'confirmarUsuario/'+direccion+'/'+key+'"'+' style="display:inline-block;background-color:#2ecd99;border-radius:10px;height:auto;width:100%;padding-top:15px;padding-bottom:15px;text-decoration:none;color:#ffffff" target="_blank">¡Activa tu cuenta ya!</a></td></tr></tbody></table><p style="padding-top:30px">En caso de que el botón no funcione, copia y pega el siguiente enlace en tu navegador.</p><p><a target="_blank" href="'+url+'confirmarUsuario/'+direccion+'/'+key+'">'+url+'confirmarUsuario/'+direccion+'/'+key+'</a></p><p style="padding-top:30px"><strong>Con tu cuenta de CertiSoft podrás: </strong></p><ul style="list-style-type:none;padding-bottom:30px"><li><img alt="check" src="https://github.com/jamweb/certisoft/blob/master/dist/img/check.png?raw=true" style="border-width:0px;border-style:solid" class="CToWUd">Realizar evaluaciones de tus proyectos software de cara a a obtener la certificación ISO/IEC 33000.<br><br></li><li><img alt="check" src="https://github.com/jamweb/certisoft/blob/master/dist/img/check.png?raw=true" style="border-width:0px;border-style:solid" class="CToWUd">Acceder a las evaluaciones desde cualquier dispositivo.<br><br></li><li><img alt="check" src="https://github.com/jamweb/certisoft/blob/master/dist/img/check.png?raw=true" style="border-width:0px;border-style:solid" class="CToWUd">Generar informes con los resultados con la posibilidad de exportarlos a diferentes formatos.<br></li></ul><p><strong>¿Tienes dudas, preguntas o sugerencias?</strong></p><p>Escríbenos a <a href="mailto:soporte.certisoft@gmail.com" style="text-decoration:none;color:#337ab7" target="_blank">soporte.certisoft@gmail.com</a>.</p></td></tr>'+
		'</tbody></table></td></tr><tr><td height="10" style="font-size:12px;line-height:10px;padding:0;border-top:1px solid #dddddd;max-width:510px;padding-top:15px">&nbsp;</td></tr>'+
		'<tr><td><table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse" width="100%"><tbody>'+
		'<tr><td width="61"><img alt="-" height="61" src="https://github.com/jamweb/certisoft/blob/master/dist/img/jam.png?raw=true" style="display:block;border-width:0px;border-style:solid;margin-right:10px;" width="61" class="CToWUd"></td><td style="line-height:16px;color:#333333;font-family:Helvetica,Arial,sans-serif;color:#333333;font-size:13px" width="228"><p>Desarrollador de CertiSoft<br><a href="mailto:contacto@jamartinez.es" target="_blank">contacto@jamartinez.es</a></p></td><td width="285"><table align="right" cellpadding="0" class="m_-5794247025677382622nomob"><tbody><tr><td width="40"><a href="https://twitter.com/jamartinezWEB" target="_blank"><img alt="twitter" class="m_-5794247025677382622rrss CToWUd" src="https://github.com/jamweb/certisoft/blob/master/dist/img/twitter.png?raw=true" style="border-width:0px;border-style:solid;width:34px;height:34px" width="100%"></a></td><td width="40"><a href="https://www.linkedin.com/in/joseangelmartinezmartinez/" target="_blank"><img alt="linkedin" class="m_-5794247025677382622rrss CToWUd" src="https://github.com/jamweb/certisoft/blob/master/dist/img/linkedin.png?raw=true" style="border-width:0px;border-style:solid;width:34px;height:34px" width="100%"></a></td></tr></tbody></table></td></tr>'+
		'</tbody></table></td></tr></tbody></table></td><td style="background-color:#fafafa;min-width:10px">&nbsp;</td>'+
		'</tr><tr><td style="background-color:#fafafa;min-width:10px">&nbsp;</td><td height="30" style="text-align:left;width:585px;max-width:585px" width="585"><p style="font-family:Arial,sans-serif;font-size:12px;color:rgb(100,100,100);line-height:18px;padding:0;font-family:sans-serif;text-align:left;padding-top:15px;padding-bottom:15px"> Si deseas ejercer cualquiera de tus derechos de acceso, rectificación o cancelación de tus datos personales, puedes contactar con <a href="mailto:soporte.certisoft@gmail.com" target="_blank">soporte.certisoft@gmail.com</a>.</p></td><td style="background-color:#fafafa;min-width:10px">&nbsp;</td></tr>'+
		'</tbody></table><div class="yj6qo"></div><div class="adL"></div></div>');


	sendgrid.send(email);	
}

module.exports.enviarEmailPassword=function(nombre,direccion,clave){
	var email = new sendgrid.Email();
	email.addTo(direccion);
	//email.setFrom('battlecards10@gmail.com');
	email.setFrom('soporte.certisoft@gmail.com');
	email.setSubject('Recuperación de contraseña en CertiSoft'); 
	
	//email.setHtml('<body style="background-color:#D8FFDC; border-style: solid; border-width: medium;"> <h1 style= "font-family:courier; text-align:center;">Bienvenido a CertiSoft</h1> <p style="font-family:courier; text-align:center;"> Estimado '+direccion+' confírmenos la cuenta en el siguiente enlace!</p> <p style="font-family:courier; text-align:center;"><a href="'+url+'confirmarUsuario/'+direccion+'/'+key+'">'+msg+'</a></p><p><img src="https://github.com/jamweb/certisoft/blob/master/dist/img/logo.png?raw=true" class="img-rounded" style= "display: block; margin-left: auto; margin-right: auto;"/></p></body>');
	

	

	email.setHtml('<div bgcolor="#fafafa" style="margin:0px;padding:0px">'+
		'<table style="padding:0;max-width:100%;margin-left:auto;margin-right:auto;border-spacing:0;border-collapse:collapse;background-color:#fafafa;color:#333333;font-family:sans-serif" width="100%">'+
		' <tbody><tr><td style="min-width:10px">&nbsp;</td>'+
		'<td style="font-size:14px;color:rgb(50,50,50);font-family:Arial;margin:0;padding:0 0 30px;background:#fafafa;text-align:center;width:584px;padding-top:0;padding-left:0;padding-right:0;padding-bottom:0;margin-left:0;margin-right:0;width:585;max-width:585px">'+
		'<table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" style="margin:0 auto;border-spacing:0;text-align:left;border:1px solid #cbcbcb;border-radius:10px;padding:20px;max-width:585px" width="100%"><tbody><tr>'+
		'<td><table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse"><tbody><tr><td style="font-family:Arial,Helvetica,sans-serif;font-size:11px;line-height:13px;color:#333333;max-width:585px">&nbsp;</td></tr></tbody></table></td></tr>'+
		'<tr><td><table align="left" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse"><tbody><tr><td width="197"><a href="http://certisoft.herokuapp.com/" target="_blank"><img alt="CertiSoft" src="https://github.com/jamweb/certisoft/blob/master/dist/img/logo.png?raw=true" style="display:block;border-width:0px;border-style:solid" class="CToWUd"></a></td></tr></tbody></table></td></tr>'+
		'<tr><td height="20">&nbsp;</td></tr><tr><td height="15" style="font-size:12px;line-height:20px;padding:0;border-top:1px solid #dddddd;width:510px">&nbsp;</td></tr>'+
		'<tr><td align="center" style="font-size:14px;line-height:26px;color:#111111;font-family:Helvetica,Arial,sans-serif"><table border="0" cellpadding="0" cellspacing="0" style="font-family:Helvetica,Arial,sans-serif;font-size:15px" width="100%"><tbody>'+
		'<tr><td style="padding-bottom:10px;padding-top:10px">Hola '+nombre+',<p style="font-size:20px"><strong>¡Has solicitado recuperar la contraseña de tu cuenta en CertiSoft!</strong></p><p style="padding-top:10px;padding-bottom:20px">A continuación te facilitamos tu datos para acceder a CertiSoft:</p><p style="font-weight:bold;color:#999999">usuario: <strong><a href="mailto:'+direccion+'" target="_blank">'+direccion+'</a></strong></p><p style="font-weight:bold;color:#999999">contraseña: <strong><span style="color:#000000;">'+clave+'</span></strong></p><table width="280" height="18" border="0" align="center" cellpadding="0" cellspacing="0" style="border-radius:4px"><tbody><tr><td style="font-size:30px;width:100%;text-align:center" height="20" align="center"><a href="'+url+'>'+'class="m_-5794247025677382622active-button" style="display:inline-block;background-color:#2ecd99;border-radius:10px;height:auto;width:100%;padding-top:15px;padding-bottom:15px;text-decoration:none;color:#ffffff" target="_blank">¡Accede a CertiSoft!</a></td></tr></tbody></table><p style="padding-top:30px"><strong>Con tu cuenta de CertiSoft podrás: </strong></p><ul style="list-style-type:none;padding-bottom:30px"><li><img alt="check" src="https://github.com/jamweb/certisoft/blob/master/dist/img/check.png?raw=true" style="border-width:0px;border-style:solid" class="CToWUd">Realizar evaluaciones de tus proyectos software de cara a a obtener la certificación ISO/IEC 33000.<br><br></li><li><img alt="check" src="https://github.com/jamweb/certisoft/blob/master/dist/img/check.png?raw=true" style="border-width:0px;border-style:solid" class="CToWUd">Acceder a las evaluaciones desde cualquier dispositivo.<br><br></li><li><img alt="check" src="https://github.com/jamweb/certisoft/blob/master/dist/img/check.png?raw=true" style="border-width:0px;border-style:solid" class="CToWUd">Generar informes con los resultados con la posibilidad de exportarlos a diferentes formatos.<br></li></ul><p><strong>¿Tienes dudas, preguntas o sugerencias?</strong></p><p>Escríbenos a <a href="mailto:soporte.certisoft@gmail.com" style="text-decoration:none;color:#337ab7" target="_blank">soporte.certisoft@gmail.com</a>.</p></td></tr>'+
		'</tbody></table></td></tr><tr><td height="10" style="font-size:12px;line-height:10px;padding:0;border-top:1px solid #dddddd;max-width:510px;padding-top:15px">&nbsp;</td></tr>'+
		'<tr><td><table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse" width="100%"><tbody>'+
		'<tr><td width="61"><img alt="-" height="61" src="https://github.com/jamweb/certisoft/blob/master/dist/img/jam.png?raw=true" style="display:block;border-width:0px;border-style:solid;margin-right:10px;" width="61" class="CToWUd"></td><td style="line-height:16px;color:#333333;font-family:Helvetica,Arial,sans-serif;color:#333333;font-size:13px" width="228"><p>Desarrollador de CertiSoft<br><a href="mailto:contacto@jamartinez.es" target="_blank">contacto@jamartinez.es</a></p></td><td width="285"><table align="right" cellpadding="0" class="m_-5794247025677382622nomob"><tbody><tr><td width="40"><a href="https://twitter.com/jamartinezWEB" target="_blank"><img alt="twitter" class="m_-5794247025677382622rrss CToWUd" src="https://github.com/jamweb/certisoft/blob/master/dist/img/twitter.png?raw=true" style="border-width:0px;border-style:solid;width:34px;height:34px" width="100%"></a></td><td width="40"><a href="https://www.linkedin.com/in/joseangelmartinezmartinez/" target="_blank"><img alt="linkedin" class="m_-5794247025677382622rrss CToWUd" src="https://github.com/jamweb/certisoft/blob/master/dist/img/linkedin.png?raw=true" style="border-width:0px;border-style:solid;width:34px;height:34px" width="100%"></a></td></tr></tbody></table></td></tr>'+
		'</tbody></table></td></tr></tbody></table></td><td style="background-color:#fafafa;min-width:10px">&nbsp;</td>'+
		'</tr><tr><td style="background-color:#fafafa;min-width:10px">&nbsp;</td><td height="30" style="text-align:left;width:585px;max-width:585px" width="585"><p style="font-family:Arial,sans-serif;font-size:12px;color:rgb(100,100,100);line-height:18px;padding:0;font-family:sans-serif;text-align:left;padding-top:15px;padding-bottom:15px"> Si deseas ejercer cualquiera de tus derechos de acceso, rectificación o cancelación de tus datos personales, puedes contactar con <a href="mailto:soporte.certisoft@gmail.com" target="_blank">soporte.certisoft@gmail.com</a>.</p></td><td style="background-color:#fafafa;min-width:10px">&nbsp;</td></tr>'+
		'</tbody></table><div class="yj6qo"></div><div class="adL"></div></div>');


	sendgrid.send(email);	
}

