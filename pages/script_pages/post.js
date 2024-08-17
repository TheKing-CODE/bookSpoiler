$(function(){
	$('.campo-buttons .curti-post').click(function(){
		console.log("Click");
		Curti_post();
	});

	$('#button-modal').click(function(){
		Compartilha();
	});

})

function Curti_post(){
	$('#icon-curti').fadeOut(0); //main .campo-buttons
	$('#icon-curtido').fadeIn(); //main .campo-buttons
}


function Compartilha(){
	$('#button-modal').text('');
	$('#button-modal').text('Movido para a área de transferência');
	$('#button-modal').css('background-color', 'rgba(239, 51, 83, 0.5)');
}
