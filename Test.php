<html>

<head>
    <title>Esempio in PHP</title>
</head>

<body>
    <?php
    $dbconn = pg_connect("host=localhost port=5433
            dbname=EsempioConnessionePHP user=postgres password=password")
        or die('Could not connect:' . pg_last_error());
    $query = 'SELECT∗ FROM organizzazione';
    $result = pg_query($query) or die('Query failed :' . pg_last_error());
    //Printing results in HTML
    echo "<table>\n";
    while ($line = pg_fetch_array($result, null, PGSQL_ASSOC)) {
        echo "\t<t r>\n ";
        foreach ($line as $col_value) {
            echo "\t\t<td>$colvalue </td>";
        }
        echo "\t</t r>\n ";
    }
    echo "</table>\n ";
    pg_free_result($result);
    pg_close($dbconn);
    ?>
</body>