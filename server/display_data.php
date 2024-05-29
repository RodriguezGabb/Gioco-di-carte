<?php
// Connessione al database
require 'db_connection.php';
?>

<!DOCTYPE html>
<html lang="it">

<head>
    <meta charset="UTF-8">
    <title>Visualizza Dati</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            /*andrea*/
            /*background: url('http://localhost:3000/Downloads/Gioco-di-carte-main/images/sfondo%20menu.png') no-repeat center center fixed;*/
            /*gabriel */
            background: url('/../images/sfondo\ menu.png') no-repeat center center fixed;
            background-size: cover;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            color: #333;
        }

        .container {
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            max-width: 800px;
            width: 100%;
        }

        h2 {
            margin-bottom: 20px;
            color: #333;
            border: 1px solid black;
            background-color: darkgrey;
            padding: 10px;
            border-radius: 5px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        table,
        th,
        td {
            border: 1px solid #ddd;
        }

        th,
        td {
            padding: 12px;
            text-align: center;
        }

        th {
            background-color: #f2f2f2;
        }

        tr:nth-child(even) {
            background-color: #f9f9f9;
        }

        tr:hover {
            background-color: #f1f1f1;
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
    </style>
</head>

<body>
    <div class="container">
        <h2>Classifica</h2>
        <?php
        $query = 'SELECT * FROM classifica ORDER BY "turn" ASC';
        $result = pg_query($query);
        echo "<table>\n";
        echo "<tr><th>Username</th><th>Punteggio</th></tr>\n";
        while ($line = pg_fetch_array($result, null, PGSQL_ASSOC)) {
            echo "\t<tr>\n";
            foreach ($line as $col_value) {
                echo "\t\t<td>$col_value</td>";
            }
            echo "\t</tr>\n";
        }
        echo "</table>\n";
        pg_free_result($result);
        ?>
        <div class="divPulsanti">
            <button class="button" id="menu" onclick="goMenu()">Menu</button>
        </div>
    </div>
    <script>
        function goMenu() {
            window.location.href = 'http://localhost:3000/menu.html'; //gabriel
            //window.location.href = 'http://localhost:3000/Downloads/Gioco-di-carte-main/menu.html'; //andrea
        }
    </script>
</body>

</html>