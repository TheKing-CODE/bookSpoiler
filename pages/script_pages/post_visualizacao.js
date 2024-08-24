$(function(){
  dados = getQueryParams();
  preencherDados(dados);
  preencherDadosNoModal();
})

function preencherDados(Dados){
  $('main #descricao').text('');
  const container = document.getElementById('descricao');
  container.innerHTML = '<p>' + dados.resumo + '</p>';  

  $('main #titulo-post').text('');
  $('main #titulo-post').text(Dados.titulo);
}

function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  const result = {};
  for (const [key, value] of params.entries()) {
    result[key] = value;
  }
  return result;
}

function parseToHTML(value) {
    const parser = new DOMParser();
    return parser.parseFromString(value, 'text/html');
}

function preencherDadosNoModal(){
//  console.log('Entrei aqui');  
     // Obtém o texto da descrição e limita a 200 caracteres   
    var descricao = $('#descricao').text().substring(0, 300) + ' ...';

    // Obtém o texto do título
    var titulo = $('#titulo-post').text();

    $('.modal .text-modal').text(descricao);
    
    // Obtém o texto do título    
     $('.modal #titulo-modal').text(titulo);

}

