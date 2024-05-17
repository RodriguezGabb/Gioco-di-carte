<html>
<head>
</head>
<body>
<?php
$dbconn = pg_connect("host=localhost port=5433 dbname=ltw user=postgres password=serverGod162");
$query = 'SELECT * FROM classifica ORDER BY "Turns" ASC';
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
pg_close($dbconn);
?>
</body>
</html>