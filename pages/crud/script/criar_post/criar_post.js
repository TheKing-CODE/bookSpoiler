$('#Visualizar-button').click(function(){
    var Dados = getDadosForm();
    
    enviarDados(Dados);
})

$('#limpar-button').click(function(){
    document.getElementById('form-dados').reset();
})

document.getElementById('form-dados').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const form = event.target; // Obtém o formulário
    const formData = new FormData(form); // Cria um FormData a partir do formulário

    fetch('/pages/crud/script/criar_post/criar_post.php', {
        method: 'POST', // Método de envio dos dados
        body: formData // Corpo da requisição com os dados do formulário
    })
    .then(response => response.text()) // Espera uma resposta de texto (HTML)
    .then(data => {
        // Trata a resposta do servidor (HTML)
       $.notify("Post criado com sucesso", "success");
    })
    .catch(error => {
        // Trata erros de envio
        console.error('Erro:', error);
        $.notify("Erro ao criar a publicação", "error");
    });


});


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