<?php
require 'view/load.php';
require 'model/model.php';
require 'controller/controller.php';

// Get the requested URI
$pageURI = $_SERVER['REQUEST_URI'];

// Extract the part after 'index.php'
$pageURI = substr($pageURI, strrpos($pageURI, 'index.php') + 10);

// Trim any leading or trailing slashes
$pageURI = trim($pageURI, '/');

// If no specific method is specified, default to 'home'
if (!$pageURI) {
    new Controller('home');
} else {
    // Sanitize and validate $pageURI to ensure it matches an available method
    // Optionally, convert $pageURI to lowercase or apply other transformations if needed
    $pageMethod = $pageURI;

    // Optionally, add additional validation here to check against allowed method names

    new Controller($pageMethod);
}
?>
