$(document).ready(function() {
    // Seu código jQuery aqui
    console.log("A página está pronta!");
});

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

function carregarPage(){
    $.ajax({
          'beforeSend': function(){
            console.log("Estamos chamando o beforesend!");
          },
          'timeout': 10000,
          'url':'/pages/criar_publicacao.html',
          'error':function(jqXHR,textStatus,errorThrown){
          if(jqXHR.statusText == 'Not Found'){
               console.log("Página não encontrada.");
               }
          },
          'success':function(data){
               $('#entrada-pag').css('display','none');
               $('#containe').html('');
               $('#containe').css('display','grid').css('width','100%').css('height', 'auto');
               $('#containe').append(data); 
          }
     })
}

$('.barra-lateral ul li').click(
    function() {
    // Mostrar o elemento relacionado
       let Elemento = $(this).find('.text-pag').text();
       switch (Elemento) {
        case 'Página Inicial':
            console.log('Pagina Inicial');
            break;
        case 'Novo Post':
            carregarPage();
            break;    
        default:
            break;
       }
    }
);


