<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Origin:GET,POST');
header('Access-Control-Allow-Origin:Content-type');

// Establish database connection
$dbconn = pg_connect("host=localhost port=5433 dbname=ltw user=postgres password=serverGod162");

if ($dbconn) {
    // Output request method
    echo "<pre>";
    echo "Request Method: " . $_SERVER['REQUEST_METHOD'] . "\n";
    echo "POST Data: " . print_r($_POST, true) . "\n";
    echo "</pre>";

    //if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        if (isset($_POST['actionLogup']) && $_POST['actionLogup'] === 'registerup') {
            $name = $_POST['name'];
            $password = $_POST['password'];

            // Query to check if the user is already registered
            $q1 = "SELECT * FROM users WHERE name = $1";
            $result = pg_query_params($dbconn, $q1, array($name));

            if (!($tuple = pg_fetch_array($result, null, PGSQL_ASSOC))) {
                echo "<h1>Non sei registrato</h1>
                      <a href='../registrazione/index.html'> Clicca qui per farlo </a>";
            } else {
                $hashed_password = $tuple['password'];
                if (!password_verify($password, $hashed_password)) {
                    echo "<h1>Password errata</h1>
                          <a href='login.html'> Clicca qui per loggarti </a>";
                } else {
                    $nome = $tuple['nome'];
                    echo "<a href='../welcome.php?name=$nome'> Premi qui </a>
                          per inviare il tuo punteggio";
                }
            }
        } elseif (isset($_POST['actionLogin']) && $_POST['actionLogin'] === 'registerin') {
            echo "<h1>Login button was pressed.</h1>";
        }
    //} else {
     //   echo "<h1>Invalid request method</h1>";
    //}
} else {
    echo "<h1>Database connection failed</h1>";
}
?>