<?php
    $dbconn = pg_connect("host=localhost port=5433 dbname=ltw user=postgres password=serverGod162");

?>
<!DOCTYPE html>
<html>
<head></head>
<body>
<?php
if ($dbconn) {
    $name = $_POST['inputName'];
    $q1 = "select * from user where name= $1";
    $result = pg_query_params($dbconn, $q1, array($email));//assicura che non scrivono drop table o altro
    if ($tuple=pg_fetch_array($result, null, PGSQL_ASSOC)) {//se nome gia in database
        echo "<h1> nome utente gia registrato </h1>
        Se vuoi, <a href=../login> clicca qui per loggarti </a>";
    }
    else {
        $name = $_POST['inputName'];
        $password = password_hash($_POST['inputPassword']);
        $q2 = "insert into utente values ($1, $2, $3, $4, $5)";
        $data = pg_query_params("INSERT INTO users(name,password) 
        VALUES ($name,$password)");
        if ($data) {
            echo "<h1> Registrazione completata. Puoi iniziare ad usare il sito <br/></h1>";
            echo "<a href=../login> Clicca qui </a>
            per loggarti!";
        }
    }
}
?>
</body>
</html>