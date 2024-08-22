$('#excluir').click(function(){
	ID = $('#id-post').val();
	deletePost(ID);

})


function deletePost(ID){
    fetch(`/pages/crud/script/delete_post/delete.php?id=${ID}`, {
        method: 'GET' // Método de envio dos dados
    })
    .then(response => response.text()) // Espera uma resposta de texto (HTML)
    .then(data => {
        // Trata a resposta do servidor (HTML)
        console.log(data);
        $.notify("Post excluído com sucesso", "success");
        $('#id-post').val('')
    })
    .catch(error => {
        // Trata erros de envio
        console.error('Erro:', error);
        $.notify("Erro ao excluir a publicação", "error");
    });
}