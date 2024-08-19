$('#Visualizar-button').click(function(){
    var Dados = getDadosForm();
    enviarDados(Dados);
})

$('#limpar-button').click(function(){
    document.getElementById('form-dados').reset();
})

function getDadosForm(){
   var Dados = {
    titulo: $('#titulo-post').val(),
    resumo: $('#resumo-post').val()
   } 
   return Dados;
}

function enviarDados(dados){
	const queryString = new URLSearchParams(dados).toString();
    // Construa a URL completa
	const url = `/Pages/post_visualizacao.html?${queryString}`;	
	//Abre uma nova aba
	window.open(url, '_blank');		
}