<!DOCTYPE html>
<html>
<body>
<?php
    // Establish a database connection
    $dbconn = pg_connect("host=localhost port=5433 dbname=ltw user=postgres password=serverGod162");

    if ($dbconn) {
        // Retrieve user input from POST request
        $name = $_POST['name'];
        $password = $_POST['password'];

        // First, check if the user exists in the 'users' table
        $q1 = "SELECT * FROM users WHERE name = $1";
        $result = pg_query_params($dbconn, $q1, array($name));

        if ($result && $tuple = pg_fetch_array($result, null, PGSQL_ASSOC)) {
            // User exists, now check the password
            $hashed_password = $tuple['paswd']; // Assuming the hashed password is stored in the 'paswd' field

            if (password_verify($password, $hashed_password)) {
                // Password is correct
                $nome = htmlspecialchars($tuple['nome'], ENT_QUOTES, 'UTF-8');
                echo "<a href='../welcome.php?name=$nome'>Premi qui</a> per inviare il tuo punteggio";
            } else {
                // Incorrect password
                echo "<h1>Password errata</h1>";
                echo "<a href='login.html'>Clicca qui per loggarti</a>";
            }
        } else {
            // User not registered
            echo "<h1>Non sei registrato</h1>";
            echo "<a href='../registrazione/index.html'>Clicca qui per farlo</a>";
        }
    } else {
        // Error connecting to the database
        echo "<h1>Errore nella connessione al database</h1>";
    }

    // Close the database connection
    pg_close($dbconn);
?>
</body>
</html>