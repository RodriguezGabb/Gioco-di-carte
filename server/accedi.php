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

    if (check($playerName, $playerPassword, $db)) {
        $result = pg_prepare($db, "update_classifica", 'UPDATE classifica SET turn = $1 WHERE playername = $2');
        $result = pg_execute($db, "update_classifica", array($nTurni, $playerName));//contro sql injection

        if ($result) {
            $insertMessage .= "Dati aggiornati nella tabella 'classifica' con successo!<br>";
        } else {
            $insertMessage .= "Errore nell'aggiornamento dei dati nella tabella 'classifica'.<br>";
        }
    } else {
        $insertMessage .= "Nome utente o password errati.";
    }
}

function check($playerName, $playerPassword, $db)
{
    $query = 'SELECT * FROM player WHERE playername = $1 AND playerpassword = $2';
    $result = pg_prepare($db, "check_user", $query);//contro sql injection
    $result = pg_execute($db, "check_user", array($playerName, $playerPassword));

    if (pg_fetch_array($result, null, PGSQL_ASSOC)) {
        return true;
    }
    return false;
}
?>

<!DOCTYPE html>
<html lang="it">

<head>
    <meta charset="UTF-8">
    <title>Accedi</title>
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
        <div id="divForm">
            <h2>Accedi!</h2>

            <form class="form" method="post" action="accedi.php" id="formAccedi">
                <input type="hidden" id="turni" name="turni" value="-1">
                <label for="playerName">Nome Giocatore:</label><br>
                <input type="text" id="playerName" name="playerName" required><br>
                <label for="playerPassword">Password:</label><br>
                <input type="password" id="playerPassword" name="playerPassword" required><br><br>

                <input id="bottoneAccedi" type="submit" value="Accedi">
            </form>
        </div>
        <div id="divPulsanti">
            <table>
                <tr>
                    <td><button class="button" onclick="goMenu()">Menu</button></td>
                    <td><button class="button" onclick="goIscriviti()">Iscriviti</button></td>
                    <td><button class="button" onclick="showLeaderboard()">Classifica</button></td>
                </tr>
            </table>
        </div>
    </div>
    <script>
        function mySubmit() {
            const form = document.getElementById("formAccedi");
            form.addEventListener("click", function (event) { event.preventDefault() });
            let temp = localStorage.getItem("nTurni");
            document.getElementById("turni").value = Math.floor(temp); //floor serve a rendere temp un intero.
            temp = Math.floor(temp);

            alert(temp);
            form.submit();
            return true;
        }
        const bottoneAccedi = document.getElementById("bottoneAccedi");
        bottoneAccedi.addEventListener("click", mySubmit);

        function goIscriviti() {
            window.location.href = 'http://localhost:3000/server/inscriversi.php'; //gabriel
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
    <?php if (!empty($insertMessage)) {
        echo "<p>$insertMessage</p>";
    } ?>
</body>

</html>