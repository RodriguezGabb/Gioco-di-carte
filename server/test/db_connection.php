<?php
// Parametri di connessione
$host = 'localhost';  // Il nome host del server PostgreSQL
$dbname = 'ltw';  // Sostituisci con il nome del tuo database
$user = 'postgres';  // Sostituisci con il tuo nome utente del database
$password = 'biar';  // Sostituisci con la tua password del database

// Crea la stringa di connessione DSN (Data Source Name)
$dsn = "pgsql:host=$host;dbname=$dbname";

try {
    // Crea una nuova istanza di PDO
    $pdo = new PDO($dsn, $user, $password);

    // Imposta la modalità di errore di PDO su eccezione
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    //echo "Connessione al database riuscita!";
} catch (PDOException $e) {
    // Se c'è un errore nella connessione, cattura l'eccezione e mostra un messaggio di errore
    echo "Errore nella connessione al database: " . $e->getMessage();
    die();
}
?>