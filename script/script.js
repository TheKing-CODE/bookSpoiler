
//header -padrão
$('.header-padrao #link-timeline').click(function(){    
    let url = '/index.html';
    event.preventDefault();
    ocultaElemento('containe');
    mostrarElemento('Timeline');
    
})


$('.barra-lateral ul li').click(
    function() {
    // Mostrar o elemento relacionado
       let Elemento = $(this).find('.text-pag').text();
       switch (Elemento) {
        case 'Página Inicial':
            ocultaElemento('containe');
            mostrarElemento('Timeline');
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
