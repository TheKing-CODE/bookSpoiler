$(function(){
    $('.barra-lateral ul li').click(function() {        
        // Mostrar o elemento relacionado
            const text_elemento = $(this).find('.text-pag');
            if(text_elemento.text() == 'Edita Post'){          
                $('.containe-excluir').css('display','none');
                $('.containe-atualizar').css('display','grid');
                carregarPage('/Pages/crud/criar_publicacao.html', 'containe-atualizar');        
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

});