$(function(){


$('section ul li .link-button').click(function(){
     $('#Timeline').hide();
     $('#containe').css('display', 'block');
	carregarPage('pages/post.html', 'containe');
});


function carregarPage(url, targetElementId) {
     $.get('pages/post.html', function(data) {
         // Insere o conteúdo HTML obtido na página
         $('#containe' ).html('');
         $('#containe' ).html(data);
     })
     .fail(function() {
         console.error("Erro ao carregar o HTML.");
     });
 }



})

