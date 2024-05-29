<?php
// Connessione al database
require 'db_connection.php';

// Variabili per memorizzare i messaggi di successo o errore
$insertMessage = '';

// Controlla se il modulo è stato inviato
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $playerName = $_POST['playerName'];
    $playerPassword = $_POST['playerPassword'];
    $nTurni = $_POST['turni'];

    // Verifica che i campi non siano vuoti e che i tipi di dati siano corretti
    if (!empty($playerName) && !empty($playerPassword)) {
        if (doppione($playerName, $db)) {
            $resultPerPlayer = pg_insert($db, "player", ["playername" => $playerName, "playerpassword" => $playerPassword]);
            $resultPerClassifica = pg_insert($db, "classifica", ["playername" => $playerName, "turn" => $nTurni]);
            if ($resultPerPlayer && $resultPerClassifica) {
                $insertMessage .= "Dati inseriti con successo nel server!<br>";
            } else {
                $insertMessage .= "Errore nell'inserimento dei dati nel server.<br>";
            }
        } else {
            $insertMessage .= "Nome utente già utilizzato.<br> Inserirne un altro.<br>";
        }
    }
}

function doppione($playerName, $db)
{
    $query = 'SELECT "playername" FROM "player" WHERE "playername" = $1';
    $result = pg_prepare($db, "check_duplicate", $query);//contro sql injection
    $result = pg_execute($db, "check_duplicate", array($playerName));

    if (pg_num_rows($result) > 0) {
        return false;
    }
    return true;
}
?>

<!DOCTYPE html>
<html lang="it">

<head>
    <meta charset="UTF-8">
    <title>Iscriviti</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
        }

        .container {
            position: absolute;
            top: 20%;
            right: 40%;
            text-align: center;
            border: solid 1px black;
            width: 25%;
            padding: 20px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h2 {
            margin-bottom: 20px;
            color: #333;
        }

        .form {
            display: flex;
            flex-direction: column;
        }

        .form input[type="text"],
        .form input[type="password"] {
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        .form input[type="submit"] {
            padding: 10px;
            border: none;
            border-radius: 5px;
            background-color: #0062E6;
            color: white;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .form input[type="submit"]:hover {
            background-color: #0052cc;
        }
    </style>
</head>

<body>
    <div class="container">
        <h2>Iscriviti!</h2>
        <form class="form" method="post" action="inscriversi.php" id="formIscrviti">
            <input type="hidden" id="turni" name="turni" value="-1">
            <label for="playerName">Nome Giocatore:</label><br>
            <input type="text" id="playerName" name="playerName" required><br>
            <label for="playerPassword">Password:</label><br>
            <input type="password" id="playerPassword" name="playerPassword" required><br><br>
            <input id="bottoneIscriviti" type="submit" value="Iscriviti">
        </form>
    </div>
    <script>
        function mySubmit(event) {
            event.preventDefault();
            let temp = localStorage.getItem("nTurni");
            document.getElementById("turni").value = Math.floor(temp);
            alert(Math.floor(temp));
            document.getElementById("formIscrviti").submit();
        }
        
        document.getElementById("bottoneIscriviti").addEventListener("click", mySubmit);
    </script>
    <?php
    if (!empty($insertMessage)) {
        echo "<p>$insertMessage</p>";
    }
    ?>
</body>

</html>