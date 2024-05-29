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
            background: url('/../images/sfondo\ menu.png') no-repeat center center fixed;
            background-size: cover;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .container {
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            max-width: 400px;
            width: 100%;
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

        .button {
            background-color: #f4f4f4;
            border: 1px solid #ddd;
            padding: 10px 20px;
            margin: 10px;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .button:hover {
            background-color: #e2e2e2;
        }

        .divPulsanti {
            margin-top: 20px;
        }

        table {
            width: 100%;
        }

        td {
            text-align: center;
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
        <div id="divPulsanti">
            <table>
                <tr>
                    <td><button class="button" onclick="goMenu()">Menu</button></td>
                    <td><button class="button" onclick="goAccedi()">Accedi</button></td>
                    <td><button class="button" onclick="showLeaderboard()">Classifica</button></td>
                </tr>
            </table>
        </div>
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

        function goAccedi() {
            window.location.href = 'http://localhost:3000/server/Accedi.php'; //gabriel
            //window.location.href = 'http://localhost:3000/Downloads/Gioco-di-carte-main/server/inscriversi.php'; //andrea
        }
        function goMenu() {
            window.location.href = 'http://localhost:3000/menu.html'; //gabriel
            //window.location.href = 'http://localhost:3000/Downloads/Gioco-di-carte-main/menu.html'; //andrea
        }
        function showLeaderboard() {
            window.location.href = 'http://localhost:3000/server/display_data.php'; //gabriel
            //window.location.href = 'http://localhost:3000/Downloads/Gioco-di-carte-main/server/display_data.php'; //andrea
        }
    </script>
    <?php
    if (!empty($insertMessage)) {
        echo "<p>$insertMessage</p>";
    }
    ?>
</body>

</html>