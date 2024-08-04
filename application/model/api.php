<?php
header('Content-Type: application/json');
require 'config.php';

$db = connect_db();
$query = $db->query('SELECT * FROM page_content');
$data = $query->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($data);
?>
