// JavaScript Document
$(document).ready(function() {
	
	//Asigno accordion en home 
	$( "#accordion" ).accordion({
			autoHeight: false,
			navigation: true
	});
	var dias = new Array();
	var eventos = new Array();
	//dia en formato español dia/mes/año
	dias['09/04/2015'] = 'XV Exposición Ropero Solidario y III Recogida de Alimentos';
	dias['10/04/2015'] = 'XV Exposición Ropero Solidario y III Recogida de Alimentos';
	dias['13/04/2015'] = 'XV Exposición Ropero Solidario y III Recogida de Alimentos';
	dias['14/04/2015'] = 'XV Exposición Ropero Solidario y III Recogida de Alimentos';
	
	dias['09/12/2014'] = 'Entrega de juguetes';
	dias['10/12/2014'] = 'Entrega de juguetes';
	dias['11/12/2014'] = 'Entrega de juguetes';
	
	dias['18/12/2014'] = 'Mercadillo solidario y recogida de alimentos';
	dias['19/12/2014'] = 'Mercadillo solidario y recogida de alimentos';

	
	//aqui la fecha va en formato ingles mes/dia/año
	eventos[0] = new Date("04/09/2015");
	eventos[1] = new Date("04/10/2015");
	eventos[2] = new Date("04/13/2015");
	eventos[3] = new Date("04/14/2015");
	
	eventos[4] = new Date("12/09/2014");
	eventos[5] = new Date("12/10/2014");
	eventos[6] = new Date("12/11/2014");
	
	eventos[7] = new Date("12/18/2014");
	eventos[8] = new Date("12/19/2014");

	
	//Variables de idioma para datapicker
	$.datepicker.regional['es'] = {
		closeText: 'Cerrar',
		prevText: '&#x3c;Ant',
		nextText: 'Sig&#x3e;',
		currentText: 'Hoy',
		monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio',
		'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
		monthNamesShort: ['Ene','Feb','Mar','Abr','May','Jun',
		'Jul','Ago','Sep','Oct','Nov','Dic'],
		dayNames: ['Domingo','Lunes','Martes','Mi&eacute;rcoles','Jueves','Viernes','S&aacute;bado'],
		dayNamesShort: ['Dom','Lun','Mar','Mi&eacute;','Juv','Vie','S&aacute;b'],
		dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','S&aacute;'],
		weekHeader: 'Sm',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	//Asigno las variables a datapicker
	$.datepicker.setDefaults($.datepicker.regional['es']);
	
	//Asigno datapicker para calendario sidebar izquierda
	$( "#datepicker" ).datepicker({
		onSelect:function(d){
			if(dias[d])
			{	
				alert(dias[d]);
			}
		},
		beforeShowDay:function(date) {
       	 	var result = [true, '', null];
       	 	var matching = $.grep(eventos, function(event) {
            	return event.valueOf() === date.valueOf();
        	});
        
        	if (matching.length) {

           		result = [true, 'highlight', null];
        	}
        	return result;
		}

	});
	
	//boton para el logo de la cabecera
	$("#boton_logo").live('click',function(){
		
		//window.location.href = "quienes_somos.html";
		$(location).attr('href','index.html');
		
		
		//$('#menu_izquierdo img').attr('src','500');
			
	});
	
});