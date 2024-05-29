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
    $query = 'SELECT * FROM classifica ORDER BY "turn" ASC';
    $result = pg_query($query);
    // Printing results in HTML
    echo "<table>\n";
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