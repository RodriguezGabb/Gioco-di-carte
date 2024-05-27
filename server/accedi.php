<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
// Connessione al database
require 'db_connection.php';

// Variabili per memorizzare i messaggi di successo o errore
$insertMessage = '';

// Controlla se il modulo è stato inviato
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nTurni = $_POST['$nTurni'];
    $playerName = $_POST['playerName'];
    $playerPassword = $_POST['playerPassword'];

    if (check($playerName, $playerPassword)) {
        $result = pg_insert($db, "player", ["playername" => $playerName, "playerpassword" => $playerPassword]);
        if ($result) {
            $insertMessage .= "Dati inseriti nella tabella 'player' con successo!<br>";
        } else {
            $insertMessage .= "Errore nell'inserimento dei dati nella tabella 'player'.<br>";
        }
    }
}
if (!empty($insertMessage)) {
    echo "<p>$insertMessage</p>";
}
function check($playerName, $playerPassword)
{
    $querry = 'SELECT * FROM player';
    $result = pg_query($querry);
    while ($line = pg_fetch_array($result, null, PGSQL_ASSOC)) {
        if ($line['playername'] == $playerName && $line['playerpassword'] == $playerPassword) {
            return true;
        }
    }
    return false;
}
function getTurni()
{
    $turni = file_get_contents("php://input");
    $decoded = json_decode($turni, true);
    $myTurni = $decoded['data'];
    $response = array('status' => 'success', 'data' => $myTurni);
    return $myTurni;
}
?>

<!DOCTYPE html>
<html lang="it">

<head>
    <meta charset="UTF-8">
    <title>Inserimento Dati</title>
    <script>
        var nTurni = localStorage.getItem("nTurni");
    </script>
</head>

<body>
    <h2>Accedi!</h2>
    <form method="post" action="inscriversi.php">
        <label for="playerName">Nome Giocatore:</label>
        <input type="text" id="playerName" name="playerName" required><br>
        <label for="playerPassword">Password:</label>
        <input type="Password" id="playerPassword" name="playerPassword" required><br><br>

        <input type="submit" value="Inscriviti">
    </form>
</body>

</html>