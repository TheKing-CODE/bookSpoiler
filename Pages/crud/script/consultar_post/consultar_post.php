<?php
	// Definir o cabeçalho para receber requisições JSON
	header("Content-Type: application/json");

	// Recuperar o conteúdo do corpo da requisição POST
	$inputJSON = file_get_contents('php://input');
	$input = json_decode($inputJSON, true); // Decodificar o JSON em um array associativo
	
	include('C:\xampp\htdocs\Pages\crud\script\Banco_dados.php');
	$dsn = 'mysql:host=localhost;dbname=bookspoiler';
	$usuario = 'root';
	$senha = '';

	$banco = new Banco_Dados($dsn, $usuario, $senha);

	// Define o tipo de conteúdo da resposta como JSON
	header('Content-Type: application/json');

	if (isset($input['id'])) {
		$id = $input['id'];
		$dados = $banco->ConsultarDados($id);	
		echo json_encode($dados);
	}else{
		$dados = $banco->ConsultarDados();	
		echo json_encode($dados);
	};

	

	
?>