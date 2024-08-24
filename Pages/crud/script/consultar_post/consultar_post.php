<?php
	include('C:\xampp\htdocs\Pages\crud\script\Banco_dados.php');
	$dsn = 'mysql:host=localhost;dbname=bookspoiler';
	$usuario = 'root';
	$senha = '';

	$banco = new Banco_Dados($dsn, $usuario, $senha);

	// Define o tipo de conteúdo da resposta como JSON
	header('Content-Type: application/json');

	$dados = $banco->ConsultarDados();

	echo json_encode($dados)
?>