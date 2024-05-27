<?php
// Connessione al database
require 'db_connection.php';
$insertMessage = '';
if (isset($_POST)) {
    $data = file_get_contents("php://input");
    $nTurni = json_decode($data, true);
    $insertMessage .= $nTurni;
}
?>
<!DOCTYPE html>
<html lang="it">

<head>
    <meta charset="UTF-8">
    <title>Inserimento Dati</title>
</head>

<body>
    <h2>Print!</h2>
    <?php
    if (!empty($insertMessage)) {
        echo "<p>$insertMessage</p>";
    }
    ?>
    <p>ma che cazzo</p>
</body>

</html>