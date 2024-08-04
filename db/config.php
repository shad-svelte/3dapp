<?php
// Path to the SQLite database file
define('DB_PATH', __DIR__ . '/coca_cola.db');

// Function to connect to the database
function connect_db() {
    try {
        $db = new PDO('sqlite:' . DB_PATH);
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $db;
    } catch (PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
        die();
    }
}
?>
