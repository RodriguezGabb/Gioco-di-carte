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
            background-color: #f4f4f9;
            color: #333;
            margin: 0;
            padding: 20px;
        }

        h2 {/*modifica titolo*/
            color: #555;
            text-align: center;
            border: 1px solid black;
            background-color: darkgrey;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        table, th, td {
            border: 1px solid #ddd;
        }

        th, td {
            padding: 8px;
            text-align: left;
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
    </style>
</head>

<body>
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
</body>

</html>