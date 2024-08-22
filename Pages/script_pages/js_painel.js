

$(function(){
    $('.barra-lateral ul li').hover(
        function() {
        // Mostrar o elemento relacionado
            $(this).find('.text-pag').css('display', 'inline');
               
            },
            function() {
                // Ocultar o elemento relacionado
                $(this).find('.text-pag').css('display', 'none');
            }
    );
});

function criarPost(){
    ocultaElemento('entrada-pag');
    carregarPage('/Pages/crud/criar_publicacao.html', 'containe');
    $('#containe').css('display', 'block');
}

function mostrarPagInicial(){
    ocultaElemento('containe');
    mostrarElemento('entrada-pag');
}

function carregarPage(url, containeElementId) {
    $.get(url, function(data) {
        // Insere o conteúdo HTML obtido na página
        $('#' + containeElementId).html('');
        $('#' + containeElementId).html(data);
    })
    .fail(function() {
        $.notify("Erro ao carregar pag", "error");
    });
}

$('.barra-lateral ul li').click(
    function() {
    // Mostrar o elemento relacionado
       let Elemento = $(this).find('.text-pag').text();
       switch (Elemento) {
        case 'Página Inicial':
            mostrarPagInicial();
            break;
        case 'Novo Post':
            criarPost();
            break;    
        default:
            break;
       }
    }
);

function ocultaElemento(Elemento){
    $('#'+Elemento).hide();
}

function mostrarElemento(Elemento){
    $('#'+Elemento).show();
};

