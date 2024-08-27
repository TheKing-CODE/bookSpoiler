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
		var novoDados = dados.reverse();
		//console.log(novoDados)
		preencherDados(novoDados);

		        
		} catch (erro) {
		    // Lida com erros de rede ou problemas de conversão
		    console.error('There has been a problem with your fetch operation:', erro);
		}
	}

		// Chama a função para obter os dados
		obterDados();
		$('#lista-posts .post').css('display','none');
		function preencherDados(dados){
			
			divClone = $('#lista-posts .post').clone();
			divPai = $('.main .posts .ul');			
			i = 0;
			//dados.reverse();
			dados.forEach(function(post){
				if( i >= 5){
					return;
				}				
	            var $divClone = divClone.clone();
			    // Atualiza o conteúdo do clone
			    $divClone.find('#titulo-post').text(post.Titulo);
			    $divClone.find('#descricao-post').text(formatText(post.Descricao));
			    $divClone.find('#data-post strong').text(formatData(post.Data));
			    $divClone.find('#link-autor-post').text('Autor: Allan Ch');
			    //$divClone.find('.link-button').attr('id',i);
				$divClone.find('.id-post-banco').text(post.ID);
			    $divClone.css('display','grid');
			    // Adiciona o clone atualizado ao DOM
			    $('#lista-posts').append($divClone);
			    i++;
			    $divClone.find('.link-button').on('click', function() {
	 				idPost = $(this).attr('id');
	 				carregarPost(post.ID);
        		});
			})
		}

		function formatText(texto){
			var novoTexto = texto.slice(0,255)+'...';
			return novoTexto;
		}

		function formatData(dataString) {
		    // Cria um objeto Date a partir da string de data no formato YYYY-MM-DD
		    const data = new Date(dataString);
		    
		    // Define as opções para a formatação da data
		    const opcoes = {
		        weekday: 'long',    // Nome completo do dia da semana (ex: "sábado")
		        day: 'numeric',     // Dia do mês (ex: "27")
		        month: 'long',       // Nome completo do mês (ex: "julho")
		        year: 'numeric'      // Ano (ex: "2024")
		    };

		    // Cria uma instância de Intl.DateTimeFormat com as opções especificadas
		    const formatador = new Intl.DateTimeFormat('pt-BR', opcoes);
		    
		    // Formata a data
		    const dataFormatada = formatador.format(data);
		    
		    return dataFormatada;
		}

		function carregarPost(id){			
			$('#Timeline').hide();
     		$('#containe').css('display', 'block');
			 const url = '/Pages/post.html'
			 carregarPage(url, 'testando');
			obterPost(id).then(dados => {
				
        		exibirPost(dados); // Manipule os dados retornados aqui
    		})
		}


		function carregarUrl(page) {
		  history.pushState({ page: page }, '', `/${page}`);		  
		};

		function obterPagePost(id) {
			fetch('/pages/crud/script/atualizar_post/atualizar_post.php', {
	            method: 'POST', // Método de envio dos dados
	            headers: {
            		'Content-Type': 'application/json'
        		},
        		body: JSON.stringify({ id })
	        })
	        .then(response => response.text()) // Espera uma resposta de texto (HTML)
	        .then(data => {
	            // Trata a resposta do servidor (HTML)
	        	
	        })
	        .catch(error => {
	            // Trata erros de envio
	            console.error('Erro:', error);
	            $.notify("Erro ao criar a publicação", "error");
	        });
		}

		async function obterPost(id) {
			try {
				// Define a URL do endpoint
				const url = 'http://localhost/Pages/crud/script/consultar_post/consultar_post.php';
		
				// Configura a solicitação POST com o ID no corpo
				const resposta = await fetch(url, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({ id: id }) // Envia o ID como JSON no corpo da requisição
				});
		
				// Verifica se a resposta foi bem-sucedida
				if (!resposta.ok) {
					throw new Error('Network response was not ok ' + resposta.statusText);
				}
		
				// Converte a resposta para JSON
				const dados = await resposta.json();
		
				// Processa os dados
				return dados;
		
			} catch (erro) {
				// Lida com erros de rede ou problemas de conversão
				console.error('There has been a problem with your fetch operation:', erro);
			}
		}
		

		function exibirPost(dados){

			preencherDadosNoPost(dados);
			
		}

		function carregarPage(url, targetElementId) {
	    	$.get(url, function(data) {
	        // Insere o conteúdo HTML obtido na página
				$('#containe' ).html('');
				$('#containe' ).html(data);	
				
	    	})
		    .fail(function() {
		        console.error("Erro ao carregar o HTML.");
		    });
		}

		function preencherDadosNoPost(dados){
			

			
			dados.forEach(function(post){
					  
				$('.containe .titulo-post').text('');
				$('.containe .titulo-post').text(post.Titulo);
				$('.containe .descricao').text('');
				$('.containe .descricao').html('<p>' + post.Descricao + '</p>');
				
			})
				
		}

});
