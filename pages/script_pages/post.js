$(function(){
   

	$('.campo-buttons .curti-post').click(function(){
		console.log("Click");
		Curti_post();
	});

	$('#button-modal').click(function(){
		Compartilha();
	});

    $('main .button-compartilha').click(function(){        
        preencherDadosNoModal();
    })

    
})

function Curti_post(){
	$('#icon-curti').fadeOut(0); //main .campo-buttons
	$('#icon-curtido').fadeIn(); //main .campo-buttons
}


function Compartilha(){
	$('#button-modal').text('');
	$('#button-modal').text('Movido para a área de transferência');
	$('#button-modal').css('background-color', 'rgba(239, 51, 83, 0.5)');
    compartilhaPost();
}

function compartilhaPost() {
    // Obtém o texto da descrição e limita a 200 caracteres
    var descricao = $('#descricao').text().substring(0, 300) + ' ...';

    // Obtém o texto do título
    var titulo = $('#titulo-post').text();

    // Obtém a URL atual
    var linkUrl = window.location.href;

    // Cria a mensagem de compartilhamento com as variáveis incluídas
    const msgCompartilha = `${titulo}\n${descricao}\n\n Leia mais em: ${linkUrl}`;

    // Exibe a mensagem (ou pode fazer outra coisa com ela, como compartilhar)
    navigator.clipboard.writeText(msgCompartilha)
        .then(() => {
            //console.log('Texto copiado para a área de transferência!');
        })
        .catch((error) => {
            $.notify('Erro ao copiar texto para a área de transferência', 'error');
        });
}

function preencherDadosNoModal(){
    
     // Obtém o texto da descrição e limita a 200 caracteres   
    var descricao = $('#descricao').text().substring(0, 300) + ' ...';

    // Obtém o texto do título
    var titulo = $('#titulo-post').text();

     $('.modal .text-modal').text(descricao);
    
    // Obtém o texto do título    
     $('.modal #titulo-modal').text(titulo);
}