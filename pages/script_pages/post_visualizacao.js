$(function(){
  dados = getQueryParams();
  preencherDados(dados);
})

function preencherDados(Dados){
  $('#descricao').text('');
  const container = document.getElementById('descricao');
  container.innerHTML = '<p>' + dados.resumo + '</p>';  

  $('#titulo-post').text('');
  $('#titulo-post').text(Dados.titulo);
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

