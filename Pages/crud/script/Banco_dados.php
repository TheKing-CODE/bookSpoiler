<?php

class Banco_Dados {
    private $pdo;

    public function __construct($dsn, $usuario, $senha) {
        try {
            $this->pdo = new PDO($dsn, $usuario, $senha);
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            //echo "Conectado com sucesso! <br>";
        } catch (PDOException $e) {
            //echo 'Erro na conexão: ' . $e->getMessage();
        }
    }

    public function InserirDados($dados) {
        try {
            
            if(is_array($dados)){
                // SQL de inserção com marcadores de posição
                $query = 'INSERT INTO posts (Titulo, Descricao, Data, Link, UrlImg) VALUES (:Titulo, :Descricao, :Data, :Link, :Url_img)';

                // Preparar a consulta
                $stmt = $this->pdo->prepare($query);

                // Definir os valores
                $Titulo = $dados['titulo'];
                $Descricao = $dados['resumo'];
                $Data = $dados['data'];
                $Link = 'google.com';
                $Url_img = $dados['imagen_url'];

                // Vincular os parâmetros
                $stmt->bindParam(':Titulo', $Titulo);
                $stmt->bindParam(':Descricao', $Descricao);
                $stmt->bindParam(':Data', $Data);
                $stmt->bindParam(':Link', $Link);
                $stmt->bindParam(':Url_img', $Url_img);

                // Executar a consulta
                $stmt->execute();

                echo "Dados inseridos com sucesso!";    
            }else{
                echo "Envia dados como um array";
            }
            
        } catch (PDOException $e) {
            echo 'Erro: ' . $e->getMessage();
        }
    }

    public function ConsultarDados($id = null) {
        
        try {
            if ($id !== null) {
                // Preparar a consulta com parâmetros
                $sql = 'SELECT * FROM posts WHERE id = :id';
                $stmt = $this->pdo->prepare($sql);

                // Definir o valor do parâmetro e executar a consulta
                $stmt->bindParam(':id', $id);
                $stmt->execute();

                // Recuperar os resultados
                return $stmt->fetchAll(PDO::FETCH_ASSOC);                
            } else {
                $sql = 'SELECT * FROM posts';
                $stmt = $this->pdo->prepare($sql);

                // Executar a consulta
                $stmt->execute();

                // Recuperar os resultados
                return $stmt->fetchAll(PDO::FETCH_ASSOC);                           
            }
        } catch (PDOException $e) {
            echo 'Erro: ' . $e->getMessage();
        }
    }

    public function AtualizarDados($id, $novoTitulo = '', $novaDescricao = '', $novaUrlImg = '') {
        try {
            if(!empty(trim($novoTitulo)) && !empty(trim($novaDescricao)) && !empty(trim($novaUrlImg))){
                $sql = "UPDATE posts SET Descricao = :descricao, Titulo = :titulo, UrlImg = :UrlImg WHERE id = :id";
                $stmt = $this->pdo->prepare($sql);

                $stmt->bindParam(':descricao', $novaDescricao);
                $stmt->bindParam(':id', $id);
                $stmt->bindParam(':titulo', $novoTitulo);
                $stmt->bindParam(':UrlImg', $novaUrlImg);

                $stmt->execute();

                return 'sucess';
            }else if(!empty(trim($novaDescricao))){
                $sql = "UPDATE posts SET Descricao = :descricao WHERE id = :id";
                $stmt = $this->pdo->prepare($sql);

                $stmt->bindParam(':descricao', $novaDescricao);
                $stmt->bindParam(':id', $id);

                $stmt->execute();

                return 'sucess';
            }else if(!empty(trim($novoTitulo))){
                $sql = "UPDATE posts SET Titulo = :titulo WHERE id = :id";
                $stmt = $this->pdo->prepare($sql);

                $stmt->bindParam(':titulo', $novoTitulo);
                $stmt->bindParam(':id', $id);

                $stmt->execute();

                return 'sucess';   
            }else if(!empty(trim($novaUrlImg))){
                $sql = "UPDATE posts SET UrlImg = :urlImg WHERE id = :id";
                $stmt = $this->pdo->prepare($sql);

                $stmt->bindParam(':urlImg', $novaUrlimg);
                $stmt->bindParam(':id', $id);

                $stmt->execute();

                return 'sucess';   
            }
        } catch (PDOException $e) {
            return 'error '. $e->getMessage();
        }
    }

    public function DeletarDados($id) {
        try {
            // Preparando a instrução SQL para DELETE
            $sql = "DELETE FROM posts WHERE id = :id";
            $stmt = $this->pdo->prepare($sql);

            // Vinculando o parâmetro
            $stmt->bindParam(':id', $id);

            // Executando a declaração
            $stmt->execute();

            echo "Registro excluído com sucesso!";
        } catch (PDOException $e) {
            echo 'Erro: ' . $e->getMessage();
        }
    }
}

// Exemplo de uso da classe

