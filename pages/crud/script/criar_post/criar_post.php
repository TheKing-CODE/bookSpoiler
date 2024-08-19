<?php
include('Banco_dados.php');
$arquivoDestino = '';
function processarFormulario() {
	global $arquivoDestino;
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Validação dos campos
        $titulo = isset($_POST['titulo-post']) ? trim($_POST['titulo-post']) : '';
        $resumo = isset($_POST['resumo-post']) ? trim($_POST['resumo-post']) : '';
        $arquivo = isset($_FILES['file']) ? $_FILES['file'] : null;

        // Validar se os campos obrigatórios estão preenchidos
        if (empty($titulo) || empty($resumo)) {
            echo "O título e o resumo são obrigatórios.";
            return;
        }

        // Validar se um arquivo foi enviado
        if ($arquivo && $arquivo['error'] === UPLOAD_ERR_OK) {
            // Definir o diretório para salvar a imagem
            $diretorio = '/img/';
            $arquivoDestino = $diretorio . basename($arquivo['name']);

            // Verificar se o diretório existe, se não, criar
            if (!is_dir($diretorio)) {
                mkdir($diretorio, 0755, true);
            }

            // Verificar se o arquivo já existe
            if (file_exists($arquivoDestino)) {
                echo "O arquivo já existe.";
                return;
            }

            // Mover o arquivo para o diretório de destino
            if (move_uploaded_file($arquivo['tmp_name'], $arquivoDestino)) {
                echo "Arquivo enviado com sucesso.";
            } else {
                echo "Erro ao enviar o arquivo.";
            }
        } else {
            echo "Nenhum arquivo enviado ou erro no upload do arquivo.";
        }

        $dataAtual = date('Y-m-d');
        $dados = array('titulo' => $titulo , 'resumo' => $resumo, 'imagen_url' => $arquivoDestino, 'data' => $dataAtual);

        return $dados;
    }
}

$dados_form = processarFormulario();

// Exemplo de uso da classe
$dsn = 'mysql:host=localhost;dbname=bookspoiler';
$usuario = 'root';
$senha = '';

$banco = new Banco_Dados($dsn, $usuario, $senha);
$banco->InserirDados($dados_form);

?>