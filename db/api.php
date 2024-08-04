<?php
header('Content-Type: application/json');
require 'config.php';

try {
    $db = connect_db();
    $query = $db->query('SELECT * FROM page_content');
    $data = $query->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($data);
} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>
