$(function(){

	$('#button-mobile').click(function(){
		$('#itens').fadeIn(2000);
		$("#logo-mobile").fadeOut(1000);		
		$('#itens').css('display','flex');
		$("#logo-mobile").css('display','none');
		/*console.log("Testando");*/
	});

	$('#button-itens').click(function(){
		$("#logo-mobile").fadeIn(2000);
		$('#itens').fadeOut(1000);
		$('#itens').css('display','none');
		/*console.log("Testando");*/
	});	

})