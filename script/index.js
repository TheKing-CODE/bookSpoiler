$(function(){
	 // URL do seu endpoint PHP
	const url = 'http://localhost/Pages/crud/script/consultar_post/consultar_post.php';

	// Função para buscar dados do endpoint
	async function obterDados() {
	try {
		// Faz a solicitação GET ao endpoint
		const resposta = await fetch(url);

		// Verifica se a resposta foi bem-sucedida
		if (!resposta.ok) {
			throw new Error('Network response was not ok ' + resposta.statusText);
		}

		// Converte a resposta para JSON
		const dados = await resposta.json();

		// Processa os dados
		//console.log(dados);
		preencherDados(dados);

		        
		} catch (erro) {
		    // Lida com erros de rede ou problemas de conversão
		    console.error('There has been a problem with your fetch operation:', erro);
		    }
		}

		// Chama a função para obter os dados
		obterDados();

		function preencherDados(dados){
			divClone = $('#lista-posts .post').clone();
			divPai = $('.main .posts .ul');			
			
			dados.reverse();
			dados.forEach(function(post){
	            var $divClone = divClone.clone();
			    // Atualiza o conteúdo do clone
			    $divClone.find('#titulo-post').text(post.Titulo);
			    $divClone.find('#descricao-post').text(post.Descricao);
			    $divClone.find('#data-post strong').text(post.Data);
			    $divClone.find('#link-autor-post').text('Autor: J.R.R. Tolkien');
			    
			    // Adiciona o clone atualizado ao DOM
			    $('#lista-posts').append($divClone);
			})
		}
});
