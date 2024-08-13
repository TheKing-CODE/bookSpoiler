<?php
   try {
    $dsn = 'mysql:host=localhost;dbname=bookspoiler'; // Exemplo para MySQL
    $usuario = 'root';
    $senha = '';

    $pdo = new PDO($dsn, $usuario, $senha);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // Configura o PDO para lançar exceções em caso de erro    
    echo "Conectado com sucesso! <br>";
    //InserirDados();
    //ConsultarDados();
    //AtualizarDados();
    DeletarDados();
   } catch (PDOException $e) {
       echo 'Erro na conexão: ' . $e->getMessage();
   }

function InserirDados(){
   try {
      
      global $pdo; 

       // SQL de inserção com marcadores de posição
      $query = 'INSERT INTO posts (Titulo, Descricao, Data, Link, urlimg) VALUES (:Titulo, :Descricao, :Data, :Link, :Url_img)';

       //Preparar a consulta
       $stmt = $pdo->prepare($query);

       //Definir os valores
       
       $Titulo = 'Game of Thrones';
       $Descricao = 'Descricao';
       $Data = date("m.d.y");
       $Link = 'google.com';
       $Url_img = 'linkedin.com';

       // Vincular os parâmetros
       
       $stmt->bindParam(':Titulo', $Titulo);
       $stmt->bindParam(':Descricao', $Descricao);
       $stmt->bindParam(':Data', $Data);
       $stmt->bindParam(':Link', $Link);
       $stmt->bindParam(':Url_img', $Url_img);

       // Executar a consulta
       $stmt->execute();

       echo "Dados inseridos com sucesso!";
   } catch (PDOException $e) {
       echo 'Erro: ' . $e->getMessage();
   }
}


function ConsultarDados($id = null){

   global $pdo; 

   if($id != null){
      // Preparar a consulta com parâmetros
      $sql = 'SELECT * FROM posts WHERE id = :id';
      $stmt = $pdo->prepare($sql);

      // Definir o valor do parâmetro e executar a consulta      
      $stmt->bindParam(':id', $id);
      $stmt->execute();

      // Recuperar os resultados
      $resultado = $stmt->fetchAll(PDO::FETCH_ASSOC);

      // Iterar sobre os resultados
      foreach ($resultado as $linha) {
          echo $linha['Titulo'] . ' - ' . $linha['Descricao'] . '<br>';
      }  
   }else{
      $sql = 'SELECT * FROM posts';
      $stmt = $pdo->prepare($sql);

      // Definir o valor do parâmetro e executar a consulta      
      $stmt->execute();

      // Recuperar os resultados
      $resultado = $stmt->fetchAll(PDO::FETCH_ASSOC);

      // Iterar sobre os resultados
      foreach ($resultado as $linha) {
          echo $linha['Titulo'] . ' - ' . $linha['Descricao'] . '<br>';
      }  
   };
}


function AtualizarDados(){
   try {
       global $pdo; 
       $sql = "UPDATE posts SET Descricao = :valor1 WHERE id = :id";
       $stmt = $pdo->prepare($sql);

       $valor1 = 'Nova Descricao';
       $valor2 = 'Novo valor para coluna2';
       $id = 2;

       $stmt->bindParam(':valor1', $valor1);
       /*$stmt->bindParam(':valor2', $valor2);*/
       $stmt->bindParam(':id', $id);

       $stmt->execute();

       echo "Registro atualizado com sucesso!";
   } catch (PDOException $e) {
       echo 'Erro: ' . $e->getMessage();
   }   
}

function DeletarDados(){
   try {
       global $pdo;           
       // Preparando a instrução SQL para DELETE
       $sql = "DELETE FROM posts WHERE id = :id";
       $stmt = $pdo->prepare($sql);

       // Vinculando o parâmetro
       $id = 1; // ID do registro a ser excluído
       $stmt->bindParam(':id', $id);

       // Executando a declaração
       $stmt->execute();

       echo "Registro excluído com sucesso!";
   } catch (PDOException $e) {
       echo 'Erro: ' . $e->getMessage();
   }
}
?>