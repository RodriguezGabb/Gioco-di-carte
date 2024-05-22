<?php
// Connessione al database
require 'db_connection.php';
?>

<!DOCTYPE html>
<html lang="it">

<head>
    <meta charset="UTF-8">
    <title>Visualizza Dati</title>
</head>

<body>
    <h2>Dati della Tabella User</h2>
    <?php
    $sql = "SELECT * FROM player";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    $users = $stmt->fetchAll();//separa in un array il risultato della querry
    if ($users) {
        echo "<table border='1'>
              <tr>
                  <th>Nome</th>
                  <th>Password</th>
              </tr>";
        foreach ($users as $user) {
            echo "<tr>
                  <td>{$user['playername']}</td>
                  <td>{$user['playerpassword']}</td>
                  </tr>";//playername non ha la N maiuscola e playerpassword non ha la P maiuscola qunado ritornato da fetchall
        }
        echo "</table>";
    } else {
        echo "<p>Nessun dato trovato nella tabella 'player'.</p>";
    }
    ?>

    <h2>Dati della Tabella Classifica</h2>
    <?php
    $sql = "SELECT * FROM classifica";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    $classifiche = $stmt->fetchAll();

    if ($classifiche) {
        echo "<table border='1'>
              <tr>
                  <th>Nome Giocatore</th>
                  <th>Turno</th>
              </tr>";
        foreach ($classifiche as $classifica) {
            echo "<tr>
                  <td>{$classifica['playername']}</td>
                  <td>{$classifica['turn']}</td>
                  </tr>";//playername non ha la N maiuscola qunado ritornato da fetchall
        }
        echo "</table>";
    } else {
        echo "<p>Nessun dato trovato nella tabella 'classifica'.</p>";
    }
    ?>
</body>

</html>