<?php
// Connessione al database
require 'db_connection.php';

// Variabili per memorizzare i messaggi di successo o errore
$insertMessage = '';

// Controlla se il modulo è stato inviato
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $playerName = $_POST['playerName'];
    $playerPassword = $_POST['playerPassword'];

    // Verifica che i campi non siano vuoti e che i tipi di dati siano corretti
    if (!empty($playerName) && !empty($playerPassword)) {
        if (doppione($playerName)) {
            $result = pg_insert($db, "player", ["playername" => $playerName, "playerpassword" => $playerPassword]);
            if ($result) {
                $insertMessage .= "Dati inseriti nella tabella 'player' con successo!<br>";
            } else {
                $insertMessage .= "Errore nell'inserimento dei dati nella tabella 'player'.<br>";
            }
        } else {
            $insertMessage .= "Nome utente già utilizzato.<br> Inserirne un altro.<br>";
        }
    }
}
function doppione($playerName)
{
    $querry = 'SELECT playername FROM player';
    $result = pg_query($querry);
    while ($line = pg_fetch_array($result, null, PGSQL_ASSOC)) {
        foreach ($line as $col_value) {
            if ($col_value == $playerName) {
                return false;
            }
        }
    }
    return true;
}
?>

<!DOCTYPE html>
<html lang="it">

<head>
    <meta charset="UTF-8">
    <title>Inserimento Dati</title>
</head>

<body>
    <h2>Inscriviti!</h2>
    <form method="post" action="inscriversi.php">
        <label for="playerName">Nome Giocatore:</label>
        <input type="text" id="playerName" name="playerName" required><br>
        <label for="playerPassword">Password:</label>
        <input type="Password" id="playerPassword" name="playerPassword" required><br><br>

        <input type="submit" value="Inscriviti">
    </form>

    <?php
    if (!empty($insertMessage)) {
        echo "<p>$insertMessage</p>";
    }
    ?>
</body>

</html>