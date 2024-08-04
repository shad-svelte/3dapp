<?php
require 'config.php';

// Enable error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

try {
    // Connect to the database
    $db = connect_db();

    // Create table if not exists
    $db->exec('
    CREATE TABLE IF NOT EXISTS page_content (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        sub_title TEXT,
        description TEXT,
        x3dModelTitle TEXT,
        x3dCreationMethod TEXT,
        galleryTitle TEXT,
        galleryDescription TEXT,
        CameraTitle TEXT,
        CameraSubtitle TEXT
    )
    ');

    // Read data from JSON file
    $json_data = file_get_contents('data.json');
    if ($json_data === false) {
        throw new Exception('Unable to read data.json');
    }
    $data = json_decode($json_data, true);
    if ($data === null) {
        throw new Exception('Error decoding JSON data');
    }

    // Insert data into the table
    $statement = $db->prepare('
    INSERT INTO page_content (
        title, sub_title, description, 
        x3dModelTitle, x3dCreationMethod, 
        galleryTitle, galleryDescription, 
        CameraTitle, CameraSubtitle
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    ');

    foreach ($data['pageTextData'] as $item) {
        $statement->execute([
            $item['title'] ?? null,
            $item['subTitle'] ?? null,
            $item['description'] ?? null,
            $item['x3dModelTitle'] ?? null,
            $item['x3dCreationMethod'] ?? null,
            $item['galleryTitle'] ?? null,
            $item['galleryDescription'] ?? null,
            $item['CameraTitle'] ?? null,
            $item['CameraSubtitle'] ?? null
        ]);
    }

    echo "Table created and data inserted successfully.";
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
?>
