$(function(){
  dados = getQueryParams();
  preencherDados(dados);
})

function preencherDados(Dados){
  $('#descricao').text('');
  $('#descricao').text(Dados.resumo);
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


