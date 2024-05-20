<!DOCTYPE html>
<html>

<head>
    <title>Esempio in PHP</title>
</head>

<body>
    <?php
    // Attempt database connection
    $dbconn = pg_connect("host=localhost port=5433 dbname=ltw user=postgres password=serverGod162");

    // Attempt query execution
    $query = 'SELECT * FROM organizzazione';
    $result = pg_query($query) or die('Query failed: ' . pg_last_error());

    // Display results in HTML table
    echo "<table>\n";
    while ($line = pg_fetch_array($result, null, PGSQL_ASSOC)) {
        echo "\t<tr>\n";
        foreach ($line as $col_value) {
            echo "\t\t<td>$col_value</td>\n";
        }
        echo "\t</tr>\n";
    }
    echo "</table>\n";

    // Free result and close connection
    pg_free_result($result);
    pg_close($dbconn);
    ?>
</body>

</html>