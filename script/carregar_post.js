$(function(){


$('section ul li .link-button').click(function(){
	carregarPage();
});


function carregarPage(){
    $.ajax({
          'beforeSend': function(){
            console.log("Estamos chamando o beforesend!");
          },
          'timeout': 10000,
          'url':'/pages/post.html',
          'error':function(jqXHR,textStatus,errorThrown){
          if(jqXHR.statusText == 'Not Found'){
               console.log("Página não encontrada.");
               }
          },
          'success':function(data){
               $('#Timeline').css('display','none');
               $('#containe').html('');
               $('#containe').css('display','grid').css('width','100%').css('height', 'auto');
               $('#containe').append(data); 
          }
     })
}



})

