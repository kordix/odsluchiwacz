<?php
header('Access-Control-Allow-Origin: *');
//or
header('Access-Control-Allow-Origin: http://example.com');

$opis = $_GET['opis'];

// Reading JSON POST using PHP
$json = file_get_contents("https://itunes.apple.com/search?term=$opis&limit=10&media=music");
$jsonObj = json_encode($json);
// print_r()
// Use $jsonObj
//print_r($jsonObj);
echo $jsonObj;

// End php
?>