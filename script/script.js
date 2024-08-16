
//header -padrão
$('.header-padrao #link-timeline').click(function(){    
    let url = '/index.html';
    event.preventDefault();
    ocultaElemento('containe');
    $('#Timeline').css('display','grid');
    $('#header-main').css('display','flex');
})

$('.header-padrao .itens-padrao #link-login').click(function(){    
    let url = '/Pages/'+$(this).text()+'.html';
    event.preventDefault();

    ocultaElemento("posts");
    ocultaElemento("header-main");
    //ocultaElemento("cadastro")
    carregarPage(url);
})

$('.barra-lateral ul li').click(
    function() {
    // Mostrar o elemento relacionado
       let Elemento = $(this).find('.text-pag').text();
       switch (Elemento) {
        case 'Página Inicial':
            $('.header-padrao #link-timeline').click();
            break;
        default:
            break;
       }
    }
);

$('.posts ul li .link-').click(function(){})

function carregarPage(linkPag){
    $.ajax({
          'beforeSend': function(){
            console.log("Estamos chamando o beforesend!");
          },
          'timeout': 10000,
          'url':linkPag,
          'error':function(jqXHR,textStatus,errorThrown){
          if(jqXHR.statusText == 'Not Found'){
               console.log("Página não encontrada.");
               }
          },
          'success':function(data){
               //$('#container').html(data);
               //$(data).appendTo('#container').fadeIn();
               //$('#posts').css('display','none');
               $('#Timeline').css('display', 'none');
                   /*$('#containe').html('');
                   $('#containe').css('display','grid');
                   $('#containe').append(data); */
          }
     })
}

function ocultaElemento(Elemento){
    $('#'+Elemento).css('display','none');
}
