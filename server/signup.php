<?php
// Enable error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Check request method
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header("HTTP/1.1 405 Method Not Allowed");
    exit('405 Method Not Allowed');
}

// Database connection settings
$host = "localhost"; // Change if your PostgreSQL server is hosted elsewhere
$port = "5432"; // Default PostgreSQL port
$dbname = "user_registration"; // Your database name
$user = "your_pg_username"; // Your PostgreSQL username
$password = "your_pg_password"; // Your PostgreSQL password

// Create connection
$conn_string = "host=$host port=$port dbname=$dbname user=$user password=$password";
$conn = pg_connect($conn_string);

if (!$conn) {
    die("Connection failed: " . pg_last_error());
}

if (isset($_POST['username']) && isset($_POST['password'])) {
    $username = htmlspecialchars($_POST['username']);
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);

    // Prepare the SQL statement
    $result = pg_prepare($conn, "insert_user", 'INSERT INTO users (username, password) VALUES ($1, $2)');
    
    if ($result) {
        // Execute the prepared statement
        $result = pg_execute($conn, "insert_user", array($username, $password));
        
        if ($result) {
            echo "User successfully registered!";
        } else {
            echo "Error executing statement: " . pg_last_error($conn);
        }
    } else {
        echo "Error preparing statement: " . pg_last_error($conn);
    }
} else {
    echo "All fields are required.";
}

// Close connection
pg_close($conn);
?>