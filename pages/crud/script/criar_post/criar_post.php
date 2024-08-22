<?php
include('C:\xampp\htdocs\Pages\crud\script\Banco_dados.php');
$arquivoDestino = '';
function processarFormulario() {
	global $arquivoDestino;
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Validação dos campos
        $titulo = isset($_POST['titulo-post']) ? ($_POST['titulo-post']) : '';
        $resumo = isset($_POST['resumo-post']) ? ($_POST['resumo-post']) : '';
        $arquivo = isset($_FILES['file']) ? $_FILES['file'] : null;

        // Validar se os campos obrigatórios estão preenchidos
        if (empty($titulo) || empty($resumo)) {
            echo "O título e o resumo são obrigatórios.";
            return;
        }

        // Validar se um arquivo foi enviado
        if (isset($_FILES['file']) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {    
            $nomeArquivo = $_FILES['file']['name'];
            $destino = __DIR__ . "/img/$nomeArquivo";
        
            // Verificar e criar diretório se não existir
            $dir = __DIR__ . "/img";
            if (!is_dir($dir)) {
                mkdir($dir, 0755, true);
            }
        
            // Mover o arquivo para o diretório de destino
            if (move_uploaded_file($_FILES['file']['tmp_name'], $destino)) {
                echo "<p>Imagem enviada com sucesso: $nomeArquivo</p>";
            } else {
                echo "<p>Erro ao mover o arquivo para o diretório de destino.</p>";
            }
        } else {
            echo "<p>Erro no upload da imagem.</p>";
        }

        $dataAtual = date('Y-m-d');
        $dados = array('titulo' => $titulo , 'resumo' => $resumo, 'imagen_url' => '/img/'.$nomeArquivo, 'data' => $dataAtual);

        return $dados;
    }
}

$dados_form = processarFormulario();

//Exemplo de uso da classe
$dsn = 'mysql:host=localhost;dbname=bookspoiler';
$usuario = 'root';
$senha = '';

$banco = new Banco_Dados($dsn, $usuario, $senha);
$banco->InserirDados($dados_form);


?>