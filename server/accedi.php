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
    $nTurni = $_POST['turni'];
    $playerName = $_POST['playerName'];
    $playerPassword = $_POST['playerPassword'];

    if (check($playerName, $playerPassword)) {
        $resultPerPlayer = pg_insert($db, "player", ["playername" => $playerName, "playerpassword" => $playerPassword]);
        $resultPerClassifica = pg_insert($db, "classifica", ["playername" => $playerName, "turn" => $nTurni]);

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
    <form method="post" action="inscriversi.php" id="formAccedi">
        <input type="hidden" id="turni" name="turni" value="-1">
        <label for="playerName">Nome Giocatore:</label>
        <input type="text" id="playerName" name="playerName" required><br>
        <label for="playerPassword">Password:</label>
        <input type="Password" id="playerPassword" name="playerPassword" required><br><br>

        <input id="bottoneAccedi" type="submit" value="Accedi">
    </form>
    <script>
        function mySubmit() {
            const form = document.getElementById("formAccedi");
            form.addEventListener("click", function (event) { event.preventDefault() });
            let temp = localStorage.getItem("nTurni");
            document.formAccedi.turni.value = Math.floor(temp);//floor serve a rendere temp un intero.
            temp = Math.floor(temp);

            alert(temp);
            form.submit();
            return true;
        }
        const bottoneAccedi = document.getElementById("bottoneAccedi");
        bottoneAccedi.addEventListener("click", mySubmit);
    </script>
</body>

</html>