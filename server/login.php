<?php
    $dbconn = pg_connect("host=localhost port=5433 dbname=ltw user=postgres password=serverGod162");

?>
<!DOCTYPE html>
<html>
<head></head>
<body>
<?php
if ($dbconn) {
    $name = $_POST['nome'];
    $q1 = "select * from users where name= $1";
    $result = pg_query_params($dbconn, $q1, array($name));
    if (!($tuple=pg_fetch_array($result, null, PGSQL_ASSOC))) {
        echo "<h1>non sei registrato</h1>
        <a href=../registrazione/index.html> Clicca qui per farlo </a>";
    }
    else {
        $password = password_hash($_POST['password']);
        $q2 = "select * from utente where email = $1 and paswd = $2";
        $result = pg_query_params($dbconn, $q2, array($email, $password));
        if (!($tuple=pg_fetch_array($result, null, PGSQL_ASSOC))) {
            echo "<h1>passsword errata</h1>
            <a href=login.html> Clicca qui per loggarti </a>";
        }
        else {
            $nome = $tuple['nome'];
            echo "<a href=../welcome.php?name=$nome> Premi qui </a>
            per inviare il tuo punteggio";
        }
    }
}
?>
</body>
</html>