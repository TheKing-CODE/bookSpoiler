<?php
include('Banco_dados.php');

function processarFormulario() {
    if (isset($_POST['id']) || isset($_GET['id'])) {
        $id = $_GET['id'];
        return $id;
    }else{
        echo "ID do post não fornecido.";
    };
};

$id = processarFormulario();


//Exemplo de uso da classe
$dsn = 'mysql:host=localhost;dbname=bookspoiler';
$usuario = 'root';
$senha = '';

$banco = new Banco_Dados($dsn, $usuario, $senha);
$banco->DeletarDados($id)


?>