<?php
include('Banco_dados.php');




//Exemplo de uso da classe
$dsn = 'mysql:host=localhost;dbname=bookspoiler';
$usuario = 'root';
$senha = '';

$banco = new Banco_Dados($dsn, $usuario, $senha);
$banco->($dados_form);

?>