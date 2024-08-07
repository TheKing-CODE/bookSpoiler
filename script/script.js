

$('.barra-lateral ul li').click(function(){
     /*let link =  $(this).find('.a').attr();*/
     carregarPage('Pages/login.html');
})


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
               $('#posts').html('');
               $('#posts').html(data);
               console.log('codigo');     
          }
     })
}