/*
$('.barra-lateral ul li').click(function(){
    let filho = $(this).find('span');    
})*/

$('.header-padrao .link-timeline').click(function(){    
    let nome = $(this).text();
    console.log(nome);

    event.preventDefault();
})

$('.header-padrao .itens-padrao #link-login').click(function(){    
    let nome = $(this).text();
    let url = 'Pages/'+nome+'.html';
    console.log(url);
/*    carregarPage(url);
    event.preventDefault();*/
})


$('.header-padrao .itens-padrao #link-cadastro').click(function(){    
    let nome = $(this).text();
    console.log(nome);
    event.preventDefault();
})


    /*let filho = $(this).find('a');   
    let url = filho.text();
    event.preventDefault();
    console.log(url);*/


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
               $('#posts').css('display','none');
               $('#containe').css('display','grid');
               $('#containe').append(data);
               /*console.log('codigo');   */  
          }
     })
}
