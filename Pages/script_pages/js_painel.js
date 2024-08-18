

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
    carregarPage('/pages/crud/criar_publicacao.html', 'containe');
    $('#containe').css('display', 'block');
}

function mostrarPagInicial(){
    ocultaElemento('containe');
    mostrarElemento('entrada-pag');
}

function carregarPage(url, targetElementId) {
    $.get(url, function(data) {
        // Insere o conteúdo HTML obtido na página
        $('#' + targetElementId).html('');
        $('#' + targetElementId).html(data);
    })
    .fail(function() {
        console.error("Erro ao carregar o HTML.");
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

