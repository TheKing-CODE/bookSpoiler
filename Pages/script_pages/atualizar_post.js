$(function(){

    $('#Visualizar-button').click(function(){
        var Dados = getDadosForm();        
        enviarDados(Dados);
    });

    $('#limpar-button').click(function(){
        document.getElementById('form-dados').reset();
    });   

    $('.barra-lateral ul li').click(function() {        
        // Mostrar o elemento relacionado
            const text_elemento = $(this).find('.text-pag');
            if(text_elemento.text() == 'Edita Post'){          
                $('.containe-excluir').css('display','none');
                $('.containe-atualizar').css('display','grid');
                carregarPage('/Pages/crud/atualizar_post.html', 'containe-atualizar');        
            }    
        },        
    );
    $('.barra-lateral ul li').click(function() {        
        // Mostrar o elemento relacionado
            const text_elemento = $(this).find('.text-pag');
            if(text_elemento.text() == 'Excluir Post'){          
                $('.containe-excluir').css('display','grid');
                $('.containe-atualizar').css('display','none');                   
            }    
        },        
    );


    document.getElementById('form-dados').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        const form = event.target; // Obtém o formulário
        const formData = new FormData(form); // Cria um FormData a partir do formulário

        fetch('/pages/crud/script/atualizar_post/atualizar_post.php', {
            method: 'POST', // Método de envio dos dados
            body: formData // Corpo da requisição com os dados do formulário
        })
        .then(response => response.text()) // Espera uma resposta de texto (HTML)
        .then(data => {
            // Trata a resposta do servidor (HTML)
           $.notify("Post criado com sucesso", "success");
            console.log(data);
        })
        .catch(error => {
            // Trata erros de envio
            console.error('Erro:', error);
            $.notify("Erro ao criar a publicação", "error");
        });

        document.getElementById('form-dados').reset();

    });
    


function carregarPage(url, containeElementId) {
    $.get(url, function(data) {
        // Insere o conteúdo HTML obtido na página
        $(`.${containeElementId}`).html('');
        $(`.${containeElementId}`).html(data);  
    })
    .fail(function() {
        $.notify("Erro ao carregar pag", "error");
    });
}

function enviarDados(dados){
    const queryString = new URLSearchParams(dados).toString();
    // Construa a URL completa
    const url = `/Pages/post_visualizacao.html?${queryString}`; 
    //Abre uma nova aba
    window.open(url, '_blank');     
}


function preencherDados(Dados){

}

function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  const result = {};
  for (const [key, value] of params.entries()) {
    result[key] = value;
  }
  return result;
}

function parseToHTML(value) {
    const parser = new DOMParser();
    return parser.parseFromString(value, 'text/html');
}

});