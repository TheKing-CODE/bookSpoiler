$(function(){
  dados = getQueryParams();
  preencherDados(dados);
})

function preencherDados(Dados){

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