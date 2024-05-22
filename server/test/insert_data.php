<?php
// Connessione al database
require 'db_connection.php';

// Variabili per memorizzare i messaggi di successo o errore
$insertMessage = '';

// Controlla se il modulo è stato inviato
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $playerName = $_POST['playerName'];
    $playerPassword = $_POST['playerPassword'];
    $playerName = $_POST['playerName'];
    $turn = $_POST['turn'];

    // Verifica che i campi non siano vuoti e che i tipi di dati siano corretti
    if (!empty($playerName) && !empty($playerPassword)) {
        $sql = 'INSERT INTO "player" (playerName, playerPassword) VALUES (:playerName, :playerPassword)';
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':playerName', $playerName, PDO::PARAM_STR);
        $stmt->bindParam(':playerPassword', $playerPassword, PDO::PARAM_STR);
        try {
            if ($stmt->execute()) {
                $insertMessage .= "Dati inseriti nella tabella 'player' con successo!<br>";
            } else {
                $insertMessage .= "Errore nell'inserimento dei dati nella tabella 'player'.<br>";
            }
        } catch (PDOException $e) {
            $insertMessage .= "Errore nella query per la tabella 'player': " . $e->getMessage() . "<br>";
        }
    }

    // Verifica che i campi non siano vuoti e che i tipi di dati siano corretti
    if (!empty($playerName) && !empty($turn) && is_numeric($turn)) {
        $sql = 'INSERT INTO "classifica" (playerName, turn) VALUES (:playerName, :turn)';
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':playerName', $playerName, PDO::PARAM_STR);
        $stmt->bindParam(':turn', $turn, PDO::PARAM_INT);
        try {
            if ($stmt->execute()) {
                $insertMessage .= "Dati inseriti nella tabella 'classifica' con successo!<br>";
            } else {
                $insertMessage .= "Errore nell'inserimento dei dati nella tabella 'classifica'.<br>";
            }
        } catch (PDOException $e) {
            $insertMessage .= "Errore nella query per la tabella 'classifica': " . $e->getMessage() . "<br>";
        }
    } else {
        $insertMessage .= "Errore: 'turn' deve essere un numero intero.<br>";
    }
}
?>

<!DOCTYPE html>
<html lang="it">

<head>
    <meta charset="UTF-8">
    <title>Inserimento Dati</title>
</head>

<body>
    <h2>Inserisci Dati</h2>
    <form method="post" action="insert_data.php">
        <h3>Tabella player</h3>
        <label for="playerName">playerNome:</label>
        <input type="text" id="playerName" name="playerName" required><br>
        <label for="playerPassword">PlayerPassword:</label>
        <input type="playerPassword" id="playerPassword" name="playerPassword" required><br><br>

        <h3>Tabella Classifica</h3>
        <label for="playerName">Nome Giocatore:</label>
        <input type="text" id="playerName" name="playerName" required><br>
        <label for="turn">Turno:</label>
        <input type="number" id="turn" name="turn" required><br><br>

        <input type="submit" value="Inserisci">
    </form>

    <?php
    if (!empty($insertMessage)) {
        echo "<p>$insertMessage</p>";
    }
    ?>
</body>

</html>